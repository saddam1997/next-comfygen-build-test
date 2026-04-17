// import ParagraphText from "../ui/ParagraphText";

// // ServiceContent.tsx
// export default function ServiceContent({ service }: { service: any }) {
//   return (
//     <div className="space-y-4">
//       {service.subtitle && <p>{service.subtitle}</p>}
      
//       <h3 className="text-3xl font-bold">{service.title}</h3>
      
//       <ParagraphText color="white" text={service.description} />
      
//       {service.description1 && <p>{service.description1}</p>}
      
//       {service.features?.length > 0 && (
//         <ul className="space-y-2 mt-4">
//           {service.features.map((f: any, i: number) => (
//             <li key={i} className="flex items-center gap-2">
//               <div className="w-2 h-2 border border-white rounded-full"></div>
//               <div dangerouslySetInnerHTML={{ __html: f }}></div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }