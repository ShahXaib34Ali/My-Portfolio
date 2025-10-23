import React from 'react'
import { Instagram, Linkedin, Mail, MapPin, Phone, Send, Twitch, Twitter } from 'lucide-react'
import { cn } from '../Lib/utils'
import { useToaster } from '../hooks/use-toast'
import { useState } from 'react'

export const ContactSection = () => {
  const { toast } = useToaster();
  const [issubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true);
    setTimeout(() => {
      // your logic
      toast({
        title: 'Message Sent',
        description: 'Thank you for your message. I will get back to you soon!',
      });
      setIsSubmitting(false);
    }, 15000)
    
  };

  return (
    <section id='contact' className='py-24 px-4 relative bg-secondary/30'>
      <div className='container mx-auto max-w-5xl'>
        <h2 className='text-3xl md:text-4xl font-bold text-center mb-8'>
          Get In <span className='text-primary'>Touch</span>
        </h2>
        <p className='text-center text-muted-foreground mb-12 max-w-2xl mx-auto'>
          Have a project in mind or just want to collaborate? Feel free to reach out. I'm always open to discussing new opportunities, creative ideas, or potential collaborations.
        </p>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-11'>
          {/* Left Side */}
          <div className='space-y-8'>
            <h3 className='text-2xl font-semibold mb-6'>Contact Information</h3>
            <div className='space-y-6 justify-center'>
              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Mail className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Email</h4>
                  <a href="mailto:shahxaibali34@gmail.com" className='text-muted-foreground hover:text-primary transition-colors'>
                    shahxaibali34@gmail.com
                  </a>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <Phone className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Phone</h4>
                  <a href="tel:+923289461130" className='text-muted-foreground hover:text-primary transition-colors'>
                    +92 328-9461130
                  </a>
                </div>
              </div>
              <div className='flex items-center space-x-4'>
                <div className='p-3 rounded-full bg-primary/10'>
                  <MapPin className='h-6 w-6 text-primary' />
                </div>
                <div>
                  <h4 className='font-medium'>Location</h4>
                  <span className='text-muted-foreground'>Lahore, Punjab, Pakistan</span>
                </div>
              </div>
            </div>

            <div className='pt-8'>
              <h4 className='font-medium mb-4'>Connect With Me</h4>
              <div className='flex space-x-4 justify-center'>
                <a href="" target='_blank'><Linkedin /></a>
                <a href="" target='_blank'><Twitter /></a>
                <a href="" target='_blank'><Instagram /></a>
                <a href="" target='_blank'><Twitch /></a>
              </div>
            </div>
          </div>

          {/* Right Side (Form) */}
          <div className='bg-card p-8 rounded-lg shadow-xs' onSubmit={handleSubmit}>
            <h3 className='text-2xl font-semibold mb-6'>Send a Message</h3>
            <form onSubmit={handleSubmit} className='space-y-6'>
              <div>
                <label htmlFor="name" className='block text-sm font-medium mb-2'>Your Name</label>
                <input
                  type="text"
                  id='name'
                  name='name'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='Shahzaib Ali...'
                />
              </div>

              <div>
                <label htmlFor="email" className='block text-sm font-medium mb-2'>Your Email</label>
                <input
                  type="email"
                  id='email'
                  name='email'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary'
                  placeholder='john@gmail.com'
                />
              </div>

              <div>
                <label htmlFor="message" className='block text-sm font-medium mb-2'>Your Message</label>
                <textarea
                  id='message'
                  name='message'
                  required
                  className='w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none'
                  placeholder="Hello, I'd like to talk about..."
                />
              </div>

              <button
                type='submit'
                disabled={issubmitting}
                className={cn("cosmic-button w-full flex items-center justify-center gap-2"

                )}>
                {issubmitting ? 'Sending...' : 'Send Message'}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
