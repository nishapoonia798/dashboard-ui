import Sidebar from "@/components/ui/sidebar";
import DashboardTable from "@/components/DashboardTable";

export default function DashboardPage() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 w-full p-6 bg-gray-100 min-h-screen">
        <h1 className="text-2xl font-bold mb-4">Dashboard Overview</h1>
        <DashboardTable />
      </main>
    </div>
  )
}