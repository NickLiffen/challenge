// TODO: Move to the preffered https://www.npmjs.com/package/@aws-sdk/client-ec2 (v3) vs current (v2).

const AWS = require('aws-sdk');

AWS.config.region = 'eu-west-2';
AWS.config.credentials = new AWS.EC2MetadataCredentials({
  httpOptions: { timeout: 5000 },
  maxRetries: 10,
  retryDelayOptions: { base: 200 },
});

const splitLines = (str) => str.split(/\r?\n/);

// TODO: Move to Async Await and move away from "Callback Hell".

module.exports = {
  get: (dataType) => {
    const meta = new AWS.MetadataService();
    let res;
    meta.request(`/latest/meta-data/${dataType}`, '', (err, data) => {
      if (err) { res = err; return; }
      const arr = splitLines(data); // Convert to array as everything is easier with arrays
      res = { ...arr }; // as the question asks, turn into an object
    });
    return res;
  },
};
