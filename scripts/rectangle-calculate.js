function calculateRectangleArea (){
    const widthInput = document.getElementById('rectangle-width');
    const widthText = widthInput.value ;
    const width = parseFloat(widthText);
    console.log(width);

    const lengthInput = document.getElementById('rectangle-length');
    const lengthText = lengthInput.value ;
    const length = parseFloat(lengthText);


    const area = width * length ;


    const rectangleAreaSpan = document.getElementById('rectangle-area');
    rectangleAreaSpan.innerText = area;
}