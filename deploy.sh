#!/usr/bin/env sh

set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:adriancabreraphi/first-project-react-spacex.git main:gh-pages 