const AwsMock = require('aws-sdk-mock');
const AWS = require('aws-sdk');

AwsMock.setSDKInstance(AWS);

const { get } = require('../utils/metadata.js');

describe('get GitHub token', () => {
  afterEach(() => {
    AwsMock.restore('MetadataService', 'request');
  });

  it('successfully responds', async () => {
    AwsMock.mock('MetadataService', 'request', (path, map, callback) => {
      const awsResponse =
      `ami-0abcdef1234567890
ami-3343`;
      callback(null, awsResponse);
    });

    const response = await get('instances');
    expect(response).toStrictEqual({"0": "ami-0abcdef1234567890", "1": "ami-3343"})
  });

  it('should be type object', async () => {
    AwsMock.mock('MetadataService', 'request', (path, map, callback) => {
      const awsResponse =
      `ami-0abcdef1234567890
ami-3343`;
      callback(null, awsResponse);
    });

    const response = await get('instances');
    expect(typeof response).toStrictEqual('object')
  });

  it('should handle error', async () => {
    AwsMock.mock('MetadataService', 'request', (path, map, callback) => {
      const errorResponse = new Error('Error Calling MetadataService');
      callback(errorResponse, null);
    });
    const error = await get('instances');
    expect(error.message).toStrictEqual('Error Calling MetadataService')
});

});
