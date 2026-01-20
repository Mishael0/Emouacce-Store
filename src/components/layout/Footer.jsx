import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { footerLinks, socialLinks } from '../../data/FooterLinks';

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
     <footer className="bg-stone-900 text-gray-300">
      
      <div className="max-w-7xl mx-auto px-6 py-12">
         
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
           
           <div>
             <h3 className="text-2xl font-thin text-white mb-4">EMOUACCE</h3>
            
             <p className="text-gray-400 mb-6">
               Your one-stop shop for quality products at affordable prices. Shop with confidence.
             </p>
             
             <div className="space-y-3">
               <div className="flex items-center gap-3">
                 <Phone className="w-5 h-5 text-gray-500" />
                 <span>+2348116646893</span>
               </div>
               <div className="flex items-center gap-3">
                 <Mail className="w-5 h-5 text-gray-500" />
                 <span>support@emouacce.com</span>
               </div>
               <div className="flex items-center gap-3">
                 <MapPin className="w-5 h-5 text-gray-500" />
                 <span>Lagos, Nigeria</span>
               </div>
             </div>
           </div>
 
           <div>
             <h4 className="text-white font-semibold text-lg mb-4">Shop</h4>
             <ul className="space-y-2">
               {footerLinks.shop.map((link) => (
                 <li key={link.name}>
                   <Link 
                     to={link.href}
                     className="hover:text-white transition-colors duration-200 hover:underline"
                   >
                     {link.name}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>

           <div>
             <h4 className="text-white font-semibold text-lg mb-4">Customer Service</h4>
             <ul className="space-y-2">
               {footerLinks.customerService.map((link) => (
                 <li key={link.name}>
                   <Link 
                     to={link.href}
                     className="hover:text-white transition-colors duration-200 hover:underline"
                   >
                     {link.name}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
 
           <div>
             <h4 className="text-white font-semibold text-lg mb-4">Company</h4>
             <ul className="space-y-2">
               {footerLinks.company.map((link) => (
                 <li key={link.name}>
                   <Link
                     to={link.href}
                     className="hover:text-white transition-colors duration-200 hover:underline"
                   >
                     {link.name}
                   </Link>
                 </li>
               ))}
             </ul>
           </div>
         </div>
         <div className="border-t border-gray-800 my-8"></div>
 
         <div className="flex flex-col md:flex-row justify-between items-center gap-6">
           
           <div className="flex items-center gap-4">
             <span className="text-sm">Follow us:</span>
             {socialLinks.map((social, index) => {
               const IconComponent = social.icon;
               return (
                 <a
                   key={index}
                   href={social.href}
                   aria-label={social.label}
                   className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors duration-200"
                 >
                   <IconComponent className="w-5 h-5" />
                 </a>
               );
             })}
           </div>
 
           <p className="text-sm text-gray-400">
             © {currentYear} EMOUACCE. All rights reserved.
           </p>
 
           <div className="flex items-center gap-3">
             <span className="text-sm">We accept:</span>
             <div className="flex gap-2">
               <div className="w-12 h-8 rounded flex items-center justify-center text-xs font-semibold">
                 VISA
               </div>
               <div className="w-18 h-8 rounded flex items-center justify-center text-xs font-semibold">
                 MASTER CARD
               </div>
               <div className="w-12 h-8 rounded flex items-center justify-center text-xs font-semibold">
                 VERVE
               </div>
             </div>
           </div>
         </div>
 
         <div className="mt-6 pt-6 border-t border-gray-800 text-center">
           <div className="flex flex-wrap justify-center gap-3 text-sm">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <span className="text-gray-700">|</span>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
             <span className="text-gray-700">|</span>
             <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
             <span className="text-gray-700">|</span>
             <a href="#" className="hover:text-white transition-colors">Accessibility</a>
           </div>
         </div>
       </div>
     </footer>
  )
}

export default Footer
