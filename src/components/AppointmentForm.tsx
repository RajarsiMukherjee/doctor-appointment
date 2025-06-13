import { useForm } from 'react-hook-form';
import {
  useGetAppointmentsQuery,
  useBookAppointmentMutation,
} from '../features/api/appointmentsApi';

export default function AppointmentForm({ doctor, onSuccess }) {
  const { register, handleSubmit, reset } = useForm();
  const { data: appointments = [] } = useGetAppointmentsQuery();
  const [bookAppointment] = useBookAppointmentMutation();

  const bookedSlots = appointments
    .filter((a) => a.doctorId === doctor.id)
    .map((a) => a.slot);

  const onSubmit = async (data) => {
    if (bookedSlots.includes(data.slot)) return alert('Slot already booked!');
    await bookAppointment({ ...data, doctorId: doctor.id });
    reset();
    onSuccess?.();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 p-4">
      <label className="block">
        Name:
        <input {...register('patientName')} className="block border p-2 w-full" required />
      </label>
      <label className="block">
        Choose a Slot:
        <select {...register('slot')} className="block border p-2 w-full">
          {doctor.availableSlots.map((slot) => (
            <option key={slot} value={slot} disabled={bookedSlots.includes(slot)}>
              {new Date(slot).toLocaleString()} {bookedSlots.includes(slot) ? '(Booked)' : ''}
            </option>
          ))}
        </select>
      </label>
      <div className="flex justify-end gap-2">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Book
        </button>
        <button
          type="button"
          onClick={() => onSuccess?.()}
          className="border px-4 py-2 rounded"
        >
          Cancel
        </button>
      </div>
    </form>
  );
}
