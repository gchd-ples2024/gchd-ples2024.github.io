const types = [
    "png",
    "png",
    "png",
    "gif",
    "gif",
    "png",
]

function placeAdvert(divs, path = "../public/reklamy", max_adverts = 6) {
    let seed = Math.round(Math.random() * max_adverts);

    divs.forEach((div, id) => {
        let img_id = (seed + id) % max_adverts;
        div.innerHTML = `<a href="https://gchd-ples2024.github.io/%C4%8D%C5%AFr%C3%A1n%C3%AD"><img src="${path}/reklama_${img_id + 1}.${types[img_id]}"></a>`;
    });
}