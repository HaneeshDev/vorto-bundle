
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { HeroImage } from '@/assets/hero-image';
import { categories } from '@/data/products';
import { ArrowRight } from 'lucide-react';
import zvlab from "../assets/zv lab.png";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}

      {/* <div className=""> */}
      <div className="glowing-background">

      <div className="grid-overlay" />
      <div  className='"floating-particles"'>
      <section className="py-16">
        <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-5xl font-bold mb-6">
              <span className="text-zerovortex-neon">ZERO</span>{' '}
              <span className="text-white">VORTEX</span>
            </h1>
            <h2 className="text-2xl mb-6">
              Welcome to <span className="text-zerovortex-neon">Realm</span> of{' '}
              <span className="text-zerovortex-neon">Dynamic Learning</span>
            </h2>
            <p className="text-zerovortex-muted mb-8 text-lg">
              A revolutionary, community-driven platform designed to redefine the way students engage with learning and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button className="zerovortex-button">
                  Explore Data Bundles
                </Button>
              </Link>
              <Link to="/lab">
                <Button variant="outline" className="zerovortex-button-outline">
                  Visit ZV Lab
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
          <img className=" h-fit floating-image" src={zvlab} />
          </div>
          
        </div>
        
      </section>
      </div>
      
      </div>

      {/* About Section */}
      <section className="py-16 bg-zerovortex-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">ABOUT US</h2>
            <div className="ml-4 h-0.5 flex-grow bg-zerovortex-light"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="zerovortex-card">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Mission</h3>
                <p className="text-zerovortex-muted">
                  Our mission is to revolutionize education by providing students with rapid access to information, practical tools, and hands-on experiences. We aim to reduce the complexity of research and development for the student community, and ensure that students have access to the latest technologies, ultimately fostering innovation and empowering the next generation of problem-solvers.
                </p>
              </div>
            </div>
            
            <div className="zerovortex-card">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                <p className="text-zerovortex-muted">
                  To create a global community where students lead the future of innovation, leveraging a system-based learning environment that empowers them to solve real-world challenges through research, collaboration, and advanced technology.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="zerovortex-card">
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-4">What We Do?</h3>
                <p className="text-zerovortex-muted">
                  Zerovortex is a revolutionary, community-driven platform designed to redefine the way students engage with learning and innovation. We foster a culture of research and real-time project development, supported by startups, corporations, and government entities. Our platform streamlines access to critical information, allowing students to focus on building innovations and reducing the time spent on research. Through our indigenous tools, we enhance student life and make learning more accessible and effective.
                  <br /><br />
                  Zerovortex is built on a gamified system that encourages a new, engaging form of learning, while providing access to cutting-edge technologies that are typically hard to come by. We are committed to empowering students with the resources they need to become the innovators of tomorrow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Bundles Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-12">
            <h2 className="text-3xl font-bold">DATA BUNDLES</h2>
            <div className="ml-4 h-0.5 flex-grow bg-zerovortex-light"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.slice(0, 3).map((category) => (
              <Link to={`/shop?category=${category.slug}`} key={category.id}>
                <div className="zerovortex-card h-full group hover:border-zerovortex-neon transition-colors">
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-zerovortex-neon transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-zerovortex-muted flex-grow">
                      {category.slug === 'software-bundles'
                        ? 'Access cutting-edge software resources, tools, and frameworks to accelerate your development projects.'
                        : category.slug === 'hardware-bundles'
                        ? 'Get the hardware components and kits you need for building innovative prototypes and projects.'
                        : 'Comprehensive tools and datasets for advancing your academic and applied research.'}
                    </p>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-zerovortex-neon">
                        {category.count} bundles
                      </span>
                      <ArrowRight className="h-5 w-5 text-zerovortex-neon opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Link to="/shop">
              <Button className="zerovortex-button">
                View All Bundles
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Laboratory Section */}
      <section className="py-16 bg-zerovortex-dark">
        <div className="container mx-auto px-4">
          <div className="flex items-center mb-8">
            <h2 className="text-3xl font-bold">LABORATORY</h2>
            <div className="ml-4 h-0.5 flex-grow bg-zerovortex-light"></div>
          </div>

          <div className="zerovortex-card">
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-4">Research Space</h3>
              <p className="text-zerovortex-muted mb-6">
                Our Research Space is designed to foster student engagement in groundbreaking research projects. Once a research initiative reaches completion, it enters our Research Directory. If the project receives backing from a corporate entity or government aid, it is escalated to our Build Space for further development. For projects without direct sponsorship, they transition into the Zerovortex Content Library. This platform provides a unique platform where innovative ideas can be accessed by entrepreneurs, offering them the tools and insights needed to build startups around these concepts.
              </p>
              
              <p className="text-zerovortex-muted">
                Additionally, students and individuals who contribute to research projects gain visibility within this ecosystem, increasing their chances of being hired by corporations, government agencies, or emerging startups, further expanding their career opportunities.
              </p>
            </div>
          </div>

          <div className="mt-8">
            <div className="relative">
              <div className="bg-zerovortex-dark border border-zerovortex-light rounded-lg p-4 flex">
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="zerovortex-input flex-grow"
                />
                <Button className="zerovortex-button ml-2">
                  Sign up for Learn Edition
                </Button>
              </div>
              <div className="absolute -bottom-12 left-0 text-sm text-zerovortex-muted">
                Get early access to our research tools and learning resources.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-bold">Community</h2>
                <div className="ml-4 h-0.5 flex-grow bg-zerovortex-light"></div>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="/contact" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    Forums
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    Privacy & policy
                  </a>
                </li>
                <li>
                  <a href="https://chat.whatsapp.com/GJbDWkcTvlwBG9cmhNTy2S" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    Whatsapp
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-bold">Learn</h2>
                <div className="ml-4 h-0.5 flex-grow bg-zerovortex-light"></div>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    ZV Lab
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    Research
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <h2 className="text-xl font-bold">Socials</h2>
                <div className="ml-4 h-0.5 flex-grow bg-zerovortex-light"></div>
              </div>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-zerovortex-muted hover:text-zerovortex-neon transition-colors">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

