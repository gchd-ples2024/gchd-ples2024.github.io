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
        div.innerHTML = `<img src="${path}/reklama_${img_id + 1}.${types[img_id]}">`;
    });
}