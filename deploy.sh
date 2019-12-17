#!/usr/bin/env sh

set -x

touch build/.nojekyll
touch build/CNAME

echo "radicle.xyz" > build/CNAME

git add build
git commit -m "Deploy"
git push origin master
