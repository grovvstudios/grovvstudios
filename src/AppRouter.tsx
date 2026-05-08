import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App';
import RenaultCaseStudy from './pages/RenaultCaseStudy';

export function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/case-study/renault-duster" element={<RenaultCaseStudy />} />
      </Routes>
    </Router>
  );
}
