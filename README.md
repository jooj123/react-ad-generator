# React Ad Generator

TODO description

## Requirements

  * Mac OS X, Linux or Windows
  * [Node.js](https://nodejs.org/) v4.2 or newer
  * [npm](https://docs.npmjs.com/) v2.14 or newer

## Quick Start

Clone the repo and install:

```shell
$ npm install                   # install packages (might take a while)
```

## Run Dev Server

You can run a local webserver during development:

```shell
$ npm start
```

## Build

This will bundle and copy files to the *build* folder:

```shell
$ npm run build
```

By default, it builds in *debug* mode. If you need to build in release
mode, run the command below. This will optimize the output bundle for
production:

```shell
$ npm run build:prod
```

## Deploy to S3

To deploy to S3 you need to make sure you have the [AWS CLI](http://docs.aws.amazon.com/cli/latest/userguide/installing.html) installed.
After the AWS CLI is setup and you have created a build, you can use the default *s3_url* specified in the package.json or you can override this by using the below command:

```shell
$ npm config set react-ad-generator:s3_url s3://[YOUR_SPECIFIC_BUCKET_NAME]
```

You can then use the following command to deploy the build to the S3 path:

```shell
$ npm run deploy:s3
```

## Test

To perform unit tests you can run the following:

```shell
$ npm run test:unit
```

If you would like to run unit tests and linting in one command you can run:

```shell
$ npm test
```

## Linting

`eslint` and `stylelint` are included in this starter kit to lint JavaScript and CSS styles.
To lint both run:

```shell
$ npm run lint
```

Or you can run them seperately:

```shell
$ npm run eslint
```

```shell
$ npm run stylelint
```

