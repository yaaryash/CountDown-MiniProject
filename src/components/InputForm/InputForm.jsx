import React, { useState } from "react";
import "./InputForm.css";


const InputForm = {{onDateSelect,onCancel,isCountDownActive}} => {
    const [date,setDate] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onDateSelect(date)
    }

}