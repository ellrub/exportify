const admin = require('firebase-admin');
const serviceAccount = require('../../../../ruben/Development/Examify/ExamifyFirebaseAdmin.json');
const data = require('./exams/info132/info132h21.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

data.forEach((item, index) => {
  db.collection('info132h21').doc(`question${index}`).set(item) // Set collection name here, and what to call each entry
    .then(() => console.log(`Document question${index} successfully written!`))
    .catch((error) => console.error("Error writing document: ", error));
});