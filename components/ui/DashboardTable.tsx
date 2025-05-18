// app/components/ui/DashboardTable.tsx

'use client';
import { useState } from 'react';
import LiveChatSupoort from './LiveChatSupport';

type Row = {
  id: number;
  title: string;
  keyword: string;
  words: number;
  createdOn: string;
};


  const rows: Row[] = [
    {
      id: 1,
      title: "How to Improve Your Skills in League of Legends",
      keyword: "league of legends [2,240,000]",
      words: 4575,
      createdOn: "20 hours ago",
    },
    {
      id: 2,
      title: "How to Master Last Hitting in League of Legends",
      keyword: "league of legends [2240000]",
      words: 3480,
      createdOn: "21 hours ago",
    },
    {
      id: 3,
      title: "7 Tips for Better Teamplay in League of Legends",
      keyword: "league of legends [2240000]",
      words: 2676,
      createdOn: "a days ago",
    },
    {
      id: 4,
      title: "Top Virtual Executive Assistant Services (2024)",
      keyword: "virtual executive assistant [2900]",
      words: 2408,
      createdOn: "1 Oct,24",
    },
    {
      id: 5,
      title: "Unlimited Graphics Design Solutions",
      keyword: "unlimited graphic design services [390]",
      words: 1793,
      createdOn: "---",
    },
    {
      id: 6,
      title: "Top Amazon Payment Methods for Quick Access to Funds",
      keyword: "amazon payment methods [3600]",
      words: 2647,
      createdOn: "---",
    },
    {
      id: 7,
      title: "Backlinks 101: What are backlinks and why they're important [Free template]",
      keyword: "backlinks [8100]",
      words: 2261,
      createdOn: "---",
    },
    {
      id: 8,
      title: "7 Leading AI SEO Tools in 2024 (Ranked & Compared)",
      keyword: "ai seo software [880]",
      words: 1543,
      createdOn: "---",
    },
    {
      id: 9,
      title: "Unlimited Graphic Design Services You Can Rely On",
      keyword: "unlimited graphic design services [390]",
      words: 1974,
      createdOn: "---",
    },
    // Add more rows here
  ];
  export default function DashboardTable() {
  const [selected, setSelected] = useState<number[]>([]);

  const toggleAll = () => {
    setSelected(allChecked ? [] : rows.map((r) => r.id));
  };

  const toggleOne = (id: number) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };
  const [pageSize, setPageSize] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(1, Math.ceil(rows.length / pageSize));
  const first = (currentPage - 1) * pageSize;
  const visibleRows = rows.slice(first, first + pageSize);

  /* ---------- helpers ---------- */
  const allChecked = selected.length === rows.length && rows.length > 0;
  const indeterminate = selected.length > 0 && !allChecked;

  return (
  <>
    {/* ─────────── custom header rows ─────────── */}
    <div className="bg-white shadow-md rounded p-4 space-y-4">
      {/* Row 1 : big title */}
      <h2 className="text-xl font-bold mb-4 text-center">Articles</h2>

      {/* Row 2 : section tabs */}
      <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
        <button className="text-blue-600 underline font-bold">Generated&nbsp;Articles</button>
        <button className="text-black-600 hover:underline">Published&nbsp;Articles</button>
        <button className="text-black-600 hover:underline">Scheduled&nbsp;Articles</button>
        <button className="text-black-600 hover:underline">Archived&nbsp;Articles</button>
      </div>

      {/* Row 3 : search bar */}
      <div className="flex justify-center">
        <label htmlFor="articleSearch" className="sr-only">
          Search articles
        </label>
        <div className="relative w-72">
          <span className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
            🔍
          </span>
          <input
            id="articleSearch"
            type="text"
            placeholder="Search for Title & Keywords…"
            className="w-full pl-8 pr-3 py-2 border rounded focus:outline-none text-sm"
          />
        </div>
      </div>
    </div>

    {/* ─────────── table & footer card ─────────── */}
    <div className="bg-white shadow-md rounded p-4 overflow-auto">
      {/* table */}
      <table className="min-w-full text-sm">
        <thead>
          <tr className="border-b font-semibold text-gray-700">
            <th className="p-2 text-center">
              <input
                type="checkbox"
                checked={allChecked}
                ref={(el) => {
                  if (el) el.indeterminate = indeterminate;
                }}
                onChange={toggleAll}
              />
            </th>
            <th className="p-2 text-left">Title</th>
            <th className="p-2 text-left">
              <div className="flex items-center gap-1">
                {/* the up/down glyphs */}
                <span className="flex flex-col leading-none text-[10px] text-gray-500">
                  {/* Up */}
                  <svg
                    className="h-2.5 w-2.5 fill-gray-500"
                    viewBox="0 0 10 6"
                    aria-hidden
                  >
                    <polygon points="5,0 10,6 0,6" />
                  </svg>

                  {/* Down */}
                  <svg
                    className="h-2.5 w-2.5 fill-gray-500 -mt-[2px]"
                    viewBox="0 0 10 6"
                    aria-hidden
                  >
                    <polygon points="0,0 10,0 5,6" />
                  </svg>
                </span>
                Keyword&nbsp;[Traffic]
              </div>
            </th>
            <th className="p-2 text-left">
              <div className="flex items-center gap-1">
              {/* the up/down glyphs */}
                <span className="flex flex-col leading-none text-[10px] text-gray-500">
                  {/* Up */}
                  <svg
                    className="h-2.5 w-2.5 fill-gray-500"
                    viewBox="0 0 10 6"
                    aria-hidden
                  >
                    <polygon points="5,0 10,6 0,6" />
                  </svg>

                  {/* Down */}
                  <svg
                    className="h-2.5 w-2.5 fill-gray-500 -mt-[2px]"
                    viewBox="0 0 10 6"
                    aria-hidden
                  >
                    <polygon points="0,0 10,0 5,6" />
                  </svg>
                </span>
                Words
              </div>
            </th>
            <th className="p-2 text-left">
              <div className="flex items-center gap-1">
              {/* the up/down glyphs */}
                <span className="flex flex-col leading-none text-[10px] text-gray-500">
                  {/* Up */}
                  <svg
                    className="h-2.5 w-2.5 fill-gray-500"
                    viewBox="0 0 10 6"
                    aria-hidden
                  >
                    <polygon points="5,0 10,6 0,6" />
                  </svg>
                  <svg
                    className="h-2.5 w-2.5 fill-gray-500 -mt-[2px]"
                    viewBox="0 0 10 6"
                    aria-hidden
                  >
                    <polygon points="0,0 10,0 5,6" />
                  </svg>
                </span>
                Created On
              </div>
            </th>
            <th className="p-2 text-left">Action
            </th>
            <th className="p-2 text-left">Publish</th>
          </tr>
        </thead>

        <tbody>
          {visibleRows.map((row) => (
            <tr key={row.id} className="border-b last:border-none hover:bg-gray-50">
              <td className="p-2 text-center">
                <input
                  type="checkbox"
                  checked={selected.includes(row.id)}
                  onChange={() => toggleOne(row.id)}
                />
              </td>
              <td className="p-2">{row.title}</td>
              <td className="p-2">{row.keyword}</td>
              <td className="p-2">{row.words}</td>
              <td className="p-2">{row.createdOn}</td>
              <td className="p-2">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
              <td className="p-2 text-center">🌐
                <svg
                aria-hidden
                className="inline h-1.5 w-1.5 fill-black ml-1 align-middle"
                viewBox="0 0 6 4"
                >
                <polygon points="0,0 6,0 3,4" />
                </svg>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* footer */}
      <div className="flex items-center justify-between pt-4 text-sm">
        <div className="flex items-center space-x-2">
          <span className="font-medium">
            Total&nbsp;{rows.length}&nbsp;Article&nbsp;Titles
          </span>

          <span className="mx-1">|</span>

          <span className="flex items-center space-x-1">
            <span>Show</span>
            <select
              value={pageSize}
              onChange={(e) => {
                setPageSize(Number(e.target.value));
                setCurrentPage(1);
              }}
              className="border rounded px-2 py-1 text-sm focus:outline-none"
            >
              {[10, 20, 30,40,50,60,70,80,90,100].map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
            <span>entries&nbsp;per&nbsp;page</span>
          </span>
        </div>

        <span className='mt-2 sm:mt-0 flex items-center gap-1'>
          <span className="inline-block px-2 py-0.5 border rounded text-center min-w-[2.5rem]">{currentPage}
            </span>/{totalPages}&nbsp;page
          </span>
      </div>
    </div>
    <LiveChatSupoort />
  </>
);
}

// // components/ui/DashboardTable.tsx
// "use client";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";

// const dummyData = [
//   { title: "Article 1", author: "Alice", views: 500 },
//   { title: "Article 2", author: "Bob", views: 300 },
//   { title: "Article 3", author: "Charlie", views: 150 },
// ];

// export default function DashboardTable() {
//   return (
//     <Table>
//       <TableHeader>
//         <TableRow>
//           <TableHead>Title</TableHead>
//           <TableHead>Author</TableHead>
//           <TableHead>Views</TableHead>
//         </TableRow>
//       </TableHeader>
//       <TableBody>
//         {dummyData.map((item, index) => (
//           <TableRow key={index}>
//             <TableCell>{item.title}</TableCell>
//             <TableCell>{item.author}</TableCell>
//             <TableCell>{item.views}</TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   );
// }
