export * from './constants';

export const getFormBody = (params) => {
  let formBody = [];

  for (let property in params) {
    //index eg user name
    let encodedKey = encodeURIComponent(property); // 'user name' => 'user%20name'
    //value eg aakash 123
    let encodedValue = encodeURIComponent(params[property]); // aakash 123 => aakash%2020123

    formBody.push(encodedKey + '=' + encodedValue);
  }

  return formBody.join('&'); // 'username=aakash&password=123213'
};
