import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../../context/AppContext';

export const Navbar = ({ onOpenMobileMenu }) => {
  const { userProfile, millets, recipes } = useApp();
  const location = useLocation();
  const navigate = useNavigate();
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const searchResultsMillets = searchQuery.trim() === '' ? [] : millets.filter(m => 
    m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
    m.tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const searchResultsRecipes = searchQuery.trim() === '' ? [] : recipes.filter(r => 
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <>
      <header className="fixed top-0 w-full z-50 flex justify-between items-center px-4 md:px-8 py-3 bg-surface/95 backdrop-blur-md shadow-[0_4px_20px_rgba(138,154,91,0.08)] border-b border-surface-container-high transition-all">
        <div className="flex items-center gap-3">
          <button 
            onClick={onOpenMobileMenu}
            aria-label="Toggle menu" 
            className="md:hidden text-on-surface-variant hover:scale-105 p-1.5 rounded-lg hover:bg-surface-container transition-all"
          >
            <span className="material-symbols-outlined text-2xl">menu</span>
          </button>
          
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center text-on-primary shadow-sm group-hover:scale-105 transition-transform">
              <span className="material-symbols-outlined text-xl">grass</span>
            </div>
            <div>
              <span className="font-montserrat font-bold text-lg md:text-xl text-primary tracking-tight">
                MilletVitality
              </span>
              <span className="hidden sm:inline-block ml-2 text-[11px] font-semibold uppercase tracking-wider text-secondary bg-secondary-container/40 px-2 py-0.5 rounded-full">
                Bio-Organic
              </span>
            </div>
          </Link>
        </div>

        {/* Desktop Quick Nav Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link 
            to="/" 
            className={`font-label-md text-sm transition-colors ${location.pathname === '/' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/millets" 
            className={`font-label-md text-sm transition-colors ${location.pathname === '/millets' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Millets
          </Link>
          <Link 
            to="/recipes" 
            className={`font-label-md text-sm transition-colors ${location.pathname === '/recipes' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Recipes
          </Link>
          <Link 
            to="/recommendation" 
            className={`font-label-md text-sm transition-colors ${location.pathname === '/recommendation' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Find My Millet
          </Link>
          <Link 
            to="/consultation" 
            className={`font-label-md text-sm transition-colors ${location.pathname === '/consultation' ? 'text-primary font-bold border-b-2 border-primary pb-1' : 'text-on-surface-variant hover:text-primary'}`}
          >
            Consultation
          </Link>
        </nav>

        {/* Right Action Icons */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => setShowSearchModal(true)}
            aria-label="Search" 
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary bg-surface-container hover:bg-surface-container-high px-3 py-1.5 rounded-full transition-all border border-outline-variant/30 text-xs md:text-sm"
          >
            <span className="material-symbols-outlined text-lg">search</span>
            <span className="hidden sm:inline">Search millets, recipes...</span>
            <kbd className="hidden sm:inline text-[10px] bg-surface-container-highest px-1.5 py-0.5 rounded text-outline">⌘K</kbd>
          </button>

          <Link 
            to="/onboarding"
            className="hidden sm:flex items-center gap-1.5 bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-white px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all"
          >
            <span className="material-symbols-outlined text-base">auto_awesome</span>
            <span>Retake Quiz</span>
          </Link>

          <Link 
            to="/onboarding" 
            className="flex items-center gap-2 p-1 rounded-full hover:ring-2 hover:ring-primary/20 transition-all"
            title={userProfile.name}
          >
            <img 
              src={userProfile.avatar} 
              alt={userProfile.name} 
              className="w-8 h-8 md:w-9 md:h-9 rounded-full object-cover border border-primary/30"
            />
          </Link>
        </div>
      </header>

      {/* Global Quick Search Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-20 px-4 bg-black/40 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-lowest w-full max-w-xl rounded-2xl shadow-2xl border border-outline-variant/30 overflow-hidden">
            <div className="p-4 border-b border-outline-variant/20 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-xl">search</span>
              <input 
                type="text" 
                placeholder="Search by grain, health goal, recipe name..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className="w-full bg-transparent text-on-surface outline-none text-base placeholder:text-outline"
              />
              <button 
                onClick={() => setShowSearchModal(false)}
                className="text-on-surface-variant hover:text-on-surface p-1 rounded-full hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
            </div>

            <div className="max-h-96 overflow-y-auto p-4 space-y-4">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-8 text-on-surface-variant">
                  <span className="material-symbols-outlined text-3xl text-primary/60 mb-2">grain</span>
                  <p className="text-sm font-medium">Try searching for "Ragi", "Low GI", "Dosa", "Iron", or "Calcium"</p>
                </div>
              ) : (
                <>
                  {searchResultsMillets.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-primary mb-2">Millets</h4>
                      <div className="space-y-2">
                        {searchResultsMillets.map(m => (
                          <div 
                            key={m.id}
                            onClick={() => {
                              navigate('/millets');
                              setShowSearchModal(false);
                            }}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container cursor-pointer transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <span className="material-symbols-outlined text-primary">grass</span>
                              <div>
                                <p className="font-semibold text-sm text-on-surface">{m.name}</p>
                                <p className="text-xs text-on-surface-variant">{m.highlightNutrient}</p>
                              </div>
                            </div>
                            <span className="text-xs px-2.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">{m.tag}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResultsRecipes.length > 0 && (
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Recipes</h4>
                      <div className="space-y-2">
                        {searchResultsRecipes.map(r => (
                          <div 
                            key={r.id}
                            onClick={() => {
                              navigate('/recipes');
                              setShowSearchModal(false);
                            }}
                            className="flex items-center justify-between p-2.5 rounded-xl hover:bg-surface-container cursor-pointer transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <img src={r.image} alt={r.title} className="w-10 h-10 rounded-lg object-cover" />
                              <div>
                                <p className="font-semibold text-sm text-on-surface">{r.title}</p>
                                <p className="text-xs text-on-surface-variant">{r.time} • {r.calories}</p>
                              </div>
                            </div>
                            <span className="text-xs text-primary font-semibold">View Recipe →</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {searchResultsMillets.length === 0 && searchResultsRecipes.length === 0 && (
                    <div className="text-center py-6 text-on-surface-variant">
                      <p className="text-sm">No exact matches found for "{searchQuery}".</p>
                    </div>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
