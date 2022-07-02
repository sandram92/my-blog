import { useParams } from "react-router-dom";

const BlogDetails = () => {
      const { id } = useParams()


    return ( 
         <div className="className">
        <div>blog details {id} </div> 
        </div>
     );
}
 
export default BlogDetails;