import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBa3RPfV521I4a8NZu5ldsd9qaWEN8yKew",
    authDomain: "expensify-8a4fc.firebaseapp.com",
    databaseURL: "https://expensify-8a4fc-default-rtdb.firebaseio.com",
    projectId: "expensify-8a4fc",
    storageBucket: "expensify-8a4fc.appspot.com",
    messagingSenderId: "70534622317",
    appId: "1:70534622317:web:75b66a476c9e1334336364"
  };

  firebase.initializeApp(config);
  //cloud databse
  // const database = firebase.firestore();
  const database = firebase.database();
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  
  export { firebase, googleAuthProvider, database as default };
  //child_removed
  // database.ref('expenses').on('child_removed', (snapshot) => {
  //     console.log(snapshot.key, snapshot.val());
  // })

  // // child_changed
  // database.ref('expenses').on('child_changed', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val())
  // });

  // //child_added

  // database.ref('expenses').on('child_added', (snapshot) => {
  //   console.log(snapshot.key, snapshot.val());
  // });
//   database.ref('expenses')
//     .on('value', (snapshot) => {
//         const expenses = [];

//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         });
//         console.log(expenses);
//     });
    
  //   database.ref('expenses')
//   .once('value')
//   .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });

//     console.log(expenses);
// });
  // database.ref('expenses').push({
  //   description: 'Water Bill',
  //   note: 'Bill for apr',
  //   amount: 300,
  //   createdAt: 10500
  // });
  
//   database.ref('notes').push({
//       title: 'Course Topics',
//       body: 'React Native, Angular, Python'
//   });
//   database.ref('notes').push({
//     title: 'To Do',
//     body: 'Go for a run'
// });
//   database.ref().set({
//         name: 'Steven Quach',
//         age: 26,
//         stressLevel: 6,
//         job: {
//             title: 'Software Developer',
//             company: 'Google'
//         },
//         isSingle: false,
//         location: {
//             city: 'Melbourne',
//             country: 'Australia'
//         }
//       }).then(() => {
//           console.log('Data is saved');
//       }).catch((e) => {
//           console.log('This failed.', e);
//       });
//   const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a software  developer at ${val.job.company}` );
//   }, (e) => {
//       console.log('Error with data fetching', e);
//   });

  


//   const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e.message());
// });



  

//   setTimeout(() => {
//     database.ref('age').set(29);
//   }, 3500);

//   setTimeout(() => {
//     database.ref().off(onValueChange);
//   }, 7000);

//   setTimeout(() => {
//     database.ref('age').set(30);
//   }, 10500);

//   database.ref('location/city')
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch(() => {
//         console.log('Error fetching data', e);
//     });
//   database.ref().set({
//     name: 'Steven Quach',
//     age: 26,
//     stressLevel: 6,
//     job: {
//         title: 'Software Developer',
//         company: 'Google'
//     },
//     isSingle: false,
//     location: {
//         city: 'Melbourne',
//         country: 'Australia'
//     }
//   }).then(() => {
//       console.log('Data is saved');
//   }).catch((e) => {
//       console.log('This failed.', e);
//   });

//   database.ref().update({
//      stressLevel: 9,
//      'job/company': 'Amazone',
//      'location/city': 'Seattle'
//   });
//   database.ref('isSingle').remove()
//   .then(() => {
//       console.log('remove succeeded')
//   }).catch((e) => {
//       console.log('remove failed', e.message);
//   });

// database.ref('attributes').set({
//     height: 164,
//     weight: 69.1
// }).then(() => {
//     console.log('Second set call worked');
// }).catch((e) => {
//     console.log('Things didnt work for second error', e);
// });
