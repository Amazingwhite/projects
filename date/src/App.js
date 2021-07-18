import React, { useState } from "react";
import { useForm } from "react-hook-form";
// import { getYear, isBefore } from 'date-fns';
import UserInfo from "./components/UserInfo";
import { ErrorMessage } from "@hookform/error-message";
import { isDate,set  } from 'date-fns'
import './App.css'

export default function App() {
  // let isCurrent = (date) => {
  //   date = new Date(date)
  //   if (!date) {
  //     console.log('if otrabotal')
  //     return false;
  //   }
  //   const today = new Date();
  //   return getYear(date) === getYear(today);
  // }

  let [isSubmited, setIsSubmited] = useState(false);
  let [age, setAge] = useState(0);
  let [untilEvent, setUntilEvent] = useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ criteriaMode: "all" });

  let diffDates = (date1, date2) => Math.floor((date1 - date2) / (365.25 * 24 * 60 * 60 * 1000));

  const onSubmit = (data) => {
  let userAge = diffDates(new Date(data.currentDate), new Date(data.birthDate))
  // let timeUntilEvent = 
  
  setUntilEvent(diffDates(new Date(data.currentDate), new Date(data.valuableEvent)))
  console.log(set(new Date(data.currentDate), { year: 2015, month: 9, date: 20, hours: 12, minutes: 11 }))

    if (userAge <= 0 || userAge > 130) {
      setAge(false)
    } else {
      setAge(userAge)
      setIsSubmited(true)
    }
    

  }
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor='birthDate'>Birth date</label>
        <input type='date' {...register("birthDate", {
          required: "This input is required."
        })} />
        <ErrorMessage
          errors={errors}
          name="birthDate"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
              : null;
          }}
        />
        <label htmlFor='currentDate'>Current date</label>
        <input type='date' {...register("currentDate", {
          required: "This input is required."
        })} />
        <ErrorMessage
          errors={errors}
          name="currentDate"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
              : null;
          }}
        />
        <label htmlFor='valuableEvent'>Event</label>
        <input type='datetime-local' {...register("valuableEvent", {
          required: "This input is required."
        })} /> 
        <ErrorMessage
          errors={errors}
          name="valuableEvent"
          render={({ messages }) => {
            console.log("messages", messages);
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
              : null;
          }}
        />
        <input type="submit" />
      </form>
      {isSubmited && <UserInfo age={age} />}
    </>
  );
}