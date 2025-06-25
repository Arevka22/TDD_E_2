export const adminEmail =
  process.env.ENV === 'prod'
    ? 'xxxxxxx'
    : process.env.ENV === 'stage'
    ? 'xxxxxxx'
    : 'standard_user';  //default

 export const adminPassword =
    process.env.ENV === 'prod'
      ? 'xxxxxxx'
      : process.env.ENV === 'stage'
      ? 'xxxxxxx'
      : 'secret_sauce';  //default

 