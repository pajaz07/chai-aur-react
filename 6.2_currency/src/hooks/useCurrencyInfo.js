//Initilaise with .js when file is not returning jsx

// function hello(){           basic custom hook
//     return []
// }

// useEffect(()=>{}, [])     first is callback func like hwat to do, second is dependancy array (factors that can invoke this function)

import {useEffect, useState} from "react"

function useCurrencyInfo(currency){
    const [data, setData] = useState({})
    useEffect( ()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then( (res)=> res.json() )
        .then( (res)=>  setData(res[currency]))
    } , [currency])

    return data
}

export default useCurrencyInfo