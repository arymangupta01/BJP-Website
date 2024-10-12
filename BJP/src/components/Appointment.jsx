import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { AiOutlineClose } from "react-icons/ai";

const Appointment = ({ onClose }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [date, setDate] = useState(null);
  const [reason, setReason] = useState("");
  const [priority, setPriority] = useState("Low"); // Default priority
  const [timeSlot, setTimeSlot] = useState(""); // Selected time slot

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Appointment Booked!
      Name: ${name}
      Mobile: ${mobile}
      Date: ${date}
      Reason: ${reason}
      Priority: ${priority}
      Time Slot: ${timeSlot}`);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded shadow-md w-80">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#F5821F]">Book Appointment</h2>
          <AiOutlineClose size={21} onClick={onClose} className="cursor-pointer text-[#F5821F]" />
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="block mb-1">Name:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Mobile No:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Date:</label>
            <DatePicker
              selected={date}
              onChange={(date) => setDate(date)}
              className="w-full border rounded p-2"
              dateFormat="MMMM d, yyyy"
              required
              placeholderText="Select a date"
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Reason for Appointment:</label>
            <input
              type="text"
              className="w-full border rounded p-2"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="block mb-1">Priority:</label>
            <select
              className="w-full border rounded p-2"
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              required
              placeholderText="Priority"
              
            >

              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="mb-3">
            <label className="block mb-1">Select Time Slot:</label>
            <select
              className="w-full border rounded p-2"
              value={timeSlot}
              onChange={(e) => setTimeSlot(e.target.value)}
              required
            >
              <option value="">Select a time</option>
              <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
              <option value="10:00 AM - 11:00 AM">10:00 AM - 11:00 AM</option>
              <option value="11:00 AM - 12:00 PM">11:00 AM - 12:00 PM</option>
            </select>
          </div>
          <button type="submit" className="w-full bg-[#F5821F] text-white p-2 text-lg font-medium rounded">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
