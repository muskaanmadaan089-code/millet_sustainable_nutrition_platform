import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';

export const Recommendation = () => {
  const navigate = useNavigate();
  const { userProfile, activeGoals, setActiveGoals } = useApp();

  const availableGoals = [
    { id: 'High Calcium', icon: 'format_h4', label: 'High Calcium', targetMillet: 'ragi' },
    { id: 'Traditional Taste', icon: 'gite', label: 'Traditional Taste', targetMillet: 'ragi' },
    { id: 'Morning Energy', icon: 'energy_savings_leaf', label: 'Morning Energy', targetMillet: 'ragi' },
    { id: 'Iron Rich', icon: 'fitness_center', label: 'Iron & Stamina', targetMillet: 'bajra' },
    { id: 'Gut Health', icon: 'spa', label: 'Gut Health & Fiber', targetMillet: 'jowar' },
    { id: 'Low GI', icon: 'speed', label: 'Diabetic / Low GI', targetMillet: 'foxtail' },
    { id: 'Weight Management', icon: 'monitor_weight', label: 'Weight Management', targetMillet: 'barnyard' },
  ];

  const toggleGoal = (goalId) => {
    setActiveGoals(prev => 
      prev.includes(goalId) 
        ? (prev.length > 1 ? prev.filter(g => g !== goalId) : prev) 
        : [...prev, goalId]
    );
  };

  const [isCalculating, setIsCalculating] = useState(false);
  const [matchScore, setMatchScore] = useState(98);

  const handleRecalculate = () => {
    setIsCalculating(true);
    setTimeout(() => {
      setIsCalculating(false);
      setMatchScore(Math.floor(Math.random() * 5) + 95); // 95% - 99%
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.6 }
      });
    }, 600);
  };

  return (
    <div className="space-y-10 animate-fade-in max-w-5xl mx-auto">
      {/* Header Section */}
      <section className="text-center space-y-3 pt-2 max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3.5 py-1 rounded-full inline-block">
          Personalized Bio-Nutrition Match
        </span>
        <h1 className="font-montserrat font-bold text-3xl sm:text-4xl text-on-surface">
          Find the Right Millet for You
        </h1>
        <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
          We've analyzed your lifestyle parameters, taste preferences, and metabolic requirements to synthesize your ideal daily grain.
        </p>
      </section>

      {/* Interactive Selected Goals Bar */}
      <section className="bg-surface-container-lowest rounded-[24px] p-6 md:p-8 shadow-sage border border-outline-variant/30 relative overflow-hidden text-center space-y-5">
        <div className="absolute inset-0 bg-sage-grain pointer-events-none"></div>
        <div className="relative z-10 max-w-2xl mx-auto space-y-4">
          <h2 className="font-montserrat font-bold text-base sm:text-lg text-primary">
            Selected Wellness Focus Areas
          </h2>
          <p className="text-xs text-outline">Click tags to adjust goals and re-run your match algorithm:</p>
          
          <div className="flex flex-wrap justify-center gap-2.5">
            {availableGoals.map((g) => {
              const isSelected = activeGoals.includes(g.id);
              return (
                <button
                  key={g.id}
                  onClick={() => toggleGoal(g.id)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold border flex items-center gap-2 transition-all ${
                    isSelected
                      ? 'bg-primary/10 text-primary border-primary shadow-sm scale-105'
                      : 'bg-surface-container border-outline-variant/30 text-on-surface-variant hover:bg-surface-container-high'
                  }`}
                >
                  <span className="material-symbols-outlined text-base">{g.icon}</span>
                  <span>{g.label}</span>
                  {isSelected && <span className="text-[10px] font-bold">✓</span>}
                </button>
              );
            })}
          </div>

          <button
            onClick={handleRecalculate}
            disabled={isCalculating}
            className="mt-2 bg-primary hover:bg-surface-tint text-on-primary rounded-full px-8 py-3.5 text-xs sm:text-sm font-semibold shadow-md transition-all hover:scale-[1.02] inline-flex items-center gap-2"
          >
            <span className="material-symbols-outlined text-base">
              {isCalculating ? 'progress_activity' : 'tune'}
            </span>
            <span>{isCalculating ? "Matching Biomarkers..." : "Recalculate Best Match"}</span>
          </button>
        </div>
      </section>

      {/* Premium Result Card (The Reveal) */}
      <section className="relative">
        <div className="absolute -inset-1.5 bg-gradient-to-r from-primary-fixed via-secondary-container to-primary-container rounded-[32px] blur-md opacity-40"></div>
        <div className="relative bg-surface-container-lowest rounded-[28px] overflow-hidden shadow-2xl border border-outline-variant/30 grid grid-cols-1 lg:grid-cols-5">
          {/* Image Area */}
          <div className="lg:col-span-2 relative min-h-[280px] lg:min-h-[420px] bg-surface-container-low">
            <img
              src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=800&auto=format&fit=crop&q=80"
              alt="Raw Ragi finger millet in ceramic bowl"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-md rounded-full px-3.5 py-1.5 flex items-center gap-1.5 shadow-sm border border-outline-variant/30">
              <span className="material-symbols-outlined text-secondary text-base icon-filled">workspace_premium</span>
              <span className="text-xs font-bold text-on-surface">Top Match {matchScore}%</span>
            </div>
            <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-full px-3 py-1 text-white text-[11px] font-medium">
              🌾 Eleusine coracana
            </div>
          </div>

          {/* Content Area */}
          <div className="lg:col-span-3 p-6 sm:p-8 md:p-10 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-xs font-bold text-secondary uppercase tracking-widest block mb-1">
                Your Recommended Millet
              </span>
              <h2 className="font-montserrat font-bold text-3xl sm:text-4xl text-primary flex items-center gap-3">
                Ragi (Finger Millet) <span className="text-2xl">🌱</span>
              </h2>
              <p className="text-xs sm:text-sm text-on-surface-variant mt-3 leading-relaxed">
                An ancient powerhouse, extraordinarily well-suited for your profile ({userProfile.ageGroup}, {userProfile.activityLevel}). Rich in polyphenols, dietary fiber, and natural bioavailable calcium for sustained morning vitality and bone health.
              </p>

              {/* Bento Sub-grid of Suitability */}
              <div className="grid grid-cols-3 gap-3 mt-6">
                <div className="bg-surface-container-low p-3.5 rounded-2xl border border-outline-variant/20">
                  <span className="material-symbols-outlined text-primary text-xl mb-1 icon-filled">format_h4</span>
                  <span className="text-[10px] text-outline block uppercase font-medium">Key Nutrient</span>
                  <strong className="text-xs sm:text-sm text-on-surface block mt-0.5">Calcium (344mg)</strong>
                </div>

                <div className="bg-surface-container-low p-3.5 rounded-2xl border border-outline-variant/20">
                  <span className="material-symbols-outlined text-secondary text-xl mb-1 icon-filled">wb_twilight</span>
                  <span className="text-[10px] text-outline block uppercase font-medium">Optimal Meal</span>
                  <strong className="text-xs sm:text-sm text-on-surface block mt-0.5">Breakfast (AM)</strong>
                </div>

                <div className="bg-surface-container-low p-3.5 rounded-2xl border border-outline-variant/20">
                  <span className="material-symbols-outlined text-tertiary text-xl mb-1 icon-filled">restaurant_menu</span>
                  <span className="text-[10px] text-outline block uppercase font-medium">Top Recipe</span>
                  <strong className="text-xs sm:text-sm text-on-surface block mt-0.5">Ragi Dosa</strong>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-4 border-t border-outline-variant/20 flex flex-col sm:flex-row gap-3">
              <Link
                to="/recipes"
                className="flex-1 py-3 px-5 rounded-full bg-secondary text-on-secondary hover:bg-[#634900] text-xs font-semibold text-center flex items-center justify-center gap-2 shadow-sm transition-all"
              >
                <span className="material-symbols-outlined text-base">menu_book</span>
                <span>Explore Ragi Recipes</span>
              </Link>
              <Link
                to="/millets"
                className="flex-1 py-3 px-5 rounded-full border-2 border-primary text-primary hover:bg-primary/5 text-xs font-semibold text-center flex items-center justify-center gap-2 transition-all"
              >
                <span>Learn Grain Facts</span>
                <span className="material-symbols-outlined text-base">arrow_forward</span>
              </Link>
              <Link
                to="/consultation"
                className="py-3 px-5 rounded-full bg-primary-container text-on-primary-container hover:bg-primary hover:text-white text-xs font-semibold text-center transition-all"
              >
                Consult Dietitian
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Other Millets You May Like */}
      <section className="space-y-4 pt-4">
        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-outline">Alternative Matches</span>
          <h3 className="font-montserrat font-bold text-xl text-on-surface mt-0.5">
            Other Millets Complementing Your Diet
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {/* Card: Bajra */}
          <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sage border border-outline-variant/20 p-5 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-secondary bg-secondary/10 px-2.5 py-0.5 rounded-full">
                  92% Match
                </span>
                <span className="text-xs text-outline font-medium">Winter Staple</span>
              </div>
              <h4 className="font-montserrat font-bold text-base text-on-surface">Bajra (Pearl Millet)</h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Super-rich in iron (8mg/100g) and zinc. Excellent for cold seasons, sustained cellular respiration, and stamina.
              </p>
            </div>
            <Link to="/recipes" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              Cook Bajra Khichdi →
            </Link>
          </div>

          {/* Card: Foxtail */}
          <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sage border border-outline-variant/20 p-5 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                  89% Match
                </span>
                <span className="text-xs text-outline font-medium">Low GI (50)</span>
              </div>
              <h4 className="font-montserrat font-bold text-base text-on-surface">Foxtail Millet (Thinai)</h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Loaded with Vitamin B1, high protein (12.3g), and ideal for steady blood glucose regulation and cardiac care.
              </p>
            </div>
            <Link to="/recipes" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              Cook Foxtail Dosa →
            </Link>
          </div>

          {/* Card: Barnyard */}
          <div className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sage border border-outline-variant/20 p-5 space-y-3 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-bold text-tertiary bg-tertiary/10 px-2.5 py-0.5 rounded-full">
                  86% Match
                </span>
                <span className="text-xs text-outline font-medium">Light & Fasting</span>
              </div>
              <h4 className="font-montserrat font-bold text-base text-on-surface">Barnyard Millet (Sanwa)</h4>
              <p className="text-xs text-on-surface-variant mt-1 leading-relaxed">
                Highest digestible fiber with lowest carbohydrate load. Ideal for light dinners and post-workout recovery.
              </p>
            </div>
            <Link to="/recipes" className="text-xs font-bold text-primary hover:underline flex items-center gap-1">
              Cook Barnyard Pulao →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
