import { useEffect, useState } from "react"
import {useDispatch } from "react-redux";
import {searchByKeyWord} from '../redux/filter/action'
const Search=()=>{
    const [keyword,setKeyword]=useState('')
    const dispatch=useDispatch()
useEffect(()=>{
dispatch(searchByKeyWord(keyword))
},[keyword])
const searchHandler=(e)=>{
   
setTimeout(()=>{
    setKeyword(e.target.value)
},700)
   
  
}
    return (
     

    
            <div className="border mt-6 border-slate-200 flex items-center w-11/12 lg:w-1/2 mx-auto bg-gray-50 h-12 px-5 rounded-lg text-sm ring-emerald-200">
<input 

onChange={(e)=>searchHandler(e)}

className="outline-none border-none bg-gray-50 h-full w-full mr-2" type="search" name="search" placeholder="Search" />
<img className="inline h-6 cursor-pointer" src="./search.svg" alt="Search" />
</div>

   


    )

}

export default Search