import { Link, useParams } from 'react-router-dom';
import { projects } from '@/data/projects';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function ProjectDetailPage() {
  const { id } = useParams<{ id: string }>();

  const project = projects.find((p) => p._id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <div className="min-h-[600px]">
            <section className="w-full bg-background">
              <div className="max-w-[100rem] mx-auto px-8 py-32 text-center">
                <h1 className="font-heading text-4xl text-primary mb-4">Project Not Found</h1>
                <p className="font-paragraph text-base text-secondary mb-8">
                  The project you're looking for doesn't exist or has been removed.
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center gap-2 text-primary font-paragraph text-base hover:text-secondary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Projects
                </Link>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="min-h-[600px]">
          {/* Hero Section */}
          <section className="w-full bg-background">
            <div className="max-w-[120rem] mx-auto px-8 py-16">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 text-secondary font-paragraph text-base hover:text-primary transition-colors mb-8"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Projects
              </Link>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="font-heading text-5xl md:text-6xl text-primary">
                  {project.projectName}
                </h1>
                
                {project.slogan && (
                  <p className="font-paragraph text-2xl text-primary italic">
                    "{project.slogan}"
                  </p>
                )}
              </motion.div>
            </div>
          </section>

          {/* Image Section */}
          <section className="w-full bg-softbeige">
            <div className="max-w-[100rem] mx-auto px-8 py-16">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="aspect-[21/9] rounded-3xl overflow-hidden"
              >
                <Image
                  src={project.projectImage || 'https://static.wixstatic.com/media/a4f116_782dba6272ce417d9b7ed14c60f978ac~mv2.png?originWidth=1152&originHeight=512'}
                  alt={project.projectName || 'Project image'}
                  width={1200}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </section>

          {/* Content Section */}
          <section className="w-full bg-background">
            <div className="max-w-[100rem] mx-auto px-8 py-24">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="lg:col-span-2 space-y-6"
                >
                  <h2 className="font-heading text-3xl text-primary">
                    About This Project
                  </h2>
                  
                  {project.shortSummary && (
                    <p className="font-paragraph text-lg text-primary leading-relaxed whitespace-pre-line">
                      {project.shortSummary}
                    </p>
                  )}
                  
                  {project.description && (
                    <div className="font-paragraph text-base text-secondary leading-relaxed space-y-4">
                      {project.description.split('\n').map((paragraph, index) => (
                        paragraph.trim() && (
                          <p key={index}>{paragraph}</p>
                        )
                      ))}
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="space-y-8"
                >
                  <div className="bg-softbeige rounded-2xl p-6 space-y-4">
                    <h3 className="font-heading text-2xl text-primary">
                      Support This Project
                    </h3>
                    <p className="font-paragraph text-base text-secondary">
                      Your contribution helps us expand this initiative and reach more communities.
                    </p>

                    {/* Gray rounded rectangle behind the button */}
                    <div className="rounded-lg bg-zinc-200/90 p-1.5">
                      <Link
                        to={`/donate?project=${project._id}`}
                        className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground font-bold text-sm rounded-md hover:bg-secondary transition-colors"
                      >
                        Donate Now
                      </Link>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-heading text-xl text-primary">
                      Get Involved
                    </h3>
                    <p className="font-paragraph text-sm text-secondary">
                      Interested in participating or learning more about how you can help? Reach out to us to discover volunteer opportunities and ways to support this initiative.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="w-full bg-primary text-primary-foreground">
            <div className="max-w-[100rem] mx-auto px-8 py-24">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center space-y-8"
              >
                <h2 className="font-heading text-4xl md:text-5xl">
                  Explore More Projects
                </h2>
                <p className="font-paragraph text-lg max-w-2xl mx-auto opacity-90">
                  Discover other initiatives making a difference in our communities
                </p>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary-foreground text-primary font-paragraph text-lg rounded-lg hover:bg-softbeige transition-colors"
                >
                  View All Projects
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
