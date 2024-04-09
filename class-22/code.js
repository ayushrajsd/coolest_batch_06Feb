const colorPalette = document.getElementById("colorPalette")

colorPalette.addEventListener("click",function(event){
    const clickedElement = event.target;
    if(clickedElement.classList.contains("color-box")){
        let color = clickedElement.style.backgroundColor;
        // console.log(`Clicked on color ${color}`)
        color = color.replace('rgb','rgba').replace(')',',0.2)');
        document.body.style.backgroundColor = color;
        // rgb(0,0,255) => rgba(0,0,255,0.2)
    }
})