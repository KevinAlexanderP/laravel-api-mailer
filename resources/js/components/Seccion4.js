import React from 'react';
import ReactDOM from 'react-dom';

function Banner() {
    return (
        <div >
<div className="bg-gray 
                        bg-gray-900
                        p-20
                       
                      justify-items-stretch
                      flex 
                      col-2
                      pt-10
                        ">
<div className="imageCeo 
       bg-gray-700 
       flex flex-col
       justify-center items-center ">
<img src="img/jose-salame.svg"  alt=""/>
<p className="place-items-end text-white text-center text-xl text-mk2 p-10">
JOSE SALAME
<br/>
CEO
</p>
</div>
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
           <button className="border m-10 text-xs p-10 w-40">
             Ver mas
         </button>
</div>

       </div>
        </div>
    );
}

export default Banner;

if (document.getElementById('Banner')) {
    ReactDOM.render(<Banner/>, document.getElementById('Banner'));
}
