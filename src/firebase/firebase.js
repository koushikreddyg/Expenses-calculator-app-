import * as firebase from 'firebase';
const config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
  };
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
firebase.initializeApp(config);
const database=firebase.database();



// database.ref('expenses').on('child_removed', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })
// database.ref('expenses').on('child_changed', (snapshot)=>{
//         console.log(snapshot.key, snapshot.val())
// })
// database.ref('expenses').on('child_added', (snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// })



// database.ref().set('koushik')
// database.ref('expenses').push({
//     description:'water bill',
//     amount:2.50,
//     note:'water bill',
//     createdAt:1000,
// })
 export {firebase, googleAuthProvider, database as default};
// database.ref('expenses').once('value').then((snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// })
// database.ref('expenses').on('value', (snapshot)=>{
//     const expenses=[];
//     snapshot.forEach((childSnapshot)=>{
//         expenses.push({
//             id:childSnapshot.key,
//             ...childSnapshot.val(),
//         })
//     });
//     console.log(expenses)
// })

// database.ref('expenses').push({
//     description:'gas bill',
//     amount:5.50,
//     note:'gas bill',
//     createdAt:2000,
// })
// database.ref('expenses').push({
//     description:'wifi bill',
//     amount:22.50,
//     note:'wifi bill',
//     createdAt:5000,
// })
// const FirebaseNotes={
//     notes:{
//         app:{
//             title:'MY attitude',
//             book:'just'
//         },app1:{
//             title:'MY attitude',
//             book:'just'
//         }
//     }
// }


// database.ref('note').push({
//                 title:'MY attitude',
//                 book:'just'
//             });
// database.ref('note/-L5e9znqYsQN14RJvmxC').update({
//     title:'My world'
// })
//name job company
// database.ref().on('value',(snapshot)=>{
//     const value=snapshot.val();
//     console.log(`${value.name} has a ${value.job.title} at ${value.job.company}`)
// },(e)=>{console.log('error while obtaining name is',e)});

// const onValueChange=database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val())
// },(e)=>{console.log('error is ',e)})
// setTimeout(()=>{
//     database.ref('age').set(27)
// },3500)
// setTimeout(()=>{
//     database.ref().off(onValueChange)
// },7000)
// setTimeout(()=>{
//     database.ref('age').set(30)
// },10500)
// //   database.ref().remove().then(()=>{
// //       console.log('data is cleared!')
// //   }).catch((e)=>{
// //     console.log('error occured when clearing data',e)
// //   })
//   database.ref().set({
//       name:'Koushik Reddy',
//       age: 23,
//       isSingle: true,
//       stresslevel:6,
//       job:{
//         title:'Software-developer',
//         company:'Google'
//       },
//       location:{
//           city:'delaware',
//           country:'United States'
//       }
//   }).then(()=>{
//       console.log('data is saved!')
//   }).catch((e)=>{
//       console.log('this failed',e)
//   }
// )
// //database.ref('isSingle').set(null)

// database.ref().update({
//     stresslevel:9,
//     'job/company':'Amazon',
//     'location/city':'Seattle'
// })
//   //database.ref().set('This is my data');
 
// database.ref('location/city').set({
//     city:'kent'
// })
// database.ref('attributes').set({
//     height:5.10,
//     weight:76
// }).then(()=>{console.log('data is saved!')}).catch((e)=>{'there is error',e})