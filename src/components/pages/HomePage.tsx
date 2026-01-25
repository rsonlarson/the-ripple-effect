// HPI 1.7-V
import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowRight, Heart, Coffee, Globe, ArrowDownRight } from 'lucide-react';

// --- Custom Hook for Parallax ---
function useParallax(value: any, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

// --- Components ---

const SectionLabel = ({ number, text }: { number: string; text: string }) => (
  <div className="flex items-center gap-4 mb-6">
    <span className="font-heading text-xl text-primary/60">{number}</span>
    <div className="h-[1px] w-12 bg-primary/30" />

  </div>
);

const RippleBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-10">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute top-1/2 left-1/2 border border-primary rounded-full"
          style={{
            width: `${i * 400}px`,
            height: `${i * 400}px`,
            x: '-50%',
            y: '-50%',
          }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const ySpring = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col bg-softbeige overflow-clip selection:bg-primary selection:text-softbeige">
      <style>{`
        .clip-circle-custom {
          clip-path: circle(42% at 50% 50%);
        }
        .text-balance {
          text-wrap: balance;
        }
      `}</style>
      <Header />
      <main className="flex-1 w-full">
        
        {/* --- HERO SECTION (Inspiration Image Replica) --- */}
        <section className="relative w-full min-h-[95vh] flex items-center justify-center px-6 py-24 md:px-12 lg:px-20 overflow-hidden">
          <div className="w-full max-w-[110rem] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 h-full items-stretch">
              
              {/* Left: Visual Anchor (Green Card with Circle) */}
              <div className="lg:col-span-7 relative min-h-[60vh] lg:min-h-[80vh]">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  className="w-full h-full bg-primary rounded-[2rem] relative overflow-hidden flex items-center justify-center p-8 md:p-16"
                >
                  {/* The Circle Window */}
                  <motion.div 
                    initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                    animate={{ clipPath: 'circle(42% at 50% 50%)' }}
                    transition={{ duration: 1.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute inset-0 w-full h-full clip-circle-custom bg-softbeige"
                  >
                    <div className="relative w-full h-full scale-110">
                      <Image
                        src="https://static.wixstatic.com/media/a4f116_dbefc7e5f22b42d9afdeb553c57c239a~mv2.png?originWidth=960&originHeight=704"
                        alt="Community connection"
                        className="w-full h-full object-cover opacity-90"
                      />
                      {/* Subtle overlay for depth */}
                      <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
                    </div>
                  </motion.div>
                  {/* Decorative Corner Elements inside the green card */}
                  <div className="absolute top-8 left-8 text-softbeige/40 font-heading text-9xl leading-none select-none opacity-20">
                    *
                  </div>

                </motion.div>
              </div>

              {/* Right: Minimalist Content */}
              <div className="lg:col-span-5 flex flex-col justify-between py-4 lg:py-12 relative">
                
                {/* Top: Ordinal & Label */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >

                </motion.div>

                {/* Center: Main Headline & CTA */}
                <div className="space-y-10 my-12 lg:my-0">
                  <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                    className="font-heading text-6xl md:text-7xl xl:text-8xl text-primary leading-[0.9] tracking-tight"
                  >
                    THE <br />
                    <span className="italic font-light ml-4">RIPPLE</span> <br />
                    EFFECT
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.9 }}
                  >
                    <Link 
                      to="/projects" 
                      className="group inline-flex items-center gap-3 text-xl font-paragraph text-primary hover:text-mutedgreen transition-colors"
                    >
                      <span className="border-b border-primary group-hover:border-mutedgreen pb-1">Explore Our Current Projects</span>
                      <ArrowDownRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                    </Link>
                  </motion.div>
                </div>

                {/* Bottom: Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 1.1 }}
                  className="border-t border-primary/20 pt-8"
                >
                  <p className="font-paragraph text-secondary text-lg leading-relaxed max-w-md text-balance">
                    We believe in the power of small actions to create meaningful change. Through community-driven initiatives, we foster connection, reduce waste, and spread warmth one gesture at a time.
                  </p>
                </motion.div>

              </div>
            </div>
          </div>
        </section>


        {/* --- MISSION STATEMENT (Sticky Scroll) --- */}
        <section className="relative w-full py-32 px-6 md:px-12">
          <RippleBackground />
          <div className="max-w-[100rem] mx-auto">
            <div className="flex flex-col lg:flex-row gap-20">
              
              {/* Sticky Title */}
              <div className="lg:w-1/3">
                <div className="sticky top-32">
                  <SectionLabel number="02" text="Our Mission" />
                  <h2 className="font-heading text-5xl md:text-6xl text-primary leading-tight mb-8">
                    Small Acts,<br />
                    <span className="italic text-mutedgreen">Big Impact.</span>
                  </h2>
                  <Link to="/about" className="inline-flex items-center justify-center w-16 h-16 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-softbeige transition-all duration-300">
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </div>
              </div>

              {/* Scrolling Content */}
              <div className="lg:w-2/3 space-y-24">
                {[
                  { title: "Connection", icon: Heart, text: "Building bridges between neighbors through shared acts of kindness." },
                  { title: "Sustainability", icon: Globe, text: "Reducing waste by reimagining how we consume and share resources." },
                  { title: "Warmth", icon: Coffee, text: "Creating moments of comfort and care in our daily community interactions." }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group relative pl-8 md:pl-16 border-l border-primary/20"
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-softbeige border border-primary rounded-full group-hover:bg-primary transition-colors duration-500" />
                    <item.icon className="w-12 h-12 text-mutedgreen mb-6 stroke-1" />
                    <h3 className="font-heading text-4xl text-primary mb-4">{item.title}</h3>
                    <p className="font-paragraph text-xl text-secondary leading-relaxed max-w-xl">
                      {item.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* --- FEATURED PROJECT: MUGS FOR MANY (Magazine Layout) --- */}
        <section className="w-full bg-primary text-softbeige py-32 overflow-hidden">
          <div className="max-w-[110rem] mx-auto px-6 md:px-12">
            
            <div className="flex flex-col lg:flex-row gap-16 lg:gap-32 items-center">
              
              {/* Left: Image Composition */}
              <div className="w-full lg:w-1/2 relative">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="relative aspect-[4/5] w-full max-w-2xl mx-auto"
                >
                  {/* Main Image */}
                  <div className="absolute inset-0 rounded-t-[10rem] rounded-b-3xl overflow-hidden z-10">
                    <Image
                      src="https://static.wixstatic.com/media/a4f116_9c780ea0b34648edab8c35fcd0f3494f~mv2.png?originWidth=1024&originHeight=1280"
                      alt="Mugs for Many Initiative"
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -bottom-8 -right-8 w-full h-full border border-softbeige/20 rounded-t-[10rem] rounded-b-3xl z-0" />
                  <div className="absolute top-1/4 -left-12 w-24 h-24 bg-mutedgreen/20 backdrop-blur-sm rounded-full z-20" />
                </motion.div>
              </div>

              {/* Right: Content */}
              <div className="w-full lg:w-1/2 space-y-10">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <div className="inline-block px-4 py-2 border border-softbeige/30 rounded-full mb-6">
                    <span className="font-paragraph text-sm tracking-widest uppercase">Current Initiative</span>
                  </div>
                  
                  <h2 className="font-heading text-6xl md:text-7xl mb-6">
                    Mugs for <br />
                    <span className="italic text-mutedgreen">Many</span>
                  </h2>
                  
                  <div className="h-[1px] w-full bg-softbeige/20 my-8" />
                  
                  <blockquote className="font-heading text-2xl md:text-3xl text-softbeige/90 italic mb-8">
                    "One small act, Less waste, More warmth"
                  </blockquote>
                  
                  <p className="font-paragraph text-lg text-softbeige/70 leading-relaxed max-w-xl mb-10">
                    Join us in reducing waste and spreading warmth through our community mug-sharing initiative at local coffee shops. Take a mug when you need one, leave one when you can.
                  </p>
                  
                  <div className="flex flex-wrap gap-6">
                    <Link 
                      to="/projects"
                      className="px-8 py-4 bg-softbeige text-primary font-paragraph font-medium rounded-lg hover:bg-mutedgreen hover:text-softbeige transition-colors duration-300"
                    >
                      View Project Details
                    </Link>
                    <Link 
                      to="/donate"
                      className="px-8 py-4 border border-softbeige/30 text-softbeige font-paragraph font-medium rounded-lg hover:bg-softbeige/10 transition-colors duration-300"
                    >
                      Support This Cause
                    </Link>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>


        {/* --- IMPACT / HOW IT WORKS (Horizontal Scroll) --- */}
        <section className="w-full py-32 bg-softbeige">
          <div className="max-w-[110rem] mx-auto px-6 md:px-12">
            <div className="mb-20 text-center max-w-3xl mx-auto">
              <SectionLabel number="03" text="How It Works" />
              <h2 className="font-heading text-4xl md:text-5xl text-primary">Simple Steps, Lasting Change</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "01", title: "Visit a Partner", desc: "Find a participating local coffee shop in your neighborhood." },
                { step: "02", title: "Take or Leave", desc: "Borrow a mug if you need one, or donate a clean mug to the basket." },
                { step: "03", title: "Spread Warmth", desc: "Enjoy your beverage waste-free and share the story with others." }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.2 }}
                  className="relative p-10 bg-white rounded-3xl border border-primary/5 hover:border-primary/20 transition-colors duration-500 group"
                >
                  <div className="font-heading text-6xl text-primary/10 absolute top-6 right-8 group-hover:text-primary/20 transition-colors">{item.step}</div>
                  <div className="h-12 w-12 bg-mutedgreen/20 rounded-full mb-8 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <div className="h-2 w-2 bg-primary rounded-full" />
                  </div>
                  <h3 className="font-heading text-2xl text-primary mb-4">{item.title}</h3>
                  <p className="font-paragraph text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>


        {/* --- CTA SECTION (Full Bleed Parallax) --- */}
        <section className="relative w-full h-[80vh] overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://static.wixstatic.com/media/a4f116_16c0335bbe5a45cfacfa26be6442570b~mv2.png?originWidth=1280&originHeight=704"
              alt="Community impact"
              className="w-full h-full object-cover brightness-[0.3]"
            />
          </div>
          
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="font-heading text-5xl md:text-7xl text-softbeige leading-tight">
                Be the Ripple in <br />
                Someone's Day
              </h2>
              <p className="font-paragraph text-xl text-softbeige/80 max-w-2xl mx-auto">
                Your contribution helps us expand our initiatives and reach more communities. Together, we can create lasting positive impact.
              </p>
              <div className="pt-8">
                <Link
                  to="/donate"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-softbeige text-primary font-paragraph text-lg font-medium rounded-full hover:bg-mutedgreen hover:text-softbeige transition-all duration-300 transform hover:scale-105"
                >
                  Make a Donation
                  <Heart className="w-5 h-5 fill-current" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}