/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// rafcp
// rafcp
// Crea funcional component con prop-types
// Buscar los diferentes snippets para los rafc, rafcp, rafce
import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({ value = 10 }) => {

    const [counter, setCounter] = useState(value);

    const handleAdd = (e) => {
        setCounter(counter + 1);
    }


    const handleSubtract = () => setCounter(counter - 1);

    const handleReset = () => setCounter(value);

    return ( 
        <>

        <h1> CounterApp </h1>  
        <h2> { counter } </h2>


        <button onClick = { handleAdd } > +1 </button>  
        <button onClick = {() => setCounter(value)} > Reset </button>
        <button onClick = {() => setCounter(counter - 1)} > -1 </button>  

        </>
    )
}

CounterApp.propTypes = {
    value: PropTypes.number

}

export default CounterApp;