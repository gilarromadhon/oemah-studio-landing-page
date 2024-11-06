import { Button } from "@headlessui/react"
import React from "react"
import BannerLandscape from "../assets/banner-landscape.jpg"
import BannerPotrait from "../assets/banner-potrait.jpg"
import Kitchen from "../assets/kitchen.jpg"
import Bathroom from "../assets/bathroom.jpg"
import Interior from "../assets/interior.jpg"
import Client1 from "../assets/client1.jpg"
import Client2 from "../assets/client2.jpg"
import Client3 from "../assets/client3.jpg"
import Client4 from "../assets/client4.jpg"
import { ImQuotesRight } from "react-icons/im"
import { useNavigate } from "react-router-dom"
import { GiReceiveMoney } from "react-icons/gi"
import { SiHomeadvisor } from "react-icons/si"
import { RiServiceFill } from "react-icons/ri"
import { FaFileShield } from "react-icons/fa6"
import { LazyLoadImage } from "react-lazy-load-image-component"
import { Fade, Zoom } from "react-awesome-reveal"
import FormSection from "../components/FormSection"

export default function Home() {
  const navigate = useNavigate();

  const services = [
    { name: "Kitchen", image: Kitchen },
    { name: "Bathroom", image: Bathroom },
    { name: "Interior", image: Interior },
  ];

  const testimonials = [
    { name: "Dody Renaldi", text: "The remodeling exceeded our expectations. The team’s attention to detail and commitment to quality transformed our space into a modern, functional home. Highly recommend!" },
    { name: "Imelda Riani", text: "From design to completion, the process was smooth and transparent. Their expertise in interior design gave our office a fresh, professional look. The results were beyond our expectations!" },
    { name: "Bella Bianca", text: "Incredible craftsmanship and communication throughout the renovation. The team made sure every aspect of the project met our standards, leaving us thrilled with our newly renovated kitchen!" },
  ];

  return (
    <div>
        <div className="px-8 md:px-16">
            <div 
                className="relative flex flex-col bg-cover bg-center md:bg-fixed aspect-square md:aspect-auto md:min-h-[800px] bg-no-repeat items-center md:items-start justify-center px-16"
                style={{
                    backgroundImage: `url(${BannerLandscape})`,
                }}
            >
                <div className="absolute inset-0 z-0 bg-black opacity-20" />
                <div className="absolute z-10 text-center md:text-left">
                    <h1 className="text-2xl md:text-7xl text-white font-bold leading-normal">Leading Company in <br /> Remodeling & <br /> Renovation</h1>
                    <Button 
                        className="mt-8 md:mt-16 py-2 px-4 text-sm text-white gradient element-to-rotate hover:opacity-90"
                        onClick={() => navigate("/contact")}
                    >
                        Get a Free Estimate
                    </Button>
                </div>
            </div>
        </div>

        <div className="mt-16 px-8 md:px-16 flex flex-col-reverse md:flex-row gap-y-8">
            <div
                className="bg-cover bg-right md:bg-fixed min-h-[400px] md:min-h-[800px] w-full bg-no-repeat"
                style={{ backgroundImage: `url(${BannerPotrait})` }}
            >
            </div>
            <div className="flex flex-col items-center justify-center">
                <div className="px-0 md:px-16">
                    <Fade cascade damping={0.5} direction="up">
                        <h1 className="text-3xl md:text-5xl font-bold leading-normal">Industry Pioneer <br /> Remodeling in Jakarta</h1>
                        <p className="text-xs md:text-base font-thin mt-6 mb-8 text-left">Leading the way in innovative remodeling solutions, we bring modern design and functionality to Jakarta's spaces. With a commitment to quality craftsmanship and customer satisfaction, we transform homes and businesses to meet the highest standards of comfort and style.</p>
                        <Button 
                            className="bg-black py-2 px-4 text-sm text-white data-[hover]:bg-amber-500"
                            onClick={() => navigate('/about')}
                        >
                            About Us
                        </Button>
                    </Fade>
                </div>
            </div>
        </div>

        <div className="mt-32 flex flex-col items-center px-16">
            <h1 className="font-bold text-3xl md:text-5xl mb-12 text-center">Reasons to Choose Us</h1>
            <div className="flex flex-col md:flex-row gap-16 h-auto md:h-80 items-center w-full">
                <Fade cascade damping={0.5} direction="bottom">
                    <div className="text-center flex flex-col flex-1 items-center gap-8">
                        <GiReceiveMoney className="w-8 h-8" />
                        <h1 className="text-amber-600 font-bold text-xl">Easy <br /> Financing</h1>
                        <p className="text-xs md:text-base font-thin">
                            We offer flexible financing options tailored to suit your budget, making your remodeling dreams more accessible than ever.
                        </p>
                    </div>
                    <div className="text-center flex flex-col flex-1 items-center gap-8">
                        <SiHomeadvisor className="w-8 h-8" />
                        <h1 className="text-amber-600 font-bold text-xl">Free Consultation <br /> at Your Home</h1>
                        <p className="text-xs md:text-base font-thin">
                            Schedule a complimentary in-home consultation where we discuss your vision and provide professional guidance.
                        </p>
                    </div>
                    <div className="text-center flex flex-col flex-1 items-center gap-8">
                        <RiServiceFill className="w-8 h-8"  />
                        <h1 className="text-amber-600 font-bold text-xl">Best Customer <br /> Service</h1>
                        <p className="text-xs md:text-base font-thin">
                            Our dedicated team is committed to delivering exceptional service, ensuring a smooth and satisfying experience.
                        </p>
                    </div>
                    <div className="text-center flex flex-col flex-1 items-center gap-8">
                        <FaFileShield className="w-8 h-8" />
                        <h1 className="text-amber-600 font-bold text-xl">Licensed & <br /> Insured</h1>
                        <p className="text-xs md:text-base font-thin">
                            We are fully licensed and insured, giving you peace of mind and protection throughout your remodeling journey.
                        </p>
                    </div>
                </Fade>
            </div>
        </div>

        <div className="bg-gray-300 my-24 flex flex-col items-center px-8 md:px-16 py-24">
            <h1 className="font-bold text-3xl md:text-5xl mb-24 text-center">Our Services Include</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 h-[800px] items-center w-full">
                {services.map((service) => (
                    <div key={service.name} className="relative flex bg-cover bg-center h-full items-center justify-center" style={{ backgroundImage: `url(${service.image})` }} >
                        <div className="absolute inset-0 z-0 bg-black opacity-40" />
                        <h1 className="absolute z-10 text-xl md:text-3xl text-white font-bold leading-normal">{service.name}</h1>
                    </div>
                ))}
            </div>
            <Button className="mt-24 bg-black py-2 px-4 text-sm text-white data-[hover]:bg-amber-500" onClick={() => navigate("/service")}>
                View All Services
            </Button>
        </div>

        <div className="my-24 flex flex-col items-center px-12">
            <h1 className="font-bold text-3xl md:text-5xl mb-24 text-center">What Our Clients Say</h1>
            <div className="flex flex-col md:flex-row items-center justify-center w-full md:w-8/12 gap-12">
                <Fade cascade damping={0.3}>
                    {testimonials.map((testimonial) => (
                        <div key={testimonial.name} className="flex flex-col items-center h-full text-center">
                            <ImQuotesRight size={36} />
                            <p className="text-xs md:text-base font-thin my-8">{testimonial.text}</p>
                            <h1 className="text-amber-600 font-bold text-xl">{testimonial.name}</h1>
                        </div>
                    ))}
                </Fade>
            </div>
        </div>

        <FormSection isBackground />

        <div className="my-16 md:my-32 flex flex-col items-center">
            <div className="flex flex-col md:flex-row justify-between items-center w-full md:w-1/2">
                <Zoom cascade damping={0.3}>
                <LazyLoadImage
                    src={Client1}
                    alt="client"
                    className="w-32"
                />
                <LazyLoadImage
                    src={Client2}
                    alt="client"
                    className="w-32"
                />
                <LazyLoadImage
                    src={Client3}
                    alt="client"
                    className="w-32"
                />
                <LazyLoadImage
                    src={Client4}
                    alt="client"
                    className="w-32"
                />
                </Zoom>
            </div>
        </div>
    </div>
  )
}
