
# References
- [Amplify Getting Started](https://docs.amplify.aws/start)
- [Policy AWS Simulator](https://policysim.aws.amazon.com)
- [Scalar types in AWS AppSync](https://docs.aws.amazon.com/appsync/latest/devguide/scalars.html)
- [GraphQL API Security with AWS AppSync and Amplify](https://aws.amazon.com/blogs/mobile/graphql-security-appsync-amplify/)
- https://tokhun.io/explore/serialized/jVRMXB
- https://docs.ipfs.io/concepts/what-is-ipfs/
- https://www.europapress.es/economia/finanzas-00340/noticia-mito-galeria-arte-nft-hispanohablantes-abre-puertas-20210916183841.html
- https://js.ipfs.io/

# Starting React App

```sh

source ~/.bash_profile
npx create-react-app kio-bogota-beach-tennis-rjs-app
```

# Design

- [Paper Kit React is a freeby Bootstrap 4, React and Reactstrap UI Kit.](https://demos.creative-tim.com/paper-kit-react/#/documentation/introduction?ref=pkr-github-readme)


1. [Download](https://www.creative-tim.com/product/now-ui-kit-pro-react) the template 
2. Unzip
3. Copy dependencies from template package.json to kio-jup-places-reserve-rjs-app/package.json (Also contains react-player)
```json
{
  "name": "kio-sl-video-history-board-rjs-app",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "web-vitals": "^1.0.1",
    "@aws-amplify/ui-react": "^1.2.8",
    "@material-ui/core": "^4.12.3",
    "@material-ui/icons": "^4.11.2",
    "aws-amplify": "^4.2.2",
    "aws-amplify-react": "^5.0.8",
    "bootstrap": "^5.0.2",
    "i": "^0.3.6",
    "moment": "2.29.1",
    "node-sass": "^6.0.1",
    "nouislider": "15.1.0",
    "npm": "^7.20.5",
    "react-bootstrap": "^2.0.0-beta.4",
    "react-bootstrap-switch": "15.5.3",
    "react-player": "^2.6.1",
    "react-router": "5.2.0",
    "react-router-dom": "5.2.0",
    "react-select": "^4.3.1",
    "reactstrap": "8.9.0",
    "styled-components": "^5.3.0"
  }
```
4. Install template dependencies
```sh
npm install
npm audit fix
```
5. Copy jsconfig.json from template to project root 
6. Copy folders (assets, components, views) to src/
7. Add "imports " index.js

```js
import React from 'react';
import ReactDOM from 'react-dom';
// styles
import 'bootstrap/dist/css/bootstrap.min.css';
import "assets/css/paper-kit.css";
import "assets/demo/demo.css";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


```
8. Conf app.js like this:

```js
import React, { Component } from 'react'
// import { Container } from 'react-bootstrap'
// Components
// import Home from './components/Home'
// import Header from './components/Header/Header'
import Footer from './components/Footers/DemoFooter'

// pages
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
import RegisterPage from "views/examples/RegisterPage.js";

// Routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component{
  
  constructor() {
    super();
    this.state = {
      x: 0,
      y: 0,
      epochTime: 0
    }
  }

  
  render() {
    
    return (   
      <Router>

          <Switch>
            <Route path="/index" render={(props) => <Index {...props} />} />
            <Route
              path="/nucleo-icons"
              render={(props) => <NucleoIcons {...props} />}
            />
            <Route
              path="/landing-page"
              render={(props) => <LandingPage {...props} />}
            />
            <Route
              path="/profile-page"
              render={(props) => <ProfilePage {...props} />}
            />
            <Route
              path="/register-page"
              render={(props) => <RegisterPage {...props} />}
            />
            <Redirect to="/landing-page" />
          </Switch>


        <Footer/>
      </Router>
    )
  }
}

export default App
```


# Dependencies
```sh
npm i aws-amplify @aws-amplify/ui-react \
npm i aws-amplify-react \
npm install react-bootstrap@next bootstrap@5.1.0 \
npm i react-select \
npm install @material-ui/core \
npm install @material-ui/icons \
npm install react-router-dom \
npm install react-player
```

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
? Select the plugin module to execute Hosting with Amplify Console (Managed hos
ting with custom domains, Continuous deployment)
? Choose a type Continuous deployment (Git-based deployments)
? Continuous deployment is configured in the Amplify Console. Please hit enter 
once you connect your repository 
Amplify hosting urls: 
┌──────────────┬──────────────────────────────────────────────┐
│ FrontEnd Env │ Domain                                       │
├──────────────┼──────────────────────────────────────────────┤
│ master       │ https://master.d2p7cnbefaaed7.amplifyapp.com │
└──────────────┴──────────────────────────────────────────────┘
```

# Amplify auth

```sh
amplify add auth

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

? Select from one of the below mentioned services: GraphQL
? Here is the GraphQL API that we will create. Select a setting to edit or continue Authorization modes: API key 
(default, expiration time: 7 days from now)
? Choose the default authorization type for the API API key
? Enter a description for the API key: kio-sl-lms-store-api-key  
? After how many days from now the API key should expire (1-365): 365
? Configure additional auth types? Yes
? Choose the additional authorization types you want to configure for the API Amazon Cognito User Pool
Cognito UserPool configuration
Use a Cognito user pool configured as a part of this project.
? Here is the GraphQL API that we will create. Select a setting to edit or continue Continue
? Choose a schema template: One-to-many relationship (e.g., “Blogs” with “Posts” and “Comments”)

⚠️  WARNING: your GraphQL API currently allows public create, read, update, and delete access to all models via an API Key. To configure PRODUCTION-READY authorization rules, review: https://docs.amplify.aws/cli/graphql/authorization-rules

GraphQL schema compiled successfully.

Edit your schema at /Users/robin8a/Documents/react_ws/kio-sl-lms-store-rjs-app/amplify/backend/api/kiosllmsstorerjsapp/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-sl-lms-store-rjs-app/amplify/backend/api/kiosllmsstorerjsapp/schema
✔ Do you want to edit the schema now? (Y/n) · yes
? Choose your default editor: Visual Studio Code
Edit the file in your editor: /Users/robin8a/Documents/react_ws/kio-sl-lms-store-rjs-app/amplify/backend/api/kiosllmsstorerjsapp/schema.graphql
✅ Successfully added resource kiosllmsstorerjsapp locally

✅ Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

```


# amplify storage
```sh
amplify add storage
# ? Please select from one of the below mentioned services: Content (Images, audio, video, etc.)
# ? Please provide a friendly name for your resource that will be used to label this category in the project: s32d231932
# ? Please provide bucket name: kioslvideohistoryboa7f757aaf029b451aab9ce97b95c
# ? Who should have access: Auth and guest users
# ? What kind of access do you want for Authenticated users? create/update, read
# ? What kind of access do you want for Guest users? read
# ? Do you want to add a Lambda Trigger for your S3 Bucket? No
# Successfully updated auth resource locally.
# Successfully added resource s32d231932 locally

# Some next steps:
# "amplify push" builds all of your local backend resources and provisions them in the cloud
# "amplify publish" builds all of your local backend and front-end resources (if you added hosting category) and provisions them in the cloud

kioslvideohistoryboard
```


# Amplify API

```sh
amplify add api
# ? Please select from one of the below mentioned services: GraphQL
# ? Provide API name: kiojupplacesreserver
# ? Choose the default authorization type for the API API key
# ? Enter a description for the API key: 
# ? After how many days from now the API key should expire (1-365): 365
# ? Do you want to configure advanced settings for the GraphQL API No, I am done.
# ? Do you have an annotated GraphQL schema? No
# ? Do you want a guided schema creation? Yes
# ? What best describes your project: One-to-many relationship (e.g., “Blogs” with “Posts” and “Comments”)
# ? Do you want to edit the schema now? Yes
# Please edit the file in your editor: /Users/robin8a/Documents/react_ws/kio-jup-places-reserve-rjs-app/amplify/backend/api/kiojupplacesreserver/schema.graphql
# ? Press enter to continue 

# The following types do not have '@auth' enabled. Consider using @auth with @model
#          - Place
#          - Reserve
# Learn more about @auth here: https://aws-amplify.github.io/docs/cli-toolchain/graphql#auth 


# GraphQL schema compiled successfully.

# Edit your schema at /Users/robin8a/Documents/react_ws/kio-jup-places-reserve-rjs-app/amplify/backend/api/kiojupplacesreserver/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-jup-places-reserve-rjs-app/amplify/backend/api/kiojupplacesreserver/schema
# Successfully added resource kiojupplacesreserver locally

# Some next steps:
# "amplify push" will build all your local backend resources and provision it in the cloud
# "amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

```

## Result

```sh
amplify push   
# ✔ Successfully pulled backend environment kiojuplrev from the cloud.

# Current Environment: kiojuplrev

# | Category | Resource name                | Operation | Provider plugin   |
# | -------- | ---------------------------- | --------- | ----------------- |
# | Api      | kiojupplacesreserver         | Create    | awscloudformation |
# | Hosting  | amplifyhosting               | No Change |                   |
# | Auth     | kiojupplacesreserver83258164 | No Change | awscloudformation |
# ? Are you sure you want to continue? Yes

# The following types do not have '@auth' enabled. Consider using @auth with @model
#          - Place
#          - Reserve
# Learn more about @auth here: https://aws-amplify.github.io/docs/cli-toolchain/graphql#auth 


# GraphQL schema compiled successfully.

# Edit your schema at /Users/robin8a/Documents/react_ws/kio-jup-places-reserve-rjs-app/amplify/backend/api/kiojupplacesreserver/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-jup-places-reserve-rjs-app/amplify/backend/api/kiojupplacesreserver/schema
# ? Do you want to generate code for your newly created GraphQL API Yes
# ? Choose the code generation language target javascript
# ? Enter the file name pattern of graphql queries, mutations and subscriptions src/graphql/**/*.js
# ? Do you want to generate/update all possible GraphQL operations - queries, mutations and subscriptions Yes
# ? Enter maximum statement depth [increase from default if your schema is deeply nested] 2
# ⠙ Updating resources in the cloud. This may take a few minutes...

# UPDATE_IN_PROGRESS amplify-kiojupplacesreserver-kiojuplrev-94031 AWS::CloudFormation::Stack Fri Aug 06 2021 16:11:45 GMT-0500 (Colombia Standard Time) User Initiated
# ⠇ Updating resources in the cloud. This may take a few minutes...

# UPDATE_IN_PROGRESS authkiojupplacesreserver83258164 AWS::CloudFormation::Stack Fri Aug 06 2021 16:11:51 GMT-0500 (Colombia Standard Time) 
# CREATE_IN_PROGRESS apikiojupplacesreserver          AWS::CloudFormation::Stack Fri Aug 06 2021 16:11:51 GMT-0500 (Colombia Standard Time) 
# ⠴ Updating resources in the cloud. This may take a few minutes...

# UPDATE_COMPLETE    authkiojupplacesreserver83258164 AWS::CloudFormation::Stack Fri Aug 06 2021 16:11:52 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS apikiojupplacesreserver          AWS::CloudFormation::Stack Fri Aug 06 2021 16:11:52 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# ⠋ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS amplify-kiojupplacesreserver-kiojuplrev-94031-apikiojupplacesreserver-1VMDXWBKYEZ81 AWS::CloudFormation::Stack Fri Aug 06 2021 16:11:52 GMT-0500 (Colombia Standard Time) User Initiated
# ⠋ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS GraphQLAPI AWS::AppSync::GraphQLApi Fri Aug 06 2021 16:11:57 GMT-0500 (Colombia Standard Time) 
# ⠇ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE    GraphQLAPI AWS::AppSync::GraphQLApi Fri Aug 06 2021 16:12:00 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS GraphQLAPI AWS::AppSync::GraphQLApi Fri Aug 06 2021 16:12:00 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# ⠇ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE    GraphQLSchema AWS::AppSync::GraphQLSchema Fri Aug 06 2021 16:12:06 GMT-0500 (Colombia Standard Time)                            
# CREATE_COMPLETE    GraphQLAPIKey AWS::AppSync::ApiKey        Fri Aug 06 2021 16:12:06 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey        Fri Aug 06 2021 16:12:06 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS GraphQLSchema AWS::AppSync::GraphQLSchema Fri Aug 06 2021 16:12:05 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey        Fri Aug 06 2021 16:12:03 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS GraphQLSchema AWS::AppSync::GraphQLSchema Fri Aug 06 2021 16:12:03 GMT-0500 (Colombia Standard Time)                            
# ⠙ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS Place   AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:09 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS Reserve AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:09 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS Place   AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:08 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS Reserve AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:08 GMT-0500 (Colombia Standard Time)                            
# ⠧ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS amplify-kiojupplacesreserver-kiojuplrev-94031-apikiojupplacesreserver-1VMDXWBKYE-Place-17BAOD8XXTD8Q AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:09 GMT-0500 (Colombia Standard Time) User Initiated
# ⠇ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS amplify-kiojupplacesreserver-kiojuplrev-94031-apikiojupplacesreserver-1VMDXWBK-Reserve-NK4N0JJCMGNJ AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:09 GMT-0500 (Colombia Standard Time) User Initiated
# ⠼ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS PlaceTable   AWS::DynamoDB::Table Fri Aug 06 2021 16:12:17 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS PlaceIAMRole AWS::IAM::Role       Fri Aug 06 2021 16:12:16 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS PlaceTable   AWS::DynamoDB::Table Fri Aug 06 2021 16:12:16 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS PlaceIAMRole AWS::IAM::Role       Fri Aug 06 2021 16:12:16 GMT-0500 (Colombia Standard Time)                            
# ⠴ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS ReserveIAMRole AWS::IAM::Role       Fri Aug 06 2021 16:12:17 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS ReserveTable   AWS::DynamoDB::Table Fri Aug 06 2021 16:12:16 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS ReserveTable   AWS::DynamoDB::Table Fri Aug 06 2021 16:12:16 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS ReserveIAMRole AWS::IAM::Role       Fri Aug 06 2021 16:12:16 GMT-0500 (Colombia Standard Time)                            
# ⠴ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE PlaceIAMRole AWS::IAM::Role Fri Aug 06 2021 16:12:30 GMT-0500 (Colombia Standard Time) 
# ⠦ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE ReserveIAMRole AWS::IAM::Role Fri Aug 06 2021 16:12:31 GMT-0500 (Colombia Standard Time) 
# ⠴ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE    PlaceDataSource AWS::AppSync::DataSource Fri Aug 06 2021 16:12:35 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS PlaceDataSource AWS::AppSync::DataSource Fri Aug 06 2021 16:12:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS PlaceDataSource AWS::AppSync::DataSource Fri Aug 06 2021 16:12:33 GMT-0500 (Colombia Standard Time)                            
# ⠦ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE    ReserveDataSource AWS::AppSync::DataSource Fri Aug 06 2021 16:12:35 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS ReserveDataSource AWS::AppSync::DataSource Fri Aug 06 2021 16:12:35 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS ReserveDataSource AWS::AppSync::DataSource Fri Aug 06 2021 16:12:33 GMT-0500 (Colombia Standard Time)                            
# ⠼ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS GetPlaceResolver    AWS::AppSync::Resolver Fri Aug 06 2021 16:12:38 GMT-0500 (Colombia Standard Time) 
# CREATE_IN_PROGRESS CreatePlaceResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:38 GMT-0500 (Colombia Standard Time) 
# CREATE_IN_PROGRESS ListPlaceResolver   AWS::AppSync::Resolver Fri Aug 06 2021 16:12:38 GMT-0500 (Colombia Standard Time) 
# CREATE_IN_PROGRESS UpdatePlaceResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:38 GMT-0500 (Colombia Standard Time) 
# ⠦ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS ListReserveResolver   AWS::AppSync::Resolver Fri Aug 06 2021 16:12:38 GMT-0500 (Colombia Standard Time) 
# CREATE_IN_PROGRESS DeleteReserveResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:38 GMT-0500 (Colombia Standard Time) 
# ⠴ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE    DeletePlaceResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:41 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS DeletePlaceResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_COMPLETE    GetPlaceResolver    AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_COMPLETE    CreatePlaceResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS GetPlaceResolver    AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_COMPLETE    UpdatePlaceResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS CreatePlaceResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS UpdatePlaceResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_COMPLETE    ListPlaceResolver   AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS ListPlaceResolver   AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS DeletePlaceResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:38 GMT-0500 (Colombia Standard Time)                            
# ⠦ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE    CreateReserveResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:41 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS CreateReserveResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:41 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_COMPLETE    UpdateReserveResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:41 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS UpdateReserveResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:41 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_COMPLETE    DeleteReserveResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS DeleteReserveResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_COMPLETE    GetReserveResolver    AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_COMPLETE    ListReserveResolver   AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS GetReserveResolver    AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS ListReserveResolver   AWS::AppSync::Resolver Fri Aug 06 2021 16:12:40 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS CreateReserveResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:39 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS GetReserveResolver    AWS::AppSync::Resolver Fri Aug 06 2021 16:12:38 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS UpdateReserveResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:12:38 GMT-0500 (Colombia Standard Time)                            
# ⠇ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE PlaceTable AWS::DynamoDB::Table Fri Aug 06 2021 16:12:48 GMT-0500 (Colombia Standard Time) 
# ⠏ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE ReserveTable AWS::DynamoDB::Table Fri Aug 06 2021 16:12:48 GMT-0500 (Colombia Standard Time) 
# ⠇ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE amplify-kiojupplacesreserver-kiojuplrev-94031-apikiojupplacesreserver-1VMDXWBKYE-Place-17BAOD8XXTD8Q AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:50 GMT-0500 (Colombia Standard Time) 
# ⠋ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE amplify-kiojupplacesreserver-kiojuplrev-94031-apikiojupplacesreserver-1VMDXWBK-Reserve-NK4N0JJCMGNJ AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:50 GMT-0500 (Colombia Standard Time) 
# ⠋ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE Reserve AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:57 GMT-0500 (Colombia Standard Time) 
# ⠋ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE Place AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:57 GMT-0500 (Colombia Standard Time) 
# ⠋ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS ConnectionStack AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:00 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS ConnectionStack AWS::CloudFormation::Stack Fri Aug 06 2021 16:12:59 GMT-0500 (Colombia Standard Time)                            
# ⠦ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS amplify-kiojupplacesreserver-kiojuplrev-94031-apikiojupplacesreserver-ConnectionStack-TIRY9TBK0P36 AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:00 GMT-0500 (Colombia Standard Time) User Initiated
# ⠧ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS ReserveplaceResolver  AWS::AppSync::Resolver Fri Aug 06 2021 16:13:06 GMT-0500 (Colombia Standard Time) 
# CREATE_IN_PROGRESS PlacereservesResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:13:05 GMT-0500 (Colombia Standard Time) 
# ⠇ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE    ReserveplaceResolver  AWS::AppSync::Resolver Fri Aug 06 2021 16:13:08 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS ReserveplaceResolver  AWS::AppSync::Resolver Fri Aug 06 2021 16:13:08 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_COMPLETE    PlacereservesResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:13:08 GMT-0500 (Colombia Standard Time)                            
# CREATE_IN_PROGRESS PlacereservesResolver AWS::AppSync::Resolver Fri Aug 06 2021 16:13:07 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# ⠼ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE ConnectionStack AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:11 GMT-0500 (Colombia Standard Time) 
# ⠹ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:14 GMT-0500 (Colombia Standard Time) Resource creation Initiated
# CREATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:13 GMT-0500 (Colombia Standard Time)                            
# ⠧ Updating resources in the cloud. This may take a few minutes...

# CREATE_IN_PROGRESS amplify-kiojupplacesreserver-kiojuplrev-94031-apikiojupplacesreser-CustomResourcesjson-5C95OXAUGBTW AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:14 GMT-0500 (Colombia Standard Time) User Initiated
# ⠇ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE amplify-kiojupplacesreserver-kiojuplrev-94031-apikiojupplacesreser-CustomResourcesjson-5C95OXAUGBTW AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:18 GMT-0500 (Colombia Standard Time) 
# ⠼ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE CustomResourcesjson AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:25 GMT-0500 (Colombia Standard Time) 
# ⠸ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE amplify-kiojupplacesreserver-kiojuplrev-94031-apikiojupplacesreserver-1VMDXWBKYEZ81 AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:27 GMT-0500 (Colombia Standard Time) 
# ⠏ Updating resources in the cloud. This may take a few minutes...

# CREATE_COMPLETE apikiojupplacesreserver AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:46 GMT-0500 (Colombia Standard Time) 
# ⠇ Updating resources in the cloud. This may take a few minutes...

# UPDATE_COMPLETE                     amplify-kiojupplacesreserver-kiojuplrev-94031 AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:51 GMT-0500 (Colombia Standard Time) 
# UPDATE_COMPLETE                     authkiojupplacesreserver83258164              AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:50 GMT-0500 (Colombia Standard Time) 
# UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiojupplacesreserver-kiojuplrev-94031 AWS::CloudFormation::Stack Fri Aug 06 2021 16:13:49 GMT-0500 (Colombia Standard Time) 
# ✔ Generated GraphQL operations successfully and saved at src/graphql
# ✔ All resources are updated in the cloud



```


QmVnv4YKRU9qtGPMWDVeDXd7VEbGwsBHZnDuqFXUxCKDcS

https://ipfs.io/ipfs/QmVnv4YKRU9qtGPMWDVeDXd7VEbGwsBHZnDuqFXUxCKDcS


# Setting Up authorization

https://docs.amplify.aws/cli-legacy/graphql-transformer/auth/#combining-multiple-authorization-types

```json
type Post @model
  @auth (
    rules: [
      # allow all authenticated users ability to create posts
      # allow owners ability to update and delete their posts
      { allow: owner },

      # allow all authenticated users to read posts
      { allow: private, operations: [read] },

      # allow all guest users (not authenticated) to read posts
      { allow: public, operations: [read] }
    ]
  ) {
  id: ID!
  title: String
  owner: String
}
```
## 
- [Using multiple authorization types with AWS AppSync GraphQL APIs](https://aws.amazon.com/blogs/mobile/using-multiple-authorization-types-with-aws-appsync-graphql-apis/)


## Updating Auth

```sh
amplify update auth
Please note that certain attributes may not be overwritten if you choose to use defaults settings.

You have configured resources that might depend on this Cognito resource.  Updating this Cognito resource could have unintended side effects.

Using service: Cognito, provided by: awscloudformation
 What do you want to do? Create or update Cognito user pool groups
? Provide a name for your user pool group: Administrators
? Do you want to add another User Pool Group Yes
? Provide a name for your user pool group: RestaurantManagers
? Do you want to add another User Pool Group Yes
? Provide a name for your user pool group: Willers
? Do you want to add another User Pool Group No
✔ Sort the user pool groups in order of preference · Administrators, RestaurantManagers, Willers
Successfully updated auth resource kiowillowpayrjsapp80d6f39b locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Successfully updated resource kiowillowpayrjsapp80d6f39b locally

Some next steps:
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud
```



# Changin Auth Default

```sh
amplify update api
? Please select from one of the below mentioned services: GraphQL
? Select from the options below Walkthrough all configurations
? Choose the default authorization type for the API API key
? Enter a description for the API key: allguestusers
? After how many days from now the API key should expire (1-365): 365
? Do you want to configure advanced settings for the GraphQL API No, I am done.

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
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


GraphQL schema compiled successfully.

Edit your schema at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema
The API_KEY auth type has been added to the API.
⚠️  If other resources depend on this API and need access to the API key, run "amplify update <category>" and reselect this API as a dependency to add the API key dependency.
Successfully updated resource
➜  kio-willow-pay-rjs-app git:(development) ✗ amplify status

    Current Environment: kwipayenv
    
┌──────────┬────────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name              │ Operation │ Provider plugin   │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Api      │ kiowillowpayrjsapp         │ Update    │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Hosting  │ amplifyhosting             │ No Change │                   │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ kiowillowpayrjsapp80d6f39b │ No Change │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ userPoolGroups             │ No Change │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Storage  │ s363b65c88                 │ No Change │ awscloudformation │
└──────────┴────────────────────────────┴───────────┴───────────────────┘

GraphQL endpoint: https://btodi5nln5gt5bikhcozbzf26q.appsync-api.us-east-1.amazonaws.com/graphql
GraphQL API is configured to use API_KEY authentication, but API Key deployment is disabled, don't forget to create one.


Amplify hosting urls: 
┌──────────────┬──────────────────────────────────────────────┐
│ FrontEnd Env │ Domain                                       │
├──────────────┼──────────────────────────────────────────────┤
│ master       │ https://master.d2p7cnbefaaed7.amplifyapp.com │
│              ├──────────────────────────────────────────────┤
│              │ https://willowpay.co                         │
│              ├──────────────────────────────────────────────┤
│              │ https://www.willowpay.co                     │
└──────────────┴──────────────────────────────────────────────┘
➜  kio-willow-pay-rjs-app git:(development) ✗ amplify push
✔ Successfully pulled backend environment kwipayenv from the cloud.

    Current Environment: kwipayenv
    
┌──────────┬────────────────────────────┬───────────┬───────────────────┐
│ Category │ Resource name              │ Operation │ Provider plugin   │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Api      │ kiowillowpayrjsapp         │ Update    │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Hosting  │ amplifyhosting             │ No Change │                   │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ kiowillowpayrjsapp80d6f39b │ No Change │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Auth     │ userPoolGroups             │ No Change │ awscloudformation │
├──────────┼────────────────────────────┼───────────┼───────────────────┤
│ Storage  │ s363b65c88                 │ No Change │ awscloudformation │
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
Learn more about @auth here: https://docs.amplify.aws/cli/graphql-transformer/auth


GraphQL schema compiled successfully.

Edit your schema at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema.graphql or place .graphql files in a directory at /Users/robin8a/Documents/react_ws/kio-willow-pay-rjs-app/amplify/backend/api/kiowillowpayrjsapp/schema
? Do you want to update code for your updated GraphQL API No
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446 AWS::CloudFormation::Stack Wed Dec 01 2021 14:11:11 GMT-0500 (Eastern Standard Time) User Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS authkiowillowpayrjsapp80d6f39b AWS::CloudFormation::Stack Wed Dec 01 2021 14:11:17 GMT-0500 (Eastern Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS apikiowillowpayrjsapp          AWS::CloudFormation::Stack Wed Dec 01 2021 14:11:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS storages363b65c88              AWS::CloudFormation::Stack Wed Dec 01 2021 14:11:17 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    authkiowillowpayrjsapp80d6f39b AWS::CloudFormation::Stack Wed Dec 01 2021 14:11:18 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    storages363b65c88              AWS::CloudFormation::Stack Wed Dec 01 2021 14:11:18 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS authuserPoolGroups             AWS::CloudFormation::Stack Wed Dec 01 2021 14:11:21 GMT-0500 (Eastern Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WRC AWS::CloudFormation::Stack Wed Dec 01 2021 14:11:18 GMT-0500 (Eastern Standard Time) User Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE authuserPoolGroups AWS::CloudFormation::Stack Wed Dec 01 2021 14:11:22 GMT-0500 (Eastern Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS GraphQLAPI AWS::AppSync::GraphQLApi Wed Dec 01 2021 14:11:26 GMT-0500 (Eastern Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE    GraphQLAPI    AWS::AppSync::GraphQLApi Wed Dec 01 2021 14:11:28 GMT-0500 (Eastern Standard Time) 
CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey     Wed Dec 01 2021 14:11:31 GMT-0500 (Eastern Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS GraphQLSchema AWS::AppSync::GraphQLSchema Wed Dec 01 2021 14:11:32 GMT-0500 (Eastern Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

CREATE_IN_PROGRESS GraphQLAPIKey AWS::AppSync::ApiKey Wed Dec 01 2021 14:11:34 GMT-0500 (Eastern Standard Time) Resource creation Initiated
CREATE_COMPLETE    GraphQLAPIKey AWS::AppSync::ApiKey Wed Dec 01 2021 14:11:34 GMT-0500 (Eastern Standard Time)                            
⠇ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE    GraphQLSchema AWS::AppSync::GraphQLSchema Wed Dec 01 2021 14:12:35 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS Category      AWS::CloudFormation::Stack  Wed Dec 01 2021 14:12:38 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS User          AWS::CloudFormation::Stack  Wed Dec 01 2021 14:12:38 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS Product       AWS::CloudFormation::Stack  Wed Dec 01 2021 14:12:39 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS Feature       AWS::CloudFormation::Stack  Wed Dec 01 2021 14:12:39 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS Price         AWS::CloudFormation::Stack  Wed Dec 01 2021 14:12:39 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS Purchase      AWS::CloudFormation::Stack  Wed Dec 01 2021 14:12:39 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS Discount      AWS::CloudFormation::Stack  Wed Dec 01 2021 14:12:39 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS Order         AWS::CloudFormation::Stack  Wed Dec 01 2021 14:12:39 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS Measure       AWS::CloudFormation::Stack  Wed Dec 01 2021 14:12:39 GMT-0500 (Eastern Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WR-Measure-M8MFO691LVO5 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:40 GMT-0500 (Eastern Standard Time) User Initiated
⠧ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WRC-Order-1AE5CFQGDQQPJ AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:40 GMT-0500 (Eastern Standard Time) User Initiated
⠇ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WRC-Price-1B37QHXWW5V1O AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:40 GMT-0500 (Eastern Standard Time) User Initiated


UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02W-Discount-1PYRX6HKJW115 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:40 GMT-0500 (Eastern Standard Time) User Initiated
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02W-Purchase-WPLXVYECD0ES AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:40 GMT-0500 (Eastern Standard Time) User Initiated
⠋ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WR-Feature-1KBCD6GWB4UNL AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:40 GMT-0500 (Eastern Standard Time) User Initiated
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WR-Product-OVYS9XFGEJT7 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:40 GMT-0500 (Eastern Standard Time) User Initiated
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WRC-User-1HVIUX5UQFN83 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:40 GMT-0500 (Eastern Standard Time) User Initiated


UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02W-Category-1A1ZDD6L3SNY4 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:39 GMT-0500 (Eastern Standard Time) User Initiated
⠼ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS UpdateDiscountResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS ListPriceResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:48 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS UpdatePriceResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:48 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS GetPriceResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:48 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS DeletePriceResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS UpdateProductResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:48 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS GetProductResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ListProductResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS CreateProductResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS DeleteProductResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
⠼ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS CreateCategoryResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS UpdateCategoryResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ListCategoryResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS GetCategoryResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS DeleteCategoryResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:50 GMT-0500 (Eastern Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS CreateUserResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:48 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS UpdateUserResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:48 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ListUserResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:48 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS DeleteUserResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS GetUserResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS GetOrderResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:50 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ListOrderResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:50 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS DeleteOrderResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS CreateOrderResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS UpdateOrderResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    CreateOrderResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:53 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    ListOrderResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:53 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    DeleteOrderResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:53 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    UpdateOrderResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:53 GMT-0500 (Eastern Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS CreatePurchaseResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS DeletePurchaseResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:50 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS GetPurchaseResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:50 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ListPurchaseResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:50 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS UpdatePurchaseResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:50 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    CreatePurchaseResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    DeletePurchaseResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    UpdatePurchaseResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    ListPurchaseResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:53 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    GetPurchaseResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:53 GMT-0500 (Eastern Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS ListMeasureResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS UpdateMeasureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS DeleteMeasureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS GetMeasureResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS CreateMeasureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:50 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    DeleteMeasureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    GetMeasureResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    ListMeasureResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    UpdateMeasureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    CreateMeasureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 


UPDATE_IN_PROGRESS CreateDiscountResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ListDiscountResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS DeleteDiscountResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS GetDiscountResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    CreateDiscountResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    DeleteDiscountResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    UpdateDiscountResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    ListDiscountResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    GetDiscountResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS CreatePriceResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    ListPriceResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    GetPriceResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    UpdatePriceResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    DeletePriceResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    CreatePriceResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS DeleteFeatureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:48 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS CreateFeatureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ListFeatureResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS GetFeatureResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS UpdateFeatureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:49 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    DeleteFeatureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    GetFeatureResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    CreateFeatureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    ListFeatureResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    UpdateFeatureResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE ListUserResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:50 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE CreateUserResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE UpdateUserResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE DeleteUserResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE GetUserResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE UpdateProductResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE ListProductResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE GetProductResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE CreateProductResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE DeleteProductResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE CreateCategoryResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE UpdateCategoryResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:51 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE GetCategoryResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE DeleteCategoryResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE ListCategoryResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:12:52 GMT-0500 (Eastern Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE GetOrderResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:12:54 GMT-0500 (Eastern Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WR-Feature-1KBCD6GWB4UNL AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:55 GMT-0500 (Eastern Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WRC-User-1HVIUX5UQFN83 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:55 GMT-0500 (Eastern Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02W-Category-1A1ZDD6L3SNY4 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:57 GMT-0500 (Eastern Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02W-Discount-1PYRX6HKJW115 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:56 GMT-0500 (Eastern Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WRC-Order-1AE5CFQGDQQPJ AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:57 GMT-0500 (Eastern Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WR-Product-OVYS9XFGEJT7 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:55 GMT-0500 (Eastern Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WRC-Price-1B37QHXWW5V1O AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:56 GMT-0500 (Eastern Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02W-Purchase-WPLXVYECD0ES AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:58 GMT-0500 (Eastern Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE Product  AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:02 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE Feature  AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:02 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE Category AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:02 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE Order    AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:02 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE User     AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:02 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE Price    AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:02 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE Discount AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:02 GMT-0500 (Eastern Standard Time) 
⠋ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE Purchase AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:02 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE Measure  AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:03 GMT-0500 (Eastern Standard Time) 
⠸ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WR-Measure-M8MFO691LVO5 AWS::CloudFormation::Stack Wed Dec 01 2021 14:12:56 GMT-0500 (Eastern Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS ConnectionStack AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:06 GMT-0500 (Eastern Standard Time) 
⠙ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I-ConnectionStack-163F1HEF9JYCX AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:07 GMT-0500 (Eastern Standard Time) User Initiated
⠙ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS PurchaseorderResolver     AWS::AppSync::Resolver Wed Dec 01 2021 14:13:16 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS PricepurchasesResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:13:16 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS OrderuserClientResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:13:16 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS DiscountpurchasesResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:13:16 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ProductpricesResolver     AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS CategoryproductsResolver  AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS PurchaseproductResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS OrderpurchasesResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS PurchasediscountResolver  AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ProductpurchasesResolver  AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS MeasureproductsResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS PriceproductResolver      AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS OrderuserWillerResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS FeaturepurchasesResolver  AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS PurchasefeatureResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS PurchasepriceResolver     AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ProductmeasureResolver    AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
UPDATE_IN_PROGRESS ProductcategoryResolver   AWS::AppSync::Resolver Wed Dec 01 2021 14:13:17 GMT-0500 (Eastern Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE PricepurchasesResolver AWS::AppSync::Resolver Wed Dec 01 2021 14:13:18 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE PurchaseorderResolver  AWS::AppSync::Resolver Wed Dec 01 2021 14:13:18 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE ProductpricesResolver  AWS::AppSync::Resolver Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE                     OrderuserClientResolver                                                                              AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     DiscountpurchasesResolver                                                                            AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     MeasureproductsResolver                                                                              AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     FeaturepurchasesResolver                                                                             AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     OrderpurchasesResolver                                                                               AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     PriceproductResolver                                                                                 AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     PurchasefeatureResolver                                                                              AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     OrderuserWillerResolver                                                                              AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     ProductcategoryResolver                                                                              AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     PurchasediscountResolver                                                                             AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     PurchasepriceResolver                                                                                AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     PurchaseproductResolver                                                                              AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:19 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     ProductmeasureResolver                                                                               AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:20 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     ProductpurchasesResolver                                                                             AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:20 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE                     CategoryproductsResolver                                                                             AWS::AppSync::Resolver     Wed Dec 01 2021 14:13:20 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I-ConnectionStack-163F1HEF9JYCX AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:23 GMT-0500 (Eastern Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE ConnectionStack AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:29 GMT-0500 (Eastern Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_IN_PROGRESS CustomResourcesjson AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:33 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE    CustomResourcesjson AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:33 GMT-0500 (Eastern Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446-apikiowillowpayrjsapp-1M1I18CQ02WRC AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:37 GMT-0500 (Eastern Standard Time) 
⠹ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE                     apikiowillowpayrjsapp                       AWS::CloudFormation::Stack Wed Dec 01 2021 14:13:57 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kiowillowpayrjsapp-kwipayenv-103446 AWS::CloudFormation::Stack Wed Dec 01 2021 14:14:00 GMT-0500 (Eastern Standard Time) 
⠇ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE authuserPoolGroups AWS::CloudFormation::Stack Wed Dec 01 2021 14:14:01 GMT-0500 (Eastern Standard Time) 
⠦ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE storages363b65c88 AWS::CloudFormation::Stack Wed Dec 01 2021 14:14:02 GMT-0500 (Eastern Standard Time) 
⠏ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE apikiowillowpayrjsapp AWS::CloudFormation::Stack Wed Dec 01 2021 14:14:35 GMT-0500 (Eastern Standard Time) 
⠴ Updating resources in the cloud. This may take a few minutes...

UPDATE_COMPLETE authkiowillowpayrjsapp80d6f39b              AWS::CloudFormation::Stack Wed Dec 01 2021 14:14:36 GMT-0500 (Eastern Standard Time) 
UPDATE_COMPLETE amplify-kiowillowpayrjsapp-kwipayenv-103446 AWS::CloudFormation::Stack Wed Dec 01 2021 14:14:37 GMT-0500 (Eastern Standard Time) 
✔ All resources are updated in the cloud

GraphQL endpoint: https://btodi5nln5gt5bikhcozbzf26q.appsync-api.us-east-1.amazonaws.com/graphql
GraphQL API KEY: 
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

