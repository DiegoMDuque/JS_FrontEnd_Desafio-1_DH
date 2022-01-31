let h1 = document.querySelector('h1')

let modoOscuro = confirm('¿Desea el modo oscuro?')

if (modoOscuro) {
    document.body.style.backgroundColor = '#7f7f7f'
    document.body.classList.add('fondoMoviesList')
}

h1.innerText = 'LISTADO DE PELÍCULAS'

h1.style.color = 'white'
h1.style.backgroundColor = 'teal'
h1.style.padding = '20px'