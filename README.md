# kio-sl-lms-inception

# Starting React App
```sh
source ~/.bash_profile
npx create-react-app kio-sl-lms
```

# Tiktok
https://developers.tiktok.com/doc/Embed
https://www.npmjs.com/package/react-tiktok-embed

## Descargar
https://snaptik.app/

# Templates
https://github.com/creativetimofficial/now-ui-react-native
https://flatlogic.com/templates/react-native-starter-free

# Bootstrap
https://create-react-app.dev/docs/adding-bootstrap/
https://react-bootstrap.github.io/getting-started/introduction/

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


# git

```sh
ssh-keygen
/Users/robin8a/.ssh/kio_sl_lms_codecommit_rsa

cat ~/.ssh/kio_sl_lms_codecommit_rsa.pub

```


```sh
cd ~/.ssh
ls
nano config 

# Add

# CodeCommit hosts
Host kio_sl_lms_codecommit_rsa
   HostName git-codecommit.us-east-1.amazonaws.com
   User APKAVMIQWZCLUU5BN2ZN
   IdentityFile ~/.ssh/kio_sl_lms_codecommit_rsa

```

```sh

# git remote add origin https://github.com/robin8a/kio-sl-lms.git
# git branch -M master
# `git push -u origin master`


# git clone ssh://jupiter/v1/repos/su-jup-ss-disinfection-register
# git remote add origin ssh://jupiter/v1/repos/

# git clone ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-sl-lms
# git remote set-url origin ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-sl-lms kio-sl-lms

git remote add origin ssh://kio_sl_lms_codecommit_rsa/v1/repos/kio-sl-lms

```

# Amplify
- https://docs.amplify.aws/cli/start/install#option-2-follow-the-instructions
- [Getting started Auth with style](https://github.com/aws-amplify/amplify-js/tree/e56aba642acc7eb3482f0e69454a530409d1b3ac)

```sh
amplify init
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project kio-sl-lms
? Enter a name for the environment kiosllms
? Choose your default editor: Visual Studio Code
? Choose the type of app that you're building javascript
Please tell us about your project
? What javascript framework are you using react
? Source Directory Path:  src
? Distribution Directory Path: build
? Build Command:  npm run-script build
? Start Command: npm run-script start
amplify publish

```

```sh
amplify add hosting

kio-sl-lms robin8a$ amplify add hosting
? Select the plugin module to execute Amazon CloudFront and S3
? Select the environment setup: DEV (S3 only with HTTP)
? hosting bucket name kio-sl-lms-20200907192030-hostingbucket
? index doc for the website index.html
? error doc for the website index.html
```

```sh
amplify publish

http://kio-sl-lms-20200907192030-hostingbucket-kiosllmsev.s3-website-us-east-1.amazonaws.com


```