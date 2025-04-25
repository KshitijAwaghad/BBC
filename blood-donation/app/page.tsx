import { Button } from "../components/ui/button"
import Link from "next/link"
import { Heart, Search, UserPlus } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Find Blood Donors Near You
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                Connect with donors or register to save lives. Your contribution can make a difference.
              </p>
            </div>
            <div className="space-y-4 sm:space-y-0 sm:space-x-4 sm:flex">
              <Link href="/find-donor">
                <Button size="lg" className="bg-red-500 hover:bg-red-600 text-white">
                  <Search className="mr-2 h-4 w-4" />
                  Find a Donor
                </Button>
              </Link>
              <Link href="/register-donor">
                <Button size="lg" variant="outline" className="border-red-500 text-red-500 hover:bg-red-50">
                  <UserPlus className="mr-2 h-4 w-4" />
                  Register as Donor
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-red-100 p-3">
                <Search className="h-6 w-6 text-red-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Find Donors</h3>
                <p className="text-gray-500">Search for blood donors by city and blood type to find a match quickly.</p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-red-100 p-3">
                <UserPlus className="h-6 w-6 text-red-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Register as Donor</h3>
                <p className="text-gray-500">
                  Join our community of donors and help save lives with your blood donation.
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="rounded-full bg-red-100 p-3">
                <Heart className="h-6 w-6 text-red-500" />
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold">Save Lives</h3>
                <p className="text-gray-500">Your donation can save up to three lives. Be a hero today.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

