import { Card, CardContent, CardHeader } from "../components/ui/card"
import type { Donor } from "../lib/data"
import { Phone, MapPin, Droplet } from "lucide-react"

interface DonorCardProps {
  donor: Donor
}

export default function DonorCard({ donor }: DonorCardProps) {
  return (
    <Card className="h-full">
      <CardHeader className="pb-2">
        <h3 className="text-lg font-semibold">{donor.name}</h3>
        <p className="text-sm text-gray-500">{donor.age} years old</p>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Droplet className="h-4 w-4 text-red-500" />
            <span className="font-medium">{donor.bloodType}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-gray-500" />
            <span>{donor.city}</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-gray-500" />
            <span>{donor.contact}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

