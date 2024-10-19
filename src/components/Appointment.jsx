import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { FaSmile } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import "../App.css";

const Appointment = ({ onClose }) => {
  const [priority, setPriority] = useState("");
  const [timeSlot, setTimeSlot] = useState("");
  const [date, setDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [inputName, setInputName] = useState("");
  const [isNameClicked, setIsNameClicked] = useState(false);
  const [hasNameError, setHasNameError] = useState(false);
  const [inputAppointment, setInputAppointment] = useState("");
  const [isAppointmentClicked, setIsAppointmentClicked] = useState(false);
  const [hasAppointmentError, setHasAppointmentError] = useState(false);
  const [isPriorityClicked, setIsPriorityClicked] = useState(false);
  const [hasPriorityError, setHasPriorityError] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [attachment, setAttachment] = useState("");
  const [checkbox, setcheckbox] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !inputName.trim() ||
      !inputAppointment.trim() ||
      !priority ||
      !selectedSlot || 
      attachment ||
      checkbox
    ) {
      alert("All fields are required!");
      return;
    }

    setShowConfirmation(true);

    setTimeout(() => {
      setShowConfirmation(false);
      onClose();
    }, 4000);
  };

  const handleNameBlur = () => {
    if (!inputName.trim()) {
      setHasNameError(true);
      setIsNameClicked(false);
    } else {
      setIsNameClicked(false);
      setHasNameError(false);
    }
  };

  const handleNameFocus = () => {
    setIsNameClicked(true);
    setHasNameError(false);
  };

  const handleAppointmentBlur = () => {
    if (!inputAppointment.trim()) {
      setHasAppointmentError(true);
      setIsAppointmentClicked(false);
    } else {
      setIsAppointmentClicked(false);
      setHasAppointmentError(false);
    }
  };

  const handleAppointmentFocus = () => {
    setIsAppointmentClicked(true);
    setHasAppointmentError(false);
  };

  const handlePriorityBlur = () => {
    if (!priority.trim()) {
      setHasPriorityError(true);
      setIsPriorityClicked(false);
    } else {
      setIsPriorityClicked(false);
      setHasPriorityError(false);
    }
  };

  const handlePriorityFocus = () => {
    setIsPriorityClicked(true);
    setHasPriorityError(false);
  };

  const timeSlots = [
    { id: 1, time: "10:00 - 12:00 PM" },
    { id: 2, time: "12:00 - 2:00 PM" },
    { id: 3, time: "12:00 - 2:00 PM" },
  ];

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const formatShortWeekday = (locale, date) => {
    return date.toLocaleDateString(locale, { weekday: "short" }).charAt(0);
  };

  return (
    <div
      className="fixed inset-0 flex items-start z-50 bg-black bg-opacity-50 overflow-y-scroll overflow-x-hidden"
      onClick={onClose}
    >
      {showConfirmation ? (
        <div className="absolute w-[450px] inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 text-white text-center p-5">
          <FaCheckCircle className="text-green-500 text-6xl mb-4" size={35} />
          <h2 className="text-2xl font-bold mb-2">Thank You!</h2>
          <p>
            Thank you for your appointment request, our team will reach out
            soon.
          </p>
        </div>
      ) : (
        <>
          <div
            className="bg-white p-5 shadow-md max-w-md"
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
                        onChange={(e) => setTimeSlot(e.target.value)}
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
                  className={`border-2  w-[400px]  rounded-md ${
                    isNameClicked
                      ? "border-[#f5821F]"
                      : hasNameError
                      ? "border-white"
                      : ""
                  }`}
                >
                  {isNameClicked && !hasNameError ? (
                    <legend className="mx-3 text-[#F5821F]">Name</legend>
                  ) : null}

                  <input
                    className={`p-2 w-[400px] border-gray-300 hover:border-black border-[1px] rounded-md ${
                      isNameClicked ? "border-white" : "border-black"
                    }          focus:outline-none ${
                      hasNameError ? "border-red-600" : ""
                    } ${
                      hasNameError
                        ? "placeholder:text-red-600"
                        : "placeholder:text-gray-800"
                    } ${isNameClicked ? "hover:border-white" : ""} `}
                    type="text"
                    required
                    value={inputName}
                    onChange={(e) => setInputName(e.target.value)}
                    onFocus={handleNameFocus}
                    onClick={() => setIsNameClicked(true)}
                    onBlur={() => handleNameBlur()}
                    placeholder={isNameClicked && !hasNameError ? "" : "Name"}
                  />

                  {hasNameError && (
                    <p className="text-red-500">Name is required!</p>
                  )}
                </fieldset>
              </div>

              {/* Reason for Appointment */}
              <div className="mb-4 ">
                <fieldset
                  className={`border-2 w-[400px] rounded-md ${
                    isAppointmentClicked
                      ? "border-[#f5821F]"
                      : hasAppointmentError
                      ? "border-white"
                      : ""
                  }`}
                >
                  {isAppointmentClicked && !hasAppointmentError ? (
                    <legend className="mx-3 text-[#F5821F]">
                      Reason for Appointment
                    </legend>
                  ) : null}

                  <input
                    className={`p-2 w-[400px] ${
                      isAppointmentClicked ? "hover:border-white" : ""
                    } border-gray-300 hover:border-black border-[1px] rounded-md ${
                      isAppointmentClicked ? "border-white" : "border-black"
                    }          focus:outline-none ${
                      hasAppointmentError ? "border-red-600" : ""
                    } ${
                      hasAppointmentError
                        ? "placeholder:text-red-600"
                        : "placeholder:text-gray-800"
                    } `}
                    type="text"
                    required
                    value={inputAppointment}
                    onChange={(e) => setInputAppointment(e.target.value)}
                    onFocus={handleAppointmentFocus}
                    onClick={() => setIsAppointmentClicked(true)}
                    onBlur={() => handleAppointmentBlur()}
                    placeholder={
                      isAppointmentClicked && !hasAppointmentError
                        ? ""
                        : "Reason for Appointment"
                    }
                  />

                  {hasAppointmentError && (
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
                    isPriorityClicked
                      ? "border-[#f5821F]"
                      : hasPriorityError
                      ? "border-white"
                      : ""
                  }`}
                >
                  {isPriorityClicked && !hasPriorityError ? (
                    <legend className="mx-3 text-[#F5821F]">Priority</legend>
                  ) : null}

                  <select
                    className={`w-full ${
                      isPriorityClicked ? "hover:border-white" : ""
                    } border-gray-300 hover:border-black border-[1px] shadow-md cursor-pointer rounded p-2 ${
                      isPriorityClicked ? "border-white" : "border-black"
                    } ${hasPriorityError ? "border-red-600" : ""}  ${
                      hasPriorityError ? "text-red-500" : "text-gray-800"
                    }`}
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                    onFocus={handlePriorityFocus}
                    onClick={() => setIsPriorityClicked(true)}
                    onBlur={() => handlePriorityBlur()}
                    required
                  >
                    <option value="" disabled hidden>
                      Select Priority
                    </option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>

                  {hasPriorityError && (
                    <p className="text-red-500">Priority is required!</p>
                  )}
                </fieldset>
              </div>

              {/* Attachment */}
              <div className="mb-4">
                <input
                  className="w-[400px] p-2 border-gray-300 hover:border-black border-[1px] rounded-md shadow-lg "
                  type="file"
                  value={attachment}
                />
              </div>

              {/* CheckBox */}
              <div className="mb-4">
                <input className="w-5 h-5 mx-2 cursor-pointer rounded-md border-gray-300
            transition duration-200 ease-in-out transform checked:scale-125" type="checkbox" 
            value={checkbox} />
                <label className="text-lg cursor-pointer" > In-Person Meeting</label>
              </div>

              <button
                type="submit"
                className="w-full bg-[#F5821F] text-white p-2 text-lg font-medium rounded"
              >
                Save
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Appointment;
