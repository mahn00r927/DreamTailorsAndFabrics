// export default function TailoringPage() {
//   const designs = [
//     { label: "Kurta", src: "https://images.pexels.com/photos/2857040/pexels-photo-2857040.jpeg" },
//     { label: "Suit", src: "https://images.pexels.com/photos/1342609/pexels-photo-1342609.jpeg" },
//     { label: "Shirt", src: "https://images.pexels.com/photos/297933/pexels-photo-297933.jpeg" },
//     { label: "Blazer", src: "https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg" },
//     { label: "Trouser", src: "https://images.pexels.com/photos/3755706/pexels-photo-3755706.jpeg" },
//   ];
//   const templates = [
//     { label: "Casual Shirt", src: "https://images.pexels.com/photos/3768005/pexels-photo-3768005.jpeg" },
//     { label: "Formal Suit", src: "https://images.pexels.com/photos/1049317/pexels-photo-1049317.jpeg" },
//     { label: "Kurta", src: "https://images.pexels.com/photos/5702370/pexels-photo-5702370.jpeg" },
//     { label: "Blazer", src: "https://images.pexels.com/photos/6626967/pexels-photo-6626967.jpeg" },
//     { label: "Trousers", src: "https://images.pexels.com/photos/1124468/pexels-photo-1124468.jpeg" },
//   ];
//   return (
//     <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white p-6 md:p-12">
//       <div className="max-w-6xl mx-auto">
//         <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-10">
//           <div className="md:flex">
//             <div className="p-8 md:p-12 md:flex-1">
//               <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
//                 Tailoring Services
//               </h1>
//               <p className="mt-4 text-gray-600 max-w-xl">
//                 Precision tailoring, premium fabrics and bespoke fitting — tailored to your style.
//                 Choose a design or start from a template and schedule a fitting with our expert tailors.
//               </p>

//               <div className="mt-6 flex flex-wrap gap-3">
//                 <button className="px-5 py-2 bg-indigo-600 text-white rounded-md shadow hover:bg-indigo-700 transition">
//                   Book a Fitting
//                 </button>
//                 <button className="px-5 py-2 border border-gray-200 rounded-md hover:shadow transition">
//                   View Full Gallery
//                 </button>
//                 <span className="ml-auto inline-flex items-center gap-2 bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm">
//                   <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
//                   </svg>
//                   5+ years experience
//                 </span>
//               </div>

//               <div className="mt-8 grid grid-cols-3 gap-3">
//                 <div className="text-center">
//                   <div className="text-2xl font-semibold text-gray-900">500+</div>
//                   <div className="text-sm text-gray-500">Happy clients</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-semibold text-gray-900">1000+</div>
//                   <div className="text-sm text-gray-500">Tailored pieces</div>
//                 </div>
//                 <div className="text-center">
//                   <div className="text-2xl font-semibold text-gray-900">24h</div>
//                   <div className="text-sm text-gray-500">Quick quotes</div>
//                 </div>
//               </div>
//             </div>

//             <div className="md:w-1/3">
//               <img
//                 src="https://images.pexels.com/photos/1759627/pexels-photo-1759627.jpeg"
//                 alt="Tailoring hero"
//                 className="w-full h-56 md:h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>


//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Designs */}
//           <section className="bg-white p-6 rounded-xl shadow">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-2xl font-semibold text-gray-800">Designs</h2>
//               <span className="text-sm text-gray-500">Custom & made-to-measure</span>
//             </div>

//             <p className="text-gray-600 mb-6">
//               Explore curated looks for shirts, suits, kurtas, blazers and trousers. Click any item to see details.
//             </p>

//             <div className="grid grid-cols-2 gap-4">
//               {designs.map((d) => (
//                 <div
//                   key={d.label}
//                   className="relative rounded-lg overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-shadow"
//                 >
//                   <img src={d.src} alt={d.label} className="w-full h-40 object-cover" />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-flex"></div>
//                   <div className="absolute left-3 bottom-3 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {d.label}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Templates */}
//           <section className="bg-white p-6 rounded-xl shadow">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-2xl font-semibold text-gray-800">Templates</h2>
//               <span className="text-sm text-gray-500">Ready-to-use patterns</span>
//             </div>

//             <p className="text-gray-600 mb-6">
//               Quick-start templates to speed production while maintaining a tailored finish.
//             </p>

//             <div className="grid grid-cols-2 gap-4">
//               {templates.map((t) => (
//                 <div
//                   key={t.label}
//                   className="relative rounded-lg overflow-hidden group cursor-pointer transform hover:scale-[1.02] transition-shadow"
//                 >
//                   <img src={t.src} alt={t.label} className="w-full h-40 object-cover" />
//                   <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition"></div>
//                   <div className="absolute left-3 bottom-3 bg-white/80 text-gray-900 px-3 py-1 rounded-full text-sm font-medium">
//                     {t.label}
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <div className="mt-6 flex items-center justify-between">
//               <div className="text-sm text-gray-500">Need a custom template?</div>
//               <button className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-md border border-indigo-100 hover:bg-indigo-100 transition">
//                 Request Template
//               </button>
//             </div>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";

const garments = [
  {
    name: "Kurta",
    styles: ["Band Collar", "Round Collar", "Classic Collar", "Button Cuff", "Straight Cuff"],
  },
  {
    name: "Suit",
    styles: ["Notch Lapel", "Peak Lapel", "Shawl Lapel", "Two Buttons", "Three Buttons"],
  },
  {
    name: "Trouser",
    styles: ["Slim Fit", "Regular Fit", "Pleated", "Flat Front"],
  },
  {
    name: "Blazer",
    styles: ["Single Breasted", "Double Breasted", "Slim Fit", "Classic Fit"],
  },
  {
    name: "Shirt",
    styles: ["Point Collar", "Spread Collar", "French Cuff", "Button Cuff"],
  },
];

export default function TailoringTemplates() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-4xl font-bold text-center mb-10 text-gray-900 font-[Montserrat]"> Design Templates</h1>

      {/* Garment Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {garments.map((garment, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition cursor-pointer"
          >
            {/* Card Header */}
            <div
              onClick={() => toggle(index)}
              className="flex justify-between items-center"
            >
              <h2 className="text-2xl font-semibold">{garment.name}</h2>
              <span className="text-gray-500">{openIndex === index ? "▲" : "▼"}</span>
            </div>

            {/* Expandable List */}
            {openIndex === index && (
              <ul className="mt-4 space-y-2">
                {garment.styles.map((style, i) => (
                  <li
                    key={i}
                    className="p-3 border rounded-lg hover:bg-gray-100 cursor-pointer"
                  >
                    {style}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
