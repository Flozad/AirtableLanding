import Image from 'next/image';

import TestimonialImage01 from '@/public/images/testimonial-01.jpg';
import TestimonialImage02 from '@/public/images/testimonial-02.jpg';
import TestimonialImage03 from '@/public/images/testimonial-03.jpg';

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4 text-gray-800">Hear It from Our Users</h2>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage01} width={96} height={96} alt="Profile picture of Alex Smith" />
                {/* Placeholder for the SVG */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">"This tool revolutionized the way we use Airtable, making our processes much more efficient."</blockquote>
              <div className=" font-medium mt-6 pt-5 border-t border-gray-700">
                <cite>- Alex Smith</cite>
                <p className="text-green-400">Product Manager</p>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage02} width={96} height={96} alt="Profile picture of Maria Garcia" />
                {/* Placeholder for the SVG */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">"The customization options are fantastic. Tailored solutions made my team's life so much easier."</blockquote>
              <div className=" font-medium mt-6 pt-5 border-t border-gray-700">
                <cite>- Maria Garcia</cite>
                <p className="text-green-400">CEO, Startech</p>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div className="relative inline-flex flex-col mb-4">
                <Image className="rounded-full" src={TestimonialImage03} width={96} height={96} alt="Profile picture of John Doe" />
                {/* Placeholder for the SVG */}
              </div>
              <blockquote className="text-lg text-gray-400 grow">"Incredible support and rich features. This toolkit made it possible for us to leverage Airtable in ways we didn't think were possible."</blockquote>
              <div className=" font-medium mt-6 pt-5 border-t border-gray-700">
                <cite>- John Doe</cite>
                <p className="text-green-400">Freelance Developer</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
