export const baseURL =
  process.env.ENV === 'prod'
    ? 'https://app.xxxx.com'
    : process.env.ENV === 'stage'
    ? 'https://app.stage.xxx.com'
    : 'https://www.saucedemo.com';  //default

