var reverse = function(something){
  var array = something.split(" ");
  for (var i =0; i < array.length; i++){
    if(array[i].length%2 === 0){
      array[i] = kablam(array[i]);
    }
  }
  var result = array.join(" ");
  console.log(result);
  return result;
};

var kablam= function(string) {
    return string.split('').reverse().join('');
};

reverse("write a function that reverses even length words in a sentence");