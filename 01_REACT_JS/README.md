# References
- [React JS forms](https://reactjs.org/docs/forms.html)
- [Download Videos Pexels](https://www.pexels.com/search/videos/education/)

https://stackoverflow.com/questions/36205673/how-do-i-create-a-dynamic-drop-down-list-with-react-bootstrap
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
npx create-react-app kio-sl-lms
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

# Codecommit

[Create repo](https://docs.aws.amazon.com/cli/latest/reference/codecommit/create-repository.html)

```sh
nano ~/.aws/credentials
export PATH=~/Library/Python/3.8/bin:$PATH
# source ~/.bash_profile
# test
aws s3 ls --profile kio-makersi-sl-lms
export AWS_PROFILE=kio-makersi-sl-lms

# aws codecommit create-repository --repository-name MyDemoRepo --repository-description "My demonstration repository" --tags Team=Saanvi
aws codecommit create-repository --repository-name kio-sl-lms --repository-description "Serverless Learning Management System - LMS Software" --tags Team=kio --region us-east-1 

```
## Result
```json
{
    "repositoryMetadata": {
        "accountId": "436023604714",
        "repositoryId": "d1279d41-9a6e-4a39-a3af-a7752aedf7c2",
        "repositoryName": "kio-sl-lms",
        "repositoryDescription": "Serverless Learning Management System - LMS Software",
        "lastModifiedDate": 1623332560.185,
        "creationDate": 1623332560.185,
        "cloneUrlHttp": "https://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-sl-lms",
        "cloneUrlSsh": "ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-sl-lms",
        "Arn": "arn:aws:codecommit:us-east-1:436023604714:kio-sl-lms"
    }
}
```

# git

```sh
ssh-keygen
/Users/robin8a/.ssh/kio_sl_lms_rsa

cat ~/.ssh/kio_sl_lms_rsa.pub

```

## Configure AWS IAM user

![AWS Config](_images/aws_iam_ssh_config.png)

```sh
cd ~/.ssh
ls
nano config

# Add

# CodeCommit hosts
Host kio_sl_lms_rsa
   HostName git-codecommit.us-east-1.amazonaws.com
   User APKAWLBIIGXVPJ7NHOZ5
   IdentityFile ~/.ssh/kio_sl_lms_rsa

```

https://xiaolishen.medium.com/use-multiple-ssh-keys-for-different-github-accounts-on-the-same-computer-7d7103ca8693

```sh
git remote -v
git remote rm origin
git remote add origin ssh://kio_sl_lms_rsa/v1/repos/kio-sl-lms
git push
```


# Amplify hosting

## Result
```sh
amplify add hosting
# ? Select the plugin module to execute Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)
# ? Choose a type Continuous deployment (Git-based deployments)
# ? Continuous deployment is configured in the Amplify Console. Please hit enter once you connect your repository 
# Amplify hosting urls: 
# ┌──────────────┬────────────────────────────────────────────┐
# │ FrontEnd Env │ Domain                                     │
# ├──────────────┼────────────────────────────────────────────┤
# │ main         │ https://main.d27calhvr9nc4h.amplifyapp.com │
# └──────────────┴────────────────────────────────────────────┘
```

## Route 53
- [Setting up a Custom Domain with the Amplify Console with Godaddy](https://www.youtube.com/watch?v=uaG2mMYLI68)
- 

# Amplify Personalize

- [Personalized recommendations](https://docs.amplify.aws/lib/analytics/personalize/q/platform/js#working-with-the-api)


# Draggable control image (Doesn't work on mobile)
- [npm dragable](https://www.npmjs.com/package/react-draggable)
- [react-draggable-and-resizable-pictures](https://stackblitz.com/edit/react-draggable-and-resizable-pictures)
- [Could Work How do I detect the users touch on an element in react native?](https://stackoverflow.com/questions/56911959/how-do-i-detect-the-users-touch-on-an-element-in-react-native)


# Design

- [NOW UI KIT REACT](https://demos.creative-tim.com/now-ui-kit-react/#/index)

1. [Download](https://www.creative-tim.com/product/material-kit-react?ref=mkr-navbar&_ga=2.213288532.1362901605.1628185760-743588370.1626883218#) the template 
2. Unzip
3. Copy dependencies from tempalte package.json to kio-jup-places-reserve-rjs-app/package.json
4. Install template dependencies
```sh
npm install
npm audit fix
```
5. Copy jsconfig.json from template to project root 
6. Copy folders (assets, components, views) to src/
7. Conf index.js like this

```js
import React from 'react'
import ReactDOM from 'react-dom'
// styles
// styles for this kit
import "assets/css/bootstrap.min.css"
import "assets/scss/now-ui-kit.scss?v=1.5.0"
import "assets/demo/demo.css?v=1.5.0"
import "assets/demo/nucleo-icons-page-styles.css?v=1.5.0"


import App from './App'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


```
8. Conf app.js like this:

```js
import React, { Component } from 'react'

// pages for this kit
import Index from "views/Index.js";
import NucleoIcons from "views/NucleoIcons.js";
import LoginPage from "views/examples/LoginPage.js";
import LandingPage from "views/examples/LandingPage.js";
import ProfilePage from "views/examples/ProfilePage.js";
// Routing
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'

class App extends Component{
  
  constructor() {
    super();
    this.state = {
      
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
            path="/login-page"
            render={(props) => <LoginPage {...props} />}
          />

          <Redirect to="/index" />
          <Redirect from="/" to="/index" />

        </Switch>


      </Router>
    )
  }
}

export default App
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
# ? Please provide bucket name: kio-sl-lmsb2100efba69f4dfaa1abc0e390f62647
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

# Amplify API

```sh
amplify add api    
? Please select from one of the below mentioned services: GraphQL
? Provide API name: kiosllmsapi
? Choose the default authorization type for the API API key
? Enter a description for the API key: 
? After how many days from now the API key should expire (1-365): 365
? Do you want to configure advanced settings for the GraphQL API No, I am done.


? Do you have an annotated GraphQL schema? No
? Do you want a guided schema creation? Yes
? What best describes your project: One-to-many relationship (e.g., “Blogs” wit
h “Posts” and “Comments”)
? Do you want to edit the schema now? Yes
Please edit the file in your editor: /Users/robin8a/Documents/react_ws/kio-sl-lms/amplify/backend/api/kiosllmsapi/schema.graphql
```

## Result

```sh
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kio-sl-lms-kilmsenv-83533 AWS::CloudFormation::Stack Sun Aug 08 2021 12:05:17 GMT-0500 (Colombia Standard Time) 
⠧ Updating resources in the cloud. This may take a few minutes...⠋ Generating G✔ Generated GraphQL operations successfully and saved at src/graphql
✔ All resources are updated in the cloud

GraphQL endpoint: https://ieujhqpqfrec3osw6cfdpq2xvm.appsync-api.us-east-1.amazonaws.com/graphql
GraphQL API KEY: check KeepWeb

```

# Install libraries
```sh
npm i aws-amplify @aws-amplify/ui-react \
npm i aws-amplify-react \
npm i react-select
```

# AWS AppSync


# An example query named "GetPost" might look like:
```js
     query GetPost {
       singlePost(id: 123) {
         id
         title
       }
     }
```

# An example mutation named "PutPost" might look like:
```js
     mutation PutPost {
       putPost(id: 123, title: "Hello, world!") {
         id
         title
       }
     }

     mutation MyMutation {
        createGenre(input: {id: "1", name: "Física"}) {
            id
            name
        }
    }
```

# Getting AWS amplify Auth User info
- [AWS Amplify Password & user management](https://docs.amplify.aws/lib/auth/manageusers/q/platform/js/#retrieve-current-authenticated-user)

- [Retrieving user information from AWS Amplify authentication](https://medium.com/@dantasfiles/three-methods-to-get-user-information-in-aws-amplify-authentication-e4e39e658c33)

# Floating Button control
- [react-floating-button](https://www.npmjs.com/package/react-floating-button)
- [React video player with custom controls #4 - adding player and controls functionalities.](https://www.youtube.com/watch?v=Y-OLcnr8eNo)
- [vivekjne/video-player-react-youtube](https://github.com/vivekjne/video-player-react-youtube)


# Installed component for button on React video player

- https://www.youtube.com/watch?v=Y-OLcnr8eNo
- https://www.npmjs.com/package/react-player
- https://www.tabnine.com/code/javascript/modules/react-player
- [***works*** How to Create a Hero Section with Video Using React-Player](https://levelup.gitconnected.com/how-to-create-a-hero-section-with-video-using-react-player-aa46445094db)


```sh
4063* npm start
 4064* brew update
 4065  npm install --save react@latest
 4066* npm start
 4067  npm install react-floating-button
 4068  npm audit fix
 4069  npm uninstall react-floating-button
 4070  npm i react-floating-button-menu
 4071  npm install @material-ui/core
 4072  \tnpm install @material-ui/icons
 4073* npm start
 4074  npm i styled-components
 4075* npm start
```
# GraphQl

```json
mutation MyMutation {
  createMoocType(input: {id: "5", name: "ebook"}) {
    id
    name
  }
}
```

<!-- ToDo -->


1. Create MOOC [X]
- Listener MOOC creados
2. Create Multimedias [X]
3. Add MoocList on schema Multimedia has MoocList [X]
4. Add MultimediaParentID to Multimedia [X]
5. Add MoocType and update on CRUDMooc [X]
6. Quiero crear lección "MOOC" (historia, aprendizaje, actividad, resumen). Curso => Leccion [X]
7. UI player [] and cargar multimedias [X]
- Signed URL [X] URL para evitar descargas de 3ros fuera de la plataforma
- 
9. Filtros por Genre
10. UI Landing page
11. Me gusta
12. Compartir
13. Comentar
14. Búsqueda de videos por temática
15. Editar video (filtros, efectos, tiempo, embellecer, velocidad, girar) https://www.youtube.com/watch?v=42xzuqAH5ig
16. Editar mi perfil personal
17. Quiero construir historia (paso a paso) [X]
18. Store

- Autentacacion 
- CI/CD

<!-- Back log -->
- Video Upload & Optimization
- HistoryBoard => componentDidMount => Load Parents

alegria3

Ya quieren arreglar

Reunión la próxima semana Ecopetrol
1. Crypto activo tokenización, que puedan ser monetizados después
2. Exchange
3. Precio internos de esos activos de crudo azul

Token carbon
Token barril azul

Precios sombra

Mercado balcón

Tienen Plata del estudio para desarrollar el prototipo de la plataforma

Negociamos el porcentaje de propiedad intelectual
Nota convertible

De donde va ser rentable la descorbanización

Viene de Londres el director, doctorado

Problema: refineria debe dejar 

