'use strict';

const db = require('./db');
const { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc,query,where } = require('firebase/firestore');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const Careers = require('./models/careers');
const Contacts = require('./models/contacts');
const Subscribers  = require('./models/subscribers');
const Query = require('./models/querys')



const addCareers = async (req, res, next) => {
    try {
        const data = req.body;
        // You might want to include the image URL in the student data here
        // Example: data.imageUrl = req.imageUrl;
        const docRef = await addDoc(collection(db, 'careers'), data);
        res.send('Student added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getCareers = async (req, res, next) => {
    try {
        const careersCollection = collection(db, 'careers');
        const careerSnapshot = await getDocs(careersCollection);
        const careerArray = [];
        
        if (careerSnapshot.empty) {
            res.status(404).send('No food items found');
        } else {
            careerSnapshot.forEach(doc => {
                const careers = doc.data(); // Correctly access document data
                const career = new Careers(
                    careers.name, 
                    careers.email, 
                    careers.messages,
                    careers.resume,
                  
                );
                careerArray.push(career);
            });
            res.status(200).send(careerArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const addContacts = async (req, res, next) => {
    try {
        const data = req.body;
        // You might want to include the image URL in the student data here
        // Example: data.imageUrl = req.imageUrl;
        const docRef = await addDoc(collection(db, 'contacts'), data);
        res.send('Student added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getContacts = async (req, res, next) => {
    try {
        const contactsCollection = collection(db, 'contacts');
        const contactSnapshot = await getDocs(contactsCollection);
        const contactArray = [];
        
        if (contactSnapshot.empty) {
            res.status(404).send('No food items found');
        } else {
            foodSnapshot.forEach(doc => {
                const contact = doc.data(); // Correctly access document data
                const contacts = new Contacts(
                    contact.name, 
                    contact.email, 
                    contact.messages,
                   
                );
                contactArray.push(contact);
            });
            res.status(200).send(contactArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const addSubscribers = async (req, res, next) => {
    try {
        const data = req.body;
        // You might want to include the image URL in the student data here
        
        const docRef = await addDoc(collection(db, 'subscribers'), data);
        res.send('Subscribers added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getSubscribers = async (req, res, next) => {
    try {
        const subscribersCollection = collection(db, 'subscribers');
        const subscribersSnapshot = await getDocs(subscribersCollection);
        const subscribersArray = [];
        
        if (subscribersSnapshot.empty) {
            res.status(404).send('No food items found');
        } else {
            subscribersSnapshot.forEach(doc => {
                const email = doc.data(); // Correctly access document data
                const emails = new Contacts(
                    email.email, 
                   
                   
                );
                contactArray.push(email);
            });
            res.status(200).send(subscribersArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};


const addquery = async (req, res, next) => {
    try {
        const data = req.body;
        // You might want to include the image URL in the student data here
        // Example: data.imageUrl = req.imageUrl;
        const docRef = await addDoc(collection(db, 'querys'), data);
        res.send('message added successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getquery = async (req, res, next) => {
    try {
        const queryCollection = collection(db, 'query');
        const querySnapshot = await getDocs(queryCollection);
        const queryArray = [];
        
        if (contactSnapshot.empty) {
            res.status(404).send('No food items found');
        } else {
            foodSnapshot.forEach(doc => {
                const query = doc.data(); // Correctly access document data
                const querys = new Contacts(
                    query.name, 
                    query.phonenumber, 
                    query.messages,
                   
                );
                contactArray.push(query);
            });
            res.status(200).send(queryArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
};





module.exports = {
   
    addCareers,
    getCareers,
    addContacts,
    getContacts,
    addSubscribers,
    getSubscribers,
    addquery,
    getquery

  
};
