import { useDispatch } from "react-redux"
import { searchByAuthor,searchByCatagory } from "../redux/filter/action"
import { dateFormat } from "../helper/dateFunction"
const Blog=({blog,filter})=>{
  const {title,image,author,catagory,authorImg,date}=blog



const dispatch=useDispatch()
  const autherFilter=(name)=>{
    dispatch(searchByAuthor(name))
  }

  const catagoryFilter=(catName)=>{
    dispatch(searchByCatagory(catName))
  }
    return (
        <div className="flex flex-col rounded-lg shadow-lg overflow-hidden">
  <div className="flex-shrink-0">
    <img className="h-48 w-full object-cover" src={image} alt="" />
  </div>
  <div className="flex-1 bg-white p-6 flex flex-col justify-between">
    <div className="flex-1">
      <p onClick={()=>catagoryFilter(catagory)} className="text-sm font-medium text-indigo-600">
        <span className="cursor-pointer inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800">
        {filter.catagory?  <img className="h-5 w-5"  src="/clear-filter.png"></img>:"" }
        {catagory}
        </span>
      </p>
      <a href="#" className="block mt-1">
        <p className="text-xl font-semibold text-gray-900">
         {title}
        </p>
      </a>
    </div>
    <div className="mt-6 flex items-center">
      <div className="flex-shrink-0">
        <img className="h-10 w-10 rounded-full" src={authorImg} alt="" />
      </div>
      <div  className="ml-3 ">

        <p onClick={()=>autherFilter(author)} className="text-sm cursor-pointer font-medium text-gray-900 hover:underline">
        {filter.author?  <img className="h-5 w-5"  src="/clear-filter.png"></img>:"" }
      
       
      {author}

        </p>
        <div className="flex space-x-1 text-sm text-gray-500">
          <time dateTime="2020-03-16">{dateFormat(date)}
          </time>
          <span aria-hidden="true">
            ·
          </span>
          <span> 6 min read </span>
        </div>
      </div>
    </div>
  </div>
</div>

    )
}

export default Blog