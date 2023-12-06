
# References
- [Amplify Getting Started](https://docs.amplify.aws/start)


# Amplify

## configure

- Just when is a new aws account
```sh
amplify configure
```


## init

```sh
 amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project kiosllmsstorerjsapp
The following configuration will be applied:

Project information
| Name: kiosllmsstorerjsapp
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? Yes
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use kio-sl-lms-store
Adding backend environment dev to AWS Amplify app: dbxkt6p47rf0y
⠸ Initializing project in the cloud...

CREATE_IN_PROGRESS amplify-kiosllmsstorerjsapp-dev-151446 AWS::CloudFormation::Stack Mon Mar 07 2022 15:14:48 GMT-0500 (Colombia Standard Time) User Initiated
CREATE_IN_PROGRESS AuthRole                               AWS::IAM::Role             Mon Mar 07 2022 15:14:53 GMT-0500 (Colombia Standard Time)               
CREATE_IN_PROGRESS DeploymentBucket                       AWS::S3::Bucket            Mon Mar 07 2022 15:14:53 GMT-0500 (Colombia Standard Time)               
CREATE_IN_PROGRESS UnauthRole                             AWS::IAM::Role             Mon Mar 07 2022 15:14:53 GMT-0500 (Colombia Standard Time)               
⠇ Initializing project in the cloud...

CREATE_IN_PROGRESS UnauthRole AWS::IAM::Role Mon Mar 07 2022 15:14:54 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole   AWS::IAM::Role Mon Mar 07 2022 15:14:54 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠸ Initializing project in the cloud...

CREATE_IN_PROGRESS DeploymentBucket AWS::S3::Bucket Mon Mar 07 2022 15:14:54 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠹ Initializing project in the cloud...

CREATE_COMPLETE UnauthRole AWS::IAM::Role Mon Mar 07 2022 15:15:08 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE AuthRole   AWS::IAM::Role Mon Mar 07 2022 15:15:08 GMT-0500 (Colombia Standard Time) 
⠹ Initializing project in the cloud...

CREATE_COMPLETE DeploymentBucket                       AWS::S3::Bucket            Mon Mar 07 2022 15:15:16 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE amplify-kiosllmsstorerjsapp-dev-151446 AWS::CloudFormation::Stack Mon Mar 07 2022 15:15:18 GMT-0500 (Colombia Standard Time) 
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```

# Codecommit

- [Create repo](https://docs.aws.amazon.com/cli/latest/reference/codecommit/create-repository.html)
- 
```sh
nano ~/.aws/credentials
export PATH=~/Library/Python/3.8/bin:$PATH
# source ~/.bash_profile
# Test
aws s3 ls --profile kio-sl-lms-store
export AWS_PROFILE=kio-sl-lms-store

# aws codecommit create-repository --repository-name MyDemoRepo --repository-description "My demonstration repository" --tags Team=Saanvi
aws codecommit create-repository --repository-name kio-willow-pay-rjs-app --repository-description "n4na Market place" --tags Team=kio --region us-east-1 

```

## result
```json
{
    "repositoryMetadata": {
        "accountId": "436023604714",
        "repositoryId": "92ab6e28-3655-4648-8904-06725467e741",
        "repositoryName": "kio-willow-pay-rjs-app",
        "repositoryDescription": "n4na Market place",
        "lastModifiedDate": "2022-03-07T15:22:58.737000-05:00",
        "creationDate": "2022-03-07T15:22:58.737000-05:00",
        "cloneUrlHttp": "https://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-willow-pay-rjs-app",
        "cloneUrlSsh": "ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-willow-pay-rjs-app",
        "Arn": "arn:aws:codecommit:us-east-1:436023604714:kio-willow-pay-rjs-app"
    }
}
```


# git

```sh
ssh-keygen

/Users/robin8a/.ssh/kio_sl_lms_store_codecommit_rsa

cat ~/.ssh/kio_sl_lms_store_codecommit_rsa.pub

```


```sh
cd ~/.ssh
ls
nano config

# Add

# CodeCommit hosts
Host kio_sl_lms_store_codecommit_rsa
   HostName git-codecommit.us-east-1.amazonaws.com
   User APKAWLBIIGXVBEZ77TXX
   IdentityFile ~/.ssh/kio_sl_lms_store_codecommit_rsa

```

<!-- https://xiaolishen.medium.com/use-multiple-ssh-keys-for-different-github-accounts-on-the-same-computer-7d7103ca8693 -->

```sh
# git remote -v
# git remote rm origin
# git init
git remote add origin ssh://kio_sl_lms_store_codecommit_rsa/v1/repos/kio-willow-pay-rjs-app
git push --set-upstream origin master
git push
```


# Amplify hosting

## Result
```sh
amplify add hosting                  
? Select the plugin module to execute Hosting with Amplify Console (Managed hosting with custom domains, Continuo
us deployment)
? Choose a type Continuous deployment (Git-based deployments)
? Continuous deployment is configured in the Amplify Console. Please hit enter once you connect your repository 
Amplify hosting urls: 
┌──────────────┬──────────────────────────────────────────┐
│ FrontEnd Env │ Domain                                   │
├──────────────┼──────────────────────────────────────────┤
│ dev          │ https://dev.dbxkt6p47rf0y.amplifyapp.com │
└──────────────┴──────────────────────────────────────────┘
```

# Amplify auth

```sh
amplify add auth

Using service: Cognito, provided by: awscloudformation
 
 The current configured provider is Amazon Cognito. 
 
 Do you want to use the default authentication and security configuration? Default
 configuration
 Warning: you will not be able to edit these selections. 
 How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
✅ Successfully added auth resource kiosllmsstorerjsapp12c1fae2 locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

```

# Amplify push

```sh
amplify push
```

# Amplify api
```sh
amplify add api

CREATE_COMPLETE    ConnectionStack     AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:36 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:38 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:39 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiosllmsstorerjsapp-dev-151446-apikiosllmsstorerjsapp-UZ7K-CustomResourcesjson-1J2ON0TRDM264 AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:39 GMT-0500 (Colombia Standard Time) User Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiosllmsstorerjsapp-dev-151446-apikiosllmsstorerjsapp-UZ7K-CustomResourcesjson-1J2ON0TRDM264 AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:44 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CustomResourcesjson AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:50 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiosllmsstorerjsapp-dev-151446-apikiosllmsstorerjsapp-UZ7KMR241OOZ AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:54 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE                     apikiosllmsstorerjsapp                 AWS::CloudFormation::Stack Tue Mar 08 2022 16:05:19 GMT-0500 (Colombia Standard Time) 
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiosllmsstorerjsapp-dev-151446 AWS::CloudFormation::Stack Tue Mar 08 2022 16:05:22 GMT-0500 (Colombia Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE authkiosllmsstorerjsapp12c1fae2 AWS::CloudFormation::Stack Tue Mar 08 2022 16:05:24 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE amplify-kiosllmsstorerjsapp-dev-151446 AWS::CloudFormation::Stack Tue Mar 08 2022 16:05:25 GMT-0500 (Colombia Standard Time) 
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ All resources are updated in the cloud

GraphQL endpoint: https://w4gwxjerkbcsfjvpjerkg4xwz4.appsync-api.us-east-1.amazonaws.com/graphql
```
# amplify storage
```sh
amplify add storage

? Select from one of the below mentioned services: Content (Images, audio, video, etc.)
✔ Provide a friendly name for your resource that will be used to label this category in the project: · s369d14c39
✔ Provide bucket name: · kiosllmsstorerjsappc94e2ca8bf0d407cac0ca3f391a8
✔ Who should have access: · Auth and guest users
✔ What kind of access do you want for Authenticated users? · create/update, read
✔ What kind of access do you want for Guest users? · read
✔ Do you want to add a Lambda Trigger for your S3 Bucket? (y/N) · no
⚠️ Auth configuration is required to allow unauthenticated users, but it is not configured properly.
✅ Successfully updated auth resource locally.
✅ Successfully added resource s369d14c39 locally

⚠️ If a user is part of a user pool group, run "amplify update storage" to enable IAM group policies for CRUD operations
✅ Some next steps:
"amplify push" builds all of your local backend resources and provisions them in the cloud
"amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud


```


# Amplify API

```sh
amplify add api
CREATE_COMPLETE    ConnectionStack     AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:36 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:38 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:39 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiosllmsstorerjsapp-dev-151446-apikiosllmsstorerjsapp-UZ7K-CustomResourcesjson-1J2ON0TRDM264 AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:39 GMT-0500 (Colombia Standard Time) User Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiosllmsstorerjsapp-dev-151446-apikiosllmsstorerjsapp-UZ7K-CustomResourcesjson-1J2ON0TRDM264 AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:44 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CustomResourcesjson AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:50 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiosllmsstorerjsapp-dev-151446-apikiosllmsstorerjsapp-UZ7KMR241OOZ AWS::CloudFormation::Stack Tue Mar 08 2022 16:04:54 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE                     apikiosllmsstorerjsapp                 AWS::CloudFormation::Stack Tue Mar 08 2022 16:05:19 GMT-0500 (Colombia Standard Time) 
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiosllmsstorerjsapp-dev-151446 AWS::CloudFormation::Stack Tue Mar 08 2022 16:05:22 GMT-0500 (Colombia Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE authkiosllmsstorerjsapp12c1fae2 AWS::CloudFormation::Stack Tue Mar 08 2022 16:05:24 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE amplify-kiosllmsstorerjsapp-dev-151446 AWS::CloudFormation::Stack Tue Mar 08 2022 16:05:25 GMT-0500 (Colombia Standard Time) 
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ All resources are updated in the cloud

GraphQL endpoint: https://w4gwxjerkbcsfjvpjerkg4xwz4.appsync-api.us-east-1.amazonaws.com/graphql

```

# Google map on click

https://stackoverflow.com/questions/47378069/react-google-maps-marker-click-event



# Google map search bar

https://www.freakyjolly.com/google-maps-in-react-example-application/
https://github.com/google-map-react/google-map-react/issues/460
https://codesandbox.io/s/qqzm67ykmq
https://github.com/google-map-react/google-map-react/issues/30
https://www.youtube.com/watch?v=PuwGdowtm5s

# Google calendar
https://www.npmjs.com/package/react-google-calendar-api
https://www.youtube.com/watch?v=zaRUq1siZZo


# Tasks
- Schedule 
- Create Order
- Add Order ID
- 


# Creating Amplify Enviroments

```sh
? Enter a name for the environment (dev) 
➜  kio-willow-pay-rjs-app git:(development-api) git checkout development

You

```shr branch is ahead of 'origin/development' by 1 commit.
  (use "git push" to publish your local commits)
➜  kio-willow-pay-rjs-app git:(development) amplify env add         
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the environment dev
Using default provider  awscloudformation
? Select the authentication method you want to use: AWS profile

For more information on AWS Profiles, see:
https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-profiles.html

? Please choose the profile you want to use kio-willow-pay
Adding backend environment dev to AWS Amplify app: d2p7cnbefaaed7
⠴ Initializing project in the cloud...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245 AWS::CloudFormation::Stack Mon Feb 14 2022 11:02:48 GMT-0500 (Colombia Standard Time) User Initiated
CREATE_IN_PROGRESS UnauthRole                            AWS::IAM::Role             Mon Feb 14 2022 11:02:52 GMT-0500 (Colombia Standard Time)               
CREATE_IN_PROGRESS AuthRole                              AWS::IAM::Role             Mon Feb 14 2022 11:02:53 GMT-0500 (Colombia Standard Time)               
CREATE_IN_PROGRESS DeploymentBucket                      AWS::S3::Bucket            Mon Feb 14 2022 11:02:53 GMT-0500 (Colombia Standard Time)               
⠋ Initializing project in the cloud...

CREATE_IN_PROGRESS UnauthRole AWS::IAM::Role Mon Feb 14 2022 11:02:53 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS AuthRole   AWS::IAM::Role Mon Feb 14 2022 11:02:53 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠴ Initializing project in the cloud...

CREATE_IN_PROGRESS DeploymentBucket AWS::S3::Bucket Mon Feb 14 2022 11:02:54 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠧ Initializing project in the cloud...

CREATE_COMPLETE UnauthRole AWS::IAM::Role Mon Feb 14 2022 11:03:08 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE AuthRole   AWS::IAM::Role Mon Feb 14 2022 11:03:08 GMT-0500 (Colombia Standard Time) 
⠏ Initializing project in the cloud...

CREATE_COMPLETE DeploymentBucket AWS::S3::Bucket Mon Feb 14 2022 11:03:16 GMT-0500 (Colombia Standard Time) 
⠼ Initializing project in the cloud...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245 AWS::CloudFormation::Stack Mon Feb 14 2022 11:03:18 GMT-0500 (Colombia Standard Time) 
✔ Successfully created initial AWS cloud resources for deployments.
✔ Initialized provider successfully.
Initialized your environment successfully.

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything
```





```sh
amplify update api
? Select from one of the below mentioned services: GraphQL
✔ 
A migration is needed to support latest updates on api resources.
Recommended to try in a non-production environment first. Run "amplify env add" to create or clone an environment.
Custom CloudFormation changes will NOT be preserved. Custom changes can be made with "amplify api override" after migration.
Learn more about this migration: https://docs.amplify.aws/cli/migration/override
Do you want to migrate api resource "kiowillowpayrjsapp"? (Y/n) · yes

General information
- Name: kiowillowpayrjsapp

Authorization modes
- Default: Amazon Cognito User Pool
- API key

Conflict detection (required for DataStore)
- Disabled

? Select a setting to edit Authorization modes
? Choose the default authorization type for the API API key
? Enter a description for the API key: default-api-key
? After how many days from now the API key should expire (1-365): 365
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API Amazon Cognito User Pool
Cognito UserPool configuration
Use a Cognito user pool configured as a part of this project.

The following types do not have '@auth' enabled. Consider using @auth with @model
         - User
         - Measure
         - Category
         - Product
         - Price
         - Discount
         - Order
         - Feature
         - Purchase
Learn more about @auth here: https://docs.amplify.aws/cli-legacy/graphql-transformer/auth

GraphQL schema compiled successfully.

Edit your schema at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema
✅ Successfully updated resource
➜  kio-willow-pay-rjs-app git:(development) ✗ amplify push
⠸ Fetching updates to backend environment: dev from the cloud.
The following types do not have '@auth' enabled. Consider using @auth with @model
         - User
         - Measure
         - Category
         - Product
         - Price
         - Discount
         - Order
         - Feature
         - Purchase
Learn more about @auth here: https://docs.amplify.aws/cli-legacy/graphql-transformer/auth

⠴ Fetching updates to backend environment: dev from the cloud.GraphQL schema compiled successfully.

Edit your schema at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema
✔ Successfully pulled backend environment dev from the cloud.
⠋ Building resource api/kiowillowpayrjsapp
The following types do not have '@auth' enabled. Consider using @auth with @model
         - User
         - Measure
         - Category
         - Product
         - Price
         - Discount
         - Order
         - Feature
         - Purchase
Learn more about @auth here: https://docs.amplify.aws/cli-legacy/graphql-transformer/auth

⠙ Building resource api/kiowillowpayrjsappGraphQL schema compiled successfully.

Edit your schema at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema

    Current Environment: dev
    
┌──────────┬────────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name              │ Operation │ Provider plugin   │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ kiowillowpayrjsapp80d6f39b │ Create    │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ userPoolGroups             │ Create    │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Api      │ kiowillowpayrjsapp         │ Create    │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Storage  │ s363b65c88                 │ Create    │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Hosting  │ amplifyhosting             │ No Change │                   │
└──────────┴────────────────────────────┴───────────┴───────────────────┘
? Are you sure you want to continue? Yes

The following types do not have '@auth' enabled. Consider using @auth with @model
         - User
         - Measure
         - Category
         - Product
         - Price
         - Discount
         - Order
         - Feature
         - Purchase
Learn more about @auth here: https://docs.amplify.aws/cli-legacy/graphql-transformer/auth

GraphQL schema compiled successfully.

Edit your schema at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema
⠋ Building resource api/kiowillowpayrjsapp
The following types do not have '@auth' enabled. Consider using @auth with @model
         - User
         - Measure
         - Category
         - Product
         - Price
         - Discount
         - Order
         - Feature
         - Purchase
Learn more about @auth here: https://docs.amplify.aws/cli-legacy/graphql-transformer/auth

⠏ Building resource api/kiowillowpayrjsappGraphQL schema compiled successfully.

Edit your schema at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema
? Do you want to update code for your updated GraphQL API Yes
? Do you want to generate GraphQL statements (queries, mutations and subscription) based on your schema types?
This will overwrite your current graphql queries, mutations and subscriptions Yes
⠋ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245 AWS::CloudFormation::Stack Mon Feb 14 2022 11:21:21 GMT-0500 (Colombia Standard Time) User Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS AuthRole          AWS::IAM::Role             Mon Feb 14 2022 11:21:26 GMT-0500 (Colombia Standard Time)                            
UPDATE_IN_PROGRESS UnauthRole        AWS::IAM::Role             Mon Feb 14 2022 11:21:26 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS storages363b65c88 AWS::CloudFormation::Stack Mon Feb 14 2022 11:21:27 GMT-0500 (Colombia Standard Time)                            
UPDATE_IN_PROGRESS DeploymentBucket  AWS::S3::Bucket            Mon Feb 14 2022 11:21:27 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS storages363b65c88 AWS::CloudFormation::Stack Mon Feb 14 2022 11:21:28 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-storages363b65c88-2DC5F9QYBY99 AWS::CloudFormation::Stack Mon Feb 14 2022 11:21:27 GMT-0500 (Colombia Standard Time) User Initiated
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Mon Feb 14 2022 11:21:34 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS S3Bucket AWS::S3::Bucket Mon Feb 14 2022 11:21:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE AuthRole   AWS::IAM::Role Mon Feb 14 2022 11:21:40 GMT-0500 (Colombia Standard Time) 
UPDATE_COMPLETE UnauthRole AWS::IAM::Role Mon Feb 14 2022 11:21:40 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS authkiowillowpayrjsapp80d6f39b AWS::CloudFormation::Stack Mon Feb 14 2022 11:21:42 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Mon Feb 14 2022 11:21:43 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionRole AWS::IAM::Role             Mon Feb 14 2022 11:21:43 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS authkiowillowpayrjsapp80d6f39b AWS::CloudFormation::Stack Mon Feb 14 2022 11:21:44 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-authkiowillowpayrjsapp80d6f39b-16YP852IPA7JB AWS::CloudFormation::Stack Mon Feb 14 2022 11:21:43 GMT-0500 (Colombia Standard Time) User Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE DeploymentBucket AWS::S3::Bucket Mon Feb 14 2022 11:21:48 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Mon Feb 14 2022 11:21:50 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS SNSRole AWS::IAM::Role Mon Feb 14 2022 11:21:51 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UpdateRolesWithIDPFunctionRole AWS::IAM::Role Mon Feb 14 2022 11:21:58 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    S3Bucket              AWS::S3::Bucket  Mon Feb 14 2022 11:21:59 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS S3AuthProtectedPolicy AWS::IAM::Policy Mon Feb 14 2022 11:22:02 GMT-0500 (Colombia Standard Time) 
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3AuthUploadPolicy AWS::IAM::Policy Mon Feb 14 2022 11:22:02 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS S3AuthPublicPolicy AWS::IAM::Policy Mon Feb 14 2022 11:22:03 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS S3AuthReadPolicy   AWS::IAM::Policy Mon Feb 14 2022 11:22:03 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE SNSRole AWS::IAM::Role Mon Feb 14 2022 11:22:06 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS S3AuthUploadPolicy    AWS::IAM::Policy Mon Feb 14 2022 11:22:03 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthProtectedPolicy AWS::IAM::Policy Mon Feb 14 2022 11:22:04 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthPrivatePolicy   AWS::IAM::Policy Mon Feb 14 2022 11:22:04 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS S3AuthReadPolicy      AWS::IAM::Policy Mon Feb 14 2022 11:22:04 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthPublicPolicy    AWS::IAM::Policy Mon Feb 14 2022 11:22:04 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS S3AuthPrivatePolicy   AWS::IAM::Policy Mon Feb 14 2022 11:22:06 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Mon Feb 14 2022 11:22:12 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPool AWS::Cognito::UserPool Mon Feb 14 2022 11:22:14 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UserPool AWS::Cognito::UserPool Mon Feb 14 2022 11:22:15 GMT-0500 (Colombia Standard Time)                            
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE S3AuthUploadPolicy    AWS::IAM::Policy Mon Feb 14 2022 11:22:17 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE S3AuthProtectedPolicy AWS::IAM::Policy Mon Feb 14 2022 11:22:17 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Mon Feb 14 2022 11:22:18 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Mon Feb 14 2022 11:22:18 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClientWeb AWS::Cognito::UserPoolClient Mon Feb 14 2022 11:22:20 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserPoolClient    AWS::Cognito::UserPoolClient Mon Feb 14 2022 11:22:20 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClientWeb AWS::Cognito::UserPoolClient Mon Feb 14 2022 11:22:20 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    UserPoolClient    AWS::Cognito::UserPoolClient Mon Feb 14 2022 11:22:20 GMT-0500 (Colombia Standard Time)                            
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE S3AuthPublicPolicy  AWS::IAM::Policy Mon Feb 14 2022 11:22:17 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE S3AuthReadPolicy    AWS::IAM::Policy Mon Feb 14 2022 11:22:18 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE S3AuthPrivatePolicy AWS::IAM::Policy Mon Feb 14 2022 11:22:19 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-storages363b65c88-2DC5F9QYBY99 AWS::CloudFormation::Stack Mon Feb 14 2022 11:22:22 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Mon Feb 14 2022 11:22:24 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClientRole AWS::IAM::Role Mon Feb 14 2022 11:22:25 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE storages363b65c88 AWS::CloudFormation::Stack Mon Feb 14 2022 11:22:29 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientRole AWS::IAM::Role Mon Feb 14 2022 11:22:39 GMT-0500 (Colombia Standard Time) 
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambda AWS::Lambda::Function Mon Feb 14 2022 11:22:42 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClientLambda AWS::Lambda::Function Mon Feb 14 2022 11:22:45 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLambda AWS::Lambda::Function Mon Feb 14 2022 11:22:51 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Mon Feb 14 2022 11:22:55 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClientLambdaPolicy AWS::IAM::Policy Mon Feb 14 2022 11:22:56 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLambdaPolicy AWS::IAM::Policy Mon Feb 14 2022 11:23:09 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Mon Feb 14 2022 11:23:13 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserPoolClientLogPolicy AWS::IAM::Policy Mon Feb 14 2022 11:23:15 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserPoolClientLogPolicy AWS::IAM::Policy Mon Feb 14 2022 11:23:28 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout Mon Feb 14 2022 11:23:34 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserPoolClientInputs Custom::LambdaCallout Mon Feb 14 2022 11:23:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UserPoolClientInputs Custom::LambdaCallout Mon Feb 14 2022 11:23:41 GMT-0500 (Colombia Standard Time)                            
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPool AWS::Cognito::IdentityPool Mon Feb 14 2022 11:23:44 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPool AWS::Cognito::IdentityPool Mon Feb 14 2022 11:23:47 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    IdentityPool        AWS::Cognito::IdentityPool               Mon Feb 14 2022 11:23:48 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Mon Feb 14 2022 11:23:52 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Mon Feb 14 2022 11:23:55 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    IdentityPoolRoleMap AWS::Cognito::IdentityPoolRoleAttachment Mon Feb 14 2022 11:23:56 GMT-0500 (Colombia Standard Time)                            
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-authkiowillowpayrjsapp80d6f39b-16YP852IPA7JB AWS::CloudFormation::Stack Mon Feb 14 2022 11:24:11 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    authkiowillowpayrjsapp80d6f39b AWS::CloudFormation::Stack Mon Feb 14 2022 11:24:23 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS UpdateRolesWithIDPFunction     AWS::Lambda::Function      Mon Feb 14 2022 11:24:26 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS apikiowillowpayrjsapp          AWS::CloudFormation::Stack Mon Feb 14 2022 11:24:26 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS authuserPoolGroups         AWS::CloudFormation::Stack Mon Feb 14 2022 11:24:27 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS authuserPoolGroups         AWS::CloudFormation::Stack Mon Feb 14 2022 11:24:28 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS apikiowillowpayrjsapp      AWS::CloudFormation::Stack Mon Feb 14 2022 11:24:28 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateRolesWithIDPFunction AWS::Lambda::Function      Mon Feb 14 2022 11:24:29 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-authuserPoolGroups-CGR19X7GYS9M AWS::CloudFormation::Stack Mon Feb 14 2022 11:24:28 GMT-0500 (Colombia Standard Time) User Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW AWS::CloudFormation::Stack Mon Feb 14 2022 11:24:28 GMT-0500 (Colombia Standard Time) User Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS AdministratorsGroupRole     AWS::IAM::Role Mon Feb 14 2022 11:24:37 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS RestaurantManagersGroupRole AWS::IAM::Role Mon Feb 14 2022 11:24:37 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS WillersGroupRole            AWS::IAM::Role Mon Feb 14 2022 11:24:37 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS LambdaExecutionRole         AWS::IAM::Role Mon Feb 14 2022 11:24:38 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS WillersGroupRole            AWS::IAM::Role Mon Feb 14 2022 11:24:38 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS RestaurantManagersGroupRole AWS::IAM::Role Mon Feb 14 2022 11:24:38 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS LambdaExecutionRole         AWS::IAM::Role Mon Feb 14 2022 11:24:38 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS AdministratorsGroupRole     AWS::IAM::Role Mon Feb 14 2022 11:24:39 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE AdministratorsGroupRole AWS::IAM::Role Mon Feb 14 2022 11:24:55 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE LambdaExecutionRole     AWS::IAM::Role Mon Feb 14 2022 11:24:55 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UpdateRolesWithIDPFunction        AWS::Lambda::Function Mon Feb 14 2022 11:24:57 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Mon Feb 14 2022 11:25:00 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS AdministratorsGroup         AWS::Cognito::UserPoolGroup Mon Feb 14 2022 11:24:58 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS RoleMapFunction             AWS::Lambda::Function       Mon Feb 14 2022 11:24:59 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    RestaurantManagersGroupRole AWS::IAM::Role              Mon Feb 14 2022 11:25:00 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS AdministratorsGroup         AWS::Cognito::UserPoolGroup Mon Feb 14 2022 11:25:00 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    AdministratorsGroup         AWS::Cognito::UserPoolGroup Mon Feb 14 2022 11:25:00 GMT-0500 (Colombia Standard Time)                            
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Mon Feb 14 2022 11:25:04 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS RoleMapFunction AWS::Lambda::Function Mon Feb 14 2022 11:25:02 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE RoleMapFunction AWS::Lambda::Function Mon Feb 14 2022 11:25:09 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPI AWS::AppSync::GraphQLApi Mon Feb 14 2022 11:26:36 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPI AWS::AppSync::GraphQLApi Mon Feb 14 2022 11:26:39 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    GraphQLAPI AWS::AppSync::GraphQLApi Mon Feb 14 2022 11:26:39 GMT-0500 (Colombia Standard Time)                            
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey        Mon Feb 14 2022 11:26:42 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS GraphQLSchema AWS::AppSync::GraphQLSchema Mon Feb 14 2022 11:26:43 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey        Mon Feb 14 2022 11:26:44 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    GraphQLAPIKey AWS::AppSync::ApiKey        Mon Feb 14 2022 11:26:44 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GraphQLSchema AWS::AppSync::GraphQLSchema Mon Feb 14 2022 11:26:45 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE WillersGroupRole AWS::IAM::Role Mon Feb 14 2022 11:26:52 GMT-0500 (Colombia Standard Time) 
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS RoleMapFunctionInput Custom::LambdaCallout       Mon Feb 14 2022 11:27:03 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS WillersGroup         AWS::Cognito::UserPoolGroup Mon Feb 14 2022 11:27:03 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UpdateRolesWithIDPFunctionOutputs Custom::LambdaCallout Mon Feb 14 2022 11:25:05 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS RestaurantManagersGroup AWS::Cognito::UserPoolGroup Mon Feb 14 2022 11:27:03 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS WillersGroup            AWS::Cognito::UserPoolGroup Mon Feb 14 2022 11:27:06 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS RoleMapFunctionInput    Custom::LambdaCallout       Mon Feb 14 2022 11:27:06 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    WillersGroup            AWS::Cognito::UserPoolGroup Mon Feb 14 2022 11:27:06 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS RestaurantManagersGroup AWS::Cognito::UserPoolGroup Mon Feb 14 2022 11:27:06 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    RoleMapFunctionInput    Custom::LambdaCallout       Mon Feb 14 2022 11:27:06 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    RestaurantManagersGroup AWS::Cognito::UserPoolGroup Mon Feb 14 2022 11:27:06 GMT-0500 (Colombia Standard Time)                            
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-authuserPoolGroups-CGR19X7GYS9M AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:10 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE authuserPoolGroups AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:32 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE GraphQLSchema AWS::AppSync::GraphQLSchema Mon Feb 14 2022 11:27:46 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS Discount AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:49 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS Order    AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:49 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS Purchase AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS Measure  AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS Category AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS Product  AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS Price    AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS Order    AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS Discount AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS Measure  AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS Purchase AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:51 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS Feature  AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:51 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS User     AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:51 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS Category AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:51 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS Product  AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:51 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS Price    AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:51 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Price-1NF1GQ4M3WG6V AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:51 GMT-0500 (Colombia Standard Time) User Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Product-1Y29HXPEHHF3W AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:51 GMT-0500 (Colombia Standard Time) User Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Category-5NIUJW9MN6Z8 AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time) User Initiated
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Purchase-15ZU7NX8IJF90 AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time) User Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Measure-1OI3X5TICYW2O AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time) User Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Discount-1Q8NIA4YRYJIH AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time) User Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Order-11CEQ01ZRF9RY AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:50 GMT-0500 (Colombia Standard Time) User Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS User    AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:52 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS Feature AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:52 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Feature-NVFSZO4E39KA AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:52 GMT-0500 (Colombia Standard Time) User Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-User-1YNV6HX0IJ73 AWS::CloudFormation::Stack Mon Feb 14 2022 11:27:51 GMT-0500 (Colombia Standard Time) User Initiated
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS PriceTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS PriceIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ProductTable AWS::DynamoDB::Table Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS PurchaseIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PurchaseTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PurchaseIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS MeasureTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS MeasureIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS MeasureTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS MeasureIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS FeatureIAMRole AWS::IAM::Role Mon Feb 14 2022 11:28:10 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:10 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:10 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS DiscountTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DiscountIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DiscountTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS DiscountIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS PurchaseTable AWS::DynamoDB::Table Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CategoryTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:07 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CategoryIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:07 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CategoryIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS CategoryTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS PriceTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS PriceIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS FeatureIAMRole AWS::IAM::Role Mon Feb 14 2022 11:28:11 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ProductIAMRole AWS::IAM::Role Mon Feb 14 2022 11:28:09 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ProductIAMRole AWS::IAM::Role Mon Feb 14 2022 11:28:10 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS OrderIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:07 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS OrderTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:07 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS OrderIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS OrderTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:08 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS FeatureTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:21 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS FeatureTable   AWS::DynamoDB::Table Mon Feb 14 2022 11:28:22 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    FeatureIAMRole AWS::IAM::Role       Mon Feb 14 2022 11:28:25 GMT-0500 (Colombia Standard Time)                            


CREATE_COMPLETE UserIAMRole AWS::IAM::Role Mon Feb 14 2022 11:28:25 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    CategoryIAMRole    AWS::IAM::Role           Mon Feb 14 2022 11:28:23 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS CategoryDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:26 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    PurchaseIAMRole    AWS::IAM::Role           Mon Feb 14 2022 11:28:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS PurchaseDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:27 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    DiscountIAMRole    AWS::IAM::Role           Mon Feb 14 2022 11:28:24 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS DiscountDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:27 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    OrderIAMRole    AWS::IAM::Role           Mon Feb 14 2022 11:28:24 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS OrderDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:26 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS OrderDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:29 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    OrderDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:29 GMT-0500 (Colombia Standard Time)                            
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ProductTable      AWS::DynamoDB::Table     Mon Feb 14 2022 11:28:22 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    ProductIAMRole    AWS::IAM::Role           Mon Feb 14 2022 11:28:25 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ProductDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:28 GMT-0500 (Colombia Standard Time)                            
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS PurchaseDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:29 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    PurchaseDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:29 GMT-0500 (Colombia Standard Time)                            
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS DiscountDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:29 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    DiscountDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:29 GMT-0500 (Colombia Standard Time)                            
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    MeasureIAMRole    AWS::IAM::Role           Mon Feb 14 2022 11:28:24 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS MeasureDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:27 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS MeasureDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:29 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    MeasureDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:29 GMT-0500 (Colombia Standard Time)                            
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CategoryDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:28 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CategoryDataSource AWS::AppSync::DataSource Mon Feb 14 2022 11:28:28 GMT-0500 (Colombia Standard Time)                            
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ProductDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:30 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    ProductDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:30 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateProductResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time)                            
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UserDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:28 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UserDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:30 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UserDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:30 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateUserResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateUserResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteUserResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GetPurchaseResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS ListPurchaseResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS UpdatePurchaseResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS DeletePurchaseResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS CreatePurchaseResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time) 


CREATE_IN_PROGRESS FeatureDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:28 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS FeatureDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:30 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    FeatureDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:30 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteFeatureResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListFeatureResolver   AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GetMeasureResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS DeleteMeasureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS CreateMeasureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS ListMeasureResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GetOrderResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:31 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:31 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:31 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CreateCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:31 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetCategoryResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:31 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:31 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:31 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListCategoryResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CreateCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS GetCategoryResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS DeleteCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    GetCategoryResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    UpdateCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    DeleteCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS UpdateDiscountResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS ListDiscountResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS DeleteDiscountResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS CreateDiscountResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS GetDiscountResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CreateFeatureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetFeatureResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateFeatureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListFeatureResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    ListFeatureResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateFeatureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS DeleteFeatureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CreateFeatureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    DeleteFeatureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateFeatureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UpdateFeatureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:37 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetFeatureResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:37 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    GetFeatureResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:37 GMT-0500 (Colombia Standard Time)                            
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ListUserResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetUserResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteUserResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateUserResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UpdateUserResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    DeleteUserResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateUserResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS ListUserResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CreateUserResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    ListUserResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetUserResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    GetUserResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ListCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    ListCategoryResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    PriceIAMRole        AWS::IAM::Role           Mon Feb 14 2022 11:28:24 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PriceDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:27 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PriceDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:30 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    PriceDataSource     AWS::AppSync::DataSource Mon Feb 14 2022 11:28:30 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetPriceResolver    AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListPriceResolver   AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeletePriceResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreatePriceResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdatePriceResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeletePriceResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdatePriceResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    DeletePriceResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetPriceResolver    AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UpdatePriceResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    GetPriceResolver    AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreatePriceResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CreatePriceResolver AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListPriceResolver   AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    ListPriceResolver   AWS::AppSync::Resolver   Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS DeleteProductResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:32 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListProductResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetProductResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS UpdateProductResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteProductResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS ListProductResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    DeleteProductResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    ListProductResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetProductResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    GetProductResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateProductResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateProductResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CreateProductResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    UpdateProductResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS DeleteMeasureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS ListMeasureResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    DeleteMeasureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    ListMeasureResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS GetMeasureResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS CreateMeasureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    GetMeasureResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    CreateMeasureResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    MeasureTable          AWS::DynamoDB::Table   Mon Feb 14 2022 11:28:40 GMT-0500 (Colombia Standard Time)                            
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    UpdateOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS GetOrderResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CreateOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    GetOrderResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    DeleteOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:34 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ListOrderResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:39 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    OrderTable          AWS::DynamoDB::Table   Mon Feb 14 2022 11:28:39 GMT-0500 (Colombia Standard Time)                            
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE PriceTable AWS::DynamoDB::Table Mon Feb 14 2022 11:28:40 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE UserTable AWS::DynamoDB::Table Mon Feb 14 2022 11:28:41 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ListPurchaseResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdatePurchaseResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    ListPurchaseResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreatePurchaseResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS GetPurchaseResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UpdatePurchaseResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    CreatePurchaseResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    GetPurchaseResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeletePurchaseResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    DeletePurchaseResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    PurchaseTable          AWS::DynamoDB::Table   Mon Feb 14 2022 11:28:40 GMT-0500 (Colombia Standard Time)                            
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ListDiscountResolver                                                                            AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UpdateDiscountResolver                                                                          AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UpdateDiscountResolver                                                                          AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    ListDiscountResolver                                                                            AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CreateDiscountResolver                                                                          AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CreateDiscountResolver                                                                          AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DeleteDiscountResolver                                                                          AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS GetDiscountResolver                                                                             AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    DeleteDiscountResolver                                                                          AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    GetDiscountResolver                                                                             AWS::AppSync::Resolver     Mon Feb 14 2022 11:28:36 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    DiscountTable                                                                                   AWS::DynamoDB::Table       Mon Feb 14 2022 11:28:40 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Discount-1Q8NIA4YRYJIH AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:44 GMT-0500 (Colombia Standard Time)                            
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Price-1NF1GQ4M3WG6V AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:44 GMT-0500 (Colombia Standard Time) 
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ListOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:42 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    ListOrderResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:28:42 GMT-0500 (Colombia Standard Time)                            


CREATE_COMPLETE CategoryTable AWS::DynamoDB::Table Mon Feb 14 2022 11:28:39 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-User-1YNV6HX0IJ73 AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:45 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Purchase-15ZU7NX8IJF90 AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:44 GMT-0500 (Colombia Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE Discount AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:52 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE Category AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:52 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE Measure  AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:52 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE Purchase AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:53 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE Order    AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:53 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE Price    AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:53 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE User     AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:53 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE FeatureTable AWS::DynamoDB::Table Mon Feb 14 2022 11:28:53 GMT-0500 (Colombia Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE ProductTable AWS::DynamoDB::Table Mon Feb 14 2022 11:28:53 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Product-1Y29HXPEHHF3W AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:59 GMT-0500 (Colombia Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW-Feature-NVFSZO4E39KA AWS::CloudFormation::Stack Mon Feb 14 2022 11:28:57 GMT-0500 (Colombia Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE Product AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:09 GMT-0500 (Colombia Standard Time) 
CREATE_COMPLETE Feature AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:10 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ConnectionStack AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:14 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ConnectionStack AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:15 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5-ConnectionStack-1VDCF35T3HUVZ AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:14 GMT-0500 (Colombia Standard Time) User Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ProductmeasureResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS ProductpricesResolver     AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS UserordersClientResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS OrderuserWillerResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS FeaturepurchasesResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS DiscountpurchasesResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS PurchasepriceResolver     AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS UserordersWillerResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS MeasureproductsResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS OrderpurchasesResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS PurchaseproductResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS PricepurchasesResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS PurchasediscountResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS PurchasefeatureResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS OrderuserClientResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS ProductpurchasesResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS PriceproductResolver      AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CategoryproductsResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:29:32 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS PurchaseorderResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:33 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS ProductcategoryResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:33 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS MeasureproductsResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS ProductpricesResolver     AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS OrderpurchasesResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS FeaturepurchasesResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserordersWillerResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    MeasureproductsResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    ProductpricesResolver     AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    FeaturepurchasesResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    OrderpurchasesResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PurchasefeatureResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS PriceproductResolver      AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    UserordersWillerResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:34 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PurchaseproductResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS PurchasediscountResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS ProductmeasureResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS PricepurchasesResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS ProductpurchasesResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS UserordersClientResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    PriceproductResolver      AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS DiscountpurchasesResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    ProductmeasureResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    PricepurchasesResolver    AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    PurchasediscountResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    ProductpurchasesResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PurchasepriceResolver     AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS OrderuserWillerResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    PurchasefeatureResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    UserordersClientResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    DiscountpurchasesResolver AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    PurchaseproductResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    PurchasepriceResolver     AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    OrderuserWillerResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS CategoryproductsResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    CategoryproductsResolver  AWS::AppSync::Resolver Mon Feb 14 2022 11:29:35 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS PurchaseorderResolver     AWS::AppSync::Resolver Mon Feb 14 2022 11:29:36 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    PurchaseorderResolver     AWS::AppSync::Resolver Mon Feb 14 2022 11:29:36 GMT-0500 (Colombia Standard Time)                            
CREATE_IN_PROGRESS ProductcategoryResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:37 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_IN_PROGRESS OrderuserClientResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:37 GMT-0500 (Colombia Standard Time) Resource creation Initiated
CREATE_COMPLETE    OrderuserClientResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:37 GMT-0500 (Colombia Standard Time)                            
CREATE_COMPLETE    ProductcategoryResolver   AWS::AppSync::Resolver Mon Feb 14 2022 11:29:37 GMT-0500 (Colombia Standard Time)                            
⠋ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5-ConnectionStack-1VDCF35T3HUVZ AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:39 GMT-0500 (Colombia Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE    ConnectionStack     AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:49 GMT-0500 (Colombia Standard Time) 
CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:52 GMT-0500 (Colombia Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:53 GMT-0500 (Colombia Standard Time) Resource creation Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSU-CustomResourcesjson-YYA5BJKXJXXL AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:53 GMT-0500 (Colombia Standard Time) User Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSU-CustomResourcesjson-YYA5BJKXJXXL AWS::CloudFormation::Stack Mon Feb 14 2022 11:29:57 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE CustomResourcesjson AWS::CloudFormation::Stack Mon Feb 14 2022 11:30:04 GMT-0500 (Colombia Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE amplify-kiowillowpayrjsapp-dev-110245-apikiowillowpayrjsapp-S2LNSURWF5SW AWS::CloudFormation::Stack Mon Feb 14 2022 11:30:08 GMT-0500 (Colombia Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

CREATE_COMPLETE apikiowillowpayrjsapp AWS::CloudFormation::Stack Mon Feb 14 2022 11:30:25 GMT-0500 (Colombia Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-dev-110245 AWS::CloudFormation::Stack Mon Feb 14 2022 11:30:29 GMT-0500 (Colombia Standard Time) 
UPDATE_COMPLETE                     amplify-kiowillowpayrjsapp-dev-110245 AWS::CloudFormation::Stack Mon Feb 14 2022 11:30:30 GMT-0500 (Colombia Standard Time) 
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ Generated GraphQL operations successfully and saved at src/graphql
✔ All resources are updated in the cloud


```

# Date and time picker 
- https://reactdatepicker.com/
- https://www.youtube.com/watch?v=osAIu-1ag-Q
- https://www.youtube.com/watch?v=tojwQEdI-QI

# AWS enviroment
- https://docs.amplify.aws/cli/teams/overview/
  
# aws amplify storage unauthenticated access
- https://medium.com/floom/public-read-access-for-aws-amplify-storage-9eb5621abff
- https://docs.amplify.aws/lib/storage/configureaccess/q/platform/js/
- https://docs.amplify.aws/lib/storage/configureaccess/q/platform/js/#customization
- https://stackoverflow.com/questions/60936666/getting-missing-required-field-principal-when-adding-policy-to-s3-bucket

