import { useState } from 'react'
import BlogList from './BlogList';

const Home = () => {
  
  const [blogs, setBlogs] = useState([
    {title: 'My new website', body: 'lorem ibsum ....', author: 'mario', id:1},
    {title: 'Welcome Party', body: 'lorem ibsum ....', author: 'renata', id:2},
    {title: 'My dev tips', body: 'lorem ibsum ....', author: 'mario', id:3},
  ]);
  
  const handleDelete = (id)=>{
  const newBlogs = blogs.filter(blog=>blog.id !== id)
  setBlogs(newBlogs)
  }

    return (
        <div className="home">
        
        <BlogList blogs={blogs} title ={'My Blogs'}handleDelete={handleDelete}/>
        </div>
       
      );
}
 
export default Home;
