
const loader = document.querySelector('.loader');
const container = document.querySelector('.container');

function openSite() {
    loader.style.display = "none";
    container.style.display = "flex"
}
setTimeout(openSite, 5000)


const uzs = document.querySelector('#uzs');
const usd = document.querySelector('#usd');

uzs.addEventListener("input", (e) => {
    const request = new XMLHttpRequest();

    request.open('GET', 'user.json');
    request.setRequestHeader('Content-Type', 'applocation/json; charset=utf-8');
    request.send()

    request.addEventListener('readystatechange', () => {
        if (request.readyState == 4 && request.status === 200) {
            console.log(request.response);
            const data = JSON.parse(request.response)
            usd.value = (+uzs.value / data.current.usd).toFixed(2)
        } else {
            usd.value = 'Aniqlanmadi';
        }
    });
})