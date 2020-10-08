import React from 'react';
import ReactDOM from 'react-dom';

function Proyects() {
    return (
        <div className="text-2xl content-center text-center m-20 flex flex-row shadow-xl ">
       <div class="text-gray-700 text-center bg-white px-4 py-2 m-2">
      
         <h1 className="text-6xl text-black">
           LUCEN INCREIBLE, <br/> FUNCIONAN INCREIBLE
         </h1>
       </div>
      <div class="text-gray-700 text-center bg-gray-400 px-4 py-2 m-2">
      <img src="img/logo.png" alt=""/>
         <button>
             Ver mas
         </button>
      </div>
      
        </div>
    );
}

export default Proyects;

if (document.getElementById('Proyects')) {
    ReactDOM.render(<Proyects/>, document.getElementById('Proyects'));
}
