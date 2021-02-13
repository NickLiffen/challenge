const { get } = require('./utils/metadata.js');

(async () => {
  const dataType = 'instances'; //Change this if you would like to query specifics.
  try {
    const data = await get(dataType);
    console.log(data);
    return data;
  } catch (e) {
    console.error(data);
    return error;
  }
})();
