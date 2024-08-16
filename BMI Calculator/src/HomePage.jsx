import React, { useState } from 'react'

export default function HomePage() {
    const [weight, setweight] = useState(0);
    const [height, setheight] = useState(0);
    const [bmi, setbmi] = useState();
    const [message, setmessage] = useState();

    let CalcBmi = (e) => {
        e.preventDefault()

        if (weight === 0 || height === 0) {
            alert("Please enter valid weight or height")
        }
        else {
            let bmi = (weight / (height * height) * 703)
            setbmi(bmi.toFixed(1))

            if (bmi < 25) {
                setmessage("You are under-weight")
            } else if (bmi >= 25 && bmi < 30) {
                setmessage("You are Healthy")
            }

            else {
                setmessage("You are Over-weight")
            }
        }

    }

    let reload = () => {
        window.location.reload()
    }

    return (
        <div className='flex items-center justify-center min-h-screen bg-sky-100'>
            <div className='border shadow-sm shadow-black rounded-lg flex flex-col w-96 m-4 p-4 bg-white'>
                <h1 className='text-blue-950 text-2xl font-bold text-center m-4'>BMI Calculator</h1>
                <form onSubmit={CalcBmi} className='place-content-center w-full'>
                    <div className='w-full'>
                        <label 
                        className='text-gray-600 text-xl font-medium'
                        htmlFor="weight">Weight(Ibs)</label><br />
                        <input 
                            className=' mb-4 p-3 w-full border border-gray-800 rounded placeholder:text-xl'
                            type="text"
                            id='Weight'
                            placeholder='Enter Weight Value'
                            value={weight}
                            onChange={(e) => setweight(e.target.value)} /> <br />
                        <label 
                        className='text-gray-600 text-xl font-medium mt-4'
                        htmlFor="Height">Height(Ibs)</label><br />
                        <input 
                            className='p-3 w-full border border-gray-800 rounded placeholder:text-xl'
                            type="text"
                            id='Height'
                            placeholder='Enter Height Value'
                            value={height}
                            onChange={(e) => setheight(e.target.value)} />
                        <div className='mt-4 place-content-center justify-center align-middle'>
                            <button className='bg-sky-700 text-white m-1 p-3 rounded w-full font-semibold cursor-pointer hover:bg-blue-950'>Submit</button><br />
                            <button className='bg-gray-400 text-black m-1 p-3 rounded w-full font-semibold cursor-pointer hover:bg-gray-800' onClick={reload}>Reload</button>
                        </div>
                        <div>
                            <h3 className='text-gray-600 text-xl font-medium m-3' >Your BMI is: {bmi} </h3>
                            <p className='text-center text-blue-950 text-xl font-medium'>{message}</p>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}
