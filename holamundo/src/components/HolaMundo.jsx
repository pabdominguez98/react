import React from 'react';

const HolaMundo = () => {
    const Hello = "Hola mundo";
    const isTrue = true;
    return (
          <div className="HolaMundo">
               <h1>{Hello}</h1>
               <h2>Jueves 6x1</h2>
               <img src="https://arepa.s3.amazonws.com/react.png" alt="React"/>
               {isTrue ? <h4>Esto es verdadero</h4> : <h5>Esto es falso</h5>}
          </div>
    );
};

export default HolaMundo;