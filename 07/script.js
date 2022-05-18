// "use strict";

// console.log("start");

// function loginUser(email, password, callback) {
//   setTimeout(() => {
//     console.log("now we have the data");
//     callback({ userEmail: email });
//   }, 3000);
// }

// function getUserVideos(email, callback) {
//   setTimeout(() => {
//     callback(["video1", "video2", "video3"]);
//   }, 2000);
// }

// function videoDetails(video, callback) {
//   setTimeout(() => {
//     callback("title of the video");
//   }, 2000);
// }

// const user = loginUser("dev@gmail.com", 1235, (user) => {
//   console.log(user);
//   getUserVideos(user.userEmail, (videos) => {
//     console.log(videos);
//     videoDetails(videos[0], (title) => {
//       console.log(title);
//     });
//   });
// });

// console.log("finish");

/////////////////////////////////
//PROMISES
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject(new Error("User not logged in"));
  }, 2000);
});

promise
  .then((user) => {
    console.log(user);
  })
  .catch((err) => console.log(err.message));
