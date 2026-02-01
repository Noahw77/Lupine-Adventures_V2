import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { MapPin, DollarSign, Clock, Users } from 'lucide-react';

export function FreeActivities() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1660542787473-bf01cc8a4967?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaWtpbmclMjB0cmFpbCUyMG1vdW50YWluJTIwc2NlbmVyeXxlbnwxfHx8fDE3Njk5MDQyNDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Hiking Trail"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#9F8EC6]/40 via-transparent to-[#F5F2F9]"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="max-w-3xl">
            <p className="text-[#9F8EC6] tracking-wider uppercase mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.15em', fontWeight: 500 }}>
              Resources
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
              Free & Low-Cost Activities
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#343843' }}>
              Explore Jackson Hole on any budget with our local favorites.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#F6F7F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
            You don't need to spend a fortune to experience the magic of Jackson Hole. As locals, we know the best hikes, swimming holes, and events that won't cost you much—or anything at all. Here are our top recommendations for budget-friendly adventures.
          </p>
        </div>
      </section>

      {/* Hiking & Trails */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 
            className="mb-12"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            Hiking & Trails
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Phelps Lake Overlook',
                difficulty: 'Easy-Moderate',
                distance: '2 miles roundtrip',
                cost: 'Free with park pass',
                description: 'Stunning views of Phelps Lake and Death Canyon. Perfect for families and a great introduction to the Tetons.',
                tips: 'Go early morning or late afternoon to avoid crowds. Bring water and snacks.'
              },
              {
                name: 'Jenny Lake Loop',
                difficulty: 'Easy',
                distance: '7.5 miles roundtrip',
                cost: 'Free with park pass',
                description: 'One of the most scenic loops in Grand Teton National Park. Relatively flat with incredible mountain views.',
                tips: 'Can be shortened by taking the boat shuttle across the lake (small fee).'
              },
              {
                name: 'Taggart Lake',
                difficulty: 'Easy',
                distance: '3 miles roundtrip',
                cost: 'Free with park pass',
                description: 'Family-friendly hike to a beautiful alpine lake with wildflowers in summer.',
                tips: 'Great for picnics. Look for moose in the willows near the lake.'
              },
              {
                name: 'Cache Creek Trail',
                difficulty: 'Easy-Moderate',
                distance: 'Variable',
                cost: 'Free',
                description: 'Popular trail right from town. Great for trail running, mountain biking, or hiking.',
                tips: 'Dog-friendly. Watch for mountain bikers on weekends.'
              },
              {
                name: 'Goodwin Lake',
                difficulty: 'Moderate',
                distance: '5 miles roundtrip',
                cost: 'Free',
                description: 'Less crowded than park trails. Beautiful wildflower meadows and lake views.',
                tips: 'Mosquitoes can be intense in early summer. Bring bug spray.'
              },
              {
                name: 'Snow King Mountain',
                difficulty: 'Moderate-Difficult',
                distance: '2.5 miles up',
                cost: 'Free',
                description: 'Steep switchbacks reward you with panoramic views of Jackson Hole valley.',
                tips: 'Early morning or evening to avoid heat. Can also hike down after taking the scenic lift.'
              }
            ].map((trail, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-[#9F8EC6]/10">
                <h3 
                  className="mb-3"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.5rem',
                    color: '#22242B'
                  }}
                >
                  {trail.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-[#A7B49A]/10 text-[#A7B49A] rounded-full text-xs" style={{ fontWeight: 500 }}>
                    {trail.difficulty}
                  </span>
                  <span className="px-3 py-1 bg-[#9F8EC6]/10 text-[#9F8EC6] rounded-full text-xs" style={{ fontWeight: 500 }}>
                    {trail.distance}
                  </span>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <DollarSign size={16} style={{ color: '#A7B49A' }} />
                  <span className="text-sm" style={{ color: '#A7B49A', fontWeight: 500 }}>{trail.cost}</span>
                </div>

                <p className="leading-relaxed mb-4 text-sm" style={{ color: '#343843' }}>
                  {trail.description}
                </p>

                <div className="pt-4 border-t border-[#9F8EC6]/10">
                  <p className="text-xs leading-relaxed" style={{ color: '#343843' }}>
                    <strong>Local Tip:</strong> {trail.tips}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lakes & Swimming */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 
            className="mb-12"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            Lakes & Swimming Spots
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'String Lake',
                description: 'The warmest lake in Grand Teton National Park. Shallow and perfect for families with kids. Kayak or paddleboard rentals nearby.',
                access: 'Free with park pass',
                tips: 'Arrive early for parking. Bring a picnic and make a day of it.'
              },
              {
                name: 'Slide Lake',
                description: 'Natural water slide formed by smooth rock. A local secret that\'s fun for all ages.',
                access: 'Free, north of town',
                tips: 'Water can be cold even in summer. Wear water shoes for grip on rocks.'
              },
              {
                name: 'Granite Hot Springs',
                description: 'Natural hot springs pool in the mountains. Small entrance fee but worth every penny.',
                access: '$8 per person',
                tips: 'Can get crowded on weekends. Weekday mornings are best. Open year-round.'
              },
              {
                name: 'Jackson Lake Beach',
                description: 'Sandy beaches with stunning Teton views. Great for swimming, kayaking, or just relaxing.',
                access: 'Free with park pass',
                tips: 'Colter Bay has amenities and boat rentals. Water is cold until mid-July.'
              }
            ].map((spot, index) => (
              <div key={index} className="bg-[#F6F7F5] rounded-lg p-6">
                <h3 
                  className="mb-2"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.5rem',
                    color: '#22242B'
                  }}
                >
                  {spot.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign size={16} style={{ color: '#A7B49A' }} />
                  <span className="text-sm" style={{ color: '#A7B49A', fontWeight: 500 }}>{spot.access}</span>
                </div>

                <p className="leading-relaxed mb-3" style={{ color: '#343843' }}>
                  {spot.description}
                </p>

                <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                  <strong>Local Tip:</strong> {spot.tips}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* In-Town Events */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <h2 
            className="mb-12"
            style={{ 
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2rem, 4vw, 2.5rem)',
              lineHeight: '1.2',
              color: '#22242B',
              fontWeight: 500
            }}
          >
            In-Town Events & Activities
          </h2>

          <div className="space-y-6">
            {[
              {
                event: 'Town Square Shootout',
                schedule: 'Mon-Sat, 6pm (Memorial Day - Labor Day)',
                cost: 'Free',
                description: 'Classic Old West reenactment with period costumes and staged gunfights. Campy fun for the whole family.',
                icon: <Users size={24} />
              },
              {
                event: 'Jackson Hole Farmers Market',
                schedule: 'Saturdays, 9am-1pm (Summer)',
                cost: 'Free to browse',
                description: 'Local produce, baked goods, crafts, and live music. Great for people-watching and supporting local vendors.',
                icon: <MapPin size={24} />
              },
              {
                event: 'Art Galleries (First Friday Art Walk)',
                schedule: 'First Friday of each month, 5-8pm',
                cost: 'Free',
                description: 'Explore Jackson\'s art scene with gallery openings, wine, and artist meet-and-greets.',
                icon: <Clock size={24} />
              },
              {
                event: 'National Museum of Wildlife Art',
                schedule: 'Daily, check website for hours',
                cost: 'Pay what you wish on Thursdays',
                description: 'World-class wildlife art with stunning views of the National Elk Refuge. Worth the regular admission any day.',
                icon: <MapPin size={24} />
              },
              {
                event: 'Elk Refuge Sleigh Rides',
                schedule: 'Winter only, advance reservations',
                cost: '$40 adults, $30 kids',
                description: 'Not free, but a bucket-list experience. Get up close with thousands of elk in their winter habitat.',
                icon: <Clock size={24} />
              },
              {
                event: 'Town Square Free Concerts',
                schedule: 'Thursday evenings in summer',
                cost: 'Free',
                description: 'Bring a blanket and picnic. Local bands play everything from bluegrass to rock.',
                icon: <Users size={24} />
              }
            ].map((item, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-[#9F8EC6]/10 flex items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center">
                  <div style={{ color: '#9F8EC6' }}>{item.icon}</div>
                </div>
                
                <div className="flex-1">
                  <h3 
                    className="mb-1"
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.25rem',
                      color: '#22242B'
                    }}
                  >
                    {item.event}
                  </h3>
                  
                  <div className="flex flex-wrap gap-3 mb-3 text-sm">
                    <span style={{ color: '#9F8EC6', fontWeight: 500 }}>{item.schedule}</span>
                    <span style={{ color: '#A7B49A', fontWeight: 500 }}>• {item.cost}</span>
                  </div>

                  <p className="leading-relaxed" style={{ color: '#343843' }}>
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="bg-[#9F8EC6]/5 rounded-lg p-8 border border-[#9F8EC6]/20">
            <h3 
              className="mb-4"
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.5rem',
                color: '#22242B'
              }}
            >
              Important Notes
            </h3>
            
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span style={{ color: '#9F8EC6' }}>•</span>
                <p style={{ color: '#343843' }}>
                  <strong>Park Pass:</strong> Grand Teton National Park entrance is $35 per vehicle (7-day pass) or $70 for an annual pass. Consider the America the Beautiful pass ($80) if visiting multiple parks.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: '#9F8EC6' }}>•</span>
                <p style={{ color: '#343843' }}>
                  <strong>Wildlife Safety:</strong> Always stay at least 100 yards from bears and wolves, 25 yards from other wildlife. Carry bear spray on trails.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: '#9F8EC6' }}>•</span>
                <p style={{ color: '#343843' }}>
                  <strong>Weather:</strong> Mountain weather changes quickly. Bring layers, even in summer. Afternoon thunderstorms are common.
                </p>
              </li>
              <li className="flex items-start gap-3">
                <span style={{ color: '#9F8EC6' }}>•</span>
                <p style={{ color: '#343843' }}>
                  <strong>Leave No Trace:</strong> Pack out everything you pack in. Stay on established trails to protect fragile ecosystems.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
