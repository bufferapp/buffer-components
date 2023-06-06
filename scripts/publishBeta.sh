#!/bin/bash

RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

#if [ -z $1 ]
#  then
#    echo -e $RED"Publish error:" $NC "plesase provide the current package.json version"
#    exit 1
#fi

version=$(jq -r .version package.json)
version=$(echo "$version" | sed 's/-beta.*//')

revision=$(git rev-parse --short HEAD)
betaVersion="$version-beta.$revision"

echo -e $BLUE"Publishing a new" ${betaVersion} "version"$NC

npm version --new-version $betaVersion --no-git-tag-version && \
npm run build && \
npm publish --tag=beta
