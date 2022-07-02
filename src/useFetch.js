import { useEffect, useState } from "react";

const useFetch = (url) => {

  const [data, setBlogs] = useState(null);
  const [isPending, setPending] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {

    const abortCont = new AbortController()

    setTimeout(() =>
      fetch(url, { signal: abortCont.signal })
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
          if (err.name === 'AbortError') {
            console.log('fetch aborted')
          } else {
            setPending(false)
            setError(err.message)
          }
        }), 3000)
    return () => abortCont.abort()
  }, [url]);

  return { data, isPending, error }

}
export default useFetch; 