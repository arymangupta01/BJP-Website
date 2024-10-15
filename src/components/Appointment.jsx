import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaSmile } from "react-icons/fa";
import "../App.css";

import { AiOutlineClose } from "react-icons/ai";

const Appointment = ({ onClose }) => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [reason, setReason] = useState("");
  const [priority, setPriority] = useState(""); // Default priority
  const [timeSlot, setTimeSlot] = useState(""); // Selected time slot
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };

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

  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: "short" }).charAt(0);
  };

  const timeSlots = [
    { id: 1, time: "10:00 - 12:00 PM" },
    { id: 2, time: "12:00 - 2:00 PM" },
    { id: 3, time: "4:00 - 6:00 PM" },
    { id: 4, time: "4:00 - 6:00 PM" },
  ];

  // State to track the selected time slot
  const [selectedSlot, setSelectedSlot] = useState(null);

  // Function to handle time slot click
  const handleSlotClick = (id) => {
    setSelectedSlot(id); // Set the selected slot ID
  };

  const [isFocused, setIsFocused] = useState(false);
  const [hasError, setHasError] = useState(false);


  // Validate input on blur
  const handleBlur = () => {
    setIsFocused(false);
    if (!name.trim()) {
      setHasError(true);  // Trigger error if name is empty
    } else {
      setHasError(false); // Remove error if valid input
    }
  };

  return (
    <div className="fixed w-[440px] inset-0 flex z-50 bg-black bg-opacity-50 overflow-y-scroll overflow-x-hidden">
      <div className="bg-white p-5 h-[115%] rounded shadow-md w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-[#F5821F]">
            Book Appointment
          </h2>
          <AiOutlineClose
            size={21}
            onClick={onClose}
            className="cursor-pointer text-[#F5821F]"
          />
        </div>

        <form onSubmit={handleSubmit}>
          {/* Calendar */}
          <div className="w-[420px] mb-3">
            <Calendar
              onChange={onChange}
              formatShortWeekday={formatShortWeekday}
              value={date}
              className="my-calendar"
              nextLabel=">"
              prevLabel="<"
              showNeighboringMonth={false}
            />
          </div>
          {/* Time Slot */}
          <div className="">
            <h2 className="text-xl font-semibold mb-4 mx-1">Choose Slot</h2>
            <div className="flex flex-row flex-wrap w-[420px] gap-2 mb-4 ">
              {" "}
              {/* Changed to flex-row and added space-x-4 for horizontal spacing */}
              {timeSlots.map((slot) => (
                <div
                  key={slot.id}
                  onClick={() => handleSlotClick(slot.id)}
                  className={`flex flex-row flex-wrap w-[190px] mb-1 space-x-2 items-center cursor-pointer px-3 py-2 rounded-full border-2 transition-colors
              ${
                selectedSlot === slot.id
                  ? "bg-green-500 text-white border-green-500"
                  : "bg-white text-green-500 border-green-500"
              }`}
                >
                  <FaSmile className="mr-2" />
                  <span>{slot.time}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Name */}
          <div className="mb-3">
      <fieldset className={`border-2 rounded-lg p-2 ${isFocused ? 'border-[#F5821F]' : 'border-white'}`}>
        {(isFocused || hasError) && (<legend className="px-1 text-[#F5821F]">Name</legend>)}
        <input
          type="text"
          className={`w-full border rounded ${isFocused ? '' : 'p-2'}  transition-colors duration-200 ${
            hasError ? 'border-red-500' : ""}  focus:outline-none focus:border-white focus:ring-2 focus:ring-[#f5831f00]`}
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder={isFocused || hasError ? "" : "Name"}
          onFocus={() => setIsFocused(true)}   
          onBlur={handleBlur}   
        />
        {/* Display warning message */}
        {hasError && (
          <p className="text-red-500 text-sm mt-1">Please fill in the name.</p>
        )}
      </fieldset>
    </div>
          
          {/* Mobile No. */}
          <div className="mb-3">
            <input
              type="text"
              className="w-full border rounded p-2"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              required
              placeholder="Mobile Number"
            />
          </div>

          {/* Reason for Appointment */}
          <div className="mb-3">
            <input
              type="text"
              className="w-full border rounded p-2"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              required
              placeholder="Reason for Appointment"
            />
          </div>
          {/* Priority */}
          <div className="mb-3">
  <select
    className="w-full border rounded p-2"
    value={priority}
    onChange={(e) => setPriority(e.target.value)}
    required
  >
    <option value="" disabled hidden style={{ "color": '#D3D3D3' }}>
      Select Priority
    </option>
    <option value="low">Low</option>
    <option value="medium">Medium</option>
    <option value="high">High</option>
  </select>
</div>

          <button
            type="submit"
            className="w-full bg-[#F5821F] text-white p-2 text-lg font-medium rounded"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Appointment;
