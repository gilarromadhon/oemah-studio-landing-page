import React from 'react'

export default function Privacy() {
  return (
    <div>
      <div className="my-16 md:my-32 flex flex-col items-center px-16">
        <h1 className="font-bold text-3xl md:text-5xl mb-8">Privacy Policy</h1>
        <div className='w-full md:w-1/2 font-thin space-y-8'>
            <p>A privacy policy is a statement that discloses some or all of the ways a website collects, uses, discloses, and manages data from its visitors and customers. It fulfills legal requirements to protect the privacy of visitors or clients.</p>
            <p>Countries have their own laws with different requirements per jurisdiction regarding the use of privacy policies. Be sure to comply with laws relevant to your activity and location.</p>
            <p>In general, what should you cover in your Terms & Conditions?</p>
            <ol type='i' className='list-decimal ml-4'>
                <li>What types of information do you collect?</li>
                <li>How do you collect information?</li>
                <li>Why do you collect such personal information?</li>
                <li>How do you store, use, share, and disclose the personal information of your site’s visitors?</li>
                <li>How (and if) do you communicate with your site’s visitors?</li>
                <li>Does your service target and collect information from Minors?</li>
                <li>Privacy policy updates</li>
                <li>Contact Information</li>
            </ol>
            <p>You can refer to this support article for more information on how to create a privacy policy.</p>
            <p className='italic'>The explanations and information provided here are general explanations, information, and examples only. You should not rely on this article as legal advice or as a recommendation regarding what you actually need to do. It’s best to seek legal advice to help you understand and assist you in creating your privacy policy.</p>
        </div>
      </div>
    </div>
  )
}
