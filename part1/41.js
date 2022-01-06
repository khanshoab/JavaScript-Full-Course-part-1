// object destructuring
const band = {
  bandName: "indian",
  famousSong: "merawatan",
  year: 1968,
  anotherFamousSong: "tulsi",
};

let { bandName, famousSong, ...restProps } = band;
console.log(bandName);
console.log(restProps);
