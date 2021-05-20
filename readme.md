#Git
git init - Create a new git repo

git status - View the changes to your project code

git add . - Add files to staging area

git commit - Creates new commit with files form staging area

git log - View recents commits

ls -a ~/.ssh - check if ssh have key

ssh-keygen -t rsa -b 4096 -C "stevenquach.au@gmail.com" -  generate ssh-key that match github account

eval "$(ssh-agent -s)" --> add Identify
ssh-add ~/.ssh/id_rsa

pbcopy < ~/.ssh/id_rsa.pub --> copy private key and paste into GitHub settings.

git remote add origin git@github.com:vuquach-au/expensify-app.git --> add gitHub to current local git.

git remote -v --> check current verbal remote branch

git push -u origin master --> push code from origin to master branch on GitHub

git push -f origin master - push code but replace master branch.