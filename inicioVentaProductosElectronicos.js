$(()=>{
	document.querySelector('.cajaCategorias .item[data-etiqueta="todos"]').classList.add('categoriaActivada');
	
	var categorias = document.querySelectorAll('.item');
	
	var imagenes = document.querySelectorAll('.img');
	
    //Recorremos las categorias

	categorias.forEach((categoria)=>{
		
		//Agregamos un evento al momento de realizar un "click" en cualquier categoria
		categoria.addEventListener('click',(elementoActual)=>{
		    
		    var categoriaActual =elementoActual.target.innerHTML.toLowerCase();

			//Sacamos la clase categoriaActivada al que la tiene actualmente
			document.querySelector('.cajaCategorias .categoriaActivada').classList.remove('categoriaActivada');
			//Agregamos la clase categoriaActivada al que realizaron "click"
			categoria.classList.add('categoriaActivada');
            
            //Filtramos las imagenes correspondientes a la categoria
            
            if(categoria.dataset.etiqueta=="todos"){
            	$('.cajaItem .img').show();
            	$('.cajaItem .descripcion').show();
            }

            else{ 
            	$('.cajaItem .img').hide();
            	$('.cajaItem .descripcion').hide();

            	$('.cajaItem img[data-categoria='+categoriaActual+']').show();
            	$('.cajaItem .descripcion[data-categoria='+categoriaActual+']').show();
            }
            	});

        });
        
        //Trabajamos sobre la imagen selecccionada

       var imagenUnica = document.querySelector('.cajaPantallaUnica');

        imagenes.forEach((imagen)=>{
        	imagen.addEventListener('click',()=>{
        		var ruta = imagen.getAttribute('src');

        		document.querySelector('.cajaPantallaUnica .cajaImg .imgUnica').src=ruta;
                
                
               imagenUnica.classList.add('activoPantallaUnica');

            });
   
        });
        
        //Trabajamos sobre el boton cerrar
        document.querySelector('#botonCerrar').addEventListener('click',()=>{
                imagenUnica.classList.remove('activoPantallaUnica');
	    });
		   
		//Trabajamos sobre la barra de busqueda
        
        var elementos = document.querySelectorAll('.cajaItem .img').getAttribute;
        console.log(elementos);
        /*
        var barraBusqueda = document.getElementById('barraDeBusqueda');

        barraBusqueda.addEventListener('input',(evento)=>{
            var elemento = evento.target.value;

            if($(''))

            
        })
	*/


});

