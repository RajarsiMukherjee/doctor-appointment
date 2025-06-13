import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AppointmentsPage from './pages/AppointmentsPage';
import Layout from './components/Layout';

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/appointments" element={<AppointmentsPage />} />
      </Routes>
    </Layout>
  );
}