import { Button, Field, Label, Input, Textarea } from '@headlessui/react'
import React from 'react'

export default function FormSection(props) {

  return (
    <div className={`${props.isBackground ? 'bg-black text-white' : ''} mt-12 md:mt-24 p-8 md:py-24 md:px-48 flex flex-col md:flex-row justify-between items-center gap-y-8`}>
        <div className="w-full md:w-4/12">
            <h1 className="font-bold text-3xl md:text-5xl leading-normal">Let's Discuss <br /> Your Next Project</h1>
            <p className="font-extralight my-10">Fill out the form or call us to <br /> schedule a free consultation.</p>
            <p className="font-semibold">Service Area:</p>
            <p className="font-extralight leading-loose">Jakarta, Bogor, Depok, Tangerang, Bekasi <br />Jl. Margahayu, Kemang, Jakarta 10310 <br />admin@oemahstudio.com <br />021-3867613</p>
        </div>
        <div className="w-full md:w-4/12"> 
            <Field className="flex flex-col mb-4">
                <Label className="font-extralight">Full Name *</Label>
                <Input name="full_name" className={`bg-transparent border-b-[1px] border-solid ${props.isBackground ? 'border-white' : 'border-black'} focus:outline-none`} />
            </Field>
            <Field className="flex flex-col mb-4">
                <Label className="font-extralight">Email *</Label>
                <Input name="email" className={`bg-transparent border-b-[1px] border-solid ${props.isBackground ? 'border-white' : 'border-black'} focus:outline-none`} />
            </Field>
            <Field className="flex flex-col mb-4">
                <Label className="font-extralight">Address *</Label>
                <Input name="address" className={`bg-transparent border-b-[1px] border-solid ${props.isBackground ? 'border-white' : 'border-black'} focus:outline-none`} />
            </Field>
            <Field className="flex flex-col mb-12">
                <Label className="font-extralight">Message *</Label>
                <Textarea name="message" className={`bg-transparent border-b-[1px] border-solid ${props.isBackground ? 'border-white' : 'border-black'} focus:outline-none`} />
            </Field>
            <Button className={`${props.isBackground ? 'bg-white text-black' : 'bg-black text-white'} py-2 px-4 text-sm  data-[hover]:bg-amber-500 w-full`}>
                Send
            </Button>
        </div>
    </div>
  )
}
