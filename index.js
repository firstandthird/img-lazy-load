/* eslint-env browser */
import { find, styles } from 'domassist';

export default function loadImages () {
  // Find all images
  const images = find('[data-src]');

  images.forEach(element => {
    const src = element.dataset.src;

    if (element.tagName === 'IMG') {
      element.src = src;
    } else {
      styles(element, {
        backgroundImage: `url(${src})`
      });
    }
  });
}

let onloadCallback = loadImages;

if (window.onload) {
  const onload = window.onload;

  onloadCallback = () => {
    onload();
    loadImages();
  };
}

window.onload = onloadCallback;
