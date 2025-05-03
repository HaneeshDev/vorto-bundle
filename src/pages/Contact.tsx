// import Layout from ;
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, AtSign, MessageSquare, ArrowRight } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/components/ui/use-toast";
// import Layout from "@/components/layout/Layout";

const Contact = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormState(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send this data to your backend
    console.log("Form submitted:", formState);
    toast({
      title: "Message Sent!",
      description: "We've received your message and will respond soon.",
    });
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <>
      <div className="bg-gradient-to-b from-zerovortex-dark to-zerovortex-bg py-16">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 text-center">Contact Us</h1>
          <p className="text-zerovortex-muted text-center max-w-2xl mx-auto mb-16">
            Have questions about our products, research opportunities, or want to collaborate? 
            Get in touch with the ZeroVortex team.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Contact Form */}
            <div className="bg-zerovortex-dark/80 backdrop-blur-sm rounded-lg p-8 border border-zerovortex-neon/20">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <MessageSquare className="mr-2 text-zerovortex-neon" />
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-zerovortex-light mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    className="bg-zerovortex-dark border-zerovortex-light text-white"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-zerovortex-light mb-1">
                    Email Address
                  </label>
                  <div className="relative">
                    <AtSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zerovortex-neon h-4 w-4" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      className="bg-zerovortex-dark border-zerovortex-light text-white pl-10"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zerovortex-light mb-1">
                    Subject
                  </label>
                  <Select onValueChange={handleSelectChange} value={formState.subject}>
                    <SelectTrigger className="bg-zerovortex-dark border-zerovortex-light text-white">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent className="bg-zerovortex-dark border-zerovortex-light">
                      <SelectItem value="general">General Inquiry</SelectItem>
                      <SelectItem value="product">Product Question</SelectItem>
                      <SelectItem value="support">Technical Support</SelectItem>
                      <SelectItem value="billing">Billing & Orders</SelectItem>
                      <SelectItem value="research">Research Collaboration</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zerovortex-light mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    className="bg-zerovortex-dark border-zerovortex-light text-white h-32"
                    required
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-zerovortex-neon hover:bg-zerovortex-neon/90 text-zerovortex-dark font-medium"
                >
                  Send Message <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-zerovortex-dark/80 backdrop-blur-sm rounded-lg p-8 border border-zerovortex-neon/20">
                <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-zerovortex-neon mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-zerovortex-light font-medium">Email Us</p>
                      <a href="zerovortex6@gmail.com" className="text-white hover:text-zerovortex-neon transition">
                        zerovortex6@gmail.com
                      </a>
                      <p className="text-sm text-zerovortex-muted mt-1">
                        For general inquiries and information
                      </p>
                    </div>
                  </div>
                  
                  {/* <div className="flex items-start">
                    <Phone className="h-6 w-6 text-zerovortex-neon mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-zerovortex-light font-medium">Call Us</p>
                      <a href="tel:+1-800-ZERO-VTX" className="text-white hover:text-zerovortex-neon transition">
                        +1-800-ZERO-VTX
                      </a>
                      <p className="text-sm text-zerovortex-muted mt-1">
                        Mon-Fri, 9am - 5pm EST
                      </p>
                    </div>
                  </div> */}
                  
            
                </div>
              </div>
              
              <div className="bg-zerovortex-dark/80 backdrop-blur-sm rounded-lg p-8 border border-zerovortex-neon/20">
                <h2 className="text-xl font-bold text-white mb-4">Technical Support</h2>
                <p className="text-zerovortex-light mb-4">
                  Need help with your ZeroVortex products or account?
                </p>
                <Button variant="outline" className="border-zerovortex-neon text-zerovortex-neon hover:bg-zerovortex-neon hover:text-zerovortex-dark w-full">
                  Submit Support Ticket
                </Button>
              </div>
              
              <div className="bg-zerovortex-dark/80 backdrop-blur-sm rounded-lg p-8 border border-zerovortex-neon/20">
                <h2 className="text-xl font-bold text-white mb-4">Research Collaboration</h2>
                <p className="text-zerovortex-light mb-4">
                  Interested in partnering with ZeroVortex on research projects?
                </p>
                <Button variant="outline" className="border-zerovortex-neon text-zerovortex-neon hover:bg-zerovortex-neon hover:text-zerovortex-dark w-full">
                  Explore Opportunities
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* FAQ Section */}
      <div className="py-16 bg-zerovortex-bg">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: "What payment methods do you accept?",
                a: "We accept all major credit cards, PayPal, and cryptocurrency payments including Bitcoin and Ethereum."
              },
              {
                q: "How do I track my order?",
                a: "Once your order ships, you'll receive a tracking number via email that allows you to monitor the delivery status."
              },
              {
                q: "Do you offer international shipping?",
                a: "Yes, we ship to most countries worldwide. Shipping rates and delivery times vary by location."
              },
              {
                q: "What is your return policy?",
                a: "We offer a 30-day satisfaction guarantee. If you're not satisfied with your purchase, you can return it within 30 days for a full refund."
              }
            ].map((item, index) => (
              <div key={index} className="bg-zerovortex-dark/60 rounded-lg p-6">
                <h3 className="font-semibold text-zerovortex-neon text-lg mb-3">{item.q}</h3>
                <p className="text-zerovortex-light">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      </>
  );
};

export default Contact;
