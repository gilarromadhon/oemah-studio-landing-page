import { Button } from '@headlessui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function EstimateSection() {
  const navigate = useNavigate()

  return (
    <div className="bg-black mt-24 flex flex-col items-center p-16">
        <h1 className="text-center font-bold text-3xl mb-8 text-white">Build your dream home. <br /> Tell us about your project today.</h1>
        <Button 
            className="mt-4 py-2 px-4 text-sm text-white gradient element-to-rotate hover:opacity-90"
            onClick={() => navigate("/contact")}
        >
            Get a Free Estimate
        </Button>
    </div>
  )
}
