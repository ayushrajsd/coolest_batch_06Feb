const categoriesContainer = document.getElementById("categories")

categoriesContainer.addEventListener("click",function(event){
    const clickedElement = event.target
    if(clickedElement.classList.contains("product")){
        // console.log("Product clicked", clickedElement)
        const parent = clickedElement.parentElement;
        // const category = parent.querySelector("h2").textContent;
        const category = clickedElement.closest(".category").querySelector("h2").textContent;
        // console.log("Category", category)
        const product = clickedElement.textContent;
        console.log(`Clicked on ${product} in the ${category} category`)
    }
})