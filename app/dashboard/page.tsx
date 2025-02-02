import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CalendarIcon, ActivityIcon, FileTextIcon, ClipboardListIcon } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Welcome, John Doe</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <CalendarIcon className="mr-2" />
              Upcoming Appointments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>You have 2 upcoming appointments</p>
            <Button asChild className="mt-4">
              <Link href="/appointments">View All</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ActivityIcon className="mr-2" />
              Health Metrics
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>Last updated: 2 days ago</p>
            <Button asChild className="mt-4">
              <Link href="/health-tracker">Update Metrics</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileTextIcon className="mr-2" />
              Medical Records
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>5 documents available</p>
            <Button asChild className="mt-4">
              <Link href="/medical-records">View Records</Link>
            </Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <ClipboardListIcon className="mr-2" />
              Health To-Do
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p>3 tasks pending</p>
            <Button asChild className="mt-4">
              <Link href="/health-todo">View Tasks</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

