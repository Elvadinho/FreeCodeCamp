export const getData = (data, locationType, locationName) => {
  return data.filter((e) => {
    return e[locationType].toLowerCase() === locationName.toLowerCase();
  });
};
