const aplicacion = document.querySelector('.container')

const url = 'https://jsonplaceholder.typicode.com/users'

fetch(url)
	.then(response => response.json())
	.then(data => {
        data.forEach(usuarios => {
           console.log(usuarios.company.name)
           const p = document.createElement('p')
           p.innerHTML = usuarios.company.name
           aplicacion.appendChild(p) 
        });
        //console.log(data)
    })
	.catch(err => console.error(err));