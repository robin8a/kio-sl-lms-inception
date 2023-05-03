# References
- [React JS forms](https://reactjs.org/docs/forms.html)
- [Download Videos Pexels](https://www.pexels.com/search/videos/education/)
- [Material UI Components](https://material-ui.com/components/material-icons/)
- https://stackoverflow.com/questions/36205673/how-do-i-create-a-dynamic-drop-down-list-with-react-bootstrap

# Video embed


- [works: npm react-player](https://www.npmjs.com/package/react-player)
- [works: example](https://github.com/CookPete/react-player/blob/HEAD/src/demo/App.js)
https://file-examples.com/index.php/sample-video-files/sample-webm-files-download/
https://github.com/CookPete/react-player/tree/076a640ebf9d73c9faff88743edde03f5233ff7b

```sh
yarn add react-player
npm i react-player

```
# Drag
https://www.npmjs.com/package/react-draggable

# React Widgets UI
https://www.codeinwp.com/blog/react-ui-component-libraries-frameworks/
https://blog.logrocket.com/top-10-react-component-libraries-for-2020/
https://blog.logrocket.com/top-7-ui-libraries-and-kits-for-react/

# Starting React App
```sh
source ~/.bash_profile
npx create-react-app kio-sl-lms-rjs-app
```

# Amplify

## configure, just when is a new aws account
```sh
amplify configure
```


## init

```sh
amplify init
Project information
| Name: kiosllmsacuicultura
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

```

# Codecommit & Git

- [Create repo](https://docs.aws.amazon.com/cli/latest/reference/codecommit/create-repository.html)
```sh
nano ~/.aws/credentials
export PATH=~/Library/Python/3.8/bin:$PATH
# source ~/.bash_profile
# Test
aws s3 ls --profile suan-blockchain
export AWS_PROFILE=suan-blockchain


# The user is kio-suan-amplify

# kio-sl-lms-rjs-app-acuicultura

# aws codecommit create-repository --repository-name MyDemoRepo --repository-description "My demonstration repository" --tags Team=Saanvi
aws codecommit create-repository --repository-name kio-sl-lms-rjs-app-acuicultura --repository-description "LMS Cultivos Acuicuolas" --tags Team=kio --region us-east-1 


```
## Result
```json
{
    "repositoryMetadata": {
        "accountId": "036134507423",
        "repositoryId": "05d93af0-02d1-4c6e-85c1-99b7e2473ac5",
        "repositoryName": "kio-sl-lms-rjs-app-acuicultura",
        "repositoryDescription": "LMS Cultivos Acuicuolas",
        "lastModifiedDate": "2023-01-31T23:09:11.700000-05:00",
        "creationDate": "2023-01-31T23:09:11.700000-05:00",
        "cloneUrlHttp": "https://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-sl-lms-rjs-app-acuicultura",
        "cloneUrlSsh": "ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-sl-lms-rjs-app-acuicultura",
        "Arn": "arn:aws:codecommit:us-east-1:036134507423:kio-sl-lms-rjs-app-acuicultura"
    }
}
```

# git

```sh
ssh-keygen
/Users/robinochoa/.ssh/kio_sl_lms_acuicultura_rsa

cat ~/.ssh/kio_sl_lms_acuicultura_rsa.pub

```

## Configure AWS IAM user

![AWS Config](_images/aws_iam_ssh_config.png)

```sh
cd ~/.ssh
ls
nano config

# Add

# CodeCommit hosts
Host kio_sl_lms_acuicultura_rsa
   HostName git-codecommit.us-east-1.amazonaws.com
   User APKAQQ2OI2OP4LVTD6OR
   IdentityFile ~/.ssh/kio_sl_lms_acuicultura_rsa

```

https://xiaolishen.medium.com/use-multiple-ssh-keys-for-different-github-accounts-on-the-same-computer-7d7103ca8693

```sh
# git remote -v
# git remote rm origin
# git init
git remote add origin ssh://kio_sl_lms_acuicultura_rsa/v1/repos/kio-sl-lms-rjs-app-acuicultura
git push --set-upstream origin master
git push

```


# Amplify hosting

## Result
```sh
amplify add hosting
┌──────────────┬──────────────────────────────────────────────┐
│ FrontEnd Env │ Domain                                       │
├──────────────┼──────────────────────────────────────────────┤
│ master       │ https://master.d2eufiqd3iq1ky.amplifyapp.com │
└──────────────┴──────────────────────────────────────────────┘
```

# Amplify API

```sh
amplify add api    
GraphQL endpoint: https://52dd34yoyvdmdogtfucucb2c6q.appsync-api.us-east-1.amazonaws.com/graphql
```

# Amplify Auth

```sh
amplify add auth
# Scanning for plugins...
# Plugin scan successful
# Using service: Cognito, provided by: awscloudformation
 
#  The current configured provider is Amazon Cognito. 
 
#  Do you want to use the default authentication and security configuration? Defa
# ult configuration
#  Warning: you will not be able to edit these selections. 
#  How do you want users to be able to sign in? Username
#  Do you want to configure advanced settings? No, I am done.
# Successfully added resource kiosllms9a43b205 locally

# Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```

# Amplify Storage

```sh
amplify add storage

# ? Please select from one of the below mentioned services: Content (Images, audi
# o, video, etc.)
# ? Please provide a friendly name for your resource that will be used to label t
# his category in the project: s35d0d1bb2
# ? Please provide bucket name: kio-sl-lms-rjs-appb2100efba69f4dfaa1abc0e390f62647
# ? Who should have access: Auth and guest users
# ? What kind of access do you want for Authenticated users? create/update, read,
#  delete
# ? What kind of access do you want for Guest users? read
# ? Do you want to add a Lambda Trigger for your S3 Bucket? No
# Successfully updated auth resource locally.
# Successfully added resource s35d0d1bb2 locally

Some next steps:
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud
```

