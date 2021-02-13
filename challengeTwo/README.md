# Challenge Two

Please make sure if you deploy the cloud formation you install [NodeJS](https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-up-node-on-ec2-instance.html). There are also parts of the cloud formation that you would need to change such as:

-   VpcId
-   AMI ID
-   KeyName

Once you change them, you should be able to deploy via cloud formation :)

SSH into the machine, then the next step would be installing dependencies:

```
npm install
```

Then:

```
npm run start
```

If you would like to change the "dataType" head to line **4** and modify that to what you need it to be :)

You can run tests by runnng:

```
npm test
```

Happy coding!
