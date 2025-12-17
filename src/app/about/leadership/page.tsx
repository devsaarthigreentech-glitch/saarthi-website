// // import AboutHeader from "@/components/About/AboutHeader";
// // import TeamGrid, { Person } from "@/components/About/TeamGrid";
// // import Vision from "@/components/Vision";

// // const leadership: Person[] = [
// //   {
// //     id: "alok",
// //     name: "Alok Kumar",
// //     role: "Director",
// //     bio:
// //       "A seasoned leader with over three decades of experience in engineering, technology, and sustainability, Alok Kumar spearheads Saarthi GreenTech’s vision for transformative green solutions.",
// //     photo: "/images/team/alok-kumar.jpg",
// //   },
// //   {
// //     id: "nandani",
// //     name: "Nandani Kumar",
// //     role: "Director",
// //     bio:
// //       "A strategic leader with a focus on corporate governance and sustainability, driving Saarthi’s initiatives for greener industries.",
// //     photo: "/images/team/nandani-kumar.png",
// //   },
// //   {
// //     id: "karunjit",
// //     name: "Karunjit Kumar Dhir",
// //     role: "Director - Australia",
// //     bio:
// //       "A dynamic leader with expertise in scaling innovative technologies for global markets. Based out of Sydney in Australia.",
// //     photo: "/images/team/karunjit-dhir.png",
// //   },
// //   {
// //     id: "shailesh",
// //     name: "Laxmikant Karande",
// //     role: "Head - Engineering",
// //     bio:
// //       "A veteran in engineering and product development, leading the technical innovations of GreenDrive Technology.",
// //     photo: "/images/team/laxmikant-karande.png",
// //   },
// // ];

// // const advisory: Person[] = [
// //   {
// //     id: "gavan",
// //     name: "Gavan Knox",
// //     role: "Research advisor",
// //     bio:
// //       "A teacher, researcher, and inventor driven by a passion for scientific innovation and sustainability. Inventor and patent holder of the Hydrogen Fuel System.",
// //     photo: "/images/team/gavan-knox.jpg",
// //   },
// //   {
// //     id: "ramasub",
// //     name: "A. Ramasubramanian",
// //     role: "Advisor",
// //     bio:
// //       "A seasoned expert in technology and sustainability, offering strategic direction for Saarthi’s long-term vision.",
// //     photo: "/images/team/a-ramasubramanian.png",
// //   },
// //   {
// //     id: "harry",
// //     name: "Harry Lagad",
// //     role: "Advisor",
// //     bio:
// //       "A globally recognized leader in logistics and operations, contributing insights to scale Saarthi’s impact.",
// //     photo: "/images/team/harry-lagad.png",
// //   },
// //   {
// //     id: "pramod",
// //     name: "Pramod Kumar",
// //     role: "Advisor",
// //     bio:
// //       "Experienced Marine Technology Specialist",
// //     photo: "/images/team/pramod-kumar.png",
// //   },
// // ];

// // export default function AboutPage() {
// //   return (
// //     <>
// //       {/* HERO: full-bleed group photo + overlayed title */}
// //       <AboutHeader
// //         hero
// //         title="About Us"
// //         subtitle="Get to know our vision, mission and the people driving Saarthi GreenTech forward."
// //         imgSrc="/images/team/group-photo.jpg"
// //       />

// //       {/* Vision section (uses existing Vision component with "Vision • Mission • Goal") */}
// //       <Vision />

// //       {/* Leadership heading + small right-side group photo */}
// //       <AboutHeader
// //         title="Leadership Team"
// //         subtitle="The full-time leadership team at Saarthi GreenTech drives our strategy, execution and innovation."
// //         imgSrc="/images/team/group-photo.jpg"
// //       />

// //       {/* Team grid */}
// //       <TeamGrid people={leadership} columns={4} cardSize="lg" />

// //       <div className="container mx-auto px-6 lg:px-8">
// //         <h2 className="text-2xl lg:text-3xl font-extrabold mt-6">Advisory Board</h2>
// //       </div>

// //       <TeamGrid people={advisory} columns={4} cardSize="lg" />
// //     </>
// //   );
// // }
// import React from 'react';

// // --- PLACEHOLDER COMPONENTS (Assumed External) ---
// // Define the Person type as assumed from the user's code
// export type Person = {
//   id: string;
//   name: string;
//   role: string;
//   bio: string;
//   photo: string;
// };

// // Placeholder for the external AboutHeader component
// // We assume it handles its own internal styling based on props like 'hero' and 'title'.
// const AboutHeader = ({ title, subtitle, imgSrc, hero }) => {
//     // This is a minimal placeholder mimicking the required behavior/styling
//     const isHero = hero;
//     const paddingClass = isHero ? 'py-20 md:py-32' : 'pt-20 pb-12';
//     const titleClass = isHero ? 'text-5xl md:text-7xl font-black' : 'text-3xl md:text-5xl font-extrabold';
    
//     // Using a consistent Saarthi Green color for accent
//     const brandColor = '#33A04A'; 

//     return (
//         <div 
//             className={`w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white ${paddingClass}`}
//             style={isHero ? { 
//                 backgroundImage: `url(${imgSrc})`, 
//                 backgroundSize: 'cover', 
//                 backgroundPosition: 'center',
//                 // Adding a subtle dark overlay for text readability
//                 position: 'relative',
//                 color: 'white' // Ensure text is white on the hero
//             } : {}}
//         >
//             {isHero && <div className="absolute inset-0 bg-black opacity-40"></div>}
//             <div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">
//                 <h1 className={`${titleClass} mb-3`} style={!isHero ? { color: brandColor } : {}}>
//                     {title}
//                 </h1>
//                 <p className={`text-xl md:text-2xl ${isHero ? 'text-gray-100' : 'text-gray-600 dark:text-gray-400'}`}>
//                     {subtitle}
//                 </p>
//             </div>
//         </div>
//     );
// };

// // Placeholder for the external TeamGrid component
// const TeamGrid = ({ people, columns, cardSize }) => {
//     const brandColor = '#33A04A'; 
//     const sizeClasses = cardSize === 'lg' ? 'md:col-span-1' : 'md:col-span-1'; // Simplified
//     const gridCols = `grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`;

//     return (
//         <div className="container mx-auto px-6 lg:px-8 py-10 max-w-7xl">
//             <div className={`grid gap-8 ${gridCols}`}>
//                 {people.map((person) => (
//                     <div 
//                         key={person.id} 
//                         className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ${sizeClasses}`}
//                     >
//                         {/* Placeholder for Photo */}
//                         <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
//                             {/* In a real app, this would be an image tag: <img src={person.photo} alt={person.name} /> */}
//                             <span className="text-gray-500 dark:text-gray-400 text-sm"> <img src={person.photo} alt={person.name} /></span>
//                         </div>
//                         <h3 className="text-xl font-bold text-gray-900 dark:text-white">{person.name}</h3>
//                         <p className="text-md font-semibold mt-1" style={{ color: brandColor }}>{person.role}</p>
//                         <p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">{person.bio}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };


// const leadership: Person[] = [
//   {
//     id: "alok",
//     name: "Alok Kumar",
//     role: "Director",
//     bio:
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
//   // {
//   //   id: "gavan",
//   //   name: "Gavan Knox",
//   //   role: "Research advisor",
//   //   bio:
//   //     "A teacher, researcher, and inventor driven by a passion for scientific innovation and sustainability. Inventor and patent holder of the Hydrogen Fuel System.",
//   //   photo: "/images/team/gavan-knox.jpg",
//   // },
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
//     id: "pramod",
//     name: "Pramod Kumar",
//     role: "Advisor",
//     bio:
//       "Experienced Marine Technology Specialist",
//     photo: "/images/team/pramod-kumar.png",
//   },
// ];

// export default function AboutPage() {
//     // The Vision component is removed as requested.
//     // The remaining sections are updated for better, consistent spacing.
//     const brandColor = '#33A04A'; 

//     return (
//         <div className="min-h-screen bg-white dark:bg-gray-950">
//             {/* 1. HERO: full-bleed group photo + overlayed title - Increased padding for design match */}
//             <AboutHeader
//                 hero
//                 title="About Us"
//                 subtitle="Get to know the people driving Saarthi GreenTech forward."
//                 imgSrc="/images/team/group-photo.jpg"
//             />

//             {/* 2. Leadership heading & introduction section */}
//             <div className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
//                 <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
//                     <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3" style={{ color: brandColor }}>
//                         Leadership Team
//                     </h2>
//                     <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl">
//                         The full-time leadership team at Saarthi GreenTech drives our strategy, execution, and innovation, ensuring our solutions deliver both environmental and economic value.
//                     </p>
//                 </div>
//             </div>

//             {/* 3. Leadership Team grid */}
//             <TeamGrid people={leadership} columns={4} cardSize="lg" />

//             {/* 4. Advisory Board heading & introduction section - Consistent spacing */}
//             <div className="pt-16 pb-10 bg-white dark:bg-gray-950">
//                 <div className="container mx-auto px-6 lg:px-8 max-w-7xl">
//                     <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3" style={{ color: brandColor }}>
//                         Advisory Board
//                     </h2>
//                     <p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl">
//                         Our expert advisors provide strategic guidance, drawing on decades of experience across technology, logistics, and marine industries to accelerate our global impact.
//                     </p>
//                 </div>
//             </div>

//             {/* 5. Advisory Board grid */}
//             <TeamGrid people={advisory} columns={4} cardSize="lg" />
            
//             <div className="h-16"></div> {/* Final spacing */}
//         </div>
//     );
// }

import React from 'react';

// --- PLACEHOLDER COMPONENTS (Assumed External) ---
// Define the Person type as assumed from the user's code
export type Person = {
	id: string;
	name: string;
	role: string;
	bio: string;
	photo: string;
};

// Placeholder for the external AboutHeader component
// We assume it handles its own internal styling based on props like 'hero' and 'title'.
const AboutHeader = ({ title, subtitle, imgSrc, hero }) => {
	// This is a minimal placeholder mimicking the required behavior/styling
	const isHero = hero;
	const paddingClass = isHero ? 'py-20 md:py-32' : 'pt-20 pb-12';
	const titleClass = isHero ? 'text-5xl md:text-7xl font-black' : 'text-3xl md:text-5xl font-extrabold';
	
	// Using a consistent Saarthi Green color for accent
	const brandColor = '#33A04A'; 

	return (
		<div 
			className={`w-full bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white ${paddingClass}`}
			style={isHero ? { 
				backgroundImage: `url(${imgSrc})`, 
				backgroundSize: 'cover', 
				backgroundPosition: 'center',
				// Adding a subtle dark overlay for text readability
				position: 'relative',
				color: 'white' // Ensure text is white on the hero
			} : {}}
		>
			{isHero && <div className="absolute inset-0 bg-black opacity-40"></div>}
			<div className="relative z-10 container mx-auto px-6 lg:px-8 max-w-7xl">
				<h1 className={`${titleClass} mb-3`} style={!isHero ? { color: brandColor } : {}}>
					{title}
				</h1>
				<p className={`text-xl md:text-2xl ${isHero ? 'text-gray-100' : 'text-gray-600 dark:text-gray-400'}`}>
					{subtitle}
				</p>
			</div>
		</div>
	);
};

// Placeholder for the external TeamGrid component - UPDATED
const TeamGrid = ({ people, columns, cardSize }) => {
	const brandColor = '#33A04A'; 
	const sizeClasses = cardSize === 'lg' ? 'md:col-span-1' : 'md:col-span-1'; // Simplified
	const gridCols = `grid-cols-1 sm:grid-cols-2 md:grid-cols-${columns}`;

	return (
		<div className="container mx-auto px-6 lg:px-8 py-10 max-w-7xl">
			<div className={`grid gap-8 ${gridCols}`}>
				{people.map((person) => (
					<div 
						key={person.id} 
						className={`bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 ${sizeClasses} flex flex-col items-center text-center`}
					>
						{/* UPDATED: Rounded Container for Photo */}
						<div className="w-40 h-40 bg-gray-200 dark:bg-gray-700 rounded-full mb-6 flex items-center justify-center overflow-hidden border-4 border-gray-100 dark:border-gray-700 shadow-md">
							{/* UPDATED: Image tag with object-cover and rounded-full */}
							<img 
                                src={person.photo} 
                                alt={person.name} 
                                className="w-full h-full object-cover rounded-full" 
                                // onError={(e) => {
                                //     // Fallback if image fails to load
                                //     e.currentTarget.onerror = null;
                                //     e.currentTarget.src = `https://placehold.co/160x160/cccccc/333333?text=${person.name.split(' ')[0][0]}${person.name.split(' ')[1]?.[0] || ''}`;
                                // }}
                            />
						</div>
                        {/* END OF UPDATED PHOTO SECTION */}
						
						<h3 className="text-xl font-bold text-gray-900 dark:text-white">{person.name}</h3>
						<p className="text-md font-semibold mt-1" style={{ color: brandColor }}>{person.role}</p>
						<p className="text-gray-600 dark:text-gray-400 mt-3 text-sm">{person.bio}</p>
					</div>
				))}
			</div>
		</div>
	);
};

// Placeholder for the Vision component (Removed from final export but keeping definition for completeness if needed)
const Vision = () => {
    const brandColor = '#33A04A';
    return (
        <section className="py-20 md:py-24 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-6 lg:px-8 max-w-7xl text-center">
                <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">Our Vision • Mission • Goal</h2>
                <p className="text-xl max-w-3xl mx-auto text-gray-600 dark:text-gray-400">
                    To be the leading global partner for hydrogen-enabled diesel efficiency, accelerating the transition to a sustainable future while ensuring economic viability for our clients.
                </p>
                <div className="mt-8">
                    <button className="px-6 py-3 rounded-lg font-bold text-white transition duration-300" style={{ backgroundColor: brandColor }}>
                        Discover Our Core Values
                    </button>
                </div>
            </div>
        </section>
    );
};


const leadership: Person[] = [
	{
		id: "alok",
		name: "Alok Kumar",
		role: "Director",
		bio:
			"A seasoned leader with over three decades of experience in engineering, technology, and sustainability, Alok Kumar spearheads Saarthi GreenTech’s vision for transformative green solutions.",
		photo: "/images/team/alok-kumar.png",
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
		id: "shailesh",
		name: "Laxmikant Karande",
		role: "Head - Engineering",
		bio:
		"A veteran in engineering and product development, leading the technical innovations of GreenDrive Technology.",
		photo: "/images/team/laxmikant-karande.png",
	},
];

const advisory: Person[] = [
	// {
		//  	id: "gavan",
		//  	name: "Gavan Knox",
		//  	role: "Research advisor",
		//  	bio:
		//  	 	"A teacher, researcher, and inventor driven by a passion for scientific innovation and sustainability. Inventor and patent holder of the Hydrogen Fuel System.",
		//  	photo: "/images/team/gavan-knox.jpg",
		// },
		{
			id: "karunjit",
			name: "Karunjit Kumar Dhir",
			role: "Advisor",
			bio:
				"A dynamic leader with expertise in scaling innovative technologies for global markets. Based out of Sydney in Australia.",
			photo: "/images/team/karunjit-dhir.png",
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
	// The Vision component is removed as requested by the original code's comment.
	const brandColor = '#33A04A'; 

	return (
		<div className="min-h-screen bg-white dark:bg-gray-950">
			{/* 1. HERO: full-bleed group photo + overlayed title */}
			<AboutHeader
				hero
				title="About Us"
				subtitle="Get to know the people driving Saarthi GreenTech forward."
				imgSrc="/images/team/group-photo.jpg"
			/>

			{/* 2. Leadership heading & introduction section (Replacing the second AboutHeader call) */}
			<div className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900">
				<div className="container mx-auto px-6 lg:px-8 max-w-7xl">
					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3" style={{ color: brandColor }}>
						Leadership Team
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl">
						The full-time leadership team at Saarthi GreenTech drives our strategy, execution, and innovation, ensuring our solutions deliver both environmental and economic value.
					</p>
				</div>
			</div>

			{/* 3. Leadership Team grid */}
			<TeamGrid people={leadership} columns={4} cardSize="lg" />

			{/* 4. Advisory Board heading & introduction section */}
			<div className="pt-16 pb-10 bg-white dark:bg-gray-950">
				<div className="container mx-auto px-6 lg:px-8 max-w-7xl">
					<h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-3" style={{ color: brandColor }}>
						Advisory Board
					</h2>
					<p className="text-xl text-gray-600 dark:text-gray-400 max-w-4xl">
						Our expert advisors provide strategic guidance, drawing on decades of experience across technology, logistics, and marine industries to accelerate our global impact.
					</p>
				</div>
			</div>

			{/* 5. Advisory Board grid */}
			<TeamGrid people={advisory} columns={4} cardSize="lg" />
			
			<div className="h-16"></div> {/* Final spacing */}
		</div>
	);
}