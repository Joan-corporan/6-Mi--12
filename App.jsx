import axios from "axios"
import './style.css'
import { useEffect, useState } from "react"

const CAT_ENDPOINT_RANDOM_FACT ="https://catfact.ninja/fact"
const IMAGE='https://catfact.com/cat/says/${threeFirstWords}?size=50&color=red&json=true'
function App (){
    const [fact,setFact]=useState()
    const [word,setWord]=useState()
    /* useEffect(()=>{
        fetch(CAT_ENDPOINT_RANDOM_FACT)
        .then(res=> res.json())
        .then(data=> setFact(data.fact))
    },[]) */ 
    useEffect(()=>{
        const getFactRandom = async ()=>{
            try{
            const {data} = await axios.get(CAT_ENDPOINT_RANDOM_FACT)
            
            setFact(data.fact);
            console.log(fact)
            
            /* const firstWord = fact.split(' ').slice(0,3).join(' ')
            console.log(firstWord) */
            const threeFirstWords = fact.split(' ').slice(0,3).join(' ')
            console.log(threeFirstWords)
            setWord(threeFirstWords)
            }catch(error){
                console.log("error",error)
            }
            
            
          /*  const {dataImg} = await axios.get(`https://catfact.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`) 
           console.log(dataImg) */

        }
        getFactRandom()
    },[])
return(
    <main>
        <h1>App de gatos</h1>
        {fact && <p>{fact}</p> }
        {word && <h2>{word}</h2>}
    </main>
)
}
export default App