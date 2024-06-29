import React, { useState } from 'react'
import {coursesData} from './data'
import { BiSearch } from 'react-icons/bi';

const App = () => {

  const [search, setSearch] = useState ('');

  return (
    <div>
        <div className="course_wrapper">
          <h2>In-Demand <span>Courses</span></h2>
          <div className="search_input">
            <BiSearch className='search_icon'/>
            <input type="text"  id="searchInput" placeholder='Search for any course' onChange={(event) => {
              setSearch(event.target.value)
            }}/>
          </div>
       </div>
          <div className="course_container">
            {coursesData.filter((val) => {
              if(search == ""){
                return val;
              } else if(val.name.toLowerCase().includes(search.toLocaleLowerCase())){
                return val;
              }
            })
            .map(({image, name, price, standard})=> {
                return (
                    <div className="course_card">
                    <img src={image} alt="" className='course_img'/>
                    <h3 className="course_name">{name}</h3>
                    <h4 className="course_price">${price}</h4>
                    <p className="course_standard">{standard}</p>
                    <button className="course_button"> Explore</button>
                </div>
                )
              })
             }
          </div>
      </div>

  )
}

export default App