import { useGetAppointmentsQuery } from "../features/api/appointmentsApi";

export default function AppointmentTable({ doctorId }) {
  const { data: appointments = [], isLoading } = useGetAppointmentsQuery(
    doctorId,
    {
      refetchOnMountOrArgChange: true,
    }
  );

  const filtered = appointments.filter((a) => a.doctorId === doctorId);

  return (
    <div>
      <h3 className="text-xl font-semibold mt-6 mb-2">Appointments</h3>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Patient</th>
            <th className="p-2 border">Slot</th>
          </tr>
        </thead>
        <tbody>
          {filtered.map((appt) => (
            <tr key={appt.id}>
              <td className="p-2 border">{appt.patientName}</td>
              <td className="p-2 border">
                {new Date(appt.slot).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
