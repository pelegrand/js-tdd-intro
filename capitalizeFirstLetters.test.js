const capitalizeFirstLetters = require('./capitalizeFirstLetters');

const assert = require('assert').strict;

describe("capitalizeFirstLetters", () => {

  it("Should return Soyons Fou Venez Chez Moi Ce Soir", () => {
     assert.deepStrictEqual(capitalizeFirstLetters("soyons fou venez chez moi ce soir"), "Soyons Fou Venez Chez Moi Ce Soir");
  });

  it("Should return Soyons", () => {
     assert.deepStrictEqual(capitalizeFirstLetters("soyons"), "Soyons");
  });

  it("Should return ", () => {
     assert.deepStrictEqual(capitalizeFirstLetters(""), "");
  });
  
})
