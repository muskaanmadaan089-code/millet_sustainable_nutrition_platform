import React, { useState } from 'react';
import { useApp } from '../context/AppContext';

export const Recipes = () => {
  const { recipes, favorites, toggleFavorite } = useApp();
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedTag, setSelectedTag] = useState('All');
  const [selectedRecipeModal, setSelectedRecipeModal] = useState(null);

  const categories = ['All', 'Breakfast', 'Lunch', 'Dinner'];
  const tags = ['All', 'Gluten-Free', 'High Fiber', 'Low GI', 'Iron Rich', 'Calcium Boost'];

  const filteredRecipes = recipes.filter(r => {
    const matchesSearch = 
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.millet.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.tags.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesCategory = selectedCategory === 'All' || r.category === selectedCategory;
    const matchesTag = selectedTag === 'All' || r.tags.includes(selectedTag);

    return matchesSearch && matchesCategory && matchesTag;
  });

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header & Search Bar */}
      <section className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Culinary Innovation</span>
            <h1 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-on-surface mt-0.5">
              Healthy Recipes for Every Meal
            </h1>
            <p className="text-xs sm:text-sm text-on-surface-variant mt-1">
              Chef-crafted recipes converting traditional grains into delicious, quick modern meals.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-primary bg-primary/10 px-4 py-2 rounded-full self-start md:self-auto">
            <span className="material-symbols-outlined text-base">bookmark</span>
            <span>Saved Favorites: {favorites.length}</span>
          </div>
        </div>

        {/* Search Input */}
        <div className="relative w-full max-w-2xl">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
            search
          </span>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search recipes by name, millet (e.g. Foxtail, Ragi), or ingredient..."
            className="w-full bg-surface-container-lowest border border-outline-variant/40 rounded-full py-3.5 pl-12 pr-6 text-sm text-on-surface focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent shadow-sm placeholder:text-outline transition-all"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-on-surface"
            >
              <span className="material-symbols-outlined text-base">cancel</span>
            </button>
          )}
        </div>
      </section>

      {/* Horizontal Filter Chips */}
      <section className="space-y-3">
        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
          <span className="text-xs text-outline font-semibold uppercase tracking-wider mr-2 hidden sm:inline">Meal:</span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-primary-container text-on-primary-container shadow-sm font-bold'
                  : 'bg-surface-container border border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tag Filters */}
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-1">
          <span className="text-xs text-outline font-semibold uppercase tracking-wider mr-2 hidden sm:inline">Focus:</span>
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3.5 py-1.5 rounded-full text-[11px] font-medium whitespace-nowrap transition-all ${
                selectedTag === tag
                  ? 'bg-secondary-container text-on-secondary-container font-bold shadow-sm'
                  : 'bg-surface-container-lowest border border-outline-variant/40 text-on-surface-variant hover:bg-surface-container'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </section>

      {/* Recipe Grid */}
      <section>
        {filteredRecipes.length === 0 ? (
          <div className="text-center py-16 bg-surface-container-lowest rounded-[24px] border border-outline-variant/20 p-8 space-y-3">
            <span className="material-symbols-outlined text-4xl text-outline">search_off</span>
            <h3 className="font-montserrat font-bold text-lg text-on-surface">No matching recipes found</h3>
            <p className="text-xs text-on-surface-variant max-w-sm mx-auto">
              We couldn't find any recipes matching your current filters. Try searching for "Dosa", "Ragi", or resetting filters.
            </p>
            <button
              onClick={() => { setSearchQuery(''); setSelectedCategory('All'); setSelectedTag('All'); }}
              className="px-5 py-2.5 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-surface-tint transition-all mt-2"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredRecipes.map((recipe) => {
              const isFav = favorites.includes(recipe.id);
              return (
                <article
                  key={recipe.id}
                  className="bg-surface-container-lowest rounded-[24px] shadow-sage border border-outline-variant/20 overflow-hidden flex flex-col group lift-card"
                >
                  <div className="relative h-48 w-full overflow-hidden bg-surface-container-low">
                    <img
                      src={recipe.image}
                      alt={recipe.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 left-3 bg-surface-container-lowest/90 backdrop-blur-md text-primary font-bold text-xs px-3 py-1 rounded-full shadow-sm">
                      {recipe.badge}
                    </span>
                    <span className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white font-medium text-xs px-2.5 py-1 rounded-full">
                      ⏱ {recipe.time}
                    </span>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite(recipe.id);
                      }}
                      className="absolute top-3 right-3 w-9 h-9 rounded-full bg-surface-container-lowest/90 backdrop-blur-md flex items-center justify-center text-primary shadow-sm hover:scale-110 transition-transform"
                      aria-label="Favorite"
                    >
                      <span className={`material-symbols-outlined text-xl ${isFav ? 'text-red-500 icon-filled' : 'text-outline'}`}>
                        favorite
                      </span>
                    </button>
                  </div>

                  <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-[11px] font-bold text-secondary uppercase tracking-wider">
                          {recipe.millet}
                        </span>
                        <span className="text-outline">•</span>
                        <span className="text-[11px] text-outline font-medium">{recipe.calories}</span>
                        <span className="text-outline">•</span>
                        <span className="text-[11px] text-primary font-semibold">{recipe.difficulty}</span>
                      </div>
                      <h3 className="font-montserrat font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                        {recipe.title}
                      </h3>
                      <p className="text-xs text-on-surface-variant line-clamp-2 mt-1.5 leading-relaxed">
                        {recipe.desc}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mt-3">
                        {recipe.tags.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] bg-surface-container px-2 py-0.5 rounded-md text-on-surface-variant font-medium"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                      <span className="text-xs font-bold text-primary flex items-center gap-1">
                        ★ {recipe.rating} ({recipe.reviews})
                      </span>
                      <button
                        onClick={() => setSelectedRecipeModal(recipe)}
                        className="text-xs font-bold text-primary hover:text-surface-tint flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        <span>Full Recipe</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      {/* Recipe Detail Modal */}
      {selectedRecipeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-lowest rounded-[32px] w-full max-w-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="relative h-60 w-full bg-surface-container-low">
              <img
                src={selectedRecipeModal.image}
                alt={selectedRecipeModal.title}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setSelectedRecipeModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/80 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
              <div className="absolute bottom-4 left-4 flex gap-2">
                <span className="bg-surface/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-primary">
                  {selectedRecipeModal.badge}
                </span>
                <span className="bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white">
                  ⏱ {selectedRecipeModal.time}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto hide-scrollbar space-y-6">
              <div>
                <span className="text-xs font-bold text-secondary uppercase tracking-wider block">
                  {selectedRecipeModal.millet} • {selectedRecipeModal.category}
                </span>
                <h2 className="font-montserrat font-bold text-2xl text-on-surface mt-1">
                  {selectedRecipeModal.title}
                </h2>
                <p className="text-xs sm:text-sm text-on-surface-variant mt-2 leading-relaxed">
                  {selectedRecipeModal.desc}
                </p>
              </div>

              {/* Quick Metrics */}
              <div className="grid grid-cols-3 gap-3 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/20 text-center">
                <div>
                  <span className="text-[10px] text-outline uppercase block">Time</span>
                  <strong className="text-xs sm:text-sm text-on-surface">{selectedRecipeModal.time}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-outline uppercase block">Calories</span>
                  <strong className="text-xs sm:text-sm text-primary">{selectedRecipeModal.calories}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-outline uppercase block">Difficulty</span>
                  <strong className="text-xs sm:text-sm text-secondary">{selectedRecipeModal.difficulty}</strong>
                </div>
              </div>

              {/* Ingredients List */}
              <div className="space-y-3">
                <h3 className="font-montserrat font-bold text-base text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-xl">inventory_2</span>
                  Ingredients Checklist
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm">
                  {selectedRecipeModal.ingredients.map((ing, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-on-surface-variant">
                      <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
                      <span>{ing}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cooking Instructions */}
              <div className="space-y-3">
                <h3 className="font-montserrat font-bold text-base text-on-surface flex items-center gap-2">
                  <span className="material-symbols-outlined text-secondary text-xl">menu_book</span>
                  Step-by-Step Directions
                </h3>
                <ol className="space-y-3 text-xs sm:text-sm">
                  {selectedRecipeModal.instructions.map((step, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-on-surface-variant">
                      <span className="w-6 h-6 rounded-full bg-primary/10 text-primary font-bold text-xs flex items-center justify-center flex-shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span className="leading-relaxed">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-outline-variant/20 flex gap-3">
                <button
                  onClick={() => {
                    toggleFavorite(selectedRecipeModal.id);
                  }}
                  className="flex-1 py-3 rounded-full border-2 border-primary text-primary font-semibold text-xs flex items-center justify-center gap-2 hover:bg-primary/5 transition-all"
                >
                  <span className="material-symbols-outlined text-base">
                    {favorites.includes(selectedRecipeModal.id) ? 'favorite' : 'favorite_border'}
                  </span>
                  <span>{favorites.includes(selectedRecipeModal.id) ? 'Saved in Favorites' : 'Save to Favorites'}</span>
                </button>
                <button
                  onClick={() => setSelectedRecipeModal(null)}
                  className="flex-1 py-3 rounded-full bg-primary text-on-primary font-semibold text-xs hover:bg-surface-tint transition-all"
                >
                  Close Recipe
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
