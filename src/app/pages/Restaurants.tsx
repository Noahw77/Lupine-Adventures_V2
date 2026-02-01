import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';
import { ChefHat, Coffee, ShoppingBag, UtensilsCrossed, Star } from 'lucide-react';

export function Restaurants() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <ImageWithFallback 
            src="https://images.unsplash.com/photo-1757358957218-67e771ec07bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZmluZSUyMGRpbmluZyUyMGZvb2R8ZW58MXx8fHwxNzY5ODA2MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="Fine Dining"
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
              Restaurant Guide
            </h1>
            <p className="text-xl leading-relaxed" style={{ color: '#343843' }}>
              Our curated picks for the best dining in Jackson Hole.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-[#F6F7F5]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <p className="text-lg leading-relaxed" style={{ color: '#343843' }}>
            Jackson Hole's dining scene punches way above its weight for a mountain town. From James Beard-nominated chefs to beloved local dives, we've eaten at them all. Here are our honest recommendations, organized by occasion and appetite.
          </p>
        </div>
      </section>

      {/* Fine Dining */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center">
              <ChefHat size={28} style={{ color: '#9F8EC6' }} />
            </div>
            <h2 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Fine Dining
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'The Kitchen',
                cuisine: 'New American',
                price: '$$$$',
                description: 'Elegant yet approachable fine dining with an emphasis on seasonal ingredients. The elk tenderloin is phenomenal.',
                highlights: 'Extensive wine list, excellent service, cozy atmosphere',
                reservations: 'Book 2-3 weeks ahead for dinner',
                tip: 'Try their tasting menu for the full experience. The patio is lovely in summer.'
              },
              {
                name: 'Snake River Grill',
                cuisine: 'Contemporary American',
                price: '$$$$',
                description: 'Jackson institution known for innovative cuisine and impeccable service. Locally sourced ingredients shine.',
                highlights: 'Amazing cocktails, sommelier on staff, great for special occasions',
                reservations: 'Essential, especially in peak season',
                tip: 'The wood-fired pizzas are a lighter option but equally delicious.'
              },
              {
                name: 'Trio',
                cuisine: 'New American Bistro',
                price: '$$$',
                description: 'Upscale but not stuffy. Creative small plates perfect for sharing. The duck confit is legendary.',
                highlights: 'Great for groups, creative cocktails, knowledgeable staff',
                reservations: 'Recommended for dinner',
                tip: 'Come early for happy hour. The bar is a great spot for solo diners.'
              },
              {
                name: 'Gather',
                cuisine: 'Farm-to-Table',
                price: '$$$-$$$$',
                description: 'Seasonal menus that change based on what\'s fresh. Intimate space with a warm vibe.',
                highlights: 'Farm partnerships, unique preparations, excellent vegetarian options',
                reservations: 'Strongly recommended',
                tip: 'Ask about the chef\'s tasting menu. Wine pairings are thoughtfully curated.'
              }
            ].map((restaurant, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-[#9F8EC6]/10">
                <div className="flex items-start justify-between mb-3">
                  <h3 
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.5rem',
                      color: '#22242B'
                    }}
                  >
                    {restaurant.name}
                  </h3>
                  <span className="text-sm" style={{ color: '#A7B49A', fontWeight: 500 }}>{restaurant.price}</span>
                </div>
                
                <p className="text-sm mb-4" style={{ color: '#9F8EC6', fontWeight: 500 }}>{restaurant.cuisine}</p>
                
                <p className="leading-relaxed mb-4" style={{ color: '#343843' }}>
                  {restaurant.description}
                </p>

                <div className="mb-4 pb-4 border-b border-[#9F8EC6]/10">
                  <p className="text-sm mb-1" style={{ fontWeight: 500, color: '#22242B' }}>Highlights:</p>
                  <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>{restaurant.highlights}</p>
                </div>

                <div className="mb-4">
                  <p className="text-sm mb-1" style={{ fontWeight: 500, color: '#22242B' }}>Reservations:</p>
                  <p className="text-sm" style={{ color: '#343843' }}>{restaurant.reservations}</p>
                </div>

                <div className="pt-4 border-t border-[#9F8EC6]/10">
                  <p className="text-xs leading-relaxed" style={{ color: '#343843' }}>
                    <strong>Local Tip:</strong> {restaurant.tip}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Favorites */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#A7B49A]/10 flex items-center justify-center">
              <Star size={28} style={{ color: '#A7B49A' }} />
            </div>
            <h2 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Local Favorites
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Pinky G\'s Pizzeria',
                type: 'Pizza & Italian',
                price: '$$',
                vibe: 'Casual, family-friendly',
                why: 'Huge portions, great pizza, and a salad bar that\'s actually good. Perfect after a long day on the mountain.'
              },
              {
                name: 'Bin 22',
                type: 'Wine Bar & Tapas',
                price: '$$-$$$',
                vibe: 'Intimate, date-night',
                why: 'Impressive wine selection and small plates that pack big flavor. The charcuterie board is enormous.'
              },
              {
                name: 'The Blue Lion',
                type: 'Eclectic American',
                price: '$$$',
                vibe: 'Quirky, cozy',
                why: 'In a historic house with multiple small dining rooms. Eclectic menu with consistently great execution.'
              },
              {
                name: 'Rendezvous Bistro',
                type: 'French Bistro',
                price: '$$$',
                vibe: 'Romantic, classic',
                why: 'Authentic French cuisine in a charming setting. The duck confit and crème brûlée are perfection.'
              },
              {
                name: 'Local Restaurant & Bar',
                type: 'Farm-to-Table',
                price: '$$-$$$',
                vibe: 'Trendy, sustainable',
                why: 'Great vibe and even better food. The roasted chicken is deceptively simple and absolutely delicious.'
              },
              {
                name: 'Gun Barrel Steak & Game House',
                type: 'Steakhouse',
                price: '$$$',
                vibe: 'Western, upscale',
                why: 'If you want to try elk, bison, or antelope, this is the place. Excellent preparation of wild game.'
              }
            ].map((restaurant, index) => (
              <div key={index} className="bg-[#F6F7F5] rounded-lg p-6">
                <h3 
                  className="mb-1"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.25rem',
                    color: '#22242B'
                  }}
                >
                  {restaurant.name}
                </h3>
                
                <div className="flex items-center gap-2 mb-3 text-sm">
                  <span style={{ color: '#A7B49A', fontWeight: 500 }}>{restaurant.type}</span>
                  <span style={{ color: '#343843' }}>•</span>
                  <span style={{ color: '#343843' }}>{restaurant.price}</span>
                </div>

                <p className="text-sm mb-3" style={{ color: '#9F8EC6', fontWeight: 500 }}>
                  {restaurant.vibe}
                </p>

                <p className="text-sm leading-relaxed" style={{ color: '#343843' }}>
                  {restaurant.why}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Great Lunch Options */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-[#F6F7F5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center">
              <UtensilsCrossed size={28} style={{ color: '#9F8EC6' }} />
            </div>
            <h2 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Great Lunch Options
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                name: 'Persephone Bakery',
                description: 'Artisan breads and pastries. The lunch sandwiches on house-made bread are incredible. Get there early—stuff sells out.',
                perfect: 'Quick bite before a hike'
              },
              {
                name: 'Liberty Burger',
                description: 'Gourmet burgers with local beef. The truffle fries are addictive. Surprisingly good veggie options too.',
                perfect: 'Casual lunch with kids'
              },
              {
                name: 'Lotus Cafe',
                description: 'Organic, healthy options with great bowls and smoothies. The vibe is very Jackson Hole-chill.',
                perfect: 'Post-yoga or healthy reset'
              },
              {
                name: 'Thai Me Up',
                description: 'Authentic Thai in a food truck. Don\'t let the casual setting fool you—the food is legitimately excellent.',
                perfect: 'Quick, flavorful, affordable'
              },
              {
                name: 'Q Roadhouse',
                description: 'Solid BBQ with good portions. The pulled pork and brisket are both winners.',
                perfect: 'Hearty appetite'
              },
              {
                name: 'Nikai Sushi',
                description: 'Fresh sushi in the mountains? Surprisingly yes. The fish is flown in regularly and the quality shows.',
                perfect: 'Lighter fare or sushi craving'
              }
            ].map((restaurant, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-[#9F8EC6]/10 flex gap-4">
                <div className="flex-1">
                  <h3 
                    className="mb-2"
                    style={{ 
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.25rem',
                      color: '#22242B'
                    }}
                  >
                    {restaurant.name}
                  </h3>
                  
                  <p className="leading-relaxed mb-3 text-sm" style={{ color: '#343843' }}>
                    {restaurant.description}
                  </p>

                  <p className="text-xs" style={{ color: '#A7B49A', fontWeight: 500 }}>
                    Perfect for: {restaurant.perfect}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Takeout & Quick Bites */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#A7B49A]/10 flex items-center justify-center">
              <ShoppingBag size={28} style={{ color: '#A7B49A' }} />
            </div>
            <h2 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Takeout & Quick Bites
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { name: 'Trio Taqueria', specialty: 'Fish tacos are unreal' },
              { name: 'Creekside Market & Deli', specialty: 'Gourmet groceries + deli' },
              { name: 'Sidewinders Tavern', specialty: 'Wings and burgers to-go' },
              { name: 'The Bunnery', specialty: 'Breakfast all day, great sandwiches' },
              { name: 'Buns & Bourbon', specialty: 'Southern comfort food' },
              { name: 'Pica\'s Mexican Taqueria', specialty: 'Authentic, affordable Mexican' },
              { name: 'MacPhail\'s Burgers', specialty: 'No-frills, excellent burgers' },
              { name: 'Merry Piglets Mexican Grill', specialty: 'Big portions, good margaritas' }
            ].map((spot, index) => (
              <div key={index} className="bg-[#F6F7F5] rounded-lg p-4 text-center">
                <h4 
                  className="mb-2"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.125rem',
                    color: '#22242B'
                  }}
                >
                  {spot.name}
                </h4>
                <p className="text-sm" style={{ color: '#343843' }}>{spot.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bakeries & Cafes */}
      <section className="py-24 bg-gradient-to-b from-[#F5F2F9] to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-16 h-16 rounded-full bg-[#9F8EC6]/10 flex items-center justify-center">
              <Coffee size={28} style={{ color: '#9F8EC6' }} />
            </div>
            <h2 
              style={{ 
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: 'clamp(2rem, 4vw, 2.5rem)',
                lineHeight: '1.2',
                color: '#22242B',
                fontWeight: 500
              }}
            >
              Bakeries & Cafes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Persephone Bakery',
                description: 'The bakery everyone talks about, and for good reason. Croissants rival Paris.',
                must: 'Almond croissant, any sandwich'
              },
              {
                name: 'Cowboy Coffee Co.',
                description: 'Local chain with solid coffee and pastries. Multiple locations make it convenient.',
                must: 'Americano, breakfast burrito'
              },
              {
                name: 'Pearl Street Bagels',
                description: 'Real New York-style bagels in Wyoming. Somehow they pulled it off.',
                must: 'Everything bagel with lox'
              },
              {
                name: 'Jackson Hole Roasters',
                description: 'Local roaster with knowledgeable baristas. Great spot to work on laptop.',
                must: 'Pour over, rotating pastries'
              },
              {
                name: 'The Bunnery',
                description: 'Classic breakfast spot with house-made OSM (oats, sunflower, millet) bread.',
                must: 'OSM bread French toast'
              },
              {
                name: 'Cafe Genevieve',
                description: 'Southern-inspired breakfast in a historic cabin. The "pig candy" bacon is legendary.',
                must: 'Biscuits & gravy, pig candy'
              }
            ].map((cafe, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-[#9F8EC6]/10">
                <h3 
                  className="mb-2"
                  style={{ 
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.25rem',
                    color: '#22242B'
                  }}
                >
                  {cafe.name}
                </h3>
                
                <p className="leading-relaxed mb-3 text-sm" style={{ color: '#343843' }}>
                  {cafe.description}
                </p>

                <p className="text-xs" style={{ color: '#A7B49A', fontWeight: 500 }}>
                  Must Try: {cafe.must}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
