import React, {useState} from "react";

export default function Bmi(){
  const [inputs, setInputs] = useState({})
  const {name, weight, height} = inputs // Object Destructuring
  const [result, setResult] = useState("")

  const handleChange = (e) => {
      e.preventDefault()
      const {value, name} = e.target;
      setInputs({ ...inputs, [name]: value })
  }
  const handleClick = (e) => {
      e.preventDefault()
      setResult(`${name}님의 Bmi지수는 ${(weight/height/height * 10000).toFixed(2)}입니다.`)
  }

  return <>
  <form action="">
  <h1>BMI폼</h1>
  <label htmlFor=""><b>Name: </b></label>
  <input type="text" name="name" onChange={handleChange} /><br />
  <label htmlFor=""><b>Height(cm): </b></label>
  <input type="text" name="height" onChange={handleChange} /><br />
  <label htmlFor=""><b>Weight(kg) : </b></label>
  <input type="text" name="weight" onChange={handleChange}/><br />
  <button onClick={handleClick}>BMI 체크</button>
  </form> 
  <div>결과 : {result}</div>
  </>
}
