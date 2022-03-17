let images: object[] = [
  new URL('img/3rgbkeyboard.jpg', import.meta.url),
  new URL('img/clown.jpg', import.meta.url),
  new URL('img/longspoon.jpg', import.meta.url),
  new URL('img/milkpuke.jpg', import.meta.url),
  new URL('img/minecraftcarson.jpg', import.meta.url),
  new URL('img/skeleton.jpg', import.meta.url),
];

console.log(images);

for (let el of images) {
  let img: Node = document.createElement('img');
  img.src = el;
  document.querySelector('body').appendChild(img);
}
