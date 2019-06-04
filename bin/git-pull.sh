echo "executing git pull for release/v$1"
git pull
git checkout release/v$1
eb list
