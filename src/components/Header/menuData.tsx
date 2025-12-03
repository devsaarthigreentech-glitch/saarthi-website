import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  // {
  //   id: 1,
  //   title: "About Us",
  //   path: "/about",
  //   newTab: false,
  // },
  // {
  //   id: 2,
  //   title: "Products",
  //   path: "/products",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 21,
  //       title: "GreenDrive",
  //       path: "/products/greendrive",
  //       newTab: false,
  //     },
  //     {
  //       id: 22,
  //       title: "GreenGen",
  //       path: "/products/greengen",
  //       newTab: false,
  //     },
  //     {
  //       id: 23,
  //       title: "GreenMarine",
  //       path: "/products/greenmarine",
  //       newTab: false,
  //     },
  //   ],
  // },
  {
    id: 1,
    title: "Saarthi Ecosystem",
    path: "/ecosystem",
    newTab: false,
    submenu: [
      {
        id: 2,
        title: "GreenMentor",
        path: "/ecosystem/greenmentor",
        newTab: false,
      },
      {
        id: 3,
        title: "GreenLabs",
        path: "/ecosystem/greenlabs",
        newTab: false,
      },
      {
        id: 4,
        title: "GreenVision",
        path: "/ecosystem/greenvision",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Solutions",
    path: "/solutions",
    newTab: false,
    submenu: [
      {
        id: 6,
        title: "Fleets & Logistics",
        path: "/solutions/fleetlogistics",
        newTab: false,
      },
      {
        id: 7,
        title: "DG Sets / Industrial Power",
        path: "/solutions/dg",
        newTab: false,
      },
      {
        id: 8,
        title: "Ports & Marine",
        path: "/solutions/ports",
        newTab: false,
      },
      // {
      //   id: 9,
      //   title: "Mining & Heavy Equipment",
      //   path: "/solutions/mining",
      //   newTab: false,
      // },
      {
        id: 10,
        title: "DaaS - Zero CapEx Model",
        path: "/solutions/daas",
        newTab: false,
      },
    ],
  },
  {
    id: 11,
    title: "Evidence Hub",
    path: "/evidence",
    newTab: false,
    submenu: [
      // {
      //   id: 12,
      //   title: "Emission Test Reports",
      //   path: "/evidence/emissiontest",
      //   newTab: false,
      // },
      // {
      //   id: 13,
      //   title: "Fuel Savings Data",
      //   path: "/evidence/fuelsavings",
      //   newTab: false,
      // },
      // {
      //   id: 14,
      //   title: "Case Studies",
      //   path: "/evidence/casestudies",
      //   newTab: false,
      // },
      // {
      //   id: 15,
      //   title: "GreenVision Insights",
      //   path: "/evidence/gvinsights",
      //   newTab: false,
      // },
      {
        id: 16,
        title: "Certifications & Patents",
        path: "/evidence/certificates",
        newTab: false,
      },
      // {
      //   id: 17,
      //   title: "Downloads Library",
      //   path: "/evidence/downloads",
      //   newTab: false,
      // },
    ],
  },
  // {
  //   id: 3,
  //   title: "GreenVision",
  //   path: "/greenvision",
  //   newTab: false,
  // },
  // {
  //   id: 4,
  //   title: "Green Labs",
  //   path: "/greenlabs",
  //   newTab: false,
  // },
  // {
  //   id: 5,
  //   title: "Our Solutions",
  //   path: "/solutions",
  //   newTab: false,
  // },
  {
    id: 18,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 19,
        title: "Calculators",
        path: "/resources/calculators",
        newTab: false,
      },
      {
        id: 20,
        title: "Knowledge Base",
        path: "/resources/knowledgebase",
        newTab: false,
      },
      {
        id: 21,
        title: "Downloads",
        path: "/resources/downloads",
        newTab: false,
      },
      {
        id: 22,
        title: "Gallery",
        path: "/resources/gallery",
        newTab: false,
      },
      {
        id: 23,
        title: "Media",
        path: "/resources/media",
        newTab: false,
      },
    ],
  },
    {
    id: 24,
    title: "About Us",
    path: "/about",
    newTab: false,
    submenu: [
      {
        id: 25,
        title: "Founder's Story",
        path: "/about/founder",
        newTab: false,
      },
      {
        id: 26,
        title: "Leadership Team",
        path: "/about/leadership",
        newTab: false,
      },
      {
        id: 21,
        title: "Our Journey & Mission",
        path: "/about/journey",
        newTab: false
      },
    ],
  },
  {
    id: 25,
    title: "Contact Us",
    path: "/contact",
    newTab: false,
  },
];

export default menuData;
