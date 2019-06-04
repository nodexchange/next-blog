#!/bin/bash
# Basic if statment to verify proposed version against current.

proposed_version="$1"
next_version=${proposed_version//[.]/-}
suggested_version="oup-arc-$next_version-next"
current_version=$(cat current.next.txt)
if [ $suggested_version = $current_version ]
then
    echo "PROPOSED and CURRENT versions are the same. Have you updated package.json correctly?"
    echo "current version: current_version"
    exit 1
fi
echo "correct"
./git-pull.sh $proposed_version
