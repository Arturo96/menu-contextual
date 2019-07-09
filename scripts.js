addEventListener('contextmenu', e => {

    e.preventDefault();

    eliminarMenu();

    
    // Creamos el nuevo menú contextual
    const menu = document.createElement('div'),
            x  = e.pageX,
            y  = e.pageY
    console.log(x, y);
    menu.id = 'menu';
    menu.innerHTML = `<ul class="menu">
                        <li>Item 1</li>
                        <li>Item 2</li>
                        <li>Item 3</li>
                     </ul>`;
    // menu.style.padding = '1em';
    menu.style.background = '#00363a';
    menu.style.borderRadius = '5px';
    menu.style.color = '#fff';
    menu.style.position = 'fixed';
    menu.style.top = `${y}px`;
    menu.style.left = `${x}px`;
    document.body.appendChild(menu);


})

addEventListener('click', () => {
    eliminarMenu();
})

const eliminarMenu = () => {
    // Eliminamos el menu contextual si ya existe
    const prevMenu = document.getElementById('menu');
    if(prevMenu) document.body.removeChild(prevMenu);
    
}