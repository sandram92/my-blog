import { useState, useEffect } from 'react'
import BlogList from './BlogList';

const Home = () => {
  
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/blogs')
    .then(res=> {
      return res.json()
    })
    .then(data => {
      setBlogs(data)
    })
  },[]);

    return (
        <div className="home">
        
        {blogs && <BlogList blogs={blogs} title='My Blogs'/>}
        <button onClick={()=> setName('luigi')}>change name</button>
        <p>{name}</p>
        </div>
       
      );
}
 
export default Home;
