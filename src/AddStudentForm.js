import React from 'react'
import './index.css'
import { useState } from 'react'

const AddStudentForm = () => {

    const [name, setName] = useState("")
    const [tuition, setTuition] = useState("")
    const [piano, setPiano] = useState(false)
    const [violin, setViolin] = useState(false)
    const [theory, setTheory] = useState(false)


    return (
            <form>
                <label className="form-label">Name : </label>
                <input 
                type="text"  
                value={name}
                onChange={(e)=>setName(e.target.value)}></input>
                <label className="form-label">Instrument: </label>
                
                <input type="radio" className="radio" 
                value={piano}
                name="instrument"
                onChange={(e)=>setPiano(e.currentTarget.value)}></input>
                <label className="radio-label">Piano</label>
                <input type="radio" className="radio" 
                name="instrument"
                value={violin}
                onChange={(e)=>setViolin(e.currentTarget.value)}></input>
                <label className="radio-label">Violin</label>
                <input type="radio" className="radio" 
                name="instrument"
                value={theory}
                onChange={(e)=>setTheory(e.currentTarget.value)}></input>
                <label className="radio-label">Theory</label>

                <label className="form-label">Tuition Fee : </label>
                <input type="text" 
                name="instrument"
                value={tuition}
                onChange={(e)=>setTuition(e.target.value)}></input>
                <button type="submit" className="submit-btn">Add Student</button>
                
            </form>
            
    )
}

export default AddStudentForm
