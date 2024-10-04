import "./style.css";
import home_img from "./images/home_img.jpg";


const createHomeSection = () => {
    const div = document.createElement('div');
    div.classList.add('image-container');

    const div_text = document.createElement('div');
    div_text.classList.add('overlaytext');
    div_text.innerHTML = "Welcome to Our Lovely Restro, <br> Please feel free to contact!";

    const img = document.createElement("img");
    img.src = home_img;
    img.style.width = '100%';
    img.style.height = '500px';

    div.appendChild(img);
    div.appendChild(div_text);
    content.appendChild(div);

    const div_loc = document.createElement('div');
    div_loc.classList.add("location");
    div_loc.innerHTML = "1183 Davie Street, Vancouver, BC V6E 1N2, (670) 563-6789 <br><br><strong>Open Daily</strong>  Saturday-Thursday: 11am - 10pm,   Friday: 11am - 11pm<br><br><strong>Closure</strong>    December 23-26";
    content.appendChild(div_loc);

    const div_foo = document.createElement('div');
    div_foo.classList.add("footer");
    div_foo.textContent = "Copyright 2024 : Hayato Restro";
    content.appendChild(div_foo);
};


// Function to render the menu section (this could be customized later)
const createMenuSection = () => {
    const content = document.querySelector("#content");
    content.innerHTML = ''; // Clear previous content
    const menuText = document.createElement('div');
    menuText.textContent = "Hi, I'm the menu.";
    menuText.style.padding = '100px';
    content.appendChild(menuText);
};

// Initial rendering of the home section
createHomeSection();

// Event listener for menu navigation
const menu_js = document.querySelector('.menu-js');
menu_js.addEventListener('click', (event) => {
    event.preventDefault();
    createMenuSection(); // Render the menu section
});

const home_js = document.querySelector('.home-js');
home_js.addEventListener('click', (event) => {
    event.preventDefault();
    content.innerHTML = ''; // Clear previous content
    createHomeSection(); // Re-render the home section
});

// Function to render contact section 
const createContactSection = () => {
    const content = document.querySelector('#content');
    content.innerHTML = ''; //remove the pre-existing content

    const contactText = document.createElement('div');
    contactText.textContent ="Hi, Find the contact details below";
    contactText.style.padding ='100px';
    content.appendChild(contactText);
};

// Event listner for contact navigation

const contact_js = document.querySelector('.contact-js');
contact_js.addEventListener('click',(event) =>{
    event.preventDefault();
    content.innerHTML='';
    createContactSection();
});


// Function for rendering the subscribe page 
const createSubscribeSection = () => {
    const content = document.querySelector('#content');

    // Create the overlay 
    const subs = document.createElement('div');
    subs.classList.add('overlay');
    subs.id ='overlay';

    // create  the overlay content
    const child_div = document.createElement('div');
    child_div.classList.add('overlay-content');
    child_div.id ='overlay-content';

    const form = document.createElement('form');
    form.id = 'subscribeForm';

    const input = document.createElement('input');
    input.type ='email';
    input.placeholder = 'Enter your email';
    input.required = true;

    const button = document.createElement('button');
    button.type ='submit';
    button.textContent = 'Subscribe';

    form.appendChild(input);
    form.appendChild(button);

    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-btn');
    closeBtn.id ='closeBtn';
    closeBtn.textContent='x';

    const h2 = document.createElement('h2');
    h2.textContent = 'Subscribe to Our Newsletter';
    
    //Assemble the overlay content
    child_div.appendChild(h2);
    child_div.appendChild(closeBtn);
    child_div.append(form);

    // Append the chlid div to the overlay
    subs.appendChild(child_div);

    //Insert the overlay to the body
    document.body.appendChild(subs);

    //Add event listner to close button to remove the overlay
    closeBtn.addEventListener('click', () =>{
        subs.remove();
    });

    form.addEventListener('submit', (event) =>{
        event.preventDefault();
        const email=input.value;
        console.log(`Subscribed with email: ${email}`);
        subs.remove();
    });
};

const subs_js = document.querySelector('.subs-js');

subs_js.addEventListener('click', (event) =>{
    event.preventDefault();
    createSubscribeSection();
});

