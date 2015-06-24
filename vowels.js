var vowels = function(something){
  var result = something.replace(/[aeiouAEIOU]/g, "");
  console.log(result);
  return result;
};

vowels("Someone help me! I need help! Oh man buddy!")