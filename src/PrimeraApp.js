//Fuctional Compomlents
// imr + TAB
// To import react
// import React, { fragment } from 'react';
import React from 'react';
import PropTypes from 'prop-types';

const PrimeraApp = ({ saludo, subtitulo = 'soy un subtitulo' }) => {
    return ( <
        >
        <
        h1 > { saludo } < /h1>  <
        p > { subtitulo } < /p>     <
        / >
    );

}

PrimeraApp.propTypes = {
    saludo: PropTypes.string.isRequired
}

export default PrimeraApp;