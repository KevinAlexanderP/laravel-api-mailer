import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div className="text-2xl content-center text-center m-20  ">
         <p>
             dinkbit es un equipo Creativo
         </p>
         <h1 className="text-6xl text-mk">
             Hacemos cosas <br/> increibles
         </h1>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
