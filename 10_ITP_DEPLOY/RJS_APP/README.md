
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
Project information
| Name: kiosllmsrjsappitp
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start
```

# Codecommit

- [Create repo](https://docs.aws.amazon.com/cli/latest/reference/codecommit/create-repository.html)
- 
```sh
nano ~/.aws/credentials
export PATH=~/Library/Python/3.8/bin:$PATH
# source ~/.bash_profile
# Test
aws s3 ls --profile kio-sl-lms-rjs-app-itp
export AWS_PROFILE=kio-sl-lms-rjs-app-itp


aws codecommit create-repository --repository-name kio-sl-lms-rjs-app-itp --repository-description "n4na LMS for Instituto Tecnico del Putumayo (ITP)" --tags Team=kio --region us-east-1 

```

## result
```json
{
    "repositoryMetadata": {
        "accountId": "027517758351",
        "repositoryId": "5321d381-0e0c-406f-b473-92045b0d7d3c",
        "repositoryName": "kio-sl-lms-rjs-app-itp",
        "repositoryDescription": "n4na LMS for Instituto Tecnico del Putumayo (ITP)",
        "lastModifiedDate": "2023-12-06T16:03:00.165000-05:00",
        "creationDate": "2023-12-06T16:03:00.165000-05:00",
        "cloneUrlHttp": "https://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-sl-lms-rjs-app-itp",
        "cloneUrlSsh": "ssh://git-codecommit.us-east-1.amazonaws.com/v1/repos/kio-sl-lms-rjs-app-itp",
        "Arn": "arn:aws:codecommit:us-east-1:027517758351:kio-sl-lms-rjs-app-itp"
    }
}
```


# git

```sh
ssh-keygen

/Users/robinochoa/.ssh/kio_sl_lms_rjs_app_itp_codecommit_rsa

cat ~/.ssh/kio_sl_lms_rjs_app_itp_codecommit_rsa.pub

```


```sh
cd ~/.ssh
ls
nano config

# Add

# CodeCommit hosts
Host kio_sl_lms_rjs_app_itp_codecommit_rsa
   HostName git-codecommit.us-east-1.amazonaws.com
   User AKIAQM2BPVOH4ADKBENZ
   IdentityFile ~/.ssh/kio_sl_lms_rjs_app_itp_codecommit_rsa

```

<!-- https://xiaolishen.medium.com/use-multiple-ssh-keys-for-different-github-accounts-on-the-same-computer-7d7103ca8693 -->

```sh
# git remote -v
# git remote rm origin
# git init
# git clone ssh://Your-SSH-Key-ID@git-codecommit.us-east-2.amazonaws.com/v1/repos/MyDemoRepo my-demo-repo

git remote add origin ssh://kio_sl_lms_rjs_app_itp_codecommit_rsa/v1/repos/kio-sl-lms-rjs-app-itp
git push --set-upstream origin dev
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
- For role add using the url: ex: https://us-east-1.console.aws.amazon.com/iam/home?region=us-east-1#/roles/create?step=review&selectedService=Amplify&selectedUseCase=AmplifyBackendDeploymentSLR&roleName=amplifyconsole-backend-role

selectedService=Amplify
selectedUseCase=AmplifyBackendDeploymentSLR
roleName=amplifyconsole-backend-role

# Amplify auth
-  https://console.cloud.google.com/
1. Create project
2. Create Agrement Screen
3. Create credentials client OAth

4.
```sh
amplify add auth

How do you want users to be able to sign in? Username
 Do you want to configure advanced settings? No, I am done.
 What domain name prefix do you want to use? kiosllmsrjsappitp62adcebf-62adcebf
 Enter your redirect signin URI: https://localhost:3000/
? Do you want to add another redirect signin URI Yes
 Enter your redirect signin URI: https://dev.d319w7d7t4puae.amplifyapp.com/
? Do you want to add another redirect signin URI No
```
5.
```
amplify push
```

6. Add aws-export URI to google URI and redirects



# Amplify api
```sh
amplify add api
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
