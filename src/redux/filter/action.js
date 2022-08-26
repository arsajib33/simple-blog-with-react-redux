import {SEARCHBYAUTHOR,SEARCHBYCATAGORY,SEARCHBYKEYWORD} from './actionTypes'

export const searchByKeyWord=(keyword)=>{
    return {
        type:SEARCHBYKEYWORD,
        payload:keyword
    }
}

export const searchByAuthor=(author)=>{
    return {
        type:SEARCHBYAUTHOR,
        payload:author
    }
}

export const searchByCatagory=(catgory)=>{
    return{
        type:SEARCHBYCATAGORY,
        payload:catgory,
    }
}