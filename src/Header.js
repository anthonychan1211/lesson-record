import React from 'react'

const Header = ({onAdd, showAdd}) => {
    return (
        <div>
            <h1 className="header">Lesson Record</h1>
            <button className="btn-green" onClick={onAdd} >{showAdd ? 'Close' : 'Add Student'}</button>
            <button className="btn-red">Delete Student</button>
            
            
        </div>
    )
}

export default Header
