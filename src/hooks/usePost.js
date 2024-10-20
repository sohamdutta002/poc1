import { useState } from "react";

const usePost=(url)=>{
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(null)
    const [error, setError] = useState(null)

    const postData=async(postData)=>{
        setLoading(true)
        try{
            const response=await fetch(url,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(postData)
            })
            if(!response.ok)
                throw new Error("Failed to Post data")

            const result=await response.json()
            setData(result)
        }
        catch(error){
            setError(error.message)
        }
        finally{
            setLoading(false)
        }
    }
    return {data,loading,error,postData}
}

export default usePost