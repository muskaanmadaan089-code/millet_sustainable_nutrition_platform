import React, { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const initialMilletList = [
  {
    id: "ragi",
    name: "Ragi (Finger Millet)",
    scientificName: "Eleusine coracana",
    tag: "High Calcium",
    tagColor: "bg-primary-container text-on-primary-container",
    highlightNutrient: "Calcium (344mg/100g)",
    desc: "Known for cooling properties and exceptional calcium content. Perfect for porridges, rotis, dosas, and infant nutrition.",
    image: "https://images.unsplash.com/photo-VaEJ60Q-0sE?w=600&auto=format&fit=crop&q=80",
    calcium: "344 mg",
    iron: "3.9 mg",
    protein: "7.3 g",
    fiber: "11.5 g",
    glycemicIndex: "54 (Low)",
    waterSaved: "68% less than rice",
    bestFor: "Bone density, nursing mothers, sustained morning stamina",
    seasons: "Ideal all year, especially monsoon & summer"
  },
  {
    id: "bajra",
    name: "Bajra (Pearl Millet)",
    scientificName: "Pennisetum glaucum",
    tag: "Iron Rich",
    tagColor: "bg-secondary-container text-on-secondary-container",
    highlightNutrient: "Iron (8.0mg/100g)",
    desc: "A powerhouse of iron and magnesium. Traditionally eaten in winter for warmth, cellular energy, and gut health.",
    image: "https://images.unsplash.com/photo-GTevcSmyG3A?w=600&auto=format&fit=crop&q=80",
    calcium: "42 mg",
    iron: "8.0 mg",
    protein: "11.6 g",
    fiber: "8.5 g",
    glycemicIndex: "55 (Low)",
    waterSaved: "74% less than wheat",
    bestFor: "Anemia prevention, winter immunity, stamina",
    seasons: "Winter & cooler months"
  },
  {
    id: "jowar",
    name: "Jowar (Sorghum)",
    scientificName: "Sorghum bicolor",
    tag: "Gluten-Free Hero",
    tagColor: "bg-tertiary-container text-on-tertiary-container",
    highlightNutrient: "Fiber (9.7g/100g)",
    desc: "A staple hearty grain with high protein and complex dietary fiber. Excellent for digestion and blood sugar management.",
    image: "https://images.unsplash.com/photo-tnmVtjNjV-E?w=600&auto=format&fit=crop&q=80",
    calcium: "25 mg",
    iron: "4.1 mg",
    protein: "10.4 g",
    fiber: "9.7 g",
    glycemicIndex: "62 (Medium-Low)",
    waterSaved: "60% less than rice",
    bestFor: "Weight management, gluten intolerance, heart wellness",
    seasons: "All seasons"
  },
  {
    id: "foxtail",
    name: "Foxtail Millet (Kangni / Thinai)",
    scientificName: "Setaria italica",
    tag: "Nerve & Heart Health",
    tagColor: "bg-primary-fixed text-on-primary-fixed-variant",
    highlightNutrient: "Vitamin B1 & Low GI",
    desc: "One of humanity's earliest cultivated grains. Rich in Vitamin B1, good nervous system support and cardiovascular health.",
    image: "https://images.unsplash.com/photo-JtizjunFr9E?w=600&auto=format&fit=crop&q=80",
    calcium: "31 mg",
    iron: "2.8 mg",
    protein: "12.3 g",
    fiber: "8.0 g",
    glycemicIndex: "50 (Low)",
    waterSaved: "70% less than rice",
    bestFor: "Diabetic management, muscle strength, light dinners",
    seasons: "Summer & Autumn"
  },
  {
    id: "little",
    name: "Little Millet (Samai / Kutki)",
    scientificName: "Panicum sumatrense",
    tag: "Fast Cooking",
    tagColor: "bg-secondary-fixed text-on-secondary-fixed-variant",
    highlightNutrient: "Phosphorus & Iron",
    desc: "Cooks fast and substitutes fluffy white rice seamlessly. Loaded with antioxidants and easily digestible minerals.",
    image: "https://images.unsplash.com/photo-BuEWD0IbTKQ?w=600&auto=format&fit=crop&q=80",
    calcium: "17 mg",
    iron: "9.3 mg",
    protein: "8.7 g",
    fiber: "7.6 g",
    glycemicIndex: "52 (Low)",
    waterSaved: "65% less than rice",
    bestFor: "Detoxification, light fasting meals, quick weekday rice dishes",
    seasons: "All seasons"
  },
  {
    id: "barnyard",
    name: "Barnyard Millet (Sanwa / Kuthiraivali)",
    scientificName: "Echinochloa frumentacea",
    tag: "Lowest Calorie",
    tagColor: "bg-primary-container text-on-primary-container",
    highlightNutrient: "High Digestibility & Low Calorie",
    desc: "The fastest growing crop producing grain in 6 weeks. Lowest carbohydrate and highest digestible fiber among millets.",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&auto=format&fit=crop&q=80",
    calcium: "20 mg",
    iron: "5.0 mg",
    protein: "6.2 g",
    fiber: "9.8 g",
    glycemicIndex: "49 (Very Low)",
    waterSaved: "80% less than rice",
    bestFor: "Calorie conscious diets, sedentary lifestyles, post-meal lightness",
    seasons: "Monsoon & Festive seasons"
  }
];

export const initialRecipes = [
  {
    id: 1,
    title: "Crispy Foxtail Millet Dosa",
    millet: "Foxtail Millet",
    milletId: "foxtail",
    category: "Breakfast",
    time: "20 mins",
    difficulty: "Easy",
    calories: "210 kcal",
    rating: 4.9,
    reviews: 128,
    badge: "Most Popular",
    tags: ["High Fiber", "Low GI", "Vegan", "Gluten-Free"],
    image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=600&auto=format&fit=crop&q=80",
    desc: "Crisp, golden South Indian crepe made with stone-ground foxtail millet and urad dal, served with spiced coconut chutney.",
    ingredients: [
      "1 cup Foxtail Millet (soaked 4 hours)",
      "1/2 cup Whole Urad Dal",
      "1 tsp Fenugreek seeds",
      "Pink Himalayan salt to taste",
      "Cold-pressed sesame oil for cooking",
      "Curry leaves and fresh grated coconut for garnish"
    ],
    instructions: [
      "Rinse foxtail millet and urad dal thoroughly in water.",
      "Grind dal and fenugreek to a fluffy batter, then grind millet to smooth consistency.",
      "Combine both, add salt, and ferment naturally for 6-8 hours in a warm spot.",
      "Heat cast iron tawa, pour a ladle of batter and swirl thinly outwards.",
      "Drizzle cold-pressed sesame oil, cook until golden and crisp, fold and serve immediately with fresh coconut chutney."
    ]
  },
  {
    id: 2,
    title: "Nourishing Bajra Khichdi",
    millet: "Bajra (Pearl Millet)",
    milletId: "bajra",
    category: "Dinner",
    time: "35 mins",
    difficulty: "Medium",
    calories: "320 kcal",
    rating: 4.8,
    reviews: 94,
    badge: "Winter Warmth",
    tags: ["Iron Rich", "Comfort Food", "Gut Health"],
    image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=600&auto=format&fit=crop&q=80",
    desc: "Wholesome one-pot meal packed with cracked pearl millet, yellow moong dal, ginger, cumin, and garden vegetables.",
    ingredients: [
      "1 cup Bajra (cracked or soaked overnight)",
      "1/2 cup Yellow Moong Dal",
      "1 cup Mixed chopped carrots, green peas & beans",
      "1 tbsp A2 Desi Cow Ghee",
      "1 tsp Cumin seeds & freshly grated ginger",
      "Pinch of hing (asafoetida) & turmeric"
    ],
    instructions: [
      "Soak bajra overnight or coarsely crack in a blender.",
      "In a pressure cooker or clay pot, heat ghee and splutter cumin seeds with hing and ginger.",
      "Add vegetables, moong dal, drained bajra, turmeric, and 4 cups of water.",
      "Cook for 4-5 whistles on medium flame until tender and velvety.",
      "Whisk gently with ghee and garnish with fresh coriander leaves."
    ]
  },
  {
    id: 3,
    title: "Creamy Spiced Ragi Porridge",
    millet: "Ragi (Finger Millet)",
    milletId: "ragi",
    category: "Breakfast",
    time: "15 mins",
    difficulty: "Easy",
    calories: "180 kcal",
    rating: 4.9,
    reviews: 142,
    badge: "Calcium Rich",
    tags: ["Calcium Boost", "Kids Friendly", "Quick Prep"],
    image: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&auto=format&fit=crop&q=80",
    desc: "Warm and soothing morning porridge sweetened with organic jaggery, cardamom, toasted almonds, and coconut milk.",
    ingredients: [
      "3 tbsp Sprouted Ragi Flour",
      "1 cup Almond Milk or Coconut Milk",
      "1 cup Water",
      "1.5 tbsp Organic Jaggery powder",
      "1/4 tsp Ground green cardamom",
      "Handful of sliced toasted almonds & chia seeds"
    ],
    instructions: [
      "Whisk sprouted ragi flour with 1/2 cup room temperature water to form a smooth lump-free paste.",
      "Bring remaining water to a gentle simmer in a saucepan.",
      "Pour in ragi paste while stirring constantly to prevent lumps.",
      "Cook on low heat for 5-7 minutes until glossy and thick.",
      "Stir in cardamom and jaggery powder, fold in milk, and top with toasted almonds."
    ]
  },
  {
    id: 4,
    title: "Herbed Barnyard Millet Pulao",
    millet: "Barnyard Millet",
    milletId: "barnyard",
    category: "Lunch",
    time: "25 mins",
    difficulty: "Easy",
    calories: "260 kcal",
    rating: 4.7,
    reviews: 78,
    badge: "Low Calorie",
    tags: ["Lowest GI", "Fluffy Rice Alt", "Heart Healthy"],
    image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&auto=format&fit=crop&q=80",
    desc: "Fragrant, fluffy pilaf cooked with whole spices, caramelized shallots, mint, coriander, and tossed cashews.",
    ingredients: [
      "1 cup Barnyard Millet (washed & drained)",
      "2 cups Warm vegetable broth or water",
      "Whole spices: Cinnamon stick, 2 green cardamoms, 1 bay leaf",
      "1/2 cup Fresh mint & coriander paste",
      "10 Cashews lightly toasted",
      "1 tbsp Cold-pressed groundnut oil"
    ],
    instructions: [
      "Heat oil in a pan, lightly toast cashews and whole spices until aromatic.",
      "Add shallots and sauté till lightly golden.",
      "Add drained barnyard millet and gently roast for 2 minutes to seal grains.",
      "Pour warm broth, mint-coriander paste, and salt. Bring to a boil.",
      "Cover with tight lid and cook on lowest flame for 10 minutes. Fluff with a fork."
    ]
  },
  {
    id: 5,
    title: "Jowar & Herb Flatbread (Bhakri)",
    millet: "Jowar (Sorghum)",
    milletId: "jowar",
    category: "Lunch",
    time: "20 mins",
    difficulty: "Medium",
    calories: "160 kcal",
    rating: 4.8,
    reviews: 89,
    badge: "Gluten Free",
    tags: ["High Protein", "Traditional", "Diabetic Friendly"],
    image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=600&auto=format&fit=crop&q=80",
    desc: "Rustic artisan flatbread patted by hand, baked over open flame and served with garlic chili thecha and cold curd.",
    ingredients: [
      "1 cup Fine Jowar flour",
      "1/2 cup Warm water (as needed for kneading)",
      "1/4 tsp Sea salt",
      "Finely chopped fresh fenugreek leaves (methi)",
      "White sesame seeds for topping"
    ],
    instructions: [
      "In a wide mixing bowl, combine jowar flour, salt, and fresh herbs.",
      "Add warm water gradually and knead thoroughly into a soft, pliable dough.",
      "Take a lemon-sized ball, dust with dry flour, and pat gently on parchment or counter into a thin disc.",
      "Transfer onto a hot flat griddle, smear top with water drops, flip and roast both sides till speckled.",
      "Puff on direct low flame and top with homemade white butter if desired."
    ]
  },
  {
    id: 6,
    title: "Golden Little Millet Upma",
    millet: "Little Millet",
    milletId: "little",
    category: "Breakfast",
    time: "20 mins",
    difficulty: "Easy",
    calories: "230 kcal",
    rating: 4.6,
    reviews: 67,
    badge: "Energizing",
    tags: ["Easy Digest", "Rich in Iron", "Quick"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&auto=format&fit=crop&q=80",
    desc: "Light and fluffy savory breakfast bowl tempered with mustard seeds, curry leaves, roasted peanuts, and lemon.",
    ingredients: [
      "1 cup Little Millet",
      "2.25 cups Water",
      "1 tsp Mustard seeds & 1 tsp Chana dal",
      "1 Green chili chopped & 1 sprig curry leaves",
      "1/4 cup Roasted peanuts",
      "1 tbsp Fresh lemon juice"
    ],
    instructions: [
      "Dry roast little millet in a pan for 3 minutes until aromatic.",
      "In a pan, splutter mustard seeds, chana dal, curry leaves, and green chilies.",
      "Add water and salt to taste, bring to a rapid boil.",
      "Slowly stream in roasted millet while stirring.",
      "Cover and simmer for 8 minutes until all water is absorbed. Squeeze lemon juice."
    ]
  }
];

export const AppProvider = ({ children }) => {
  const [userProfile, setUserProfile] = useState(() => {
    const saved = localStorage.getItem('millet_user_profile');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      name: "Nourish User",
      age: "28",
      ageGroup: "Adult (20-49)",
      gender: "Female",
      activityLevel: "Moderate Active",
      primaryGoal: "Sustainable Vitality",
      dietaryPreference: "Gluten-Free & High-Fiber",
      healthGoals: ["High Calcium", "Traditional Taste", "Morning Energy"],
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80"
    };
  });

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem('millet_favorites');
    return saved ? JSON.parse(saved) : [1, 3];
  });

  const [selectedPlan, setSelectedPlan] = useState("Personalized");
  const [activeGoals, setActiveGoals] = useState(["High Calcium", "Traditional Taste", "Morning Energy"]);
  
  const [consultationBookings, setConsultationBookings] = useState(() => {
    const saved = localStorage.getItem('millet_bookings');
    return saved ? JSON.parse(saved) : [
      {
        id: "BK-8842",
        plan: "Personalized",
        price: 599,
        doctor: "Dr. Ananya Sharma - Clinical Dietitian",
        date: "2026-09-22",
        time: "11:30 AM",
        status: "Confirmed",
        bookedAt: "Yesterday"
      }
    ];
  });

  useEffect(() => {
    localStorage.setItem('millet_user_profile', JSON.stringify(userProfile));
  }, [userProfile]);

  useEffect(() => {
    localStorage.setItem('millet_favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('millet_bookings', JSON.stringify(consultationBookings));
  }, [consultationBookings]);

  const toggleFavorite = (recipeId) => {
    setFavorites(prev => 
      prev.includes(recipeId) 
        ? prev.filter(id => id !== recipeId) 
        : [...prev, recipeId]
    );
  };

  const updateProfile = (newData) => {
    setUserProfile(prev => ({ ...prev, ...newData }));
  };

  const addBooking = (booking) => {
    setConsultationBookings(prev => [booking, ...prev]);
  };

  return (
    <AppContext.Provider value={{
      userProfile,
      updateProfile,
      favorites,
      toggleFavorite,
      selectedPlan,
      setSelectedPlan,
      activeGoals,
      setActiveGoals,
      consultationBookings,
      addBooking,
      millets: initialMilletList,
      recipes: initialRecipes
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
