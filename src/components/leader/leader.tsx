import { useState } from "react"
import './leader.css'
import Player from "./components/player"
export default function Leader(){
    const [leaderName,setLeaderName] = useState<string>("")
    const sampleArr:string[] = ["krittapas","peeradech","kowit","player1","player2","player3"]
    return <>
        <h1>Leader:{leaderName}</h1>
        {sampleArr.map((value:string)=>{
            return <Player name={value} setLeaderName={setLeaderName}/>
        })}
    </>
}