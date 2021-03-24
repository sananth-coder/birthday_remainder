import React,{useState} from 'react';
import {data} from '../../../data';

const Birthday = () => {
  const[people,setVal] = useState(data)
  return (
    <div>
      <h3>{people.length}  birthdays today</h3>
      {people.map((person) => {
        const{id,name,age,image}=person;
        return(
          <section>
          <div key={id} >
            <img src={image} style={{height:'100px',width:'100px',borderRadius:'50%',margin:'1rem',marginRight:'4px',}}></img></div>
            <div >
              <h3>{name}</h3>
              <p>{age}</p>
            </div></section>
          
        )
      })}

      <button className="btn" onClick={() => setVal([])} >Clear All</button>
      
    </div>
  )
}


export default Birthday
