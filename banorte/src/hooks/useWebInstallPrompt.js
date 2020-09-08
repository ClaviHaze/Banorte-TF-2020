const prompt = document.querySelector('.prompt');
const installButton = prompt.querySelector('.prompt_install');
const closeButton = prompt.querySelector('.prompt_close');
let installEvent;

function getVisited() {
    return localStorage.getItem('install-prompt');
}

function setVisited() {
    localStorage.setItem('install-prompt', true);
}

window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    if(!getVisited()) {
        prompt.style.display = 'block';
        installEvent = event;
    }
});

installButton.addEventListener('click', () => {
    prompt.style.display='none';
    installEvent.prompt();
    installEvent.userChoice.then((choice) => {
        if(choice.outcome !== 'accepted') {
            setVisited();
        }
        installEvent = null;
    });
});

closeButton.addEventListener('click', () => {
    setVisited();
    prompt.style.display = 'none';
    installEvent = null;
});