import React from 'react';

export default function Search() {
  function SearchingChallenge(str) {
    const challengeToken = 'f1bukod59';
    // get first character of string K
    const k = str[0];
    const s = str.substring(1);

    console.log('K: ', k);
    console.log('S: ', s);

    let MAX_CHARS = 26;

    function isValid(count, k) {
      let val = 0;
      for (let i = 0; i < MAX_CHARS; i++) {
        if (count[i] > 0) {
          val++;
        }
      }

      return k >= val;
    }

    kUniques(s, k);

    function kUniques(s, k) {
      let u = 0;
      let n = s.length;
      let count = new Array(MAX_CHARS);

      for (let i = 0; i < MAX_CHARS; i++) {
        count[i] = 0;
      }

      for (let i = 0; i < n; i++) {
        if (count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)] == 0) {
          u++;
        }
        count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
      }

      if (u < k) {
        document.write('Not enough unique characters');
        return;
      }

      let curr_start = 0,
        curr_end = 0;

      let max_window_size = 1;
      let max_window_start = 0;

      for (let i = 0; i < MAX_CHARS; i++) {
        count[i] = 0;
      }

      count[s[0].charCodeAt(0) - 'a'.charCodeAt(0)]++;

      for (let i = 1; i < n; i++) {
        count[s[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
        curr_end++;

        while (!isValid(count, k)) {
          count[s[curr_start].charCodeAt(0) - 'a'.charCodeAt(0)]--;
          curr_start++;
        }

        if (curr_end - curr_start + 1 > max_window_size) {
          max_window_size = curr_end - curr_start + 1;
          max_window_start = curr_start;
        }
      }

      const stringSubstring = s.substring(
        max_window_start,
        max_window_start + max_window_size + 1
      );

      const substringToken = stringSubstring.concat(challengeToken);

      var str = substringToken.split('');
      var nth = 3;
      var replaceWith = 'X';
      for (var i = nth - 1; i < str.length - 1; i += nth) {
        str[i] = replaceWith;
      }
      console.log(str.join(''));
    }
  }

  SearchingChallenge('2aabbcbbbadef');

  //   1. For input "2aabbacbaa" the output was incorrect. The correct output is atarb7bwa2nec04

  // 2. For input "2aaavavvrrtytt" the output was incorrect. The correct output is atara7vwa2vnvec04

  // 3. For input "1aabb" the output was incorrect. The correct output is atar7w2nec04

  // 4. For input "2aabbaaccbbaaccaabb" the output was incorrect. The correct output is atarb7bwa2anec04

  // 5. For input "4aaffaacccerrfffaacca" the output was incorrect. The correct output is atarf7fwa2anceccc0e4

  // 6. For input "3aaffvvoooopddaa" the output was incorrect. The correct output is ftfrv7vwo2onoeoc04

  // 7. For input "3aabbaacceeeeeaa" the output was incorrect. The correct output is atarc7cwe2eneeece0a4a

  // 8. For input "3kkooflllllffvkl" the output was incorrect. The correct output is otorf7lwl2lnlelcf0f4

  return <div>Search</div>;
}
