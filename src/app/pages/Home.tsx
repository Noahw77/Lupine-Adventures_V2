import { Hero } from '@/app/components/Hero';
import { Experiences } from '@/app/components/Experiences';
import { About } from '@/app/components/About';
import { Process } from '@/app/components/Process';
import { Contact } from '@/app/components/Contact';

export function Home() {
  return (
    <>
      <Hero />
      <Experiences />
      <About />
      <Process />
      <Contact />
    </>
  );
}
