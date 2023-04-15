import React, { useEffect, useState } from 'react'
import "./App.css"
import ReactPaginate from 'react-paginate'

const App = () => {

  const [user , setUser]= useState([])
  const [pageNumber, setPageNumber] =useState(0)
  const userPerPage = 10
  const pageCount = pageNumber*userPerPage
   const userpage = user.slice(pageCount,pageCount+userPerPage).map(item=>{
    return (
      <div key={item.id}>
        <h4 className='title'>{item.title}</h4>
      </div>
    )
   })
  const fetchapi =async()=>{
    const api = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await api.json()
    setUser(data.slice(0,53))
    console.log(data)
  }

  useEffect(()=>{
    fetchapi()
  },[])

  const pageTotal = Math.ceil(user.length/userPerPage)
  const onPageChange = ({selected})=>{
    setPageNumber(selected)
  }
  return (
   <div>
    <h2 className='header'>MEMBERS</h2>
    {userpage}
    <ReactPaginate
      pageCount={pageTotal}
      onPageChange={onPageChange}
      previousLabel={"Back"}
      nextLabel={"Next"}
      containerClassName='container'
      nextLinkClassName='nextbtn'
      previousLinkClassName='prebtn'
      activeClassName='active'
    />
   </div>
  )
}

export default App

//fetch("https://jsonplaceholder.typicode.com/posts")//{}[] \