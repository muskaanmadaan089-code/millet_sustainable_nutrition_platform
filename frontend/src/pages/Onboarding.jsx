import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import confetti from 'canvas-confetti';

export const Onboarding = () => {
  const navigate = useNavigate();
  const { userProfile, updateProfile } = useApp();

  const [step, setStep] = useState(1);
  const totalSteps = 6;

  // Local form state initialized from current user profile
  const [formData, setFormData] = useState({
    name: userProfile.name || '',
    age: userProfile.age || '28',
    gender: userProfile.gender || 'Female',
    ageGroup: userProfile.ageGroup || 'Adult (20-49)',
    activityLevel: userProfile.activityLevel || 'Moderate Active',
    dietaryPreferences: ['Gluten-Free', 'High-Fiber'],
    healthGoals: userProfile.healthGoals || ['High Calcium', 'Morning Energy'],
    cookingPreference: 'Quick 15-min meals'
  });

  const toggleArrayItem = (field, value) => {
    setFormData(prev => {
      const list = prev[field];
      return {
        ...prev,
        [field]: list.includes(value) ? list.filter(item => item !== value) : [...list, value]
      };
    });
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      // Final step: Save profile and launch confetti
      updateProfile({
        name: formData.name || 'Nourish User',
        age: formData.age,
        gender: formData.gender,
        ageGroup: formData.ageGroup,
        activityLevel: formData.activityLevel,
        primaryGoal: formData.healthGoals[0] || 'Sustainable Vitality',
        healthGoals: formData.healthGoals,
        dietaryPreference: formData.dietaryPreferences.join(' & ') || 'Balanced'
      });

      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });

      setTimeout(() => {
        navigate('/recommendation');
      }, 1200);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    } else {
      navigate('/');
    }
  };

  return (
    <main className="w-full max-w-[500px] bg-surface-container-lowest min-h-screen sm:min-h-[850px] sm:rounded-[32px] sm:my-6 flex flex-col relative overflow-hidden shadow-2xl border border-outline-variant/30">
      {/* Top Header & Stepper */}
      <header className="px-6 pt-6 pb-3 border-b border-outline-variant/20 bg-surface">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={handleBack}
            className="w-10 h-10 flex items-center justify-center rounded-full bg-surface-container-low border border-outline-variant/30 text-on-surface hover:bg-surface-container transition-all"
            aria-label="Back"
          >
            <span className="material-symbols-outlined text-lg">arrow_back</span>
          </button>

          {/* Step Progress Pills */}
          <div className="flex gap-1.5">
            {[1, 2, 3, 4, 5, 6].map((idx) => (
              <div
                key={idx}
                className={`h-2 rounded-full transition-all duration-300 ${
                  idx === step
                    ? 'w-8 bg-primary'
                    : idx < step
                    ? 'w-5 bg-primary/70'
                    : 'w-4 bg-outline-variant/40'
                }`}
              />
            ))}
          </div>

          <Link
            to="/"
            className="text-xs text-outline hover:text-primary font-semibold transition-colors"
          >
            Skip
          </Link>
        </div>

        <div>
          <p className="font-label-md text-xs text-primary font-bold tracking-widest uppercase mb-1">
            Step {step} of {totalSteps}
          </p>
          <h1 className="font-montserrat font-bold text-xl sm:text-2xl text-on-surface">
            {step === 1 && "Start Your Millet Journey 🌾"}
            {step === 2 && "Lifestyle & Movement 🏃"}
            {step === 3 && "Dietary Preferences 🥗"}
            {step === 4 && "Key Wellness Goals 🎯"}
            {step === 5 && "Cooking & Routine 🍳"}
            {step === 6 && "Profile Ready! ✨"}
          </h1>
          <p className="text-xs text-on-surface-variant mt-1">
            {step === 1 && "Tell us about yourself so we can personalize your nutrition experience."}
            {step === 2 && "Help us calibrate your daily caloric and micronutrient requirements."}
            {step === 3 && "Select any allergen restrictions or special nutritional focus."}
            {step === 4 && "What is the primary positive health transformation you seek?"}
            {step === 5 && "How do you prefer to incorporate wholesome ancient grains?"}
            {step === 6 && "Review your tailored profile before generating your optimal millet plan."}
          </p>
        </div>
      </header>

      {/* Form Content Body */}
      <div className="flex-1 px-6 py-6 overflow-y-auto hide-scrollbar space-y-6">
        {/* STEP 1: Personal Details */}
        {step === 1 && (
          <div className="space-y-5 animate-fade-in">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Jane Doe"
                className="w-full h-13 px-4 rounded-xl bg-surface border border-outline-variant/50 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                Age
              </label>
              <input
                type="number"
                value={formData.age}
                onChange={(e) => setFormData({ ...formData, age: e.target.value })}
                placeholder="Years (e.g. 28)"
                className="w-full h-13 px-4 rounded-xl bg-surface border border-outline-variant/50 text-on-surface text-sm focus:outline-none focus:border-primary focus:ring-4 focus:ring-primary/20 transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                Gender
              </label>
              <div className="grid grid-cols-3 gap-2">
                {['Female', 'Male', 'Non-binary'].map((g) => (
                  <button
                    key={g}
                    type="button"
                    onClick={() => setFormData({ ...formData, gender: g })}
                    className={`py-3 px-3 rounded-xl text-xs font-semibold border transition-all ${
                      formData.gender === g
                        ? 'bg-primary text-on-primary border-primary shadow-sm'
                        : 'bg-surface border-outline-variant/40 text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {g}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 2: Lifestyle & Activity */}
        {step === 2 && (
          <div className="space-y-5 animate-fade-in">
            <div className="space-y-2">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                Age Demographic
              </label>
              <div className="flex flex-wrap gap-2">
                {['Child (Under 12)', 'Teenager (13-19)', 'Adult (20-49)', 'Senior (50+)'].map((cat) => (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setFormData({ ...formData, ageGroup: cat })}
                    className={`px-4 py-2 rounded-full text-xs font-semibold border transition-all ${
                      formData.ageGroup === cat
                        ? 'bg-primary text-on-primary border-primary shadow-sm'
                        : 'bg-surface border-outline-variant/40 text-on-surface-variant hover:bg-surface-container'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
                Activity Level
              </label>
              <div className="grid grid-cols-1 gap-3">
                {[
                  { title: 'Sedentary', desc: 'Desk job, minimal daily physical movement' },
                  { title: 'Lightly Active', desc: '1-3 days per week of walking or light exercise' },
                  { title: 'Moderate Active', desc: '3-5 days per week of moderate workouts' },
                  { title: 'Very Active', desc: '6-7 days of vigorous training or manual work' }
                ].map((act) => (
                  <div
                    key={act.title}
                    onClick={() => setFormData({ ...formData, activityLevel: act.title })}
                    className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                      formData.activityLevel === act.title
                        ? 'bg-primary-container/20 border-primary shadow-sage'
                        : 'bg-surface border-outline-variant/30 hover:border-outline'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-on-surface">{act.title}</h4>
                      <span className={`material-symbols-outlined text-sm ${formData.activityLevel === act.title ? 'text-primary icon-filled' : 'text-outline'}`}>
                        {formData.activityLevel === act.title ? 'check_circle' : 'radio_button_unchecked'}
                      </span>
                    </div>
                    <p className="text-xs text-on-surface-variant mt-1">{act.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* STEP 3: Dietary Preferences */}
        {step === 3 && (
          <div className="space-y-4 animate-fade-in">
            <p className="text-xs text-outline">Select all that apply:</p>
            <div className="grid grid-cols-2 gap-3">
              {[
                { name: 'Gluten-Free', icon: 'grain' },
                { name: 'Diabetic-Friendly', icon: 'bloodtype' },
                { name: 'Vegan', icon: 'eco' },
                { name: 'Dairy-Free', icon: 'no_drinks' },
                { name: 'High-Fiber', icon: 'nutrition' },
                { name: 'Low GI', icon: 'speed' },
                { name: 'High Protein', icon: 'fitness_center' },
                { name: 'Weight Watcher', icon: 'monitor_weight' }
              ].map((diet) => {
                const isSelected = formData.dietaryPreferences.includes(diet.name);
                return (
                  <button
                    key={diet.name}
                    type="button"
                    onClick={() => toggleArrayItem('dietaryPreferences', diet.name)}
                    className={`p-4 rounded-2xl border text-left flex flex-col justify-between h-24 transition-all ${
                      isSelected
                        ? 'bg-primary-container text-on-primary-container border-primary shadow-sm'
                        : 'bg-surface border-outline-variant/30 text-on-surface hover:bg-surface-container'
                    }`}
                  >
                    <span className="material-symbols-outlined text-2xl">{diet.icon}</span>
                    <span className="font-semibold text-xs">{diet.name}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* STEP 4: Key Health Goals */}
        {step === 4 && (
          <div className="space-y-3 animate-fade-in">
            <p className="text-xs text-outline">Choose your top 1 to 3 priorities:</p>
            {[
              { id: 'High Calcium', label: 'High Calcium & Bone Strength', icon: 'health_and_safety', desc: 'Strengthen bone density with natural calcium powerhouse grains.' },
              { id: 'Morning Energy', label: 'Morning Energy & Stamina', icon: 'wb_sunny', desc: 'Sustained complex carbs without mid-day sugar crashes.' },
              { id: 'Traditional Taste', label: 'Traditional & Wholesome Taste', icon: 'restaurant', desc: 'Time-tested artisan recipes like rotis, dosas, and khichdis.' },
              { id: 'Gut Health', label: 'Gut Biome & Digestion', icon: 'favorite', desc: 'Gentle on stomach, rich in prebiotic insoluble fibers.' },
              { id: 'Weight Management', label: 'Weight Management', icon: 'scale', desc: 'High satiety, curbs appetite and sustains metabolism.' }
            ].map((goal) => {
              const isSelected = formData.healthGoals.includes(goal.id);
              return (
                <div
                  key={goal.id}
                  onClick={() => toggleArrayItem('healthGoals', goal.id)}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all flex items-start gap-3 ${
                    isSelected
                      ? 'bg-secondary-container/20 border-secondary shadow-sm'
                      : 'bg-surface border-outline-variant/30 hover:border-outline'
                  }`}
                >
                  <span className={`material-symbols-outlined text-2xl mt-0.5 ${isSelected ? 'text-secondary' : 'text-outline'}`}>
                    {goal.icon}
                  </span>
                  <div className="flex-1">
                    <h4 className="font-bold text-sm text-on-surface">{goal.label}</h4>
                    <p className="text-xs text-on-surface-variant mt-0.5">{goal.desc}</p>
                  </div>
                  <span className={`material-symbols-outlined text-lg ${isSelected ? 'text-secondary icon-filled' : 'text-outline'}`}>
                    {isSelected ? 'check_box' : 'check_box_outline_blank'}
                  </span>
                </div>
              );
            })}
          </div>
        )}

        {/* STEP 5: Cooking Style */}
        {step === 5 && (
          <div className="space-y-4 animate-fade-in">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-wider block">
              How do you like to cook?
            </label>
            <div className="space-y-3">
              {[
                { title: 'Quick 15-min meals', desc: 'Fast porridges, upmas, and instant flour rotis' },
                { title: 'Traditional one-pot pots', desc: 'Slow-cooked bajra khichdi, pulaos, and stews' },
                { title: 'Fermented crepes & idlis', desc: 'Soaked and fermented dosas and steamed cakes' },
                { title: 'Modern millet baking', desc: 'Millet breads, cookies, granolas, and pancakes' }
              ].map((style) => (
                <div
                  key={style.title}
                  onClick={() => setFormData({ ...formData, cookingPreference: style.title })}
                  className={`p-4 rounded-2xl border-2 cursor-pointer transition-all ${
                    formData.cookingPreference === style.title
                      ? 'bg-primary-container/20 border-primary'
                      : 'bg-surface border-outline-variant/30 hover:border-outline'
                  }`}
                >
                  <h4 className="font-bold text-sm text-on-surface">{style.title}</h4>
                  <p className="text-xs text-on-surface-variant mt-0.5">{style.desc}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STEP 6: Summary & Confirmation */}
        {step === 6 && (
          <div className="space-y-5 animate-fade-in">
            <div className="p-5 rounded-2xl bg-surface-container border border-outline-variant/30 space-y-3">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-base">
                  {formData.name.charAt(0) || 'U'}
                </span>
                <div>
                  <h3 className="font-bold text-base text-on-surface">{formData.name || 'Nourish User'}</h3>
                  <p className="text-xs text-on-surface-variant">{formData.age} yrs • {formData.gender} • {formData.ageGroup}</p>
                </div>
              </div>

              <hr className="border-outline-variant/20" />

              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-outline">Activity:</span>
                  <span className="font-bold text-on-surface">{formData.activityLevel}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Diet:</span>
                  <span className="font-bold text-secondary">{formData.dietaryPreferences.join(', ')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-outline">Top Goals:</span>
                  <span className="font-bold text-primary">{formData.healthGoals.join(', ')}</span>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">auto_awesome</span>
              <p className="text-xs text-on-surface-variant">
                We are ready to compute your top millet grain match and create customized meal ideas!
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Footer Actions */}
      <footer className="p-6 bg-surface border-t border-outline-variant/20 flex items-center gap-3">
        {step > 1 && (
          <button
            type="button"
            onClick={handleBack}
            className="flex-1 py-3.5 px-4 rounded-full border-2 border-primary text-primary font-semibold text-xs sm:text-sm hover:bg-primary/5 transition-all"
          >
            Back
          </button>
        )}
        <button
          type="button"
          onClick={handleNext}
          className="flex-[2] py-3.5 px-6 rounded-full bg-primary hover:bg-surface-tint text-on-primary font-semibold text-xs sm:text-sm shadow-md transition-all hover:scale-[1.01] flex items-center justify-center gap-2"
        >
          <span>{step === totalSteps ? "Generate My Millet Plan ✨" : "Continue"}</span>
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </button>
      </footer>
    </main>
  );
};
