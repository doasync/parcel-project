#!/bin/bash

CYAN = \033[0;36m
GREEN = \033[0;32m
RED = \033[0;31m
YELLOW = \033[0;33m
NO_COLOR = \033[m
CYAN_ON = printf "$(CYAN)"
COLOR_OFF = printf "$(NO_COLOR)"

USER_ID = $(shell id -u)
GROUP_ID = $(shell id -g)
USER_VARS = USER_ID=$(USER_ID) GROUP_ID=$(GROUP_ID)

NSSDB = sql:$(HOME)/.pki/nssdb

SET_PROMPT = export PS1='[\033[0;1;36m$(1)\033[m]:\033[0;1;95m\w\033[m\$$ '
ENSURE = $(if $(value $(1)),,$(error $(1) variable is not set))

ARGS = $(wordlist 2,$(words $(MAKECMDGOALS)),$(MAKECMDGOALS))
$(eval $(ARGS):;@:)

.PHONY: usage
usage:
	@printf "\n\033[0;1mmake\033[m [command] ...\n\n$(GREEN)Commands:$(NO_COLOR)\n\n" ;
	@printf "  $(CYAN)init $(NO_COLOR)       create docker containers, install packages & build the app\n";
	@printf "  $(CYAN)local-cert $(NO_COLOR) generate certificates for localhost\n";
	@printf "  $(CYAN)start $(NO_COLOR)      start nginx container\n";
	@printf "  $(CYAN)stop $(NO_COLOR)       stop nginx container\n";
	@printf "  $(CYAN)rebuild $(NO_COLOR)    rebuild docker images and restart nginx\n";
	@printf "  $(CYAN)shell $(NO_COLOR)      open service shell to run custom commands\n";
	@printf "\n" ;

.PHONY: init
init:
	mkdir -p ssl
	$(USER_VARS) docker-compose build --force-rm
	$(USER_VARS) docker-compose up --no-start nginx
	@make --no-print-directory local-cert

.PHONY: local-cert
local-cert:
	@mkdir -p ssl
	@openssl req -new -x509 -days 365 -nodes -newkey rsa:2048 -sha256 \
		-keyout 'ssl/cert.key' \
		-out 'ssl/cert.pem' \
		-subj '/CN=localhost' \
		-config local-san.cnf
	@openssl dhparam -out 'ssl/dhparam-2048.pem' 2048
	@printf "Adding to NSS database using $(CYAN)certutil$(NO_COLOR)\n"
	@certutil -D -d $(NSSDB) -n localhost 2>/dev/null
	@certutil -d $(NSSDB) -A -t 'C,,' -n 'localhost' -i ssl/cert.pem
	@printf "$(GREEN)done!$(NO_COLOR)\n"

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

.PHONY: shell
shell:
	$(eval service = $(or $(firstword $(ARGS)),nginx))
	@$(USER_VARS) docker-compose run --rm  --entrypoint sh $(service) -c "$(call SET_PROMPT,$(service)) && sh"
