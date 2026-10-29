import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const MilletKnowledge = () => {
  const { millets } = useApp();
  const [selectedNutrientFilter, setSelectedNutrientFilter] = useState('All');
  const [activeMilletModal, setActiveMilletModal] = useState(null);

  const nutrientFilters = ['All', 'High Calcium', 'Iron Rich', 'Gluten-Free Hero', 'Fast Cooking', 'Lowest Calorie'];

  const filteredMillets = selectedNutrientFilter === 'All'
    ? millets
    : millets.filter(m => m.tag === selectedNutrientFilter);

  return (
    <div className="space-y-12 animate-fade-in">
      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 md:gap-12 pt-2">
        <div className="md:w-1/2 space-y-6 text-center md:text-left">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
            <span className="material-symbols-outlined text-sm">eco</span>
            Ancient Climate-Smart Superfoods
          </div>
          <h1 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-on-surface leading-tight">
            Discover the <span className="text-primary">Power</span> of Millets
          </h1>
          <p className="text-on-surface-variant text-base sm:text-lg leading-relaxed max-w-xl">
            Ancient grains for a modern lifestyle. Explore the incredible nutritional density, ecological benefits, and versatile culinary applications of these sustainable superfoods.
          </p>
          <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-2">
            <a
              href="#types"
              className="bg-primary text-on-primary font-label-md px-6 py-3.5 rounded-full hover:bg-surface-tint transition-all hover:scale-[1.02] shadow-md text-sm font-semibold flex items-center gap-2"
            >
              <span>Explore Millets</span>
              <span className="material-symbols-outlined text-base">arrow_downward</span>
            </a>
            <a
              href="#nutrition-table"
              className="bg-transparent border-2 border-primary text-primary font-label-md px-6 py-3.5 rounded-full hover:bg-primary/5 transition-all text-sm font-semibold"
            >
              Compare with Rice & Wheat
            </a>
          </div>
        </div>

        <div className="md:w-1/2 w-full h-72 md:h-[400px] rounded-[32px] overflow-hidden shadow-sage-hover relative bg-surface-container-low group">
          <img
            src="https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=800&auto=format&fit=crop&q=80"
            alt="Millet Assortment in wooden bowls"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-6 left-6 right-6 text-white">
            <span className="bg-secondary text-black text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2 inline-block">
              Super-Grain Facts
            </span>
            <p className="text-sm font-medium">Millets consume up to 70% less water than paddy rice and thrive in non-irrigated drylands.</p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section id="types" className="space-y-6 pt-4">
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-primary">Biodiversity Guide</span>
            <h2 className="font-montserrat font-bold text-2xl sm:text-3xl text-on-surface mt-0.5">
              Types of Indigenous Millets
            </h2>
          </div>

          <div className="flex gap-2 overflow-x-auto hide-scrollbar pb-1">
            {nutrientFilters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedNutrientFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                  selectedNutrientFilter === filter
                    ? 'bg-primary text-on-primary shadow-sm'
                    : 'bg-surface-container text-on-surface-variant hover:bg-surface-container-high'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Millets Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMillets.map((millet) => (
            <div
              key={millet.id}
              className="bg-surface-container-lowest rounded-[24px] shadow-sage overflow-hidden border border-outline-variant/30 flex flex-col group lift-card"
            >
              <div className="h-48 w-full relative overflow-hidden bg-surface-container-low">
                <img
                  src={millet.image}
                  alt={millet.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className={`absolute top-4 left-4 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${millet.tagColor}`}>
                  {millet.tag}
                </span>
                <span className="absolute bottom-3 right-3 bg-surface/90 backdrop-blur-sm text-on-surface text-[11px] font-semibold px-2.5 py-1 rounded-full">
                  GI: {millet.glycemicIndex}
                </span>
              </div>

              <div className="p-6 flex flex-col flex-grow justify-between space-y-4">
                <div>
                  <h3 className="font-montserrat font-bold text-lg text-primary">
                    {millet.name}
                  </h3>
                  <p className="text-xs italic text-outline mb-2">{millet.scientificName}</p>
                  <p className="text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                    {millet.desc}
                  </p>

                  <div className="mt-4 pt-3 border-t border-outline-variant/20 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-outline block text-[10px] uppercase">Primary Nutrient</span>
                      <strong className="text-on-surface">{millet.highlightNutrient}</strong>
                    </div>
                    <div>
                      <span className="text-outline block text-[10px] uppercase">Eco Benefit</span>
                      <strong className="text-primary">{millet.waterSaved}</strong>
                    </div>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => setActiveMilletModal(millet)}
                    className="text-primary font-bold text-xs flex items-center gap-1.5 hover:underline group-hover:translate-x-1 transition-transform"
                  >
                    <span>Nutrition Profile & Uses</span>
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </button>

                  <Link
                    to="/recipes"
                    className="text-xs text-outline hover:text-secondary font-medium"
                  >
                    Recipes →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Comparison Table Section */}
      <section id="nutrition-table" className="bg-surface-container-lowest rounded-[28px] p-6 md:p-8 shadow-sage border border-outline-variant/30 space-y-6">
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Scientific Benchmarking</span>
            <h2 className="font-montserrat font-bold text-2xl text-on-surface mt-0.5">
              Nutritional Value per 100g Grains
            </h2>
            <p className="text-xs text-on-surface-variant mt-1">
              Data verified according to National Institute of Nutrition (NIN) standards.
            </p>
          </div>
          <Link
            to="/recommendation"
            className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold hover:bg-primary hover:text-white transition-all self-start sm:self-auto"
          >
            Find My Best Match
          </Link>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs sm:text-sm border-collapse">
            <thead>
              <tr className="border-b-2 border-outline-variant/40 text-outline uppercase text-[11px] tracking-wider">
                <th className="py-3 px-4">Grain</th>
                <th className="py-3 px-4">Calcium (mg)</th>
                <th className="py-3 px-4">Iron (mg)</th>
                <th className="py-3 px-4">Protein (g)</th>
                <th className="py-3 px-4">Dietary Fiber (g)</th>
                <th className="py-3 px-4">Glycemic Index</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-outline-variant/20">
              <tr className="hover:bg-primary-container/10 transition-colors font-semibold">
                <td className="py-3 px-4 text-primary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-primary"></span>
                  Ragi (Finger Millet)
                </td>
                <td className="py-3 px-4 text-primary font-bold">344 mg 🥇</td>
                <td className="py-3 px-4">3.9 mg</td>
                <td className="py-3 px-4">7.3 g</td>
                <td className="py-3 px-4 text-on-surface font-semibold">11.5 g</td>
                <td className="py-3 px-4 text-green-700 font-bold">54 (Low)</td>
              </tr>
              <tr className="hover:bg-secondary-container/10 transition-colors font-semibold">
                <td className="py-3 px-4 text-secondary flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-secondary"></span>
                  Bajra (Pearl Millet)
                </td>
                <td className="py-3 px-4">42 mg</td>
                <td className="py-3 px-4 text-secondary font-bold">8.0 mg 🥇</td>
                <td className="py-3 px-4 text-on-surface font-semibold">11.6 g</td>
                <td className="py-3 px-4">8.5 g</td>
                <td className="py-3 px-4 text-green-700 font-bold">55 (Low)</td>
              </tr>
              <tr className="hover:bg-surface-container transition-colors">
                <td className="py-3 px-4 font-semibold text-on-surface">Jowar (Sorghum)</td>
                <td className="py-3 px-4">25 mg</td>
                <td className="py-3 px-4">4.1 mg</td>
                <td className="py-3 px-4">10.4 g</td>
                <td className="py-3 px-4 font-semibold">9.7 g</td>
                <td className="py-3 px-4 text-green-700">62 (Med-Low)</td>
              </tr>
              <tr className="hover:bg-surface-container transition-colors">
                <td className="py-3 px-4 font-semibold text-on-surface">Foxtail Millet</td>
                <td className="py-3 px-4">31 mg</td>
                <td className="py-3 px-4">2.8 mg</td>
                <td className="py-3 px-4 text-on-surface font-semibold">12.3 g</td>
                <td className="py-3 px-4">8.0 g</td>
                <td className="py-3 px-4 text-green-700 font-bold">50 (Low)</td>
              </tr>
              <tr className="hover:bg-surface-container transition-colors">
                <td className="py-3 px-4 font-semibold text-on-surface">Barnyard Millet</td>
                <td className="py-3 px-4">20 mg</td>
                <td className="py-3 px-4">5.0 mg</td>
                <td className="py-3 px-4">6.2 g</td>
                <td className="py-3 px-4 font-semibold">9.8 g</td>
                <td className="py-3 px-4 text-green-700 font-bold">49 (Very Low)</td>
              </tr>
              {/* Conventional grains for benchmark */}
              <tr className="bg-surface-container/50 text-outline">
                <td className="py-3 px-4 italic">Polished White Rice (Refined)</td>
                <td className="py-3 px-4">10 mg</td>
                <td className="py-3 px-4">0.7 mg</td>
                <td className="py-3 px-4">6.8 g</td>
                <td className="py-3 px-4">0.4 g ⚠️</td>
                <td className="py-3 px-4 text-red-600 font-bold">78 (High GI)</td>
              </tr>
              <tr className="bg-surface-container/50 text-outline">
                <td className="py-3 px-4 italic">Whole Wheat</td>
                <td className="py-3 px-4">30 mg</td>
                <td className="py-3 px-4">3.5 mg</td>
                <td className="py-3 px-4">11.8 g</td>
                <td className="py-3 px-4">2.0 g</td>
                <td className="py-3 px-4 text-yellow-700 font-semibold">65 (Medium)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Sustainability & Environmental Impact Bento */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Ecological Resilience</span>
          <h2 className="font-montserrat font-bold text-2xl text-on-surface mt-0.5">
            Why Millets Save Our Planet
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sage border border-outline-variant/30 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">water_drop</span>
            </div>
            <h3 className="font-montserrat font-bold text-base text-on-surface">Minimal Water Footprint</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Rice needs approximately 5,000 liters of water per kilogram produced. Millets require only 650 to 1,200 liters and rely mostly on direct seasonal rain.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sage border border-outline-variant/30 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">solar_power</span>
            </div>
            <h3 className="font-montserrat font-bold text-base text-on-surface">Climate Extreme Resistance</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Millets are C4 photosynthetic plants that endure heat waves up to 45°C and survive severe drought conditions where other crops perish.
            </p>
          </div>

          <div className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sage border border-outline-variant/30 space-y-3">
            <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
              <span className="material-symbols-outlined text-2xl">pest_control</span>
            </div>
            <h3 className="font-montserrat font-bold text-base text-on-surface">Zero Chemical Dependency</h3>
            <p className="text-xs text-on-surface-variant leading-relaxed">
              Naturally resistant to pests and fungal infestations, millets require almost no synthetic chemical pesticides, protecting groundwater and soil biology.
            </p>
          </div>
        </div>
      </section>

      {/* Grain Detail Modal */}
      {activeMilletModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-surface-container-lowest rounded-[32px] w-full max-w-2xl shadow-2xl border border-outline-variant/30 overflow-hidden flex flex-col max-h-[90vh]">
            <div className="relative h-56 w-full bg-surface-container-low">
              <img
                src={activeMilletModal.image}
                alt={activeMilletModal.name}
                className="w-full h-full object-cover"
              />
              <button
                onClick={() => setActiveMilletModal(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-lg">close</span>
              </button>
              <div className="absolute bottom-4 left-4 bg-surface/90 backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold text-primary">
                {activeMilletModal.tag}
              </div>
            </div>

            <div className="p-6 md:p-8 overflow-y-auto hide-scrollbar space-y-6">
              <div>
                <h3 className="font-montserrat font-bold text-2xl text-on-surface">
                  {activeMilletModal.name}
                </h3>
                <p className="text-xs italic text-outline">{activeMilletModal.scientificName}</p>
                <p className="text-sm text-on-surface-variant mt-3 leading-relaxed">
                  {activeMilletModal.desc}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-surface-container-low p-4 rounded-2xl border border-outline-variant/20 text-center">
                <div>
                  <span className="text-[10px] text-outline block uppercase">Calcium</span>
                  <strong className="text-sm text-primary">{activeMilletModal.calcium}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-outline block uppercase">Iron</span>
                  <strong className="text-sm text-secondary">{activeMilletModal.iron}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-outline block uppercase">Protein</span>
                  <strong className="text-sm text-tertiary">{activeMilletModal.protein}</strong>
                </div>
                <div>
                  <span className="text-[10px] text-outline block uppercase">Fiber</span>
                  <strong className="text-sm text-on-surface">{activeMilletModal.fiber}</strong>
                </div>
              </div>

              <div className="space-y-2 text-xs">
                <div className="p-3 rounded-xl bg-primary/5 border border-primary/15 flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <div>
                    <strong className="text-primary block">Best Health Applications:</strong>
                    <span className="text-on-surface-variant">{activeMilletModal.bestFor}</span>
                  </div>
                </div>
                <div className="p-3 rounded-xl bg-secondary/5 border border-secondary/15 flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary text-xl">calendar_today</span>
                  <div>
                    <strong className="text-secondary block">Seasonal Consumption:</strong>
                    <span className="text-on-surface-variant">{activeMilletModal.seasons}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-outline-variant/20 flex gap-3">
                <Link
                  to="/recipes"
                  onClick={() => setActiveMilletModal(null)}
                  className="flex-1 py-3 rounded-full bg-primary text-on-primary font-semibold text-xs text-center hover:bg-surface-tint transition-all"
                >
                  Explore Recipes With {activeMilletModal.name.split(' ')[0]}
                </Link>
                <Link
                  to="/recommendation"
                  onClick={() => setActiveMilletModal(null)}
                  className="flex-1 py-3 rounded-full border-2 border-primary text-primary font-semibold text-xs text-center hover:bg-primary/5 transition-all"
                >
                  Check My Match %
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
