function calculateRhombusArea(){
    const d1Input = document.getElementById('rhombus-d1');
    const d1Text = d1Input.value ;
    const d1 =parseFloat(d1Text);

    const d2Input = document.getElementById('rhombus-d2');
    const d2tText = d2Input.value ;
    const d2 = parseFloat(d2tText);

    const area =0.5 * d1 * d2 ;

    const rhombusAreaSpan = document.getElementById('rhombus-area');
    rhombusAreaSpan.innerText = area;
}