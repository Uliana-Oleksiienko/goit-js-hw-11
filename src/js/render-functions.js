import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.getElementById('gallery');
const loaderEl = document.querySelector('.loader');

let lightbox = null;

function initLightbox() {
  lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}

export function createGallery(images) {
  if (!Array.isArray(images) || images.length === 0) return;

  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
        <li class="card">
          <a href="${largeImageURL}">
            <img class="card-img" src="${webformatURL}" alt="${tags || 'photo'}" loading="lazy" />
          </a>
          <ul class="meta">
            <li><span class="label">Likes</span> ${likes}</li>
            <li><span class="label">Views</span> ${views}</li>
            <li><span class="label">Comments</span> ${comments}</li>
            <li><span class="label">Downloads</span> ${downloads}</li>
          </ul>
        </li>
      `
    )
    .join('');

  galleryEl.innerHTML = markup;
  initLightbox();
}
export function clearGallery() {
  galleryEl.innerHTML = '';
  if (lightbox) {
    lightbox.destroy();
    lightbox = null;
  }
}
export function showLoader() {
  loaderEl.classList.remove('hidden');
}
export function hideLoader() {
  loaderEl.classList.add('hidden');
}