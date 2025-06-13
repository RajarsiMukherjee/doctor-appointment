import { useState } from 'react';
import { useGetDoctorsQuery } from '../features/api/appointmentsApi';
import AppointmentTable from '../components/AppointmentTable';

export default function AppointmentsPage() {
  const { data: doctors = [] } = useGetDoctorsQuery();
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);

  return (
    <div className="max-w-5xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Appointments</h1>
      <select
        onChange={(e) =>
          setSelectedDoctor(doctors.find((doc) => doc.id === parseInt(e.target.value)))
        }
        className="border p-2 mb-4"
      >
        {doctors.map((doc) => (
          <option key={doc.id} value={doc.id}>
            {doc.name}
          </option>
        ))}
      </select>
      {selectedDoctor && <AppointmentTable doctorId={selectedDoctor.id} />}
    </div>
  );
}