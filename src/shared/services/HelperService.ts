

export const addLeadingZero = (val: any) => {
  return val < 10 ? `0${val}` : val;
};

export const isObjectExist = object => {
  if (object !== null && object !== undefined){
    return Object.keys(object).length !== 0;
  }
};
export const isArrayExist = array => {
  return array?.length > 0;
};
