<<<<<<< HEAD
var vowels = function(something){
  var result = something.replace(/[aeiouAEIOU]/g, "");
  console.log(result);
  return result;
};

vowels("Someone help me! I need help! Oh man buddy!")
=======
function removeVowels(str) {
  return str.replace(/[aeiou]/gi, "");
}

console.log(removeVowels("HelloOOOO") === "Hll");
>>>>>>> 9d901c388037b7607b06a683cb0b5976bdaf9685
