# react js react-dom.development.js:17662 Uncaught TypeError: init is not a function
- [Solution](https://stackoverflow.com/questions/64460098/react-dom-17-0-0-update-error-typeerror-init-is-not-a-function)

```sh
npm install --save react@latest
```



# aws single page application avoid access denied error

```xml
<Error>
<Code>AccessDenied</Code>
<Message>Access Denied</Message>
<RequestId>ZYFSGGGXG0H3F6EY</RequestId>
<HostId>SuxwaSfJznNLmEAlnKgoy0XD+lNYnQ4wTTsxrzOdmx1ZMhr9hbGeXro1r2fHf7TlDrvbESObCQE=</HostId>
</Error>
```
- https://victorleungtw.medium.com/fix-aws-amplify-angular-app-error-on-access-denied-error-73c9476f9552


- Backup Amplify Rewrites and redirects
```json
[
    {
        "source": "https://wooow.digital",
        "target": "https://www.wooow.digital",
        "status": "302",
        "condition": null
    },
    {
        "condition": "",
        "source": "",
        "status": "200",
        "target": ""
    }
]
```

-- Working
```json
[
    {
        "source": "https://wooow.digital",
        "target": "https://www.wooow.digital",
        "status": "302",
        "condition": null
    },
    {
        "source": "</^[^.]+$|\\.(?!(css|gif|ico|jpg|js|png|txt|svg|woff|ttf)$)([^.]+$)/>",
        "target": "/",
        "status": "200",
        "condition": null
    }
]
```