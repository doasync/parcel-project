#!/bin/bash

# Set terminal colors
CYAN = \033[0;36m
GREEN = \033[0;32m
RED = \033[0;31m
YELLOW = \033[0;33m
NO_COLOR = \033[m
CYAN_ON = printf "$(CYAN)"
COLOR_OFF = printf "$(NO_COLOR)"

# Get command line arguments
ARGS = $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
$(eval $(ARGS):;@:)
.PHONY: $(ARGS)

# Recipes to be executed
.PHONY: usage
usage:
	@printf "\n\033[0;1mmake\033[m [command] ...\n\n$(GREEN)Commands:$(NO_COLOR)\n\n" ;
	@printf "  $(CYAN)serve [folder]$(NO_COLOR)  serve files in folder and open browser window \n";
	@printf "  $(CYAN)build-info $(NO_COLOR)     build src and open bundle analyzer in browser \n";
	@printf "  $(CYAN)jest-coverage $(NO_COLOR)  get jest coverage and show report in browser \n";
	@printf "  $(CYAN)flow-coverage $(NO_COLOR)  get flow coverage and show report in browser \n";
	@printf "\n" ;

.SILENT:
.IGNORE:
.PHONY: serve
serve:
	$(eval path = $(firstword $(ARGS)))
	@yarn http-server -gos -c-1 $(ARGS) >> /dev/null 2>&1

.PHONY: build-open
build-open:
	@yarn build --no-source-maps --out-dir .temp/temp-dist
	@make --no-print-directory serve .temp/temp-dist

.PHONY: build-info
build-info:
	@yarn build --no-source-maps
	@mkdir -p .temp/bundle-report
	@cp dist/report.html .temp/bundle-report/index.html
	@make --no-print-directory serve .temp/bundle-report

.PHONY: flow-coverage
flow-coverage:
	@npx flow-coverage-report@0.6.1 -i 'src/**/*.js' -t html -o coverage/flow-report --strict-coverage
	@make --no-print-directory serve coverage/flow-report

.PHONY: jest-coverage
jest-coverage:
	@yarn jest --coverage
	@make --no-print-directory serve coverage/lcov-report
