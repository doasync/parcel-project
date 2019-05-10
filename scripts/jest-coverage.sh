#!/usr/bin/env bash

npx jest --coverage
npx http-server coverage/lcov-report -gos -a 0.0.0.0 -p 10077 -c-1
