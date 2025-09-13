"use client";

import Navigation from '../components/Navigation';
import NailsSlider from '../components/NailsSlider';
import Link from 'next/link';

export default function HomePage() {
  const services = [
    {
      name: 'Hair Services',
      icon: '💇‍♀️',
      description: 'Cutting, coloring, styling, and treatments for all hair types.',
      href: '/contact#hair'
    },
    {
      name: 'Makeup',
      icon: '💄',
      description: 'Professional makeup for everyday, events, and bridal occasions.',
      href: '/contact#makeup'
    },
    {
      name: 'Nails',
      icon: '💅',
      description: 'Manicures, pedicures, nail art, and press-on nail applications.',
      href: '/contact#nails'
    },
    {
      name: 'Facial',
      icon: '✨',
      description: 'Deep cleansing, hydrating, and rejuvenating facial treatments.',
      href: '/contact#facial'
    },
    {
      name: 'Waxing',
      icon: '🕯️',
      description: 'Professional hair removal services for smooth, silky skin.',
      href: '/contact#waxing'
    },
    {
      name: 'Threading',
      icon: '🧵',
      description: 'Precise eyebrow shaping and facial hair removal.',
      href: '/contact#threading'
    },
    {
      name: 'Bridal',
      icon: '👰',
      description: 'Complete bridal beauty packages for your special day.',
      href: '/contact#bridal'
    }
  ];

  const specialties = [
    {
      name: 'Hair Straightening',
      description: 'Keratin treatments & chemical straightening',
      price: 'Starting AED 200'
    },
    {
      name: 'Blow Dry',
      description: 'Professional styling with lasting hold',
      price: 'Starting AED 50'
    },
    {
      name: 'Mehendi',
      description: 'Traditional & contemporary henna designs',
      price: 'Starting AED 30'
    },
    {
      name: 'Press-on Nails',
      description: 'Instant glamorous nail transformations',
      price: 'Starting AED 80'
    }
  ];

  const whyChooseUs = [
    {
      icon: '🏆',
      title: 'Expert Professionals',
      description: 'Certified beauticians with years of experience'
    },
    {
      icon: '🕒',
      title: 'Always Open',
      description: 'Daily 10 AM - 10 PM, 365 days a year'
    },
    {
      icon: '✨',
      title: 'Premium Products',
      description: 'High-quality, internationally acclaimed brands'
    },
    {
      icon: '📍',
      title: 'Prime Location',
      description: 'Convenient location in Meena Bazaar, Bur Dubai'
    }
  ];

  const testimonials = [
    {
      name: 'Fatima Al-Zahra',
      text: 'Amazing nail work! The press-on nails look so natural and lasted for weeks. Highly recommended!',
      rating: 5,
      service: 'Press-on Nails'
    },
    {
      name: 'Priya Sharma',
      text: 'Best hair straightening in Dubai! My hair has never been smoother. Professional service.',
      rating: 5,
      service: 'Hair Straightening'
    },
    {
      name: 'Sarah Johnson',
      text: 'Beautiful bridal mehendi for my wedding. The design was intricate and perfect. Thank you!',
      rating: 5,
      service: 'Bridal Mehendi'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pb-mobile">
      <Navigation />
      
      {/* Hero Section with Nails Slider */}
      <section className="relative">
        <div className="container mx-auto px-4 py-8">
          <NailsSlider />
          
          {/* Headline and CTAs */}
          <div className="text-center mt-12 space-y-6">
            <div>
              <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Your Beauty Destination
              </h1>
              <h3 className="font-playfair text-2xl md:text-3xl lg:text-4xl text-gold mt-2">
                in Bur Dubai
              </h3>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Experience premium beauty services at Shobha Beauty Studio & Nails in Meena Bazaar. 
              Specializing in stunning nail art and complete beauty transformations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <Link
                href="/contact"
                className="bg-gold text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 hover:shadow-lg transform hover:scale-105"
              >
                Book Appointment
              </Link>
              <a
                href="tel:+97143591532"
                className="border-2 border-gold text-gold px-8 py-4 rounded-full font-semibold text-lg hover:bg-gold hover:text-black transition-all duration-300"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gold">Shobha Beauty Studio</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Your trusted beauty partner in Bur Dubai with exceptional service and results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-black/50 backdrop-blur-sm border border-gold/20 hover:border-gold/40 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-playfair text-xl font-semibold text-gold mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gold">Services</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Comprehensive beauty services to enhance your natural beauty and boost your confidence
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Link
                key={index}
                href={service.href}
                className="group p-6 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-gold/50 transition-all duration-300"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="font-playfair text-xl font-semibold text-gold mb-3">
                  {service.name}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Strip */}
      <section className="py-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gold">Specialties</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Expert services that make us the premier beauty destination in Bur Dubai
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specialties.map((specialty, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-black/30 backdrop-blur-sm border border-gold/20">
                <h3 className="font-playfair text-xl font-semibold text-gold mb-2">
                  {specialty.name}
                </h3>
                <p className="text-gray-300 text-sm mb-3">
                  {specialty.description}
                </p>
                <p className="text-gold font-semibold text-lg">
                  {specialty.price}
                </p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 bg-gold text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300"
            >
              <span>View All Services</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Highlights */}
      <section className="py-16 bg-gray-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="text-gold">Offers</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Special packages and pricing for our most popular services
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Bridal Glow Package */}
            <div className="relative p-8 rounded-2xl bg-gradient-to-br from-gold/20 to-gold/5 border border-gold/30">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gold text-black px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <div className="text-center">
                <div className="text-5xl mb-4">👰</div>
                <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
                  Bridal Glow Package
                </h3>
                <div className="space-y-2 text-sm text-gray-300 mb-6">
                  <p>✓ Bridal Makeup</p>
                  <p>✓ Hair Styling</p>
                  <p>✓ Mehendi Design</p>
                  <p>✓ Manicure & Pedicure</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">AED 800</span>
                  <span className="text-sm text-gray-400 line-through ml-2">AED 1000</span>
                </div>
                <Link
                  href="/contact"
                  className="block bg-gold text-black py-3 px-6 rounded-full font-semibold hover:bg-yellow-500 transition-all"
                >
                  Book Package
                </Link>
              </div>
            </div>

            {/* Nails Glam Pack */}
            <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-gold/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-5xl mb-4">💅</div>
                <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
                  Nails Glam Pack
                </h3>
                <div className="space-y-2 text-sm text-gray-300 mb-6">
                  <p>✓ Press-on Nails</p>
                  <p>✓ Nail Art Design</p>
                  <p>✓ Hand Treatment</p>
                  <p>✓ Cuticle Care</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">AED 180</span>
                  <span className="text-sm text-gray-400 line-through ml-2">AED 230</span>
                </div>
                <Link
                  href="/contact"
                  className="block border border-gold text-gold py-3 px-6 rounded-full font-semibold hover:bg-gold hover:text-black transition-all"
                >
                  Book Package
                </Link>
              </div>
            </div>

            {/* Monthly Care */}
            <div className="p-8 rounded-2xl bg-gray-800/50 border border-gray-700 hover:border-gold/50 transition-all duration-300">
              <div className="text-center">
                <div className="text-5xl mb-4">🔄</div>
                <h3 className="font-playfair text-2xl font-bold text-gold mb-4">
                  Monthly Care
                </h3>
                <div className="space-y-2 text-sm text-gray-300 mb-6">
                  <p>✓ 2 Blow Dry Sessions</p>
                  <p>✓ 1 Facial Treatment</p>
                  <p>✓ Eyebrow Threading</p>
                  <p>✓ 20% off other services</p>
                </div>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">AED 250</span>
                  <span className="text-sm text-gray-400">/month</span>
                </div>
                <Link
                  href="/contact"
                  className="block border border-gold text-gold py-3 px-6 rounded-full font-semibold hover:bg-gold hover:text-black transition-all"
                >
                  Subscribe
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gold">Work</span>
            </h2>
            <p className="text-gray-300 text-lg">
              See the beautiful transformations we create every day
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-2xl bg-gray-800 overflow-hidden group">
                <img
                  src={`https://images.unsplash.com/photo-160465489461${i}-df63bc536371?w=400&h=400&fit=crop&crop=center`}
                  alt={`Beauty work showcase ${i} - Professional nail art and beauty transformations at Shobha Beauty Studio`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  onError={(e) => {
                    const target = e.currentTarget as HTMLImageElement;
                    target.src = `https://via.placeholder.com/400x400/C6A664/000000?text=Gallery+${i}`;
                  }}
                />
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link
              href="/contact"
              className="inline-flex items-center space-x-2 border-2 border-gold text-gold px-8 py-3 rounded-full font-semibold hover:bg-gold hover:text-black transition-all duration-300"
            >
              <span>View Full Gallery</span>
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-gold">Clients Say</span>
            </h2>
            <p className="text-gray-300 text-lg">
              Real experiences from satisfied customers
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="p-6 rounded-2xl bg-black/50 border border-gray-800">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold text-xl">⭐</span>
                  ))}
                </div>
                <p className="text-gray-300 mb-4 leading-relaxed italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <p className="font-semibold text-gold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.service}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Preview */}
      <section className="py-16 bg-gradient-to-r from-gold/10 via-gold/5 to-gold/10">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-4">
              Follow Us on <span className="text-gold">Instagram</span>
            </h2>
            <p className="text-gray-300 text-lg mb-6">
              Get daily inspiration and see our latest work @shobhasaloon
            </p>
            <a
              href="https://instagram.com/shobhasaloon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
            >
              <span>📸</span>
              <span>Follow @shobhasaloon</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Map Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold mb-6">
                Visit Our <span className="text-gold">Studio</span>
              </h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <span className="text-gold text-2xl">📍</span>
                  <div>
                    <p className="font-semibold">Location</p>
                    <p className="text-gray-300">Meena Bazaar, Bur Dubai, UAE</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-gold text-2xl">📞</span>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <a href="tel:+97143591532" className="text-gold hover:text-yellow-400">
                      +971 4 359 1532
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-gold text-2xl">✉️</span>
                  <div>
                    <p className="font-semibold">Email</p>
                    <a href="mailto:Shobhabeautysaloon@gmail.com" className="text-gold hover:text-yellow-400 break-all">
                      Shobhabeautysaloon@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <span className="text-gold text-2xl">🕒</span>
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p className="text-gray-300">Daily: 10:00 AM - 10:00 PM</p>
                    <p className="text-gold text-sm">Open 365 days a year</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <Link
                  href="/contact"
                  className="block w-full bg-gold text-black text-center px-8 py-4 rounded-full font-semibold hover:bg-yellow-500 transition-all duration-300"
                >
                  Book Appointment
                </Link>
                <a
                  href="https://wa.me/97143591532"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full border-2 border-gold text-gold text-center px-8 py-4 rounded-full font-semibold hover:bg-gold hover:text-black transition-all duration-300"
                >
                  WhatsApp Us
                </a>
              </div>
            </div>
            
            <div className="h-96 rounded-2xl overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.5441087465467!2d55.26834641501438!3d25.259869483905426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43348a67e24b%3A0xa5286883d5dd8594!2sMeena%20Bazaar%2C%20Bur%20Dubai%20-%20Dubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2s!4v1634567890123!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shobha Beauty Studio Location - Meena Bazaar, Bur Dubai"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://i.postimg.cc/YqtGN1NK/IMG-20250808-WA0128.jpg"
                  alt="Shobha Beauty Studio Logo"
                  className="h-12 w-12 object-contain rounded-lg bg-white/10 p-1"
                />
                <div>
                  <h3 className="font-playfair text-xl font-bold">Shobha Beauty Studio & Nails</h3>
                  <p className="text-gold text-sm">Since 2011</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                Your trusted beauty destination in Bur Dubai, specializing in nail artistry and complete beauty transformations.
              </p>
              <div className="flex space-x-4">
                <a href="https://instagram.com/shobhasaloon" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-yellow-400">
                  📸 Instagram
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4 text-gold">Services</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>Hair Straightening & Blow Dry</li>
                <li>Nail Art & Press-on Nails</li>
                <li>Mehendi & Henna Designs</li>
                <li>Bridal Beauty Packages</li>
                <li>Facial & Waxing Services</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-playfair text-lg font-semibold mb-4 text-gold">Contact Info</h4>
              <div className="space-y-2 text-gray-300 text-sm">
                <p>📍 Meena Bazaar, Bur Dubai, UAE</p>
                <p>📞 <a href="tel:+97143591532" className="hover:text-gold">+971 4 359 1532</a></p>
                <p>✉️ <a href="mailto:Shobhabeautysaloon@gmail.com" className="hover:text-gold break-all">Shobhabeautysaloon@gmail.com</a></p>
                <p>🕒 Daily: 10 AM - 10 PM (365 days)</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Shobha Beauty Studio & Nails. All rights reserved.</p>
            <p className="mt-2 text-sm">🌐 www.shobhabeautystudio.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
}