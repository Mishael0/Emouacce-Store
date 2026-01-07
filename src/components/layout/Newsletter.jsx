import React, { useState } from 'react';
import { Mail, CheckCircle } from 'lucide-react';

function Newsletter() {
     const [email, setEmail] = useState('');
     const [isSubscribed, setIsSubscribed] = useState(false);

     const handleSubscribe = () => {
         if (email && email.includes('@')) {
           setIsSubscribed(true);
           setEmail('');

           setTimeout(() => {
             setIsSubscribed(false);
           }, 3000);
         }
       };
  return (
    <section className="py-10 px-6 bg-stone-500">
          
          <div className="max-w-4xl mx-auto">
            
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-4">
                <Mail className="w-8 h-8 text-gray-100" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-gray-100 mb-3">
                Join Our Newsletter
              </h2>
              
              <p className="text-gray-100 text-lg max-w-2xl mx-auto">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals delivered straight to your inbox.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              
              <form className="flex flex-col sm:flex-row gap-3">
                
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="flex-1 px-5 py-4 rounded-lg text-gray-800 placeholder-gray-500 focus:outline-slate-200 border-2"
                />
                
                <button
                  onClick={handleSubscribe}
                  className="bg-yellow-800 text-gray-100 px-8 py-4 rounded-lg font-semibold hover:bg-yellow-950 transition-colors duration-200 whitespace-nowrap"
                >
                  Subscribe Now
                </button>
              </form>
    
              {isSubscribed && (
                <div className="mt-4 flex items-center justify-center gap-2 text-white bg-gray-600 rounded-lg py-3 px-4 animate-fade-in">
                  <CheckCircle className="w-5 h-5" />
                  <span className="font-medium">Successfully subscribed! Check your email.</span>
                </div>
              )}
            </div>

            <p className="text-center text-gray-100 text-sm mt-6">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </section>
      );
}

export default Newsletter
