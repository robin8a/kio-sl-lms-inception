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
npx create-react-app kio-lms-n4na-store-rjs-app
```

# Amplify

## configure
- Follow this new tutorial: https://docs.amplify.aws/start/getting-started/installation/q/integration/react/#configure-the-amplify-cli
- Just when is a new aws account

```sh
amplify configure
```


## init

```sh
amplify init

Your project has been successfully initialized and connected to the cloud!

Some next steps:
"amplify status" will show you what you've added already and if it's locally configured or deployed
"amplify add <category>" will allow you to add features like user login or a backend API
"amplify push" will build all your local backend resources and provision it in the cloud
"amplify console" to open the Amplify Console and view your project status
"amplify publish" will build all your local backend and frontend resources (if you have hosting category added) and provision it in the cloud

Pro tip:
Try "amplify add api" to create a backend API and then "amplify push" to deploy everything

```

# Codecommit (GIT)

- [Create repo](https://docs.aws.amazon.com/cli/latest/reference/codecommit/create-repository.html)

```sh
nano ~/.aws/credentials
# source ~/.bash_profile
# test
aws s3 ls --profile suan-blockchain
export AWS_PROFILE=suan-blockchain

# aws codecommit create-repository --repository-name MyDemoRepo --repository-description "My demonstration repository" --tags Team=Saanvi
aws codecommit create-repository --repository-name kio-lms-n4na-store-rjs-app --repository-description "N4na Store" --tags Team=kio --region us-east-1 

```
## Result
```json
{
    "repositoryMetadata": {
        "accountId": "036134507423",
        "repositoryId": "8781f82b-b8da-4164-a63f-5ce8d854502d",
        "repositoryName": "kio-lms-n4na-store-rjs-app",
        "repositoryDescription": "N4na Store",
        "lastModifiedDate": "2023-09-15T11:23:36.598000-05:00",
        "creationDate": "2023-09-15T11:23:36.598000-05:00",
        "cloneUrlHttp": "https://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-lms-n4na-store-rjs-app",
        "cloneUrlSsh": "ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-lms-n4na-store-rjs-app",
        "Arn": "arn:aws:codecommit:us-east-1:036134507423:kio-lms-n4na-store-rjs-app"
    }
}
```

# git

```sh
ssh-keygen
/Users/robinochoa/.ssh/kio_sl_lms_n4na_store_rjs_app

cat ~/.ssh/kio_sl_lms_n4na_store_rjs_app.pub

```

## Configure AWS IAM user

![AWS Config](_images/aws_iam_ssh_config.png)

```sh
cd ~/.ssh
ls
nano config

# Add

# CodeCommit hosts
Host kio_sl_lms_n4na_store_rjs_app
   HostName git-codecommit.us-east-1.amazonaws.com
   User APKAQQ2OI2OP24MBVC4W
   IdentityFile ~/.ssh/kio_sl_lms_n4na_store_rjs_app

```

https://xiaolishen.medium.com/use-multiple-ssh-keys-for-different-github-accounts-on-the-same-computer-7d7103ca8693

```sh
git remote -v
git remote rm origin
git remote add origin ssh://kio_sl_lms_n4na_store_rjs_app/v1/repos/kio-lms-n4na-store-rjs-app
git push --set-upstream origin master
git push

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

# Draggable control image (Doesn't work on mobile)
- [npm dragable](https://www.npmjs.com/package/react-draggable)
- [react-draggable-and-resizable-pictures](https://stackblitz.com/edit/react-draggable-and-resizable-pictures)
- [Could Work How do I detect the users touch on an element in react native?](https://stackoverflow.com/questions/56911959/how-do-i-detect-the-users-touch-on-an-element-in-react-native)



# Amplify Storage

```sh
amplify add storage

# ? Please select from one of the below mentioned services: Content (Images, audi
# o, video, etc.)
# ? Please provide a friendly name for your resource that will be used to label t
# his category in the project: s35d0d1bb2
# ? Please provide bucket name: kio-lms-n4na-store-rjs-appb2100efba69f4dfaa1abc0e390f62647
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
Please edit the file in your editor: /Users/robinochoa/Documents/react_ws/kio-lms-n4na-store-rjs-app/amplify/backend/api/kiosllmsapi/schema.graphql
```

## Result

```sh
UPDATE_COMPLETE_CLEANUP_IN_PROGRESS amplify-kio-lms-n4na-store-rjs-app-kilmsenv-83533 AWS::CloudFormation::Stack Sun Aug 08 2021 12:05:17 GMT-0500 (Colombia Standard Time) 
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
9. Filtros por Genre [X]
10. UI Landing page [X]
11. Me gusta [X]
12. Compartir [X]
13. Comentar [X]
14. Búsqueda de videos por temática [X]
15. Editar video (filtros, efectos, tiempo, embellecer, velocidad, girar) https://www.youtube.com/watch?v=42xzuqAH5ig [NO]
16. Editar mi perfil personal [X]
17. Quiero construir historia (paso a paso) [X]
18. Store [X]

- Autentacacion 
- CI/CD

22 de Febrero


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

# Payment with Stripe
- https://stripe.com/docs/stripe-js/react
- https://stripe.com/docs/testing
- https://www.cluemediator.com/integrate-stripe-payment-gateway-in-react
- https://www.pluralsight.com/guides/how-to-integrate-stripe-with-react


# Get current location URL

- https://surajsharma.net/blog/current-url-in-react
- https://www.codegrepper.com/code-examples/javascript/uselocation+hook


# SUAN

## El inicio habían dos iniciativas
- Canabis
- Tokenización de activos forestales

## Con Luis hemos (Cardano)
- (6*24) = COP 144M + COP 72M = 216
- Conf Nodo
- Nodo <-> IoT (V1,V2) <-> API <-> 
- Contratos Inteligentes

## Con William hablamos de crear una empresa llamada AGORA para prestar servicios a SUAN
- Es un enrredo tener dos empresas que al final podrían hacer lo mismo
- Había hablado con Jhonny que Robin y Luis se quedan 25%/2, pero AGORA es de Luis y mía

## Cuales son los entregables de cada uno para SUAN?

- Franco:
  - Reuniones inversionistas y grupos de interes
  - Recursos desde Ecopetrol (conocimiento compartido)

- Robin & Luis: 
  - No se puede hacer solo
  - Conocimiento hasta ahora, disminuir el riesgo
  - MVP simulado sobre UI 
  - 100% dedicación si hay recursos para hacerlo
  
- William:
  - Presentaciones
  - Formulación y postulación de regalias
  - Modelos

- Jhony
  - Presentaciones
  - Modelos
  - Presentaciones con los clientes

## Estamos sin gasolina
- Se necesita COP 53M

## Que pasa si hay otras iniciativas
- Polizas


# SCRUM
## Backlog
- Unidad una tonelada de carbono
- Mercado anual 33100 Ton CO2 X año
- Certidicado de propiedad, derechos para cuidar, Corporaciones autónomas, 
- Eventos de liquidez etapas temprana (Angel) Unidades de valor
- Verificadores: Validan, standar internacional aprobado VCS(Verified Carbon Standard) 15 MDL (Mecanismo de desarrollo limpio)
- Otros actores: compra la tonelada
- 2do calificador

# Ex.
- 40 años
- Creditos (1ton carbono)
- La granularidad de 6 digitos de consumos de personas
- 

# Query String
https://ui.dev/react-router-query-strings/


# Redirect
- https://stackoverflow.com/questions/34735580/how-to-do-a-redirect-to-another-route-with-react-router
- https://dev.to/projectescape/programmatic-navigation-in-react-3p1l
- https://reactrouter.com/web/api/Redirect


# 
```sh
aws dynamodb scan --table-name Multimedia-abof5y5kkfgdtkx6wbnsw3bowe-kilmsenv --select "COUNT"
aws dynamodb scan --table-name Multimedia-7dl25qjmgnakjjcpr4vhparv7y-bunni --select "COUNT"
```


# Amplify Personalize

- [Personalized recommendations](https://docs.amplify.aws/lib/analytics/personalize/q/platform/js#working-with-the-api)

