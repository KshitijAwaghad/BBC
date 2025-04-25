export type Donor = {
  id: number
  name: string
  age: number
  bloodType: string
  city: string
  contact: string
}

export type User = {
  id: number
  name: string
  email: string
  password: string
}

export const bloodTypes = ["A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"]

export const cities = [
  "Jalgaon",
  "Mumbai",
  "Delhi",
  "Bangalore",
  "Chennai",
  "Kolkata",
  "Hyderabad",
  "Pune",
  "Ahmedabad",
  "Jaipur",
  "Lucknow",
]

export const initialData = {
  donors: [
    {
      id: 1,
      name: "Rahul Kumar",
      age: 25,
      bloodType: "A+",
      city: "Mumbai",
      contact: "9876543210",
    },
    {
      id: 2,
      name: "Harpreet Singh",
      age: 35,
      bloodType: "O-",
      city: "Delhi",
      contact: "9123456789",
    },
    {
      id: 3,
      name: "Arvind Rao",
      age: 22,
      bloodType: "B+",
      city: "Bangalore",
      contact: "9988776655",
    },
    {
      id: 4,
      name: "Deepika Patel",
      age: 30,
      bloodType: "AB+",
      city: "Chennai",
      contact: "9876123450",
    },
    {
      id: 5,
      name: "Eshan Gupta",
      age: 27,
      bloodType: "O+",
      city: "Mumbai",
      contact: "9871234560",
    },
  ],
  users: [
    {
      id: 1,
      name: "Priya Sharma",
      email: "priya@example.com",
      password: "password123",
    },
  ],
}

