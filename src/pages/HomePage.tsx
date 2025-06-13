import { useState } from "react";
import { useGetDoctorsQuery } from "../features/api/appointmentsApi";
import DoctorCard from "../components/DoctorCard";
import AppointmentForm from "../components/AppointmentForm";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const { data: doctors = [] } = useGetDoctorsQuery();
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    setOpen(false);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold">Select a Doctor</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {doctors.map((doc) => (
          <Dialog
            key={doc.id}
            open={open && selectedDoctor?.id === doc.id}
            onOpenChange={setOpen}
          >
            <DialogTrigger asChild>
              <div
                onClick={() => {
                  setSelectedDoctor(doc);
                  setOpen(true);
                }}
              >
                <DoctorCard
                  doctor={doc}
                  isSelected={selectedDoctor?.id === doc.id}
                  onSelect={() => {}}
                />
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Book Appointment</DialogTitle>
              </DialogHeader>
              {selectedDoctor?.id === doc.id && (
                <AppointmentForm
                  doctor={selectedDoctor}
                  onSuccess={handleSubmit}
                />
              )}
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
