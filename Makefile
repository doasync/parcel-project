#!/bin/bash

# Set terminal colors
CYAN = \033[0;36m
GREEN = \033[0;32m
RED = \033[0;31m
YELLOW = \033[0;33m
NO_COLOR = \033[m
CYAN_ON = printf "$(CYAN)"
COLOR_OFF = printf "$(NO_COLOR)"

# Set user variables
USER_ID = $(shell id -u)
GROUP_ID = $(shell id -g)
USER_VARS = USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID)

# Set other variables
NSSDB = sql:$(HOME)/.pki/nssdb
SET_PROMPT = export PS1='[\033[0;1;36m$(1)\033[m]:\033[0;1;95m\w\033[m\$$ '
ENSURE = $(if $(value $(1)),,$(error $(1) variable is not set))

# Get command line arguments
ARGS = $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
$(eval $(ARGS):;@:)
.PHONY: $(ARGS)

# Recipes to be executed
.PHONY: usage
usage:
	@printf "\n\033[0;1mmake\033[m [command] ...\n\n$(GREEN)Commands:$(NO_COLOR)\n\n" ;
	@printf "  $(CYAN)init $(NO_COLOR)           create docker containers, install packages & build the app\n";
	@printf "  $(CYAN)start $(NO_COLOR)          start nginx container\n";
	@printf "  $(CYAN)stop $(NO_COLOR)           stop nginx container\n";
	@printf "  $(CYAN)rebuild $(NO_COLOR)        rebuild docker images and restart nginx\n";
	@printf "  $(CYAN)dev $(NO_COLOR)            run webpack development server\n";
	@printf "  $(CYAN)npm $(NO_COLOR)            run npm CLI command, use -- to pass options\n";
	@printf "  $(CYAN)run $(NO_COLOR)            run script from package.json\n";
	@printf "  $(CYAN)npx $(NO_COLOR)            run locally installed binary inside the container\n";
	@printf "  $(CYAN)shell $(NO_COLOR)          open service shell to run custom commands\n";
	@printf "  $(CYAN)serve [folder]$(NO_COLOR)  serve files in folder and open browser window \n";
	@printf "  $(CYAN)build-info $(NO_COLOR)     build src and open bundle analyzer in browser \n";
	@printf "  $(CYAN)jest-coverage $(NO_COLOR)  get jest coverage and show report in browser \n";
	@printf "  $(CYAN)flow-coverage $(NO_COLOR)  get flow coverage and show report in browser \n";
	@printf "\n" ;

.PHONY: init
init:
	mkdir -p dist
	ls .env >> /dev/null 2>&1 || cp .env.default.dev .env
	$(USER_VARS) docker-compose build --force-rm
	$(USER_VARS) docker-compose run --rm node npm install
	$(USER_VARS) docker-compose run --rm node npm run build
	$(USER_VARS) docker-compose up --force-recreate --build --no-start nginx

.PHONY: start
start:
	@$(CYAN_ON) && $(USER_VARS) docker-compose run --rm nginx nginx -t && $(COLOR_OFF)
	@$(USER_VARS) docker-compose start nginx
	@ps -eo uname:16,pid,comm:8,start,cmd | grep "[n]ginx:\|^USER\b" | cut -c -100 && printf "\033[0;32mok\033[m\n" || printf "\033[0;1;31mError:\033[m server is not running\n"

.PHONY: stop
stop:
	@$(USER_VARS) docker-compose stop nginx

.PHONY: rebuild
rebuild:
	@$(USER_VARS) docker-compose down --rmi "local" --remove-orphans --timeout 1 > /dev/null || true
	@$(USER_VARS) docker-compose up --force-recreate --build --no-start > /dev/null
	@make --no-print-directory start

.PHONY: dev
dev:
	@$(USER_VARS) docker-compose run --service-ports --use-aliases --rm node npm start

.PHONY: npm
npm:
	@$(USER_VARS) docker-compose run --rm node npm $(ARGS)

.PHONY: run
run:
	@$(USER_VARS) docker-compose run --service-ports --rm node npm run $(ARGS)

.PHONY: npx
npx:
	@$(USER_VARS) docker-compose run --rm node npx $(ARGS)

.PHONY: shell
shell:
	$(eval service = $(or $(firstword $(ARGS)),node))
	@$(USER_VARS) docker-compose run --rm  --entrypoint sh $(service) -c "$(call SET_PROMPT,$(service)) && sh"

.SILENT:
.IGNORE:
.PHONY: serve
serve:
	$(eval path = $(firstword $(ARGS)))
	@yarn http-server -gos -c-1 $(ARGS) >> /dev/null 2>&1

.PHONY: build-info
build-info:
	@yarn build --no-source-maps
	@mkdir -p .temp/bundle-analyzer
	@cp dist/report.html .temp/bundle-analyzer/index.html
	@make --no-print-directory serve .temp/bundle-analyzer

.PHONY: flow-coverage
flow-coverage:
	@npx flow-coverage-report@0.6.1 -i 'src/**/*.js' -t html -o coverage/flow-report --strict-coverage
	@make --no-print-directory serve coverage/flow-report

.PHONY: jest-coverage
jest-coverage:
	@yarn jest --coverage
	@make --no-print-directory serve coverage/lcov-report
