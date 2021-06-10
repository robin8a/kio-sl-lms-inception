# Amplify

## configure

- Just when is a new aws account
```sh
amplify configure
```


## init

```sh
amplify init
# Note: It is recommended to run this command from the root of your app directory
# ? Enter a name for the project kio-sl-lms
# ? Enter a name for the environment kilmsenv
# ? Choose your default editor: Visual Studio Code
# ? Choose the type of app that you're building javascript
# Please tell us about your project
# ? What javascript framework are you using react
# ? Source Directory Path:  src
# ? Distribution Directory Path: build
# ? Build Command:  npm run-script build
# ? Start Command: npm run-script start
# Using default provider  awscloudformation


# For more information on AWS Profiles, see:
# https://docs.aws.amazon.com/cli/latest/userguide/cli-multiple-profiles.html

# ? Do you want to use an AWS profile? Yes
# ? Please choose the profile you want to use kio-makersi-sl-lms
# Adding backend environment kilmsenv to AWS Amplify Console app: d1q9t7bgr5y2mv
# ⠴ Initializing project in the cloud...

# CREATE_IN_PROGRESS DeploymentBucket                  AWS::S3::Bucket            Thu Jun 10 2021 08:35:41 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS AuthRole                          AWS::IAM::Role             Thu Jun 10 2021 08:35:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS UnauthRole                        AWS::IAM::Role             Thu Jun 10 2021 08:35:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS DeploymentBucket                  AWS::S3::Bucket            Thu Jun 10 2021 08:35:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS AuthRole                          AWS::IAM::Role             Thu Jun 10 2021 08:35:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS amplify-kio-sl-lms-kilmsenv-83533 AWS::CloudFormation::Stack Thu Jun 10 2021 08:35:36 GMT-0500 (Colombia Standard Time) User Initiated             
# ⠙ Initializing project in the cloud...

# CREATE_IN_PROGRESS UnauthRole AWS::IAM::Role Thu Jun 10 2021 08:35:41 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# ⠼ Initializing project in the cloud...

# CREATE_COMPLETE UnauthRole AWS::IAM::Role Thu Jun 10 2021 08:35:55 GMT-0500 (Colombia Standard Time) 
# CREATE_COMPLETE AuthRole   AWS::IAM::Role Thu Jun 10 2021 08:35:54 GMT-0500 (Colombia Standard Time) 
# ⠴ Initializing project in the cloud...

# CREATE_COMPLETE amplify-kio-sl-lms-kilmsenv-83533 AWS::CloudFormation::Stack Thu Jun 10 2021 08:36:04 GMT-0500 (Colombia Standard Time) 
# CREATE_COMPLETE DeploymentBucket                  AWS::S3::Bucket            Thu Jun 10 2021 08:36:02 GMT-0500 (Colombia Standard Time) 
# ✔ Successfully created initial AWS cloud resources for deployments.
# ✔ Initialized provider successfully.
# Initialized your environment successfully.

# Your project has been successfully initialized and connected to the cloud!

# Some next steps:
# "amplify status" will show you what you've added already and if it's locally configured or deployed
# "amplify add <category>" will allow you to add features like user login or a backend API
# "amplify push" will build all your local backend resources and provision it in the cloud
# “amplify console” to open the Amplify Console and view your project status
# "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

# Pro tip:
# Try "amplify add api" to create a backend API and then "amplify publish" to deploy everything

```
