import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Onboarding } from './pages/Onboarding';
import { MilletKnowledge } from './pages/MilletKnowledge';
import { Recipes } from './pages/Recipes';
import { Recommendation } from './pages/Recommendation';
import { Consultation } from './pages/Consultation';

function App() {
  return (
    <AppProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/onboarding" element={<Onboarding />} />
            <Route path="/millets" element={<MilletKnowledge />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/recommendation" element={<Recommendation />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Layout>
      </Router>
    </AppProvider>
  );
}

export default App;
