# 🏥 Doctor Appointment Booking App

> A complete React-based doctor appointment booking system built with Redux Toolkit, RTK Query, TailwindCSS, ShadCN UI, and React Hook Form.

---

## 📦 Install Dependencies

```bash
npm install
```

---

## 🔌 Start the Mock API Server

Ensure `json-server` is installed globally. If not, install it:

```bash
npm install -g json-server
```

Start the mock backend:

```bash
json-server --watch data.json --port 3001
```

This simulates a REST API using `data.json` at `http://localhost:3001`.

---

## 🚀 Start the React App

```bash
npm run dev
```

Runs the Vite dev server at `http://localhost:5173`.

---

## 🔁 Flow

1. Visit the **Home Page** (`/`) and choose a doctor.
2. A modal opens with a booking form.
3. Fill your details and submit to book the appointment.
4. View all booked appointments for that doctor **Appointments Page**.

---

## 🎯 Rules

- A single time slot **cannot** be booked by multiple patients.
- Already booked slots appear **disabled** in the dropdown.

---

## ⚙️ Technologies

- **React + Vite**
- **Redux Toolkit + RTK Query**
- **React Hook Form**
- **Tailwind CSS**
- **ShadCN UI**
- **Lucide React Icons**
- **json-server**

---

## 📅 Sample `data.json`

```json
{
  "doctors": [
    {
      "id": 1,
      "name": "Dr. Smith",
      "specialty": "Cardiologist",
      "availableSlots": [
        "2025-06-12T10:00:00",
        "2025-06-12T11:00:00"
      ]
    }
  ],
  "appointments": []
}
```

---

## ✅ Status

Fully working with modal-based booking, route navigation, slot availability check, and live updates.

---
