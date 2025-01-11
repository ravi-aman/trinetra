import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
    const testimonials = [
        {
            quote:
                "The personalized guidance and comprehensive property options made finding my dream home a hassle-free experience. Highly recommended!",
            name: "Ramesh Gupta",
            designation: "Software Engineer, Bengaluru",
            src: "/media/8.jpg",
        },
        {
            quote:
                "The platform’s features for filtering and comparing properties are outstanding. It made my property search so efficient and stress-free.",
            name: "Priya Sharma",
            designation: "Marketing Manager, Mumbai",
            src: "/media/2.jpg",
        },
        {
            quote:
                "I was impressed by the team’s professionalism and the seamless process for booking site visits. It saved me so much time and effort.",
            name: "Ankit Jain",
            designation: "Entrepreneur, Delhi",
            src: "/media/5.jpg",
        },
        {
            quote:
                "Excellent service and in-depth property insights! I could confidently invest in real estate with their expert guidance.",
            name: "Kavita Nair",
            designation: "Finance Consultant, Hyderabad",
            src: "/media/4.jpg",
        },
        {
            quote:
                "The platform offers a wide range of affordable options with transparent pricing. It’s perfect for first-time buyers like me.",
            name: "Rahul Mehta",
            designation: "Student, Pune",
            src: "/media/6.jpg",
        },
    ];
    

    return (
        <div>
            <h1 className="text-3xl md:text-5xl font-bold text-center mt-40">what our clients says</h1>
            <AnimatedTestimonials testimonials={testimonials} />

        </div>
    );
}
