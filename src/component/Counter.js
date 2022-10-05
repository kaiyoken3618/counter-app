import React,{useState,useEffect} from 'react';

const Counter = () => { 
       
const init = 0;    
const [first, setfirst] = useState(init)
 
 
const incrementHandle = () => { 
    setfirst(first + 1); 
    
} 
const decrementHandle = () =>{ 
    setfirst(first - 1); 
   
} 
const initHandle =()=> { 
    setfirst(0);
}
  

  return (
    <div className="counter center">
      <h1 className="counter__title">Counter App</h1>
      <div className="card center">
        <h2 className="card__title">Count : {first}</h2>
        <div className="card__btns">
          <button className="btn card__btn" disabled={first==5? true:false}onClick={incrementHandle}>+</button>
          <button className="btn card__btn" disabled={first==-5? true:false} onClick={decrementHandle}>-</button>
          <button className="btn card__btn" onClick={initHandle}>0</button>
        </div>
      </div>
    </div>
  );
};

export default Counter;