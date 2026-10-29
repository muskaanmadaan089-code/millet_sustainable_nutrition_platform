import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MobileNav = () => {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/', icon: 'home' },
    { name: 'Millets', path: '/millets', icon: 'grass' },
    { name: 'Recipes', path: '/recipes', icon: 'view_in_ar' },
    { name: 'Match', path: '/recommendation', icon: 'psychology_alt' },
    { name: 'Consult', path: '/consultation', icon: 'payments' },
  ];

  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-surface/95 backdrop-blur-lg border-t border-outline-variant/30 py-2 px-3 flex justify-around items-center shadow-[0_-4px_20px_rgba(0,0,0,0.06)]">
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <Link
            key={link.name}
            to={link.path}
            className={`flex flex-col items-center gap-1 py-1 px-3 rounded-2xl transition-all ${
              isActive
                ? 'text-primary font-bold bg-primary/10 scale-105'
                : 'text-on-surface-variant hover:text-primary'
            }`}
          >
            <span className={`material-symbols-outlined text-2xl ${isActive ? 'icon-filled' : ''}`}>
              {link.icon}
            </span>
            <span className="text-[10px] tracking-tight">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};
