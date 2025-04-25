"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Button } from "../../components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select"
import { bloodTypes, cities, initialData } from "../../lib/data"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "../../components/ui/alert-dialog"
import { UserPlus } from "lucide-react"

export default function RegisterDonor() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    bloodType: "",
    city: "",
    contact: "",
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showSuccess, setShowSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user selects
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.age) {
      newErrors.age = "Age is required"
    } else if (isNaN(Number(formData.age)) || Number(formData.age) < 18 || Number(formData.age) > 65) {
      newErrors.age = "Age must be between 18 and 65"
    }

    if (!formData.bloodType) {
      newErrors.bloodType = "Blood type is required"
    }

    if (!formData.city) {
      newErrors.city = "City is required"
    }

    if (!formData.contact.trim()) {
      newErrors.contact = "Contact number is required"
    } else if (!/^\d{10}$/.test(formData.contact)) {
      newErrors.contact = "Contact must be a 10-digit number"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      // In a real app, this would be an API call
      // For now, we'll just simulate adding to our data
      const newDonor = {
        id: initialData.donors.length + 1,
        name: formData.name,
        age: Number(formData.age),
        bloodType: formData.bloodType,
        city: formData.city,
        contact: formData.contact,
      }

      initialData.donors.push(newDonor)
      setShowSuccess(true)
    }
  }

  const handleSuccessClose = () => {
    setShowSuccess(false)
    // Reset form
    setFormData({
      name: "",
      age: "",
      bloodType: "",
      city: "",
      contact: "",
    })
    // Redirect to donors page
    router.push("/donors")
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Register as a Blood Donor</h1>

      <Card>
        <CardHeader>
          <CardTitle>Donor Registration</CardTitle>
          <CardDescription>Fill out the form below to register as a blood donor</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="Enter your full name"
                value={formData.name}
                onChange={handleChange}
                className={errors.name ? "border-red-500" : ""}
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="age">Age</Label>
              <Input
                id="age"
                name="age"
                type="number"
                placeholder="Enter your age"
                min="18"
                max="65"
                value={formData.age}
                onChange={handleChange}
                className={errors.age ? "border-red-500" : ""}
              />
              {errors.age && <p className="text-red-500 text-sm">{errors.age}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="bloodType">Blood Type</Label>
              <Select value={formData.bloodType} onValueChange={(value) => handleSelectChange("bloodType", value)}>
                <SelectTrigger id="bloodType" className={errors.bloodType ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your blood type" />
                </SelectTrigger>
                <SelectContent>
                  {bloodTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.bloodType && <p className="text-red-500 text-sm">{errors.bloodType}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Select value={formData.city} onValueChange={(value) => handleSelectChange("city", value)}>
                <SelectTrigger id="city" className={errors.city ? "border-red-500" : ""}>
                  <SelectValue placeholder="Select your city" />
                </SelectTrigger>
                <SelectContent>
                  {cities.map((city) => (
                    <SelectItem key={city} value={city}>
                      {city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact">Contact Number</Label>
              <Input
                id="contact"
                name="contact"
                placeholder="Enter your 10-digit contact number"
                value={formData.contact}
                onChange={handleChange}
                className={errors.contact ? "border-red-500" : ""}
              />
              {errors.contact && <p className="text-red-500 text-sm">{errors.contact}</p>}
            </div>

            <Button type="submit" className="w-full bg-red-500 hover:bg-red-600 text-white">
              <UserPlus className="mr-2 h-4 w-4" />
              Register as Donor
            </Button>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={showSuccess} onOpenChange={setShowSuccess}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Registration Successful!</AlertDialogTitle>
            <AlertDialogDescription>
              Thank you for registering as a blood donor. Your information has been added to our database.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={handleSuccessClose}>Continue</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}

