const imgUrl = new URL('img/bild.jpg', import.meta.url);
const img = document.createElement('img');
img.src = imgUrl.href; //ger oss en string med hela url:en till bilden
document.body.append(img)