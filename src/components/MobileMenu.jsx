import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ShoppingCart, User } from 'lucide-react';

function MobileMenu({ isOpen, onClose, categories, links }) {
 const [expandedCategory, setExpandedCategory] = useState(null);
   const menuRef = useRef(null);
 
   // Handle escape key
   useEffect(() => {
     const handleEscape = (e) => {
       if (e.key === 'Escape' && isOpen) {
         onClose();
       }
     };
 
     if (isOpen) {
       document.addEventListener('keydown', handleEscape);
       setTimeout(() => {
         const firstButton = menuRef.current?.querySelector('button');
         firstButton?.focus();
       }, 100);
     }
 
     return () => document.removeEventListener('keydown', handleEscape);
   }, [isOpen, onClose]);
 
   // Lock body scroll when menu is open
   useEffect(() => {
     if (isOpen) {
       document.body.style.overflow = 'hidden';
     } else {
       document.body.style.overflow = '';
     }
 
     return () => {
       document.body.style.overflow = '';
     };
   }, [isOpen]);
 
   const toggleCategory = (categoryId) => {
     setExpandedCategory(expandedCategory === categoryId ? null : categoryId);
   };
 
   if (!isOpen) return null;
 
   return (
     <>
       {/* Backdrop */}
       <div
         className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300"
         onClick={onClose}
         aria-hidden="true"
       />
 
       {/* Mobile Menu Panel */}
       <div
         ref={menuRef}
         className="fixed top-16 left-0 right-0 bottom-0 bg-white z-50 overflow-y-auto lg:hidden"
         role="dialog"
         aria-modal="true"
         aria-label="Mobile navigation menu"
       >
         <div className="px-6 py-6">
           {/* Shop Categories */}
           <div className="border-b border-gray-200 pb-4 mb-4">
             <button
               onClick={() => toggleCategory('shop')}
               className="w-full flex items-center justify-between py-3 font-semibold text-gray-900 hover:text-gray-950 transition-colors"
               aria-expanded={expandedCategory === 'shop'}
               aria-controls="shop-categories"
             >
               <span className="flex items-center gap-2">
                 <ShoppingCart size={20} strokeWidth={2}/>
                 Shop
               </span>
               <ChevronDown
                 size={20}
                 strokeWidth={2}
                 className={`transition-transform duration-300 ${
                   expandedCategory === 'shop' ? 'rotate-180' : ''
                 }`}
                 aria-hidden="true"
               />
             </button>
 
             <div
               id="shop-categories"
               className={`overflow-hidden transition-all duration-300 ${
                 expandedCategory === 'shop' ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
               }`}
             >
               {categories.map((category) => {
                 const IconComponent = category.icon;
                 return (
                   <div key={category.id} className="mt-4 ml-4">
                     <p className="font-medium text-gray-900 mb-3 flex items-center gap-2">
                       <IconComponent size={18} strokeWidth={2} className="text-gray-950" />
                       {category.name}
                     </p>
                     <ul className="ml-8 space-y-2.5">
                       {category.items.map((item) => (
                         <li key={item.name}>
                           <a
                             href={item.href}
                             onClick={onClose}
                             className="text-sm text-gray-600 hover:text-gray-950 font-medium inline-block transition-colors"
                           >
                             {item.name}
                           </a>
                         </li>
                       ))}
                     </ul>
                   </div>
                 );
               })}
             </div>
           </div>
 
           {/* Other Links */}
           <div className="space-y-1">
             {links.map((link) => {
               const LinkIcon = link.icon;
               return (
                 <a
                   key={link.name}
                   href={link.href}
                   onClick={onClose}
                   className={`flex items-center gap-2 py-3 px-4 font-medium rounded-lg transition-colors ${
                     link.highlight
                       ? 'text-orange-600 hover:bg-orange-50'
                       : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                   }`}
                 >
                   {LinkIcon && <LinkIcon size={18} />}
                   {link.name}
                 </a>
               );
             })}
           </div>
 
           {/* Mobile-only actions */}
           <div className="mt-8 pt-6 border-t border-gray-200 space-y-3">
             <a
               href="/account"
               onClick={onClose}
               className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
             >
               <User size={20} />
               <span className="font-medium">My Account</span>
             </a>
             <a
               href="/cart"
               onClick={onClose}
               className="flex items-center gap-3 py-3 px-4 text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
             >
               <ShoppingCart size={20} />
               <span className="font-medium">Shopping Cart</span>
             </a>
           </div>
         </div>
       </div>
     </>
   );
}

export default MobileMenu
