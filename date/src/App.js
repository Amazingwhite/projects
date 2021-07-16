import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getYear, isBefore } from 'date-fns';
import UserInfo from "./components/UserInfo";
import './App.css'



export default function App() {

  let isCurrent = (date) => {
    date = new Date(date)
    if (!date){ 
      console.log('if otrabotal')
      return false;
    }
    const today = new Date();
    
    return getYear(date) === getYear(today);
  }

  let [isSubmited, setIsSubmited] = useState(false);
  let [age, setAge] = useState(0)
  
  const { register, handleSubmit } = useForm();
  let diffDates = (date1, date2) => Math.floor((date1 - date2) / (365.25 * 24 * 60 * 60 * 1000));

  const onSubmit = (data) => {
    let result = isBefore(new Date(data.valuableEvent), new Date(data.currentDate))
    let userAge = diffDates(new Date(data.currentDate), new Date(data.birthDate))
    
    if(userAge <= 0 || userAge > 130) {
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
        <input type='date' {...register("birthDate", {required: "This input is required."})} />
        <label htmlFor='currentDate'>Current date</label>
        <input type='date' {...register("currentDate", {validate: isCurrent})} />
        <label htmlFor='valuableEvent'>Event</label>
        <input type='datetime-local' {...register("valuableEvent", {required: true})} />
        <input type="submit" />
      </form>

      {isSubmited && <UserInfo age={age}/>}
    </>
  );
}