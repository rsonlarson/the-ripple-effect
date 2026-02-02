import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Users, Sparkles } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full bg-background">
          <div className="max-w-[120rem] mx-auto px-8 py-24 md:py-32">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto space-y-6"
            >
              <h1 className="font-heading text-6xl md:text-7xl text-primary">
                About Us
              </h1>
              <p className="font-paragraph text-xl text-secondary leading-relaxed">
                Who We Are and What We Stand For
              </p>
            </motion.div>
          </div>
        </section>

        {/* Story Section */}
        <section className="w-full bg-softbeige">
          <div className="max-w-[100rem] mx-auto px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="font-heading text-4xl md:text-5xl text-primary">
                  Our Story
                </h2>
                <div className="space-y-4 font-paragraph text-base text-secondary leading-relaxed">
                  <p>
                    The Ripple Effect, founded in 2026, began with a simple observation: Our self-evident lack of connection with each other. </p>
                  <p> Today, as we become more technologically dependent there is a quiet fear of losing touch- not with our parents, partners, or closest friends, but with the people outside our immediate sight. The neighbor we no longer run into. I am talking about looking up on our phones where to find the bell peppers instead of asking George, the kind face at the grocery store. While efficiency has its benefits, it can also come at the cost of human connection. The Ripple Effect exists to remind us that progress should not replace meaningful interaction - and that there must be space to intentionally grow it too.                 </p>
                  <p> The team we have today consists of passionate college students who believe in the power of community and the importance of fostering genuine connections. We are committed to creating a more compassionate and engaged society, one small act at a time.                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
                  <Image
                    src="/images/group_photo.png"
                    alt="Community gathering and connection"
                    width={600}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="w-full bg-background">
          <div className="max-w-[100rem] mx-auto px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-4xl md:text-5xl text-primary mb-4">
                Our Values
              </h2>
              <p className="font-paragraph text-base text-secondary max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-softbeige">
                  <Heart className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-primary">
                  Compassion
                </h3>
                <p className="font-paragraph text-base text-secondary leading-relaxed">
                  We lead with empathy and understanding, recognizing the inherent dignity and worth of every individual in our community.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-softbeige">
                  <Users className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-primary">
                  Community
                </h3>
                <p className="font-paragraph text-base text-secondary leading-relaxed">
                  We believe in the power of collective action and the strength that comes from working together toward shared goals.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-softbeige">
                  <Sparkles className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading text-2xl text-primary">
                  Sustainability
                </h3>
                <p className="font-paragraph text-base text-secondary leading-relaxed">
                  We are committed to creating lasting positive impact through environmentally conscious and socially responsible initiatives.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision Section */}
        <section className="w-full bg-primary text-primary-foreground">
          <div className="max-w-[100rem] mx-auto px-8 py-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto space-y-8"
            >
              <h2 className="font-heading text-4xl md:text-5xl text-center">
                Our Vision
              </h2>
              <p className="font-paragraph text-lg leading-relaxed text-center opacity-90">
                We envision a world where communities are interconnected through acts of kindness, where sustainability is woven into daily life, and where every person feels empowered to contribute to positive change. Through our initiatives, we aim to demonstrate that transformation doesn't require grand gestures—it begins with simple, intentional actions that ripple outward, touching lives and inspiring others to join the movement.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
