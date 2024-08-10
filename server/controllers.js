'use strict';

const db = require('./db');
const { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc,query,where } = require('firebase/firestore');
const { getStorage, ref, uploadBytes, getDownloadURL } = require('firebase/storage');
const Careers = require('./models/careers');
const Contacts = require('./models/contacts');



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



module.exports = {
   
    addCareers,
    getCareers,
    addContacts,
    getContacts
  
};
