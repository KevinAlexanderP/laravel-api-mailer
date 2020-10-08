import React from 'react';
import ReactDOM from 'react-dom';

function HeroTwo() {
    return (
        <div className="text-2xl flex content-center text-center m-20 bg-gray-800 text-gray-200 heroh justify-items-center grid grid-cols-2 shadow-2xl">
       <div className="flex justify-center items-center ">
    
        
       </div>
       <div>
       <div className="text-justify  m-10">
       <h1 className="text-6xl">
           DISEÑO
         </h1>
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, tempore eius nam tempora quod commodi rem quas perferendis sunt sequi alias sapiente saepe velit dicta officia earum cum. Hic, non?
             <button className="bg-transparent hover:bg-blue text-blue-dark font-semibold hover:text-white py-2 px-4 border border-blue hover:border-transparent rounded">


             Ver mas 
             <span class="iconify" data-icon="mdi:arrow-right" data-inline="false"></span>
         </button>
         </div>
       
       </div>
   
        </div>
    );
}

export default HeroTwo;

if (document.getElementById('HeroTwo')) {
    ReactDOM.render(<HeroTwo/>, document.getElementById('HeroTwo'));
}
