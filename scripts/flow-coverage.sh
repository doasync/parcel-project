#!/usr/bin/env bash

npx flow-coverage-report@0.6.1 -i 'src/**/*.js' -t html -o coverage/flow-report --strict-coverage
npx http-server coverage/flow-report -gos -a 0.0.0.0 -p 10177 -c-1
