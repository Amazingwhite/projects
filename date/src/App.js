import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import UserInfo from "./components/UserInfo";
import { ErrorMessage } from "@hookform/error-message";
import { getMilliseconds, getMinutes, getHours, getDate, getMonth, getYear, yearsToMonths, monthsToDays } from 'date-fns'
import './App.css'

export default function App() {
  let [isSubmited, setIsSubmited] = useState(false);
  let [age, setAge] = useState(0);
  let [untilEvent, setUntilEvent] = useState(0);

  const {
    register,
    formState: { errors },
    handleSubmit
  } = useForm({ criteriaMode: "all" });

  let diffDates = (date1, date2) => Math.floor((date1 - date2) / (365.25 * 24 * 60 * 60 * 1000));

  let timeCounter = (date1, date2) => {
    date1 = new Date(date1);
    date2 = new Date(date2);
    let time = [];
    let years = Math.floor((yearsToMonths(getYear(date1)) + (getMonth(date1) +1) - (yearsToMonths(getYear(date2)) + (getMonth(date2) +1)))/12)
    time.push({years: years})

    if(years >= 0){
      let months = (getMonth(date1)+1) - (getMonth(date2)+1)
      if(months < 0) {
        months = 12 + months
      } 
      time.push({months: months})

      let days = getDate(date1) - getDate(date2)
      if(days < 0) {
        days = 32 - new Date(2013, getMonth(date1)-1, 32).getDate() + days;
        time[1] = {months: months-1}
        if(months <= 0) {
          time[0] = {years: years-1}
          time[1] = {months: 11}
        }
      } 
      time.push({days: days})

      let hours = getHours(date1) - getHours(new Date())
      if( hours < 0) {
        hours = 24 + hours;
        time[2] = {days: days-1}
        // if(days <=0) {
        //   time[1] = {months: months-1}
        //   time[2] = {days: 32 - new Date(2013, getMonth(date1)-1, 32).getDate()}
        // }
      }
      time.push({hours: hours}) 

      let minutes = getMinutes(date1) - getMinutes(new Date())
      if( minutes < 0) {
        minutes = 60 + minutes;
        time[3] = {hours: hours-1}
        if(hours <= 0) {
          time[2] = {days: days-1}
          time[3] = {hours: 23}
        }
      }
      time.push({minutes: minutes}) 
      setUntilEvent(time)
    } else {
      console.log('todo')
    }
  }

  const onSubmit = (data) => {
  let userAge = diffDates(new Date(data.currentDate), new Date(data.birthDate))
  timeCounter(data.valuableEvent, data.currentDate)
    if (userAge < 0 || userAge > 130) {
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
          maxLength: {
            value: 10,
            message: 'Max year is 9999'
          },
          required: "This input is required."
        })} />
        <ErrorMessage
          errors={errors}
          name="birthDate"
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
              : null;
          }}
        />
        <label htmlFor='currentDate'>Current date</label>
        <input type='date' {...register("currentDate", {
          maxLength: {
            value: 10,
            message: 'Max year is 9999'
          },
          required: "This input is required."
        })} />
        <ErrorMessage
          errors={errors}
          name="currentDate"
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
              : null;
          }}
        />
        <label htmlFor='valuableEvent'>Event</label>
        <input type='datetime-local' {...register("valuableEvent", {
          maxLength: {
            value: 16,
            message: 'Max year is 9999'
          },
          required: "This input is required."
        })} /> 
        <ErrorMessage
          errors={errors}
          name="valuableEvent"
          render={({ messages }) => {
            return messages
              ? Object.entries(messages).map(([type, message]) => (
                <p key={type}>{message}</p>
              ))
              : null;
          }}
        />
        <input type="submit" />
      </form>
      {isSubmited && <UserInfo age={age} untilEvent={untilEvent} />}
    </>
  );
}