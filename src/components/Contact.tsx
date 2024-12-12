import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Contact = () => {
  return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-8 text-center">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <Mail className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-lg">keerthana.cus@gmail.com</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <Phone className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-lg">+1 (203) 908-1840</span>
                </div>
                <div className="flex items-center justify-center p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                  <MapPin className="w-6 h-6 text-blue-600 mr-4" />
                  <span className="text-lg">NewYork, NY</span>
                </div>
              </div>
              <div className="mt-8 text-center text-gray-600">
                <p>Feel free to reach out through any of these channels.</p>
                <p>I'll get back to you as soon as possible!</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  );
};

export default Contact;