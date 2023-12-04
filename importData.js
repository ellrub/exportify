const admin = require('firebase-admin');
const serviceAccount = require('../../../../ruben/Development/Examify/ExamifyFirebaseAdmin.json');
const fs = require('fs');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

let data = [];

db.collection('info132h20').get()
  .then((snapshot) => {
    snapshot.forEach((doc) => {
      data.push(doc.data());
    });

    fs.writeFile('output.json', JSON.stringify(data, null, 2), (err) => {
      if (err) throw err;
      console.log('Data written to file');
    });
  })
  .catch((error) => console.error("Error getting documents: ", error));