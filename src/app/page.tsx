import Hero from '@/components/landing-page/Hero';
import Problem from '@/components/landing-page/Problem';
import Solution from '@/components/landing-page/Solution';
import Products from '@/components/landing-page/Products';
import Testimonials from '@/components/landing-page/Testimonials';
import Offer from '@/components/landing-page/Offer';
import FAQ from '@/components/landing-page/FAQ';
import BackToTop from '@/components/landing-page/BackToTop';

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Solution />
      <Products />
      <Testimonials />
      <Offer />
      <FAQ />
      <BackToTop />
    </main>
  );
}
