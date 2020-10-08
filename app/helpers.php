<?php 

function setActive($routeName){
    return request()->routeIs($routeName) ? 'active' : '';
}

// en autoload se definen las clases que se van a cargar automaticamente