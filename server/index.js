const express = require('express');
const cors = require('cors');
const path = require('path'); 
const bodyParser = require('body-parser');
const multer = require('multer');
const { getStorage, ref, uploadBytes, getDownloadURL, listAll } = require('firebase/storage');
const admin = require('firebase-admin');


const userRoutes = require('./routes/studentsroutes');
const { addContacts, getContacts, addCareers, getCareers } = require('./controllers');

const app = express();


const serviceAccount = {
  type: process.env.FIREBASE_TYPE,
  project_id: process.env.FIREBASE_PROJECT_ID,
  private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  private_key: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, '\n'),
  client_email: process.env.FIREBASE_CLIENT_EMAIL,
  client_id: process.env.FIREBASE_CLIENT_ID,
  auth_uri: process.env.FIREBASE_AUTH_URI,
  token_uri: process.env.FIREBASE_TOKEN_URI,
  auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
  client_x509_cert_url: process.env.FIREBASE_CLIENT_X509_CERT_URL
};

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  storageBucket: 'your-firebase-project-id.appspot.com' // Replace with your actual Firebase storage bucket
});

const storage = getStorage();

app.use(cors());
app.use(bodyParser.json());

// Set up multer to store files in memory
const upload = multer({ storage: multer.memoryStorage() });

// Endpoint to handle image uploads for food items
app.post('/students/upload-file', upload.single("file"), (req, res) => {
  const { foodid, resturentid } = req.body;

  if (!foodid || !resturentid || !req.file) {
    return res.status(400).send('Food ID, restaurant ID, and file are required');
  }

  const fileExtension = req.file.originalname.split('.').pop(); // Get file extension
  const newFileName = `${resturentid}${foodid}.${fileExtension}`; // Create new file name with foodid and extension
  const storageRef = ref(storage, `restaurants/${newFileName}`); // Reference to the new file name

  uploadBytes(storageRef, req.file.buffer)
    .then((snapshot) => {
      console.log('File uploaded');
      return getDownloadURL(storageRef);
    })
    .then((url) => {
      console.log('File available at', url);
      res.send({ message: 'File uploaded successfully', url });
    })
    .catch((error) => {
      console.error('Error uploading file:', error);
      res.status(500).send('Error uploading file');
    });
});




// Authentication middleware setup
const auth = admin.auth();
app.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Authenticate user with email and password using Firebase Admin SDK
    const userRecord = await admin.auth().getUserByEmail(email);
        console.log(userRecord)
    // Check if the password matches (dummy check for demo purposes)
    // In a real application, you should use Firebase Authentication's built-in functionality to authenticate users properly.
    if (userRecord.email === email ) {
      // User authenticated successfully
      res.status(200).json({ message: 'User signed in successfully', uid: userRecord.uid });
    } else {
      // Invalid credentials
      res.status(401).json({ error: 'Unauthorized', message: 'Invalid credentials' });
    }
  } catch (error) {
    // Handle errors
    console.error('Error signing in:', error);
    res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
});



// Sign-up endpoint
app.post('/signup', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Create user with email and password
    const userRecord = await auth.createUser({
      email: email,
      password: password
    });

    res.status(201).json({ message: 'User signed up successfully', uid: userRecord.uid });
  } catch (error) {
    console.error('Error creating new user:', error);
    res.status(500).json({ error: 'Failed to create user', message: error.message });
  }
});

// Protected resource endpoint
app.get('/protected-resource', async (req, res) => {
  const idToken = req.headers.authorization;

  try {
    // Verify the ID token
    const decodedToken = await auth.verifyIdToken(idToken);
    const uid = decodedToken.uid;

    res.status(200).json({ message: 'Access granted for user', uid });
  } catch (error) {
    console.error('Error verifying token:', error);
    res.status(401).json({ error: 'Unauthorized', message: error.message });
  }
});

// Routes for managing students
app.post('/Careers', addCareers);
app.get('/Careers', getCareers);

// Routes for managing countries
app.post('/Contacts', addContacts);
app.get('/Contacts', getContacts);



// Start server
const PORT = process.env.PORT || 8082;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
