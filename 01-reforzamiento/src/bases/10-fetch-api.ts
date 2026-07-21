import type { GiphyRandomResponse, Gif } from './data/giphy.response';

const API_KEY = 'xhhvsabMk0yEOnx6Qr06TT1b3xEDx1Gw';

const myRequest = fetch(
    `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
);

const createImageInsideDOM = (url: string) => {
    const imgElement = document.createElement('img');
    imgElement.src = url;

    document.querySelector('section')?.append(imgElement);
};

myRequest
    .then((response) => response.json())
    .then(({ data }: GiphyRandomResponse) => {
        const imageUrl = data.images.original.url;
        createImageInsideDOM(imageUrl);
    })
    .catch((err) => {
        console.error(err);
    });