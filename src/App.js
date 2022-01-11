import React from "react";
import './App.css';
import {useForm} from 'react-hook-form'

function App() {
    const {register, formState: {
            errors, isValid
        }, handleSubmit, reset,} = useForm({
          mode: 'onChange',
        })

    const onSubmit = (data) => {
        alert(JSON.stringify(data))
        reset()
    }

    return (
        <div className="App">
            <h1>React hook form</h1>
            <form onSubmit={
                handleSubmit(onSubmit)
            }>
                <label>
                    <h3>FirstName</h3>
                    <input {...register('firstName', {
                      required: "Поле обязательно к заполнению",
                      minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                      }
                    })}/>
                </label>
                <label>
                    <h3>LastName</h3>
                    <input {...register('lastName', {
                      required: "Поле обязательно к заполнению",
                      minLength: {
                        value: 5,
                        message: 'Минимум 5 символов'
                      }
                    })}/>
                </label>
                <div style={{height: 40}}>
                  {errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>}
                </div>  
                <input type="submit" disabled={!isValid}/>
            </form>
        </div>
    );
}

export default App;
