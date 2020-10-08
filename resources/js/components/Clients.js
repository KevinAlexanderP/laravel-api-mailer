import React from 'react';
import ReactDOM from 'react-dom';

function Clients() {
    return (
        <div className="bg-gray 
                        bg-gray-900
                        p-20
                       
                      justify-items-stretch
                      flex 
                      col-2
                        ">
       <img src="img/jose-salame.svg" className="imageCeo 
       bg-gray-700 
       flex 
       justify-center items-center " alt=""/>
       <div className="m-20 pl-20 text-6xl text-white text-mk">
           Un poco de nosotros
           <p className="text-xs">
               Somos un equipo de gente creativa
               Somos un equipo de gente creativa
               Somos un equipo de gente creativa
               Somos un equipo de gente creativa
               Somos un equipo de gente creativa
               <br/>
               Somos un equipo de gente creativa
               Somos un equipo de gente creativa
               Somos un equipo de gente creativa
               Somos un equipo de gente creativa
               Somos un equipo de gente creativa
           </p>
       </div>
      
        </div>
    );
}

export default Clients;

if (document.getElementById('Clients')) {
    ReactDOM.render(<Clients/>, document.getElementById('Clients'));
}
