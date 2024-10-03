function calculateEllipseArea(){
    const aInput = document.getElementById('ellipse-a');
    const aText = aInput.value ;
    const a =parseFloat(aText);

    const bInput = document.getElementById('ellipse-b');
    const bText = bInput.value ;
    const b = parseFloat(bText);

    const area =3.1416 * a * b ;

    const ellipseAreaSpan = document.getElementById('ellipse-area');
    ellipseAreaSpan.innerText = area;
}