import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export const Dashboard = () => {
  const { userProfile, recipes, consultationBookings } = useApp();
  const [dailyIntakeLogged, setDailyIntakeLogged] = useState(true);

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header Greeting */}
      <section className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-on-surface flex items-center gap-2">
            Hello, {userProfile.name}! <span className="inline-block animate-bounce">🌱</span>
          </h1>
          <p className="text-on-surface-variant text-sm sm:text-base mt-1">
            Let's make your nutrition healthier, mindful, and sustainable today.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/onboarding"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-outline-variant/60 bg-surface-container hover:bg-surface-container-high text-xs font-semibold text-on-surface transition-all shadow-sm"
          >
            <span className="material-symbols-outlined text-sm text-primary">edit</span>
            <span>Edit Health Profile</span>
          </Link>
          <Link
            to="/consultation"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-surface-tint text-on-primary text-xs font-semibold shadow-[0_4px_16px_rgba(86,100,43,0.3)] transition-all hover:scale-[1.02]"
          >
            <span className="material-symbols-outlined text-sm">calendar_month</span>
            <span>Book Consultation</span>
          </Link>
        </div>
      </section>

      {/* Summary Card: Nutrition Profile Banner */}
      <section className="relative overflow-hidden bg-surface-container-lowest rounded-[24px] shadow-sage border border-outline-variant/30">
        <div className="absolute inset-0 bg-sage-grain pointer-events-none"></div>
        <div className="p-6 md:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-primary font-bold">
              <span className="material-symbols-outlined text-2xl">health_and_safety</span>
              <h2 className="font-montserrat text-lg md:text-xl font-bold">Your Nutrition Profile</h2>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
              <div className="bg-surface-container/60 p-3 rounded-xl">
                <span className="text-xs text-outline block font-medium">Age Group</span>
                <p className="text-sm font-bold text-on-surface mt-0.5">{userProfile.ageGroup}</p>
              </div>
              <div className="bg-surface-container/60 p-3 rounded-xl">
                <span className="text-xs text-outline block font-medium">Activity Level</span>
                <p className="text-sm font-bold text-on-surface mt-0.5">{userProfile.activityLevel}</p>
              </div>
              <div className="bg-surface-container/60 p-3 rounded-xl">
                <span className="text-xs text-outline block font-medium">Primary Goal</span>
                <p className="text-sm font-bold text-primary mt-0.5">{userProfile.primaryGoal}</p>
              </div>
              <div className="bg-surface-container/60 p-3 rounded-xl">
                <span className="text-xs text-outline block font-medium">Diet Preference</span>
                <p className="text-sm font-bold text-secondary mt-0.5 truncate">{userProfile.dietaryPreference}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-2 w-full md:w-auto">
            <Link
              to="/recommendation"
              className="bg-primary text-on-primary font-label-md text-xs sm:text-sm py-3 px-6 rounded-full hover:bg-surface-tint hover:scale-[1.02] transition-all shadow-[0_4px_20px_rgba(138,154,91,0.2)] text-center flex items-center justify-center gap-2"
            >
              <span>Get Matched Millet</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </Link>
            <p className="text-[11px] text-center text-outline">Updated based on your daily metrics</p>
          </div>
        </div>
      </section>

      {/* Bento Grid: Interactive Feature Cards */}
      <section>
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-montserrat font-bold text-xl text-on-surface">Explore the Platform</h2>
          <span className="text-xs text-on-surface-variant">4 Quick Access Hubs</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {/* Card 1: Explore Millets */}
          <Link
            to="/millets"
            className="group relative overflow-hidden bg-primary-container rounded-[24px] p-6 min-h-[170px] flex flex-col justify-between shadow-sage hover:-translate-y-1.5 hover:shadow-sage-hover transition-all duration-300"
          >
            <div className="flex justify-between items-start z-10">
              <h3 className="font-montserrat font-bold text-lg text-on-primary-container max-w-[130px]">
                Explore Millets
              </h3>
              <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">grass</span>
              </div>
            </div>
            <p className="text-xs text-on-primary-container/80 z-10 mt-2">
              Browse 8 indigenous ancient grains and nutritional profiles.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-primary/20 z-10">
              <span className="text-xs font-bold text-on-primary-container">View Grains</span>
              <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center group-hover:bg-white group-hover:translate-x-1 transition-all">
                <span className="material-symbols-outlined text-primary text-sm">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* Card 2: Healthy Recipes */}
          <Link
            to="/recipes"
            className="group relative overflow-hidden bg-secondary-container rounded-[24px] p-6 min-h-[170px] flex flex-col justify-between shadow-sage hover:-translate-y-1.5 hover:shadow-sage-hover transition-all duration-300"
          >
            <div className="flex justify-between items-start z-10">
              <h3 className="font-montserrat font-bold text-lg text-on-secondary-container max-w-[130px]">
                Healthy Recipes
              </h3>
              <div className="w-10 h-10 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-secondary">
                <span className="material-symbols-outlined text-2xl">restaurant_menu</span>
              </div>
            </div>
            <p className="text-xs text-on-secondary-container/80 z-10 mt-2">
              Delicious culinary preparations for breakfast, lunch & dinner.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-secondary/20 z-10">
              <span className="text-xs font-bold text-on-secondary-container">Cook Now</span>
              <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center group-hover:bg-white group-hover:translate-x-1 transition-all">
                <span className="material-symbols-outlined text-secondary text-sm">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* Card 3: Find My Millet */}
          <Link
            to="/recommendation"
            className="group relative overflow-hidden bg-[#e4e4cc] rounded-[24px] p-6 min-h-[170px] flex flex-col justify-between shadow-sage hover:-translate-y-1.5 hover:shadow-sage-hover transition-all duration-300"
          >
            <div className="flex justify-between items-start z-10">
              <h3 className="font-montserrat font-bold text-lg text-[#2c2e1d] max-w-[130px]">
                Find My Millet
              </h3>
              <div className="w-10 h-10 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center text-[#5e604d]">
                <span className="material-symbols-outlined text-2xl">psychology_alt</span>
              </div>
            </div>
            <p className="text-xs text-[#474836] z-10 mt-2">
              AI-driven algorithm tailored to your personal health goals.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-[#5e604d]/20 z-10">
              <span className="text-xs font-bold text-[#2c2e1d]">Run Match</span>
              <div className="w-8 h-8 rounded-full bg-white/70 flex items-center justify-center group-hover:bg-white group-hover:translate-x-1 transition-all">
                <span className="material-symbols-outlined text-[#5e604d] text-sm">arrow_forward</span>
              </div>
            </div>
          </Link>

          {/* Card 4: Consult a Dietitian */}
          <Link
            to="/consultation"
            className="group relative overflow-hidden bg-surface-container-highest rounded-[24px] p-6 min-h-[170px] flex flex-col justify-between shadow-sage hover:-translate-y-1.5 hover:shadow-sage-hover transition-all duration-300 border border-outline-variant/40"
          >
            <div className="flex justify-between items-start z-10">
              <h3 className="font-montserrat font-bold text-lg text-primary max-w-[130px]">
                Dietitian Support
              </h3>
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-2xl">payments</span>
              </div>
            </div>
            <p className="text-xs text-on-surface-variant z-10 mt-2">
              1-on-1 personalized guidance with certified millet nutritionists.
            </p>
            <div className="flex items-center justify-between pt-3 border-t border-outline-variant/30 z-10">
              <span className="text-xs font-bold text-primary">Schedule Session</span>
              <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center group-hover:bg-surface-tint group-hover:translate-x-1 transition-all">
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Daily Millet Intake Tracker & Vitality Metrics */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left 2 Cols: Daily Vitality & Nutrient Progress */}
        <div className="lg:col-span-2 bg-surface-container-lowest rounded-[24px] p-6 md:p-8 shadow-sage border border-outline-variant/30 space-y-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary">Today's Progress</span>
              <h3 className="font-montserrat font-bold text-xl text-on-surface mt-0.5">
                Millet Vitality Score
              </h3>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-primary/10 text-primary font-bold text-sm">
              88 / 100 🔥
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20">
              <div className="flex justify-between items-center text-xs text-outline mb-1">
                <span>Calcium</span>
                <span className="font-bold text-primary">344 / 400 mg</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                <div className="h-full bg-primary rounded-full transition-all duration-1000" style={{ width: '86%' }}></div>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-2">Target reached with morning Ragi porridge</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20">
              <div className="flex justify-between items-center text-xs text-outline mb-1">
                <span>Dietary Fiber</span>
                <span className="font-bold text-secondary">24 / 28 g</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                <div className="h-full bg-secondary-container rounded-full transition-all duration-1000" style={{ width: '82%' }}></div>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-2">Great digestive motility & gut biome support</p>
            </div>

            <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20">
              <div className="flex justify-between items-center text-xs text-outline mb-1">
                <span>Bio-Iron</span>
                <span className="font-bold text-tertiary">7.8 / 9.0 mg</span>
              </div>
              <div className="w-full h-2 rounded-full bg-surface-container-highest overflow-hidden">
                <div className="h-full bg-tertiary-container rounded-full transition-all duration-1000" style={{ width: '87%' }}></div>
              </div>
              <p className="text-[11px] text-on-surface-variant mt-2">Enhanced with cold-pressed sesame oil</p>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-primary-fixed/30 border border-primary-fixed flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">eco</span>
              <div>
                <h4 className="text-sm font-bold text-on-primary-fixed">Streak: 6 Consecutive Days</h4>
                <p className="text-xs text-on-primary-fixed-variant">You're 1 day away from earning the "Ancient Grains Champion" badge!</p>
              </div>
            </div>
            <button 
              onClick={() => setDailyIntakeLogged(!dailyIntakeLogged)}
              className="px-4 py-2 rounded-full bg-primary text-on-primary text-xs font-semibold hover:bg-surface-tint transition-all"
            >
              {dailyIntakeLogged ? "✓ Meal Logged" : "+ Log Meal"}
            </button>
          </div>
        </div>

        {/* Right Col: Consultation Status & Spotlight */}
        <div className="bg-surface-container-lowest rounded-[24px] p-6 shadow-sage border border-outline-variant/30 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-montserrat font-bold text-lg text-on-surface">Appointments</h3>
              <Link to="/consultation" className="text-xs text-primary font-semibold hover:underline">
                View All
              </Link>
            </div>

            {consultationBookings.length > 0 ? (
              <div className="p-4 rounded-2xl bg-surface-container-low border border-outline-variant/20 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider bg-secondary-container text-on-secondary-container px-2.5 py-0.5 rounded-full">
                    {consultationBookings[0].plan} Session
                  </span>
                  <span className="text-xs font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded-full">
                    {consultationBookings[0].status}
                  </span>
                </div>
                <div>
                  <h4 className="font-bold text-sm text-on-surface">{consultationBookings[0].doctor}</h4>
                  <p className="text-xs text-on-surface-variant mt-1 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-sm text-primary">schedule</span>
                    {consultationBookings[0].date} at {consultationBookings[0].time}
                  </p>
                </div>
                <div className="pt-2 border-t border-outline-variant/20 flex justify-between items-center text-xs">
                  <span className="text-outline">Session ID: {consultationBookings[0].id}</span>
                  <Link to="/consultation" className="text-primary font-semibold hover:underline">
                    Manage →
                  </Link>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 text-on-surface-variant">
                <span className="material-symbols-outlined text-3xl text-outline mb-2">event_busy</span>
                <p className="text-xs">No upcoming sessions. Book a certified dietitian consultation.</p>
              </div>
            )}
          </div>

          <div className="mt-6 pt-6 border-t border-outline-variant/20">
            <h4 className="text-xs font-bold uppercase tracking-wider text-secondary mb-2">Grain of the Day</h4>
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1586201375761-83865001e31c?w=120&auto=format&fit=crop&q=80" 
                alt="Ragi" 
                className="w-12 h-12 rounded-xl object-cover"
              />
              <div>
                <p className="text-sm font-bold text-on-surface">Finger Millet (Ragi)</p>
                <p className="text-xs text-on-surface-variant">344mg Calcium / 100g • Great for energy</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Healthy Recipes Section */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-secondary">Chef Curated</span>
            <h2 className="font-montserrat font-bold text-2xl text-on-surface mt-0.5">
              Recommended Recipes
            </h2>
          </div>
          <Link to="/recipes" className="text-sm font-bold text-primary hover:underline flex items-center gap-1">
            Browse All ({recipes.length}) →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recipes.slice(0, 3).map((recipe) => (
            <div
              key={recipe.id}
              className="bg-surface-container-lowest rounded-[24px] overflow-hidden shadow-sage border border-outline-variant/20 lift-card flex flex-col group"
            >
              <div className="relative h-48 w-full overflow-hidden">
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
              </div>

              <div className="p-5 flex flex-col flex-1 justify-between space-y-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] font-semibold text-secondary uppercase tracking-wider">
                      {recipe.millet}
                    </span>
                    <span className="text-outline">•</span>
                    <span className="text-[11px] text-outline font-medium">{recipe.calories}</span>
                  </div>
                  <h3 className="font-montserrat font-bold text-base text-on-surface group-hover:text-primary transition-colors">
                    {recipe.title}
                  </h3>
                  <p className="text-xs text-on-surface-variant line-clamp-2 mt-1.5 leading-relaxed">
                    {recipe.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-outline-variant/20 flex items-center justify-between">
                  <span className="text-xs font-bold text-primary flex items-center gap-1">
                    ★ {recipe.rating} ({recipe.reviews})
                  </span>
                  <Link
                    to="/recipes"
                    className="text-xs font-bold text-primary hover:underline flex items-center gap-1"
                  >
                    View Ingredients →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
