import React from 'react';

export default function ES6() {
  // remove duplicates from array
  function removeDuplicatesArray(array) {
    return [...new Set(array)];
  }
  const array = ['A', 'A', 'B', 'C'];
  console.log(removeDuplicatesArray(array));

  // remove duplicates from object
  function removeDuplicatesObject(arrayObj) {
    const map = {};

    for (const char of array) {
      if (map[char]) {
        map[char]++;
      } else {
        map[char] = 1;
      }
    }
    return Object.keys(map);
  }
  console.log(removeDuplicatesArray(array));

  return <div>ES6</div>;
}
