import { db } from "@/lib/firebase";
import { collection, addDoc } from "firebase/firestore";

export const saveFormDataToFirestore = async (formData: {
    name: string;
    email: string;
    phone: string;
    message: string;
    preferTime: string;
}) => {
    const formCollection = collection(db, "userQueries");
    await addDoc(formCollection, formData);
};
