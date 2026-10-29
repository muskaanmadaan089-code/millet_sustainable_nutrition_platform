import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const Sidebar = ({ isOpen, onClose }) => {
  const { userProfile } = useApp();
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Millets', path: '/millets', icon: 'grass' },
    { name: 'Nutrition Explorer', path: '/millets#nutrition', icon: 'nutrition' },
    { name: 'Recipes', path: '/recipes', icon: 'view_in_ar' },
    { name: 'Find My Millet', path: '/recommendation', icon: 'psychology_alt' },
    { name: 'Consultation', path: '/consultation', icon: 'payments' },
    { name: 'Personalize Quiz', path: '/onboarding', icon: 'edit_note' },
  ];

  const content = (
    <div className="flex flex-col h-full">
      {/* User Header Profile */}
      <div className="p-6 flex items-center gap-4 bg-surface-container-low border-b border-outline-variant/20">
        <div className="relative">
          <img 
            src={userProfile.avatar} 
            alt={userProfile.name}
            className="w-14 h-14 rounded-full object-cover border-2 border-primary/40 shadow-sm"
          />
          <span className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-surface rounded-full"></span>
        </div>
        <div>
          <h3 className="font-montserrat font-bold text-base text-primary leading-tight">
            {userProfile.name}
          </h3>
          <p className="text-xs text-on-surface-variant font-medium mt-0.5">
            Sustainable Living Member
          </p>
          <span className="inline-block mt-1 text-[10px] bg-primary/10 text-primary font-semibold px-2 py-0.5 rounded-full">
            {userProfile.activityLevel}
          </span>
        </div>
      </div>

      {/* Navigation List */}
      <nav className="flex-1 px-3 py-6 space-y-1.5 overflow-y-auto hide-scrollbar">
        {navItems.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Link
              key={item.name}
              to={item.path}
              onClick={onClose}
              className={`flex items-center gap-4 px-4 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                isActive
                  ? 'bg-primary-container text-on-primary-container font-semibold shadow-sm translate-x-1'
                  : 'text-on-surface-variant hover:bg-surface-container-highest hover:text-on-surface'
              }`}
            >
              <span 
                className={`material-symbols-outlined text-xl ${isActive ? 'icon-filled text-on-primary-container' : ''}`}
              >
                {item.icon}
              </span>
              <span>{item.name}</span>
              {item.name === 'Consultation' && (
                <span className="ml-auto text-[10px] bg-secondary-container text-on-secondary-container font-bold px-2 py-0.5 rounded-full">
                  PRO
                </span>
              )}
            </Link>
          );
        })}
      </nav>

      {/* Sustainable Impact Card at Bottom */}
      <div className="p-4 mx-3 mb-6 rounded-2xl bg-primary/10 border border-primary/20">
        <div className="flex items-center gap-2 mb-2 text-primary font-semibold text-xs uppercase tracking-wider">
          <span className="material-symbols-outlined text-base">eco</span>
          <span>Your Eco Impact</span>
        </div>
        <p className="text-xs text-on-surface-variant mb-2">
          By opting for millets over refined rice, you have saved approximately:
        </p>
        <div className="flex items-center justify-between text-xs font-bold text-primary">
          <span>💧 1,240L Water</span>
          <span>🌱 3.2kg CO₂</span>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Fixed SideNav */}
      <aside className="hidden md:block fixed inset-y-0 left-0 z-40 w-72 rounded-r-3xl bg-surface-container-low border-r border-outline-variant/30 shadow-2xl shadow-primary/5 pt-[68px] overflow-hidden">
        {content}
      </aside>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-50 flex">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
            onClick={onClose}
          />
          <aside className="relative w-72 max-w-[80vw] bg-surface-container-low h-full shadow-2xl flex flex-col z-10 animate-slide-right pt-4">
            <div className="flex justify-end px-4">
              <button 
                onClick={onClose}
                className="p-1 rounded-full text-on-surface-variant hover:bg-surface-container"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            {content}
          </aside>
        </div>
      )}
    </>
  );
};
