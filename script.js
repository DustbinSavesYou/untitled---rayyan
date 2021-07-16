document.addEventListener('DOMContentLoaded', function() {

    // remove loader 
    setTimeout(() => {
        let loader = document.querySelector('.loader');
        loader.style.display = 'none';
    }, 2500)

    // create 9 name elements
    for (i = 0; i <= 8; i++) {
        let nameElement = document.createElement('SPAN');
        let name = document.createTextNode('rayyantariq');

        nameElement.appendChild(name);
        nameElement.classList.add('name');
        // added the class 'name' to them, this gives them absolute positioning
        nameElement.style.fontSize = `${Math.floor((Math.random() + 0.3) * 120)}px`
        nameElement.style.top =  `${Math.floor((Math.random()) * 120) - Math.floor((Math.random()) * 20)}vh`;
        nameElement.style.left =  `${Math.floor((Math.random()) * 200) - Math.floor((Math.random()) * 150)}vh`;
        //give them initial styling
        // a number is subtracted to allow 'top' and 'left' values to become negative at times. Eg. 0.1*200 = 20, 20 - 0.8*150 = -100. Hence, 'left' is -100

        document.body.appendChild(nameElement)

        setInterval(() => {
            nameElement.style.fontSize = `${Math.floor((Math.random() + 0.3) * 120)}px`;
            nameElement.style.top =  `${Math.floor((Math.random()) * 120) - Math.floor((Math.random()) * 20)}vh`;
            nameElement.style.left =  `${Math.floor((Math.random()) * 200) - Math.floor((Math.random()) * 150)}vh`;
        }, 150);
        // the same random styles are applied every 150ms 
    }

    // remove all names and add 'hello'
    setTimeout(() => {
        let names = document.querySelectorAll('.name');
        names.forEach((name, index) => {
            name.remove();  //destroys the name element
        }) // removed name elements

        hello = document.querySelector('.hello span');
        hello.style.display = 'block';
        document.title = 'hello.';
    }, 5500)
})