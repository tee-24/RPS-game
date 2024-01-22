let opentbn = document.getElementById('open-help');
let closebtn = document.getElementById('close-help');
let help = document.getElementById('help');

opentbn.addEventListener('click', () => {
    help.classList.add('open');
});

closebtn.addEventListener('click', () => {
    help.classList.remove('open');
});