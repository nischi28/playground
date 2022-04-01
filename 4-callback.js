//synchronous

// setTimeout(() => {
//   console.log("two sec are up");
// }, 2000);

// const names = ["andrew", "jen", "jess"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     return data;
//   }, 2000);
// };

// const data = geocode("philidelphia");
// console.log(data);

// to make asynchronous callback is used

// setTimeout(() => {
//   console.log("two sec are up");
// }, 2000);

// const names = ["andrew", "jen", "jess"];
// const shortNames = names.filter((name) => {
//   return name.length <= 4;
// });

// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0,
//     };
//     callback(data); //callbck first parameter
//   }, 2000);
// };

// geocode("philidelphia", (data) => {
//   //this is callback
//   console.log(data);
// });

//mess around with callback

const add = (a, b, callback) => {
  setTimeout(() => {
    callback(a + b);
  }, 2000);
};
add(1, 4, (sum) => {
  console.log(sum); //should print:5
});
