import { Home, Calendar } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Layout({ children }) {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-100 p-4 space-y-4">
        <Link
          to="/"
          className={`flex items-center gap-2 p-2 rounded hover:bg-gray-200 ${
            pathname === '/' ? 'bg-gray-200 font-semibold' : ''
          }`}
        >
          <Home size={20} /> Home
        </Link>
        <Link
          to="/appointments"
          className={`flex items-center gap-2 p-2 rounded hover:bg-gray-200 ${
            pathname === '/appointments' ? 'bg-gray-200 font-semibold' : ''
          }`}
        >
          <Calendar size={20} /> Appointments
        </Link>
      </aside>
      <main className="flex-1 p-6 bg-white">
        <header className="mb-6 border-b pb-4">
          <h1 className="text-2xl font-bold">
            {pathname === '/' ? 'Doctor Selection' : 'Appointments Overview'}
          </h1>
        </header>
        {children}
      </main>
    </div>
  );
}
