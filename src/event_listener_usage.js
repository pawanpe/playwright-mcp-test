const h1 = document.querySelector('h1');

//mozilla.com/web/events

h1.addEventListerner('mouseenter', function(e) {
    alert('addEventListener: Mouse entered the h1 element');
});


// Remove event listener
const alertH1 = function(e) {
    alert('removeEventListener: Mouse left the h1 element');
    h1.removeEventListener('mouseenter', alertH1);
};

// or with settimeout
setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 5000);  

