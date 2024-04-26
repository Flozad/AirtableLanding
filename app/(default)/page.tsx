export const metadata = {
  title: 'Airtable Toolkit',
  description: 'Discover a suite of mini tools designed to streamline your Airtable experience. Effortlessly integrate features for enhanced productivity and get step-by-step guidance on every tool.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
// import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
// import Pricing from '@/components/pricing' (This line is commented out to remove the pricing component)

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      {/* <Pricing /> (This component is removed from the render sequence) */}
    </>
  )
}
