export const toLocaleStringEn = (value: any) => {
  let formatEn;
  // console.log(value);

  if (value !== undefined) {
    formatEn = value.toLocaleString("en-US");
  } else {
    formatEn = 0;
  }
  return formatEn;
};
