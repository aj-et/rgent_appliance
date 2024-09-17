import {
    mail,
    phone,
    map
} from "../../public/images";

const nav = [
    {
        name: "About Us",
        id: "about-us"
    },
    {
        name: "Services",
        id: "services"
    },
    {
        name: "Make Appointment",
        id: "make-appointment"
    },
    {
        name: "Reviews",
        id: "reviews"
    },
    {
        name: "FAQ",
        id: "faq"
    },
    {
        name: "Contact Us",
        id: "contact-us"
    },
]

const contacts = [
    {
        name: "Address",
        content: "415 N Camden Dr, 111 #547, Beverly Hills, CA 90210",
        image: map
    },
    {
        name: "Phone",
        content: "(818) 915 - 5577",
        image: phone
    },
    {
        name: "Email",
        content: "email@example.com",
        image: mail
    },
]

const services = [
    {
        name: "Refrigerator Repair",
        icon: "refrigerator",
    },
    {
        name:  "Dishwasher Repair",
        icon: "dishwasher",
    },
    {
        name: "Washer Repair",
        icon: "washer",
    },
    {
        name: "Dryer Repair",
        icon: "dryer",
    },
    {
        name: "Oven Repair",
        icon: "oven",
    },
    {
        name: "Microwave Repair",
        icon: "microwave",
    },
]

export { nav, contacts, services }