#!/bin/sh
yarn install
yarn add force
yarn dev
tail -F /dev/null
