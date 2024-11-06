import BannerPotrait from "../assets/banner-potrait.jpg"
import Progress1 from "../assets/progress1.jpg"
import Progress2 from "../assets/progress2.jpg"
import Progress3 from "../assets/progress3.jpg"
import Progress4 from "../assets/progress4.jpg"
import { Fade } from 'react-awesome-reveal'
import EstimateSection from '../components/EstimateSection'
import Title from "../components/Title"

export default function About() {

  return (
    <div>
        <Title 
            title={<div>About <span className='text-amber-600'>Oemah</span> Studio</div>}
            description="Oemah Studio specializes in crafting beautiful and functional spaces that enhance daily living and align with each client's unique vision. From concept to completion, our team of experienced designers and craftsmen are dedicated to delivering exceptional results. We blend creativity, functionality, and quality to bring your ideas to life, ensuring every detail reflects our commitment to excellence in the industry. Let us help you transform your space into something truly remarkable."
        />

        <div 
            className="relative flex flex-col bg-cover bg-center bg-fixed min-h-[400px] lg:min-h-[800px] bg-no-repeat items-start justify-center px-16"
            style={{
                backgroundImage: `url(${BannerPotrait})`,
            }}
        >
        </div>

        <Title 
            title="Our Process"
            description="Our process is centered around collaboration, precision, and attention to detail. We start by understanding your vision, goals, and lifestyle to create a design that reflects your unique needs. From the initial concept through to the final installation, our team manages every step with transparency and care, ensuring that your project is delivered on time, within budget, and to the highest quality standards. Experience a seamless journey to your dream space with Oemah Studio."
        />

       <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
            <Fade cascade damping={0.1}>
                <div className="flex bg-cover bg-center aspect-square" style={{ backgroundImage: `url(${Progress1})` }}></div>
                <div className='bg-gray-300 aspect-square flex flex-col items-center justify-center text-center'>
                    <h1 className="font-semibold text-xl md:text-3xl mb-8">Design <br /> Preconstruction</h1>
                    <p className="text-xs md:text-base font-thin w-1/2">
                        We begin by understanding your vision and crafting a tailored design plan. Every detail is meticulously planned to ensure a seamless transition from concept to reality.
                    </p>
                </div>
                <div className="flex bg-cover bg-center aspect-square" style={{ backgroundImage: `url(${Progress2})` }}></div>
                <div className='bg-gray-300 aspect-square flex flex-col items-center justify-center text-center'>
                    <h1 className="font-semibold text-xl md:text-3xl mb-8">Budget Estimate <br /> Design & Construction</h1>
                    <p className="text-xs md:text-base font-thin w-1/2">
                        We provide transparent budget estimates, balancing quality with cost-efficiency. Our team works closely with you to align on materials, design, and expectations.
                    </p>
                </div>
                <div className='bg-gray-300 aspect-square flex flex-col items-center justify-center text-center'>
                    <h1 className="font-semibold text-xl md:text-3xl mb-8">Field <br /> Consultation</h1>
                    <p className="text-xs md:text-base font-thin w-1/2">
                        Our experts offer on-site consultations to address any adjustments, ensuring the project meets our high standards and your satisfaction at every stage.
                    </p>
                </div>
                <div className="flex bg-cover bg-center aspect-square" style={{ backgroundImage: `url(${Progress3})` }}></div>
                <div className='bg-gray-300 aspect-square flex flex-col items-center justify-center text-center'>
                    <h1 className="font-semibold text-xl md:text-3xl mb-8">Completion & <br /> Final Touches</h1>
                    <p className="text-xs md:text-base font-thin w-1/2">
                        As we near completion, we focus on the finishing touches that bring everything together. Your dream space is carefully inspected to ensure it exceeds expectations.
                    </p>
                </div>
                <div className="flex bg-cover bg-center aspect-square" style={{ backgroundImage: `url(${Progress4})` }}></div>
            </Fade>
        </div>

        <div className="my-24 flex flex-col items-center px-16 gap-8 text-center">
            <h1 className="font-bold text-3xl md:text-5xl">Our Quality Guarantee</h1>
            <Fade cascade damping={0.3} className='flex flex-col items-center'>
                <p className="text-xs md:text-base font-thin lg:w-1/2">
                    At Oemah Studio, we believe that quality is the foundation of trust. Our team is dedicated to bringing exceptional craftsmanship and attention to detail in every project, whether it's a small remodel or a large-scale construction. We understand that your home or business is a reflection of you, and we are honored to help bring your vision to life with the highest standards of quality.
                </p>
                <p className="text-xs md:text-base font-thin lg:w-1/2">
                    We are committed to using only the finest materials and most reliable construction methods to ensure a durable, lasting outcome. Our designers and builders work closely together to ensure each project not only looks beautiful but also stands the test of time. From choosing the right finishes to implementing innovative building techniques, every decision is made with your satisfaction and safety in mind.
                </p>
                <p className="text-xs md:text-base font-thin lg:w-1/2">
                    Your trust is our priority, and that’s why we have implemented a meticulous quality control process. Every phase of the project is carefully inspected, and we maintain an open line of communication to keep you informed every step of the way. When you choose Oemah Studio, you are choosing peace of mind, knowing that your project is in expert hands and built to meet, and even exceed, your expectations.
                </p>
            </Fade>
        </div>

        <EstimateSection />
    </div>
  )
}