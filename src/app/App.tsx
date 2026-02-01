import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navigation } from '@/app/components/Navigation';
import { Footer } from '@/app/components/Footer';
import { Home } from '@/app/pages/Home';
import { JacksonHoleSummer } from '@/app/pages/JacksonHoleSummer';
import { JacksonHoleWinter } from '@/app/pages/JacksonHoleWinter';
import { YellowstoneSummer } from '@/app/pages/YellowstoneSummer';
import { Philosophy } from '@/app/pages/Philosophy';
import { CompanyHistory } from '@/app/pages/CompanyHistory';
import { MeetTheTeam } from '@/app/pages/MeetTheTeam';
import { Contact } from '@/app/pages/Contact';
import { FreeActivities } from '@/app/pages/FreeActivities';
import { Restaurants } from '@/app/pages/Restaurants';
import { Blog } from '@/app/pages/Blog';
import { BlogPost } from '@/app/pages/BlogPost';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trips/jackson-hole-summer" element={<JacksonHoleSummer />} />
            <Route path="/trips/jackson-hole-winter" element={<JacksonHoleWinter />} />
            <Route path="/trips/yellowstone-summer" element={<YellowstoneSummer />} />
            <Route path="/about/philosophy" element={<Philosophy />} />
            <Route path="/about/history" element={<CompanyHistory />} />
            <Route path="/about/team" element={<MeetTheTeam />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resources/free-activities" element={<FreeActivities />} />
            <Route path="/resources/restaurants" element={<Restaurants />} />
            <Route path="/resources/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
