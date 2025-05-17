// components/ui/DashboardTable.tsx
"use client";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const dummyData = [
  {
    id: 1,
    title: "How to scale React apps",
    status: "Published",
    views: 1024,
    date: "2025-05-10",
  },
  {
    id: 2,
    title: "Performance Tips for Next.js",
    status: "Draft",
    views: 88,
    date: "2025-05-08",
  },
  {
    id: 3,
    title: "Using Shadcn UI Effectively",
    status: "Scheduled",
    views: 230,
    date: "2025-05-11",
  },
];

export function DashboardTable() {
  return (
    <div className="rounded-md border mt-6">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Views</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dummyData.map((item) => (
            <TableRow key={item.id}>
              <TableCell className="font-medium">{item.title}</TableCell>
              <TableCell>
                <Badge variant={item.status === "Published" ? "default" : "outline"}>
                  {item.status}
                </Badge>
              </TableCell>
              <TableCell>{item.views}</TableCell>
              <TableCell>{item.date}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
