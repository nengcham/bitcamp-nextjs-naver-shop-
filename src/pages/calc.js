import React, { useState } from "react"

export default function Calc(){
    const [inputs, setInputs] = useState({})
    const [result, setResult] = useState("")
    const {num1, num2, opcode} = inputs

    const handleChange = (e) => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({
            ...inputs,
            [name]: value
        })
    }
    
    const handleClick = (e) => {
        e.preventDefault()
        switch(opcode){
            case "+" :
                return setResult(Number(num1) + Number(num2))
            case "-" :
                return setResult(Number(num1) - Number(num2))
            case "*" :
                return setResult(Number(num1) * Number(num2))
            case "/" :
                return setResult(Number(num1) / Number(num2))
            case "%" :
                return setResult(Number(num1) % Number(num2))
        }
    }

    return <>
        <h1>Calculator</h1>
        <form action="">
        <label><b>Num1</b></label>
        <input type="text" name="num1" onChange={handleChange}/><br />

        <label><b>Opcode</b></label>
        <select type="text" name="opcode" onChange={handleChange}>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
            <option value="%">%</option>
        </select>
        <br />
        <label><b>Num2</b></label>
        <input type="text" name="num2" onChange={handleChange}/><br />
        <button onClick={handleClick}>계산!</button>
        </form>
        <div>결과:{num1}{opcode}{num2} = {result}</div>
        
    </>
}
