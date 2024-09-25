import {
    mail,
    phone,
    map
} from "../../public/images";

import {
    adclogo,
    amana,
    asko,
    bluestar,
    bosch,
    dacor,
    dcs,
    dexlogo,
    electrolux,
    fisherpaykel,
    frigidaire,
    gaggenau,
    ge,
    hu,
    jennair,
    kenmore,
    kitchenaid,
    lg,
    liebherr,
    maytag,
    miele,
    samsung,
    sqlogo,
    subzero,
    thermador,
    uni,
    viking,
    wasc,
    whirlpool,
    wolf
} from "../../public/logo";

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
        content: "rgentappliance@gmail.com",
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
]

const brands = [
    {
        id: 1,
        name: 'Amana',
        image: amana,
    },
    {
        id: 2,
        name: 'Asko',
        image: asko,
    },
    {
        id: 3,
        name: 'Bluestar',
        image: bluestar,
    },
    {
        id:4,
        name: 'Bosch',
        image: bosch,
    },
    {
        id: 5,
        name: 'Dacor',
        image: dacor,
    },
    {
        id: 6,
        name: 'DCS',
        image: dcs,
    },
    {
        id: 7,
        name: 'Electrolux',
        image: electrolux,
    },
    {
        id: 8,
        name: 'Fisher & Paykel',
        image: fisherpaykel,
    },
    {
        id: 9,
        name: 'Frigidaire',
        image: frigidaire,
    },
    {
        id: 10,
        name: 'Gaggenau',
        image: gaggenau,
    },
    {
        id: 11,
        name: 'GE',
        image: ge,
    },
    {
        id: 12,
        name: 'Jennar',
        image: jennair,
    },
    {
        id: 13,
        name: 'Kenmore',
        image: kenmore,
    },
    {
        id: 14,
        name: 'KitchenAid',
        image: kitchenaid,
    },
    {
        id: 15,
        name: 'LG',
        image: lg,
    },
    {
        id: 16,
        name: 'Liebherr',
        image: liebherr,
    },
    {
        id: 17,
        name: 'Maytag',
        image: maytag,
    },
    {
        id: 18,
        name: 'Miele',
        image: miele,
    },
    {
        id: 19,
        name: 'Samsung',
        image: samsung,
    },
    {
        id: 20,
        name: 'Subzero',
        image: subzero,
    },
    {
        id: 21,
        name: 'Thermador',
        image: thermador,
    },
    {
        id: 22,
        name: 'Viking',
        image: viking,
    },
    {
        id: 23,
        name: 'Whirlpool',
        image: whirlpool,
    },
    {
        id: 24, 
        name: 'Wolf',
        image: wolf,
    },
    {
        id: 25,
        name: 'Dexter Laundry',
        image: dexlogo,
    },
    {
        id: 26,
        name: 'UniMac',
        image: uni,
    },
    {
        id: 27,
        name: 'Wascomat',
        image: wasc,
    },
    {
        id: 28,
        name: 'ADC',
        image: adclogo,
    },
    {
        id: 29,
        name: 'Huebsch',
        image: hu,
    },
    {
        id: 30,
        name: 'Speed Queen',
        image: sqlogo,
    },
]

export { nav, contacts, services, brands }