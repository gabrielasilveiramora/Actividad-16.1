function CatImage() {
    // Realiza la solicitud a la API
    fetch('https://api.thecatapi.com/v1/images/search') 
      .then(response => response.json())  
      .then(data => {
        const gallery = document.getElementById('cats');  
  
        // Se limpia la imagen anterior
        gallery.innerHTML = '';  

        const imgElement = document.createElement('img');
        imgElement.src = data[0].url;  
        imgElement.alt = 'Gatito';  
  
        
        gallery.appendChild(imgElement);
      })
      .catch(error => {
        console.error('Error al obtener la imagen:', error); 
      });
  }
  
  // Evento botón
  document.getElementById('cat-button').addEventListener('click', CatImage);
  
