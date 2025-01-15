import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

// Initialize Firebase app and Firestore
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
    preferTime: string;
};

export async function saveFormDataToFirestore(data: FormData) {
    try {
        // Reference to Firestore collection
        const docRef = doc(firestore, "formSubmissions", data.email); // Using email as a unique identifier
        await setDoc(docRef, data); // Save the data to Firestore
        console.log("Form data saved successfully:", data);
    } catch (error) {
        console.error("Error saving form data to Firestore:", error);
        throw new Error("Failed to save form data");
    }
}
