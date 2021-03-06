#!/bin/sh
# Credit: https://gist.github.com/willprice/e07efd73fb7f13f917ea

setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "TravisCI-Docs-Bot"
}

commit_docs_folder() {
  git checkout master
  # make sure master is up to date
  git pull
  # Stage the modified files in dist/output
  git add -f docs/*
  # Create a new commit with a custom build message
  # with "[skip ci]" to avoid a build loop
  git commit -m "chore(docs): Deploy most recent 'docs/' build -(Build #$TRAVIS_BUILD_NUMBER)" -m "[skip ci]"
}

upload_files() {
  # Remove existing "origin"
  git remote rm origin
  # Add new "origin" with access token in the git URL for authentication
  git remote add origin https://${GH_USERNAME}:${GH_TOKEN}@github.com/${GH_USERNAME}/${REPO_NAME}.git > /dev/null 2>&1
  git push origin master
}

setup_git

commit_docs_folder

# Attempt to commit to git only if "git commit" succeeded
if [ $? -eq 0 ]; then
  echo "Success. Syncing docs folder master repo, files uploaded."
  upload_files
else
  echo "No changes found in the docs folder. Nothing to do"
fi