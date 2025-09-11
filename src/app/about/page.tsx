// import AboutFlow from "@/components/About/AboutFlow";
// import AboutHeader from "@/components/About/AboutHeader";
// import TeamGrid, { Person } from "@/components/About/TeamGrid";
// import SectionTitle from "@/components/Common/SectionTitle";
// import Vision from "@/components/Vision";

// const leadership: Person[] = [
//   {
//     id: "alok",
//     name: "Alok Kumar",
//     role: "Director",
//     bio:
//     // "The name is enough",
//       "A seasoned leader with over three decades of experience in engineering, technology, and sustainability, Alok Kumar spearheads Saarthi GreenTech’s vision for transformative green solutions.",
//     photo: "/images/team/alok-kumar.jpg",
//   },
//   {
//     id: "nandani",
//     name: "Nandani Kumar",
//     role: "Director",
//     bio:
//       "A strategic leader with a focus on corporate governance and sustainability, driving Saarthi’s initiatives for greener industries.",
//     photo: "/images/team/nandani-kumar.png",
//   },
//   {
//     id: "karunjit",
//     name: "Karunjit Kumar Dhir",
//     role: "Director - Australia",
//     bio:
//       "A dynamic leader with expertise in scaling innovative technologies for global markets. Based out of Sydney in Australia.",
//     photo: "/images/team/karunjit-dhir.png",
//   },
//   {
//     id: "shailesh",
//     name: "Laxmikant Karande",
//     role: "Head - Engineering",
//     bio:
//       "A veteran in engineering and product development, leading the technical innovations of GreenDrive Technology.",
//     photo: "/images/team/laxmikant-karande.png",
//   },
// ];

// const advisory: Person[] = [
//   {
//     id: "gavan",
//     name: "Gavan Knox",
//     role: "Research advisor",
//     bio:
//       "A teacher, researcher, and inventor driven by a passion for scientific innovation and sustainability. Inventor and patent holder of the Hydrogen Fuel System.",
//     photo: "/images/team/gavan-knox.jpg",
//   },
//   {
//     id: "ramasub",
//     name: "A. Ramasubramanian",
//     role: "Advisor",
//     bio:
//       "A seasoned expert in technology and sustainability, offering strategic direction for Saarthi’s long-term vision.",
//     photo: "/images/team/a-ramasubramanian.png",
//   },
//   {
//     id: "harry",
//     name: "Harry Lagad",
//     role: "Advisor",
//     bio:
//       "A globally recognized leader in logistics and operations, contributing insights to scale Saarthi’s impact.",
//     photo: "/images/team/harry-lagad.png",
//   },
//   {
//     id: "kalpesh",
//     name: "Kalpesh Pathak",
//     role: "Advisor",
//     bio:
//       "Experienced Worley professional with 30+ years in EPC operations and project execution.",
//     photo: "/images/team/kalpesh-pathak.jpg",
//   },
// ];

// export default function AboutPage() {
//   return (
//     <>

// <SectionTitle 
//   title="About Us"
//   paragraph="Get to know our vision, mission and the people driving Saarthi GreenTech forward." 
//   center
//   mb="60px"   // reduce bottom margin if you like
//   width="700px" // optional, makes sure it's not too narrow
// />


//       <Vision />

//       {/* <AboutFlow /> */}

//       <AboutHeader
//         title="Leadership Team"
//         subtitle="The full-time leadership team at Saarthi GreenTech drives our strategy, execution and innovation."
//         imgSrc="/images/team/group-photo.jpg" // put your group photo here
//       />

//       {/* Leadership grid: 4 columns, larger cards */}
//       <TeamGrid people={leadership} columns={4} cardSize="lg" />

//       <div className="container mx-auto px-6 lg:px-8">
//         <h2 className="text-2xl lg:text-3xl font-extrabold mt-6">Advisory Board</h2>
//       </div>

//       {/* Advisory grid: reuse same component */}
//       <TeamGrid people={advisory} columns={4} cardSize="lg" />
//     </>
//   );
// }
// src/app/about/page.tsx
import AboutHeader from "@/components/About/AboutHeader";
import TeamGrid, { Person } from "@/components/About/TeamGrid";
import Vision from "@/components/Vision";

const leadership: Person[] = [
  {
    id: "alok",
    name: "Alok Kumar",
    role: "Director",
    bio:
      "A seasoned leader with over three decades of experience in engineering, technology, and sustainability, Alok Kumar spearheads Saarthi GreenTech’s vision for transformative green solutions.",
    photo: "/images/team/alok-kumar.jpg",
  },
  {
    id: "nandani",
    name: "Nandani Kumar",
    role: "Director",
    bio:
      "A strategic leader with a focus on corporate governance and sustainability, driving Saarthi’s initiatives for greener industries.",
    photo: "/images/team/nandani-kumar.png",
  },
  {
    id: "karunjit",
    name: "Karunjit Kumar Dhir",
    role: "Director - Australia",
    bio:
      "A dynamic leader with expertise in scaling innovative technologies for global markets. Based out of Sydney in Australia.",
    photo: "/images/team/karunjit-dhir.png",
  },
  {
    id: "shailesh",
    name: "Laxmikant Karande",
    role: "Head - Engineering",
    bio:
      "A veteran in engineering and product development, leading the technical innovations of GreenDrive Technology.",
    photo: "/images/team/laxmikant-karande.png",
  },
];

const advisory: Person[] = [
  {
    id: "gavan",
    name: "Gavan Knox",
    role: "Research advisor",
    bio:
      "A teacher, researcher, and inventor driven by a passion for scientific innovation and sustainability. Inventor and patent holder of the Hydrogen Fuel System.",
    photo: "/images/team/gavan-knox.jpg",
  },
  {
    id: "ramasub",
    name: "A. Ramasubramanian",
    role: "Advisor",
    bio:
      "A seasoned expert in technology and sustainability, offering strategic direction for Saarthi’s long-term vision.",
    photo: "/images/team/a-ramasubramanian.png",
  },
  {
    id: "harry",
    name: "Harry Lagad",
    role: "Advisor",
    bio:
      "A globally recognized leader in logistics and operations, contributing insights to scale Saarthi’s impact.",
    photo: "/images/team/harry-lagad.png",
  },
  {
    id: "pramod",
    name: "Pramod Kumar",
    role: "Advisor",
    bio:
      "Experienced Marine Technology Specialist",
    photo: "/images/team/pramod-kumar.png",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* HERO: full-bleed group photo + overlayed title */}
      <AboutHeader
        hero
        title="About Us"
        subtitle="Get to know our vision, mission and the people driving Saarthi GreenTech forward."
        imgSrc="/images/team/group-photo.jpg"
      />

      {/* Vision section (uses existing Vision component with "Vision • Mission • Goal") */}
      <Vision />

      {/* Leadership heading + small right-side group photo */}
      <AboutHeader
        title="Leadership Team"
        subtitle="The full-time leadership team at Saarthi GreenTech drives our strategy, execution and innovation."
        imgSrc="/images/team/group-photo.jpg"
      />

      {/* Team grid */}
      <TeamGrid people={leadership} columns={4} cardSize="lg" />

      <div className="container mx-auto px-6 lg:px-8">
        <h2 className="text-2xl lg:text-3xl font-extrabold mt-6">Advisory Board</h2>
      </div>

      <TeamGrid people={advisory} columns={4} cardSize="lg" />
    </>
  );
}
