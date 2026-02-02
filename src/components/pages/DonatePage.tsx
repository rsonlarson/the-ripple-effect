import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Image } from '@/components/ui/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Heart, CheckCircle, AlertCircle } from 'lucide-react';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { projects as allProjects, type Project } from '@/data/projects';

// Allow <givebutter-widget /> in TSX
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'givebutter-widget': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        id?: string;
      };
    }
  }
}

export default function DonatePage() {
  const [searchParams] = useSearchParams();
  const projectIdFromUrl = searchParams.get('project');

  const [projects, setProjects] = useState<Project[]>([]);
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projectIdFromUrl || 'general');
  const [amount, setAmount] = useState<string>('');
  const [customAmount, setCustomAmount] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [error, setError] = useState<string>('');
  const [isLoadingProjects, setIsLoadingProjects] = useState(true);

  const predefinedAmounts = ['5', '10', '20', '50'];

  useEffect(() => {
    // Load from local data (public runnable version)
    try {
      setIsLoadingProjects(true);
      setProjects(allProjects.filter((p) => p.isActive !== false));
    } catch (err) {
      console.error('Error loading projects:', err);
      setError('Failed to load projects');
    } finally {
      setIsLoadingProjects(false);
    }
  }, []);

  // Load Givebutter widget script once
  useEffect(() => {
    const src = 'https://widgets.givebutter.com/latest.umd.cjs';
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${src}"]`);
    if (existing) return;

    const script = document.createElement('script');
    script.src = src;
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  const handleAmountClick = (value: string) => {
    setAmount(value);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (value: string) => {
    setCustomAmount(value);
    setAmount('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const donationAmount = customAmount || amount;
    if (!donationAmount || !name || !email) {
      setError('Please fill in all required fields');
      return;
    }

    setError('');
    setIsProcessing(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      setError('Payment processing failed. Please try again.');
      console.error('Payment error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  const selectedProject = projects.find((p) => p._id === selectedProjectId);

  // NOTE: optional: you can remove isSubmitted/handleSubmit/etc later since Givebutter handles payments.
  if (isSubmitted) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="w-full bg-background">
            <div className="max-w-[100rem] mx-auto px-8 py-32">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl mx-auto text-center space-y-8"
              >
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full bg-primary/10">
                  <CheckCircle className="w-12 h-12 text-primary" />
                </div>

                <h1 className="font-heading text-5xl text-primary">Thank You!</h1>

                <p className="font-paragraph text-lg text-secondary leading-relaxed">
                  Your generous donation of ${customAmount || amount} has been received. Your support helps us continue our
                  mission of creating positive change in our communities.
                </p>

                <p className="font-paragraph text-base text-secondary">
                  A confirmation email has been sent to {email}.
                </p>

                <Button
                  onClick={() => {
                    setIsSubmitted(false);
                    setAmount('');
                    setCustomAmount('');
                    setName('');
                    setEmail('');
                    setMessage('');
                    setError('');
                  }}
                  className="bg-primary text-primary-foreground hover:bg-secondary"
                >
                  Make Another Donation
                </Button>
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    );
  }

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
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-4">
                <Heart className="w-10 h-10 text-primary" />
              </div>

              <h1 className="font-heading text-6xl md:text-7xl text-primary">Make a Donation</h1>
              <p className="font-paragraph text-xl text-secondary leading-relaxed">
                Your contribution helps us create lasting positive impact in our communities
              </p>
            </motion.div>
          </div>
        </section>

        {/* Donation Form Section */}
        <section className="w-full bg-softbeige">
          <div className="max-w-[100rem] mx-auto px-8 py-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* LEFT: Replace old form with Givebutter embed, keep wrapper/animation */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="bg-background rounded-3xl p-4 md:p-6">
                  <div className="mx-auto w-full max-w-[520px]overflow-hidden rounded-2xl">
                    <givebutter-widget id="j9Ov6g"></givebutter-widget>
                  </div>
                </div>
              </motion.div>

              {/* Info Sidebar (unchanged) */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                {selectedProject && selectedProjectId !== 'general' ? (
                  <div className="bg-background rounded-3xl p-8 space-y-6">
                    <div className="aspect-video rounded-2xl overflow-hidden">
                      <Image
                        src={
                          selectedProject.projectImage ||
                          'https://static.wixstatic.com/media/a4f116_cf712691a2994261bc99e2bc7924a8b6~mv2.png?originWidth=448&originHeight=256'
                        }
                        alt={selectedProject.projectName || 'Project image'}
                        width={500}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    <h3 className="font-heading text-2xl text-primary">{selectedProject.projectName}</h3>

                    {selectedProject.slogan && (
                      <p className="font-paragraph text-lg text-primary italic">"{selectedProject.slogan}"</p>
                    )}

                    {selectedProject.shortSummary && (
                      <p className="font-paragraph text-base text-secondary leading-relaxed">{selectedProject.shortSummary}</p>
                    )}
                  </div>
                ) : (
                  <div className="bg-background rounded-3xl p-8 space-y-6">
                    <h3 className="font-heading text-4xl text-primary">General Fund</h3>
                    <p className="font-paragraph text-lg text-secondary leading-relaxed">
                      Your donation to our general fund allows us to allocate resources where they're needed most,
                      supporting all our initiatives and helping us launch new projects that create positive change in our
                      communities.
                    </p>
                  </div>
                )}

                <div className="bg-background rounded-3xl p-8 space-y-4">
                  <h3 className="font-heading text-3xl text-primary">Why Your Support Matters</h3>
                  <ul className="space-y-3 font-paragraph text-base text-secondary">
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Every dollar directly supports our community initiatives</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Help us expand our reach to more communities</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Enable us to launch new sustainable projects</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      <span>Create lasting positive impact through collective action</span>
                    </li>
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
