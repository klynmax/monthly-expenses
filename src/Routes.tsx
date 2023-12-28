import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { Expenses } from './pages/Expenses';
import { Income } from './pages/Income';
import PermanentDrawerLeft from './components/Material-Ui/Drawer';

export default function AppRoutes() {
  return (
    <>
      <Router>
        <PermanentDrawerLeft>
          <Routes>
            <Route path="/" id="teste" element={<Dashboard />} />
            <Route path="expenses" element={<Expenses />} />
            <Route path="/income" element={<Income />} />
          </Routes>
        </PermanentDrawerLeft>
      </Router>
    </>
  );
}
