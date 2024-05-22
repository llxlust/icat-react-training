import { useState } from 'react'
import './count.css'
export default function Count(){
    const [counter,setCounter] = useState<number>(0)
    return <>
        <div className='count'>count:{counter}</div>
        <button onClick={()=>{
        const sum = counter + 1
        setCounter(sum)
        }} className='btn'>Click</button>
    </>
}