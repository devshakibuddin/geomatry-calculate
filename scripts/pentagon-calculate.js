function calculatePentagonArea(){
    const perimeterInput = document.getElementById('pentagon-perimeter');
    const perimeterText = perimeterInput.value ;
    const perimeter =parseFloat(perimeterText);

    const apothemInput = document.getElementById('pentagon-apothem');
    const apothemText = apothemInput.value ;
    const apothem = parseFloat(apothemText);

    const area =0.5 * perimeter * apothem ;

    const pentagonAreaSpan = document.getElementById('pentagon-area');
    pentagonAreaSpan.innerText = area;
}