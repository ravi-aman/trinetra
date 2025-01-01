'use client'

// Faq.tsx

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; // Ensure the path is correct

// Updated FAQ Data Array
const faqs = [
    {
        question: "What types of courses does the platform offer?",
        answer: "We offer a variety of courses ranging from beginner to advanced levels in multiple fields like web development, data science, machine learning, cloud computing, and more. Each course is curated by industry professionals to ensure high-quality content.",
    },
    {
        question: "How can I enroll in a course?",
        answer: "To enroll in a course, simply visit the course page on our website, choose the course you are interested in, and follow the enrollment instructions. You can register online and start learning immediately after completing the registration.",
    },
    {
        question: "Are the courses self-paced or live?",
        answer: "Our platform offers both self-paced and live courses. Self-paced courses allow you to learn at your own speed, while live courses are conducted by instructors in real-time, providing an interactive learning experience.",
    },
    {
        question: "Do I receive a certificate after completing a course?",
        answer: "Yes, upon successfully completing any course, you will receive a certificate of completion which can be added to your professional profile or resume to showcase your skills.",
    },
    {
        question: "How can I attend a webinar?",
        answer: "To attend a webinar, you need to register via the event page on our website. After registering, you will receive a confirmation email with details on how to join the live webinar session.",
    },
    {
        question: "Are webinars free or paid?",
        answer: "Most of our webinars are free, but some advanced or special topic webinars may have a nominal fee. The details will be mentioned on the webinar registration page.",
    },
    {
        question: "Can I watch a recorded webinar if I miss the live session?",
        answer: "Yes, all our webinars are recorded and made available for viewing later. Registered participants will be able to access the recording through their dashboard or the webinar page.",
    },
    {
        question: "Is there any fee to join the platform?",
        answer: "Joining the platform is free of cost. However, certain courses, webinars, and events may have fees associated with them. The pricing details will be mentioned on the respective pages.",
    },

    
];


// FAQ Component
export function FAQ() {
    return (
        <div className="faq-section">
            <h1 className="text:3xl md:text-5xl font-bold my-8">Frequently Asked Questions</h1>
            <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`item-${index + 1}`}>
                        <AccordionTrigger className="">{faq.question}</AccordionTrigger>
                        <AccordionContent>{faq.answer}</AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default FAQ;
