// Write a function to sum the numbers in a file.
//
// This function should take the name of a plain text file with one number per
// line, as in data/integers.txt.
// It should return a Promise resolved with the sum of the numbers.
//
// Blank lines should be ignored.
// However, if there is a line with non-numeric content (e.g. "oops"),
// The Promise returned should be rejected.
//

'use strict';

const fs = require('fs');

const sumLines = function () {

const readFile = (filename, success, fail) => {
  fs.readFile(filename, (error, data) => {
    if (data.type !== integer) {
      fail(console.log('oops'));
    } else {
      success(data);
    }
  });
};

new Promise((resolve, reject) => {
    readFile(resolve, reject);
  })
  .then((data) => {
    sum = ;
    return sum;
  })
  .then((data) =>
    new Promise((resolve, reject) => {
      fs.writeFile(error => {
        if (error) {
          reject(error);
        } else {
          resolve(null);
        }
      });
    }))
  .catch(console.error)
  .then(process.exit);

};

module.exports = {
  sumLines,
};
