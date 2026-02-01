import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { Mail, Linkedin } from 'lucide-react';

export function MeetTheTeam() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1763736809788-693e57ffe84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG91dGRvb3IlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY5NDYyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Team outdoor adventure"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#9F8EC6]/40 via-transparent to-[#F5F2F9]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <p className="text-[#9F8EC6] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              About Us
            </p>
            <h1 
              className="mb-6"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                lineHeight: '1.15',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Meet The Team
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#343843' }}>
              The locals behind your unforgettable Jackson Hole experience.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#F6F7F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
            Our team brings together decades of combined experience in guiding, hospitality, wildlife expertise, and outdoor adventure. What unites us is a genuine love for Jackson Hole and Yellowstone—and a commitment to sharing these places in ways that feel authentic, not scripted.
          </p>
        </div>
      </section>

      {/* Team Members */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: 'Sarah Mitchell',
                role: 'Co-Founder & Lead Guide',
                expertise: 'Alpine Guiding, Backcountry Skiing',
                image: 'https://images.unsplash.com/photo-1558526222-cd9f88ee8a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGd1aWRlJTIwaGlraW5nfGVufDF8fHx8MTc2OTQ2MjQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                bio: 'Sarah moved to Jackson Hole 15 years ago to ski and never left. A certified mountain guide with AMGA credentials, she has summited peaks across the Rockies and knows every trail in the Tetons. Her passion is introducing people to the mountains in a way that builds confidence and respect for the wilderness.'
              },
              {
                name: 'Marcus Chen',
                role: 'Co-Founder & Culinary Director',
                expertise: 'Food Critique, Wine Pairings',
                image: 'https://images.unsplash.com/photo-1714836403365-6659229f4d53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb21tZWxpZXIlMjB3aW5lJTIwdGFzdGluZ3xlbnwxfHx8fDE3Njk0NjI0ODB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                bio: 'A certified sommelier and former food critic for regional publications, Marcus brings a refined palate to trip planning. After years writing about restaurants in San Francisco, he moved to Jackson Hole and fell in love with the local food scene. He has personal relationships with chefs and knows which wine pairs perfectly with bison.'
              },
              {
                name: 'Jake Richardson',
                role: 'Wildlife Specialist',
                expertise: 'Naturalist Interpretation, Photography',
                image: 'https://images.unsplash.com/photo-1558526222-cd9f88ee8a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGd1aWRlJTIwaGlraW5nfGVufDF8fHx8MTc2OTQ2MjQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                bio: 'Jake is a certified interpretive guide who spent five years working for the National Park Service in Yellowstone. His encyclopedic knowledge of local wildlife behavior and ecology makes every wildlife viewing experience educational and thrilling. He is also an accomplished nature photographer who helps guests capture stunning images.'
              },
              {
                name: 'Emma Rodriguez',
                role: 'Adventure Coordinator',
                expertise: 'Whitewater Rafting, Rock Climbing',
                image: 'https://images.unsplash.com/photo-1763736809788-693e57ffe84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG91dGRvb3IlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY5NDYyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                bio: 'Emma is our adrenaline expert. A professional raft guide and climbing instructor, she has spent 12 summers guiding trips on the Snake River and teaching rock climbing in Grand Teton National Park. She excels at matching adventure activities to guest skill levels, ensuring everyone has fun safely.'
              },
              {
                name: 'Tom Whitaker',
                role: 'Winter Sports Director',
                expertise: 'Ski Instruction, Backcountry Touring',
                image: 'https://images.unsplash.com/photo-1558526222-cd9f88ee8a53?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3VudGFpbiUyMGd1aWRlJTIwaGlraW5nfGVufDF8fHx8MTc2OTQ2MjQ4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                bio: 'Tom is a 20-year Jackson Hole resident and PSIA-certified ski instructor. He knows Jackson Hole Mountain Resort like the back of his hand and has guided backcountry ski tours throughout the Tetons. His easygoing teaching style makes nervous skiers feel confident and expert skiers push their limits safely.'
              },
              {
                name: 'Lisa Park',
                role: 'Trip Planning & Logistics',
                expertise: 'Hospitality, Local Connections',
                image: 'https://images.unsplash.com/photo-1763736809788-693e57ffe84c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG91dGRvb3IlMjBhZHZlbnR1cmV8ZW58MXx8fHwxNzY5NDYyNDc5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                bio: 'Lisa moved to Jackson Hole 18 years ago and has worked in hospitality ever since. She knows every hotel owner, restaurant manager, and outfitter in town. Her talent for logistics and attention to detail ensures that every trip runs smoothly, from airport pickup to the farewell dinner.'
              }
            ].map((member, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden border border-[#9F8EC6]/10">
                <div className="aspect-square relative overflow-hidden">
                  <ImageWithFallback 
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 
                    className="mb-1"
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.5rem',
                      color: '#22242B'
                    }}
                  >
                    {member.name}
                  </h3>
                  <p className="mb-2" style={{ color: '#9F8EC6', fontWeight: 500 }}>
                    {member.role}
                  </p>
                  <p className="text-sm mb-4" style={{ color: '#A7B49A', fontWeight: 500 }}>
                    {member.expertise}
                  </p>
                  <p className="leading-relaxed text-sm" style={{ color: '#343843' }}>
                    {member.bio}
                  </p>
                  <div className="flex gap-3 mt-4">
                    <button 
                      className="p-2 rounded-full hover:bg-[#9F8EC6]/10 transition-colors"
                      aria-label="Email"
                    >
                      <Mail size={18} style={{ color: '#9F8EC6' }} />
                    </button>
                    <button 
                      className="p-2 rounded-full hover:bg-[#9F8EC6]/10 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin size={18} style={{ color: '#9F8EC6' }} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <h2 
            className="mb-8 text-center"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            How We Work Together
          </h2>
          
          <p className="text-lg leading-relaxed mb-8 text-center" style={{ color: '#343843' }}>
            Each trip benefits from our collective expertise. While one team member may be your primary guide, the entire team contributes to planning your experience. Sarah might design your hiking route, Marcus selects your restaurant reservations, Jake chooses the best wildlife viewing times, and Emma books your river float with her trusted outfitter contacts.
          </p>

          <div className="bg-[#F6F7F5] rounded-lg p-8 border border-[#9F8EC6]/10">
            <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
              This collaborative approach is what sets Lupine Adventures apart. You are not just getting one guide—you are benefiting from the combined knowledge, connections, and passion of an entire team of Jackson Hole locals who genuinely care about creating your ideal experience.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-b from-[#F5F2F9] to-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 
            className="mb-6"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            Ready to Meet the Team?
          </h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: '#343843' }}>
            Start with a free consultation and let us create your perfect Jackson Hole adventure.
          </p>
          <a 
            href="#contact"
            className="inline-block px-10 py-4 bg-[#9F8EC6] text-white rounded-md hover:bg-[#8C7AB3] transition-all duration-300"
            style={{ fontWeight: 500 }}
          >
            Book Free Consultation
          </a>
        </div>
      </section>
    </div>
  );
}
