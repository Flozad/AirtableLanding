export const metadata = {
  title: 'Article ORG',
  description: 'Document all your app features with no hassle. From sign ups to all internal product features, provide the step by step tutorial.',
}

import Hero from '@/components/hero'
import Features from '@/components/features'
import Newsletter from '@/components/newsletter'
import Zigzag from '@/components/zigzag'
import Testimonials from '@/components/testimonials'
import Pricing from '@/components/pricing'

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Testimonials />
      <Pricing />
    </>
  )
}
