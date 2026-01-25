import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Projects } from '@/entities';
import { ArrowRight } from 'lucide-react';

export default function ProjectsPage() {
  const [projects, setProjects] = useState<Projects[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async () => {
    try {
      const result = await BaseCrudService.getAll<Projects>('projects');
      setProjects(result.items.filter(p => p.isActive));
    } catch (error) {
      console.error('Error loading projects:', error);
    } finally {
      setIsLoading(false);
    }
  };

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
                Our Projects
              </h1>
              <p className="font-paragraph text-xl text-secondary leading-relaxed">
                Discover the initiatives creating positive change in our communities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Projects Grid */}
        <section className="w-full bg-softbeige">
          <div className="max-w-[100rem] mx-auto px-8 py-24">
            <div className="min-h-[400px]">
              {isLoading ? null : projects.length > 0 ? (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {projects.map((project, index) => (
                    <motion.div
                      key={project._id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link
                        to={`/projects/${project._id}`}
                        className="block group"
                      >
                        <div className="bg-background rounded-3xl overflow-hidden hover:shadow-xl transition-shadow duration-300">
                          <div className="aspect-[16/10] overflow-hidden">
                            <Image
                              src={project.projectImage || 'https://static.wixstatic.com/media/a4f116_894b882e08c74e95a4c99ea107098cf5~mv2.png?originWidth=576&originHeight=320'}
                              alt={project.projectName || 'Project image'}
                              width={600}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          </div>
                          
                          <div className="p-8 space-y-4">
                            <h2 className="font-heading text-3xl text-primary group-hover:text-secondary transition-colors">
                              {project.projectName}
                            </h2>
                            
                            {project.slogan && (
                              <p className="font-paragraph text-lg text-primary italic">
                                "{project.slogan}"
                              </p>
                            )}
                            
                            {project.shortSummary && (
                              <p className="font-paragraph text-base text-secondary leading-relaxed">
                                {project.shortSummary}
                              </p>
                            )}
                            
                            <div className="flex items-center gap-2 text-primary font-paragraph text-base pt-2">
                              Learn more
                              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                  className="text-center py-16"
                >
                  <p className="font-paragraph text-lg text-secondary">
                    No active projects at the moment. Check back soon for new initiatives!
                  </p>
                </motion.div>
              )}
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
                Support Our Work
              </h2>
              <p className="font-paragraph text-lg max-w-2xl mx-auto opacity-90">
                Your donation helps us launch new projects and expand existing initiatives to reach more communities.
              </p>
              <Link
                to="/donate"
                className="inline-flex items-center justify-center gap-2 px-10 py-5 bg-primary-foreground text-primary font-paragraph text-lg rounded-lg hover:bg-softbeige transition-colors"
              >
                Make a Donation
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
