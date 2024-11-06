import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function Title(props) {
  return (
    <div className="my-16 md:my-32 flex flex-col items-center text-center px-16">
        <h1 className="font-bold text-3xl md:text-5xl mb-8">
            {props.title}
        </h1>
        <p className="text-xs md:text-base font-thin lg:w-1/2">
            <Fade>
                {props.description}
            </Fade>
        </p>
    </div>
  )
}
