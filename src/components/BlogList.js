import { useSelector } from "react-redux"
import Blog from "./Blog"

const BlogList=()=>{
  const blog =useSelector((state)=>state.blog)
  const filters=useSelector((state)=>state.filter)
  const {keyword,catagory,author}=filters
    return (
        <section className="relative bg-gray-50 pt-8 pb-20 px-4 sm:px-6 lg:pt-16 lg:pb-16 lg:px-8">
  <div className="absolute inset-0">
    <div className="bg-white h-1/3 sm:h-2/3" />
  </div>
  <div className="relative max-w-7xl mx-auto">
    <div className="text-center">
      <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        ALL BLOGS ARE HERE
      </h2>
      <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Ipsa libero labore natus atque, ducimus sed.
      </p>
    </div>
    {/* card grid  */}
    <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
     
     {blog
     .filter(blog=>{
    
      const regex =  new RegExp(keyword,'i'); 
      if(keyword.length>0){
        return blog?.title?.match(regex)
      }else{
        return true
      }
      
     })
     .filter(blog=>{
    
      if(author.length>0){
        return blog?.author?.match(author)
      }else{
        return true
      }
     })
     .filter(blog=>{
      if(catagory.length>0){
        return blog?.catagory?.match(catagory)
      }else{
        return true
      }
     })
     .map((blog)=>{
      return (
        <Blog key={blog.id} blog={blog} filter={filters}/>
      )
     })}
    
      
   
    </div>
  </div>
</section>

    )

}

export default  BlogList