import React, { useState } from 'react'
import Country from '../../db/Country.json'
import AuthLayout from '../../components/layouts/auth/AuthLayout'

const Counter = () => {

    const [counter, setCounter] = useState(0)

    let country = Country
    // let counter = 0

    console.log(country.length)
    console.log(country[100].name)

    return (
        <AuthLayout>
            <h1>Counter : { counter }</h1>
            {/* <button onClick={
                    ()=>{
                        console.log('OK') 
                        console.log(counter + 1)
                    }
                }>Counter up</button> */}

            <button onClick={ () => setCounter(counter+1) } className="btn btn-primary">Counter up</button>

            
        </AuthLayout>
    )
}

export default Counter
