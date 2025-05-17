// components/ui/DashboardTable.tsx
"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dummyData = [
  { title: "Article 1", author: "Alice", views: 500 },
  { title: "Article 2", author: "Bob", views: 300 },
  { title: "Article 3", author: "Charlie", views: 150 },
];

export default function DashboardTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Title</TableHead>
          <TableHead>Author</TableHead>
          <TableHead>Views</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dummyData.map((item, index) => (
          <TableRow key={index}>
            <TableCell>{item.title}</TableCell>
            <TableCell>{item.author}</TableCell>
            <TableCell>{item.views}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
