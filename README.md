# React Portfolio
## Public portfolio for Tim Anderson
TimDAnderson.com

This webpage has been optomized for Desktop viewing

Run in development
```ssh
$ npm install
$ npm run start-dev
$ grunt start:dev
```

Build Docker image for AWS EC2 instance
```ssh
$ docker build -t timdanderson1/portfolio:1.3 .
```

Build and deploy bundle to S3 Bucket
```ssh
$ grunt deploy
```