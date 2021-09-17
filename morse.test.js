const Morse = require("./morse");

describe("Encode", () => {

  test("Alphabet Lowercase", () => {
    let morse = new Morse("abcdefghijklmnopqrstuvwxyz", false);
  
    expect(morse.encoded)
    .toBe("._ _... _._. _.. . .._. __. .... .. .___ _._ ._.. __ _. ___ .__. __._ ._. ... _ .._ ..._ .__ _.._ _.__ __..");
  });

  test("Alphabet Uppercase", () => {
    let morse = new Morse("ABCDEFGHIJKLMNOPQRSTUVWXYZ", false);
  
    expect(morse.encoded)
    .toBe("._ _... _._. _.. . .._. __. .... .. .___ _._ ._.. __ _. ___ .__. __._ ._. ... _ .._ ..._ .__ _.._ _.__ __..");
  });

  test("Words", () => {
    let morse = new Morse("participate confine accessible dilemma glance border business result whisper financial", false);
  
    expect(morse.encoded)
    .toBe(".__. ._ ._. _ .. _._. .. .__. ._ _ . / _._. ___ _. .._. .. _. . / ._ _._. _._. . ... ... .. _... ._.. . / _.. .. ._.. . __ __ ._ / __. ._.. ._ _. _._. . / _... ___ ._. _.. . ._. / _... .._ ... .. _. . ... ... / ._. . ... .._ ._.. _ / .__ .... .. ... .__. . ._. / .._. .. _. ._ _. _._. .. ._ ._..");
  });
  
  test("Number", () => {
    let morse = new Morse("1234567890", false);
  
    expect(morse.encoded)
    .toBe(".____ ..___ ...__ ...._ ..... _.... __... ___.. ____. _____");
  });
  
});
