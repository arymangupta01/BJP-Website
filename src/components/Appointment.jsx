import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaSmile } from "react-icons/fa";
import "../App.css";

const Appointment = ({ onClose }) => {
  const [reason, setReason] = useState("");
  const [priority, setPriority] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isClicked, setIsClicked] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Appointment Booked! \nName: ${inputValue} \nDate: ${date} \nReason: ${reason} \nPriority: ${priority} \nTime Slot: ${timeSlot}`
    );
    onClose();
  };

  const handleBlur = () => {
    if (!inputValue.trim()) {
      setHasError(true);
      setIsClicked(false);
    } else {
      setIsClicked(false);
      setHasError(false);
    }
  };

  const handleFocus = () => {
    setIsClicked(true);
    setHasError(false);
  };

  const timeSlots = [
    { id: 1, time: "10:00 - 12:00 PM" },
    { id: 2, time: "12:00 - 2:00 PM" },
    { id: 3, time: "12:00 - 2:00 PM" },
  ];

  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: "short" }).charAt(0);
  };

  return (
    <div
      className="fixed inset-0 flex z-50 bg-black bg-opacity-50 overflow-y-scroll overflow-x-hidden h-full"
      onClick={onClose}
    >
      <div
        className="bg-white p-5 shadow-md w-full h-[110%] max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex mb-4">
          <h2 className="text-2xl mx-auto font-medium text-[#F5821F]">
            Book Appointment
          </h2>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Calendar */}
          <div className="w-[420px] mb-4 mx-[20px] font-light">
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
          <div>
            <h2 className="text-xl font-semibold mb-4 mx-1">Choose Slot</h2>
            <div className="flex flex-row flex-wrap gap-2 mb-4">
              <div className="flex flex-row flex-wrap w-[420px] gap-2 mb-4 ">
                {timeSlots.map((slot) => (
                  <div
                    key={slot.id}
                    onClick={() => setSelectedSlot(slot.id)}
                    className={`flex items-center cursor-pointer px-3 py-2 rounded-full border-[1px] transition-colors
                  ${
                    selectedSlot === slot.id
                      ? "bg-[#66BB6A] text-black border-green-400"
                      : "bg-white text-[#66BB6A] border-[#66BB6A]"
                  }`}
                  >
                    <FaSmile className="mr-2" />
                    <span>{slot.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Name */}
          <div className="mb-4 ">
            <fieldset
              className={`border-2 w-[400px]  rounded-md ${
                isClicked ? "border-[#f5821F]" : hasError ? "border-white" : ""
              }`}
            >
              {isClicked && !hasError ? (
                <legend className="mx-3 text-[#F5821F]">Name</legend>
              ) : null}

              <input
                className={`p-2 w-[400px] border-[1px] rounded-md ${
                  isClicked ? "border-white" : "border-black"
                }          focus:outline-none ${
                  hasError ? "border-red-600" : ""
                } ${
                  hasError
                    ? "placeholder:text-red-600"
                    : "placeholder:text-gray-800"
                } `}
                type="text"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={handleFocus}
                onClick={() => setIsClicked(true)}
                onBlur={() => handleBlur()}
                placeholder={isClicked && !hasError ? "" : "Name"}
              />

              {hasError && <p className="text-red-500">Name is required!</p>}
            </fieldset>
          </div>

          {/* Reason for Appointment */}
          <div className="mb-4 ">
            <fieldset
              className={`border-2 w-[400px] rounded-md ${
                isClicked ? "border-[#f5821F]" : hasError ? "border-white" : ""
              }`}
            >
              {isClicked && !hasError ? (
                <legend className="mx-3 text-[#F5821F]">
                  Reason for Appointment
                </legend>
              ) : null}

              <input
                className={`p-2 w-[400px] border-[1px] rounded-md ${
                  isClicked ? "border-white" : "border-black"
                }          focus:outline-none ${
                  hasError ? "border-red-600" : ""
                } ${
                  hasError
                    ? "placeholder:text-red-600"
                    : "placeholder:text-gray-800"
                } `}
                type="text"
                required
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onFocus={handleFocus}
                onClick={() => setIsClicked(true)}
                onBlur={() => handleBlur()}
                placeholder={
                  isClicked && !hasError ? "" : "Reason for Appointment"
                }
              />

              {hasError && (
                <p className="text-red-500">
                  Reason for appointment is required!
                </p>
              )}
            </fieldset>
          </div>

          {/* Priority Select */}
          <div className="mb-4">
            <fieldset
              className={`border-[1px] w-[400px] rounded-md ${
                isClicked ? "border-[#f5821F]" : hasError ? "border-white" : ""
              }`}
            >
              {isClicked && !hasError ? (
                <legend className="mx-3 text-[#F5821F]">Priority</legend>
              ) : null}

              <select
                className={`w-full border rounded p-2 ${
                  isClicked ? "border-white" : "border-black"
                } ${hasError ? "border-red-600" : ""}`}
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                onFocus={handleFocus} // Optional: You can add this if you want to track focus
                onClick={() => setIsClicked(true)} // Track when the select is clicked
                required
              >
                <option className="text-red-950" value="" disabled hidden>
                  Select Priority
                </option>
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>

              {hasError && (
                <p className="text-red-500">Priority is required!</p>
              )}
            </fieldset>
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
