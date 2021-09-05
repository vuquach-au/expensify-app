# App Description:

This App architecture based on React and Redux using Jest and Enzyme for testing, bundling by Webpack and manipulating data from Firebase database. However, it have not been deployed on Heroku yet.

# This app connecting Git from SSH 

ls -a ~/.ssh - check if ssh have key

ssh-keygen -t rsa -b 4096 -C "stevenquach.au@gmail.com" -  generate ssh-key that match github account

eval "$(ssh-agent -s)" --> add Identify
ssh-add ~/.ssh/id_rsa

pbcopy < ~/.ssh/id_rsa.pub --> copy private key and paste into GitHub settings.

