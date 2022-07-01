import { useEffect, useState } from "react";


const useFetch = (url) => {
    
    const [data, setBlogs] = useState(null);
    const [isPending, setPending] = useState(true)
    const [error, setError] = useState(null)
  
    useEffect(() => {
        fetch(url)
          .then(res => {
            if (!res.ok) {
              throw Error('could not fetch the data for that resource')
            }
            return res.json()
          })
          .then(data => {
            setBlogs(data)
            setPending(false)
            setError(null)
          })
          .catch(err => {
            setPending(false)
            setError(err.message)
          })
      }, [url]);
       
      return { data, isPending, error }
     
} 
export default useFetch; 