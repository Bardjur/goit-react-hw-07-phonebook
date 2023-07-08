export const isIncludeContact = (str, arr) => {
  str = str.toLowerCase();
  const findRow = arr.find(item => item.name.toLowerCase() === str);

  return findRow ? true : false;
};
