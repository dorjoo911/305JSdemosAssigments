"use strict";
/* eslint-disable */

const aString = "This could";
const reordered = "be This";

const words = aString.split(" ");
const sortedWords = words.sort(wordComparator);

console.log("expect", reordered, " :: ", sortedWords.join(" "));

function wordComparator(word1, word2) {
  return word1.length - word2.length;
}
