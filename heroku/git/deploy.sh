#bash <(curl -L https://raw.githubusercontent.com/setapolo/sh/master/heroku/git/deploy.sh)
git add .
git commit -m "`date`"
git push heroku master
