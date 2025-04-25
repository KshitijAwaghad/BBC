"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { Button } from "../../components/ui/button"
import { bloodTypes, cities, initialData, type Donor } from "../../lib/data"
import DonorCard from "../../components/donor-card"
import { Search } from "lucide-react"

export default function FindDonor() {
  const [city, setCity] = useState<string>("")
  const [bloodType, setBloodType] = useState<string>("")
  const [searchResults, setSearchResults] = useState<Donor[]>([])
  const [hasSearched, setHasSearched] = useState(false)

  const handleSearch = () => {
    const results = initialData.donors.filter((donor) => {
      const cityMatch = !city || donor.city === city
      const bloodTypeMatch = !bloodType || donor.bloodType === bloodType
      return cityMatch && bloodTypeMatch
    })

    setSearchResults(results)
    setHasSearched(true)
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Find a Blood Donor</h1>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Search Criteria</CardTitle>
          <CardDescription>Select a city and blood type to find donors near you</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="space-y-2">
              <label htmlFor="city" className="text-sm font-medium">
                City
              </label>
              <Select value={city} onValueChange={setCity}>
                <SelectTrigger id="city">
                  <SelectValue placeholder="Select a city" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any City</SelectItem>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="bloodType" className="text-sm font-medium">
                Blood Type
              </label>
              <Select value={bloodType} onValueChange={setBloodType}>
                <SelectTrigger id="bloodType">
                  <SelectValue placeholder="Select blood type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="any">Any Blood Type</SelectItem>
                  {bloodTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <Button onClick={handleSearch} className="w-full bg-red-500 hover:bg-red-600 text-white">
            <Search className="mr-2 h-4 w-4" />
            Search Donors
          </Button>
        </CardContent>
      </Card>

      {hasSearched && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">
            {searchResults.length > 0
              ? `Found ${searchResults.length} donor${searchResults.length !== 1 ? "s" : ""}`
              : "No donors found matching your criteria"}
          </h2>

          {searchResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map((donor) => (
                <DonorCard key={donor.id} donor={donor} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

