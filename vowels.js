function removeVowels(str) {
  return str.replace(/[aeiou]/g, "");
}

console.log(removeVowels("Hello") === "Hll");
