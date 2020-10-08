import React from 'react';
import ReactDOM from 'react-dom';

function Trust() {
    return (
        <div >
<div className="bg-white
                      
                        p-20
                       
                      justify-items-stretch
                      flex 
                      col-2
                      pt-10
                        ">

       <div className="m-20 pl-20 text-6xl  text-mk">
          Confian en <br/>
           nosotros
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
<div className="imageCeo 
    
       flex flex-col
       justify-center items-center ">
<img src="img/pngwing.com.png"  alt=""/>

</div>
       </div>
        </div>
    );
}

export default Trust;

if (document.getElementById('Trust')) {
    ReactDOM.render(<Trust/>, document.getElementById('Trust'));
}
