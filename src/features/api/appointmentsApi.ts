import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appointmentsApi = createApi({
  reducerPath: 'appointmentsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001/' }),
  tagTypes: ['Appointments', 'Doctors'],
  endpoints: (builder) => ({
    getDoctors: builder.query({
      query: () => 'doctors',
      providesTags: ['Doctors'],
    }),
    getAppointments: builder.query({
      query: () => 'appointments',
      providesTags: ['Appointments'],
    }),
    bookAppointment: builder.mutation({
      query: (data) => ({
        url: 'appointments',
        method: 'POST',
        body: data,
      }),
      invalidatesTags: ['Appointments', 'Doctors'],
    }),
  }),
});

export const {
  useGetDoctorsQuery,
  useGetAppointmentsQuery,
  useBookAppointmentMutation,
} = appointmentsApi;
