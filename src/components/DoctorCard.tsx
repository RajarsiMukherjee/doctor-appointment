import { Card, CardContent } from '@/components/ui/card';

export default function DoctorCard({ doctor, isSelected, onSelect }) {
  return (
    <Card
      onClick={onSelect}
      className={`cursor-pointer border-2 ${isSelected ? 'border-blue-500' : 'border-gray-200'} transition`}
    >
      <CardContent className="p-4">
        <h2 className="text-xl font-semibold">{doctor.name}</h2>
        <p className="text-gray-500">{doctor.specialization}</p>
      </CardContent>
    </Card>
  );
}
