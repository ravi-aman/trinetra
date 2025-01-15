import { NextResponse } from "next/server";
import { saveFormDataToFirestore } from "@/utils/firebaseHelper";
import { sendEmail } from "@/lib/email";

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        // Validate input
        if (!name || !email || !phone) {
            return NextResponse.json({ error: "Invalid form data" }, { status: 400 });
        }

        // Save to Firestore
        await saveFormDataToFirestore({ name, email, phone, message });

        // Send emails
        const userSubject = "Form Submitted Successfully";
        const userBody = `Hi ${name},\n\nThank you for registering with us. We will get in touch with you soon!`;
        await sendEmail(email, userSubject, userBody);

        const adminSubject = "New User Query Generated";
        const adminBody = `A new query has been submitted:\n\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`;
        await sendEmail("support@trinetraa.tech", adminSubject, adminBody);

        return NextResponse.json({ message: "Form submitted successfully" });
    } catch (error) {
        console.error("Error handling form submission:", error);
        return NextResponse.json({ error: "Failed to handle form submission" }, { status: 500 });
    }
}
