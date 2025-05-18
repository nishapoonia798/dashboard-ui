// app/dashboard/generated-articles/page.tsx
'use client';
import DashboardTable from '../../../components/ui/DashboardTable';
export default function GeneratedArticlesPage() {
  return (
    <main className="p-6"><DashboardTable /></main>
  );
}


// export default function GeneratedArticles() {
//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-bold mb-4">Generated Articles</h2>
//       <div className="bg-white shadow-md rounded p-4 overflow-auto">
//         {/* Your table structure copied from screenshot, example below */}
//         <table className="min-w-full text-sm border">
//           <thead>
//             <tr className="border-b font-semibold">
//               <th className="p-2">Title</th>
//               <th className="p-2">Keyword [Traffic]</th>
//               <th className="p-2">Words</th>
//               <th className="p-2">Created On</th>
//               <th className="p-2">Action</th>
//               <th className="p-2">Publish</th>
//             </tr>
//           </thead>
//           <tbody>
//             {/* Sample data row */}
//             <tr className="border-b">
//               <td className="p-2">How to Improve Your Skills in League of Legends</td>
//               <td className="p-2">league of legends [2240000]</td>
//               <td className="p-2">4575</td>
//               <td className="p-2">20 hours ago</td>
//               <td className="p-2"><button className="text-blue-600">View</button></td>
//               <td className="p-2">🌐</td>
//             </tr>
//             {/* Add all rows here */}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
