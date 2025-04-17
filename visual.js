 function ocultar(seletor = 'section') {
    const sections = document.querySelectorAll(seletor);
    sections.forEach(sec => sec.style.display = 'none');
}

 function exibir(id) {
    console.log(`exibir ${id}`)
    const section = document.getElementById(id);
    if (section) {
        section.style.display = 'block';
    }
}
