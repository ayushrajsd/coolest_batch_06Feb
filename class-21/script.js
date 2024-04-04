const grandparent = document.querySelector('#grandParent');
const parent = document.querySelector('#parent');
const child = document.querySelector('#child');

grandparent.addEventListener('click', function(){
    console.log('Grandparent clicked ( Capturing )');
},true)
parent.addEventListener('click', function(){
    console.log('parent clicked ( Capturing )');

},true)
child.addEventListener('click', function(){
    console.log('child clicked ( Capturing )');
},true)

grandparent.addEventListener('click', function(){
    console.log('Grandparent clicked');
})
parent.addEventListener('click', function(){
    console.log('parent clicked');
})
child.addEventListener('click', function(event){
    console.log('child clicked');
    event.stopPropagation(); // stop propogation after click the child element
})