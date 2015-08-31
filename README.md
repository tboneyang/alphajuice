#The World’s Best Beverage? Alpha Juice
##Instructions

###First SetUp MYSQL

1) Start MYSQL server in another terminal window

2) Within MYSQL, run “CREATE DATABASE alphasales;”

3) Within MYSQL, run “CREATE DATABASE alphatests;”

###To Check Out the Alpha Juice Hype

*Open website in google chrome. Haven’t tested in IE/Firefox. The site looks best with a medium desktop view width.

1) bundle install/bundle update

2) rake db:migrate

3) rake db:seed  —— the seed file will create 107 sales to start out with.

4) rails s

5) fire up localhost:3000

*To demonstrate the live pusher features, please open up the webpage in two browser windows. In the first one, scroll down to the very bottom of the home page. In the other one, make a purchase. The first one should update the total sales and feed live!