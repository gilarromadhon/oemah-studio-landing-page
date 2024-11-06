import { Link } from 'react-router-dom';
import Bathroom from "../assets/bathroom.jpg"
import Kitchen from "../assets/kitchen.jpg"
import Interior from "../assets/interior.jpg"
import Bedroom from "../assets/bedroom.jpg"
import Exterior from "../assets/exterior.jpg"
import LivingRoom from "../assets/livingroom.jpg"
import { Fade } from 'react-awesome-reveal';
import EstimateSection from '../components/EstimateSection';
import Title from '../components/Title';

const services = [
  { 
    title: "Kitchen",
    link: "kitchen",
    image: Kitchen,
    description: "Transform your kitchen into a modern and functional space with our tailored design and renovation services. From cabinetry to lighting, we focus on creating a kitchen that is both stylish and efficient." 
  },
  { 
    title: "Bathroom", 
    link: "bathroom", 
    image: Bathroom,
    description: "Our bathroom designs bring together elegance and practicality. We specialize in creating luxurious, spa-like spaces that cater to both aesthetics and functionality, tailored to your preferences." 
  },
  { 
    title: "Living Room", 
    link: "living_room", 
    image: LivingRoom,
    description: "Craft a cozy and inviting living room that reflects your style. Our team focuses on maximizing comfort and functionality, blending design elements that enhance your home’s central space." 
  },
  { 
    title: "Interior", 
    link: "interior", 
    image: Interior,
    description: "We offer comprehensive interior design services, focusing on personalized and cohesive spaces that match your vision. Let us help you create a harmonious interior tailored to your lifestyle." 
  },
  { 
    title: "Exterior", 
    link: "exterior", 
    image: Exterior,
    description: "Enhance your home’s curb appeal and outdoor living experience with our custom exterior design services. From patios to facades, we focus on creating a beautiful, welcoming exterior." 
  },
  { 
    title: "Bedroom", 
    link: "bedroom", 
    image: Bedroom,
    description: "Turn your bedroom into a sanctuary with our design solutions focused on comfort, style, and tranquility. We create spaces perfect for relaxation and rejuvenation, tailored to your tastes." 
  },
];

export default function Service() {

  return (
    <div>
      <Title 
          title="Our Services"
          description="At Oemah Studio, we offer a comprehensive range of services to meet all your interior and construction needs. From initial design consultation and budget planning to final execution, our team is dedicated to creating spaces that are both beautiful and functional. Whether you're looking to revamp a single room, remodel your entire home, or construct a new commercial space, we bring your vision to life with precision, quality, and creativity. Our client-focused approach ensures each project is customized to suit your unique style and requirements."
      />

      <div className='grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-y-32 px-8 md:px-16'>
        <Fade cascade damping={0.1}>
          {services.map((service, index) => (
            <Link to={`/service/${service.link}`} key={service.title} className='flex flex-col gap-8 text-center'>
              <div 
                className="flex bg-cover bg-center aspect-square transition-transform duration-300 hover:scale-105 hover:cursor-pointer" 
                style={{ backgroundImage: `url(${service.image})` }}
              ></div>
              <h1 className="font-semibold text-xl md:text-3xl">{service.title}</h1>
              <p className="text-xs md:text-base font-thin px-8">{service.description}</p>
            </Link>
          ))}
        </Fade>
      </div>

      <EstimateSection />
    </div>
  )
}