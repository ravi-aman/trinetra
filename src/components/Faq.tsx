'use client'

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"; 

const faqs = [
    {
        question: "What types of properties do you offer?",
        answer: "We offer a wide range of properties including residential, commercial, industrial, and luxury homes. Our portfolio includes apartments, houses, office spaces, retail stores, and plots for investment. We cater to both buyers and renters.",
    },
    {
        question: "How can I schedule a property viewing?",
        answer: "To schedule a property viewing, simply visit our website, select the property you are interested in, and fill out the contact form. Our agents will get in touch with you to confirm the date and time for your visit.",
    },
    {
        question: "Do you offer properties for rent or just for sale?",
        answer: "We offer both rental and sale options for properties. Whether you are looking to buy a new home or lease a commercial space, we provide flexible solutions for both long-term and short-term needs.",
    },
    {
        question: "What is the process for buying a property?",
        answer: "The property buying process includes selecting a property, negotiating the price, making an offer, securing financing if needed, and finalizing the deal. Our team will guide you through every step of the process to ensure a smooth transaction.",
    },
    {
        question: "How can I list my property for sale or rent?",
        answer: "To list your property with us, simply visit our website and fill out the property listing form. You’ll need to provide essential details and images of your property. Once submitted, our team will contact you for further steps.",
    },
    {
        question: "Do you offer property management services?",
        answer: "Yes, we provide property management services for both residential and commercial properties. This includes tenant screening, rent collection, property maintenance, and legal support to ensure your investment is well taken care of.",
    },
    {
        question: "Are there any fees associated with buying or renting properties?",
        answer: "Yes, there may be various fees depending on the type of transaction. For buyers, there may be closing costs, inspection fees, and registration charges. For renters, there may be security deposits and processing fees. Our agents will provide a clear breakdown of any applicable fees.",
    },
    {
        question: "Do you offer financing options for property purchases?",
        answer: "Yes, we work with a network of trusted lenders and financial institutions to provide financing options for property purchases. Whether you're looking for a mortgage or loan, we’ll help you explore the best options based on your requirements.",
    },
];

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
