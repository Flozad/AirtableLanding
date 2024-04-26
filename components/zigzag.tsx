import Image from 'next/image';

import FeatImage01 from '@/public/images/focused.png';
import FeatImage02 from '@/public/images/support.png';
import FeatImage03 from '@/public/images/traffic.png';

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">Enhance Your Airtable Experience</div>
            <h1 className="h2 mb-4 text-gray-800">Powerful Extensions for Airtable</h1>
            <p className="text-xl text-gray-400">Supercharge your Airtable bases with tools designed for productivity and ease.</p>
          </div>

          {/* Items */}
          <div className="grid gap-20">

            {/* 1st item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image src={FeatImage01} width={540} height={405} alt="Efficient Workflow" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 text-gray-800 mb-3">Efficient Workflow Automation</h3>
                  <p className="text-xl text-gray-400 mb-4">Create complex workflows effortlessly with our extensions, saving hours of manual work.</p>
                  {/* List of benefits */}
                </div>
              </div>
            </div>

            {/* 2nd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 rtl" data-aos="fade-up">
                <Image src={FeatImage02} width={540} height={405} alt="Data Integration" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-left">
                <div className="md:pl-4 lg:pl-12 xl:pl-16">
                  <h3 className="h3 text-gray-800 mb-3">Seamless Data Integration</h3>
                  <p className="text-xl text-gray-400 mb-4">Integrate data sources with Airtable effortlessly, making your base a central hub for all your information.</p>
                  {/* List of benefits */}
                </div>
              </div>
            </div>

            {/* 3rd item */}
            <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
              {/* Image */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1" data-aos="fade-up">
                <Image src={FeatImage03} width={540} height={405} alt="Custom Tool Development" />
              </div>
              {/* Content */}
              <div className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6" data-aos="fade-right">
                <div className="md:pr-4 lg:pr-12 xl:pr-16">
                  <h3 className="h3 text-gray-800 mb-3">Custom Tool Development</h3>
                  <p className="text-xl text-gray-400 mb-4">Need a specific tool for your Airtable? Our custom development service can build it for you.</p>
                  {/* List of benefits */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
