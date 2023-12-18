// Add imports above this line

import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Change code below this line

const container = document.querySelector('.gallery');

container.insertAdjacentHTML('beforeend', galleryList(galleryItems));

function galleryList(arr) {
  return arr.map(({ preview, original, description }) =>
        `
            <li class="gallery__item">
                <a class="gallery__link" href="${original}">
                    <img class="gallery__image" src="${preview}" alt="${description}">
                </a>
            </li>
        `
    )
        .join('');
}

let bigGallery = new SimpleLightbox('.gallery__item a', {
  captionsData: 'alt',
  captionDelay: 250,
  
});
