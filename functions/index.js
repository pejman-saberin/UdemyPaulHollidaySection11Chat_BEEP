const functions = require('firebase-functions');
const admin=require('firebase-admin');

// Copied from latest documentation - https://firebase.google.com/docs/functions/get-started
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

//WRITTEN BELOW IS ADDED FROM THE VIDEO BY PEJMAN.. Video 159
exports.addUserMessages=functions.database.ref('/messages/{messageId}')  //this represents any key inside of messageslist
	.onWrite(event =>{//anytime we write in messages thsi function is going to be called
		const messageKey=event.data.key;
		const messageValue=event.data.val();
		admin.database().ref(`/user-messages/${messageValue.userFromId}/${messageValue.userToId}`).child(messageKey).set(1);

		admin.database().ref(`/user-messages/${messageValue.userToId}/${messageValue.userFromId}`).child(messageKey).set(1);
	})
