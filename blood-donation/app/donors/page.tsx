"use client"

import { useState } from "react"
import { Input } from "../../components/ui/input"
import { initialData, type Donor } from "../../lib/data"
import DonorCard from "../../components/donor-card"
import { Search } from "lucide-react"

export default function DonorList() {
  const [searchTerm, setSearchTerm] = useState("")
  const [donors] = useState<Donor[]>(initialData.donors)

  const filteredDonors = donors.filter((donor) => {
    const searchLower = searchTerm.toLowerCase()
    return (
      donor.name.toLowerCase().includes(searchLower) ||
      donor.city.toLowerCase().includes(searchLower) ||
      donor.bloodType.toLowerCase().includes(searchLower)
    )
  })

  return (
    <div className="max-w-6xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <h1 className="text-3xl font-bold">Donor Directory</h1>

        <div className="relative max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search by name, city, or blood type..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {filteredDonors.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredDonors.map((donor) => (
            <DonorCard key={donor.id} donor={donor} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-xl font-semibold mb-2">No donors found</h2>
          <p className="text-gray-500">Try adjusting your search or check back later for new donors.</p>
        </div>
      )}
    </div>
  )
}

