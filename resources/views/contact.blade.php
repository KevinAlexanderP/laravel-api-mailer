@extends('layout')

@section('content')
<h1 class="text-center text-6xl text-mk2">Te queremos escuchar</h1>
<br>
<p class="text-center text-gray-400">si tienes dudas comentarios , propuestas, proyectos o quieras trabajar con nosotros escribenos</p>
<form action="{{route('contact')}}" method="POST" class=" bg-gray-200 shadow-xl b justify-center rounded-lg flex">
    <div class="row  justify-content-center ">
            <div class="justify-content m-5">
            <div class="">
                @csrf
    <div class="flex flex-row justify-center">
            <h1 class="p-4 pr-40">Nombre y Appellido</h1>
                    <h1 class="p-4 pl-10">
                        Corre Electrónico 
                    </h1>
       
     </div>
     <div class="flex flex-row justify-center ">
        
       
        <input name="name" placeholder="Nombre..." value="{{old('name')}}" class="p-4 m-10 border shadow-xl "> 
     
                {!!$errors->first('name','<small>:message</small>')!!} 
           
            <input class="p-4 m-10  border shadow-xl" name="email" placeholder="Email..." value="{{old('email')}}">
     
        {!!$errors->first('email','<small>:message</small>')!!} 
 </div>
        <div class="flex flex-row justify-center">
            
            <h1 class="p-4">Tel</h1>
        <h1 class="p-4 pl-40">Mensaje</h1>
        
        </div>
   <div class="flex flex-row justify-center">
    <input  name="subject" placeholder="Asunto..." class="p-4 m-10 border shadow-xl" value="{{old('subject')}}"> 
    {!!$errors->first('subject','<small>:message</small>')!!} 
        <textarea name="content" placeholder="Mensaje..." class="p-4 m-10 shadow-xl  border h-2"></textarea>
        {!!$errors->first('content','<small>:message</small>')!!} 
   </div>
            <div class="flex flex-row justify-center m-10">
                <button class="w-40 m-10 h-20 border rounded shadow-xl bg-blue-400 text-white">
                    Enviar 
                </button>
            </div>
            </div>
            </div>
    </div>
</form>
@endsection