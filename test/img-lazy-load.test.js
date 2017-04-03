import loadImages from '../index';
import test from 'tape-rollup';

const TRANSPARENT_PIXEL =
    'data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=';

const init = () => {
  const container = document.createElement('div');
  container.id = 'fixture';
  document.body.appendChild(container);
};

const setup = () => {
  const container = document.getElementById('fixture');
  container.innerHTML = `
    <img id="image" src="${TRANSPARENT_PIXEL}" data-src="https://c1.staticflickr.com/6/5126/5238546952_38a507f453_b.jpg" alt="">
    <div id="box" data-src="https://c1.staticflickr.com/6/5126/5238546952_38a507f453_b.jpg"></div>
  `;
};

init();

test('Images not loaded', assert => {
  setup();
  const image = document.getElementById('image');
  const box = document.getElementById('box');

  assert.equal(image.src, TRANSPARENT_PIXEL, 'Image didn\'t start to load');
  assert.equal(box.style.backgroundImage, '', 'Background didn\'t start to load');
  assert.end();
});

test('Images loading', assert => {
  setup();
  const image = document.getElementById('image');
  const box = document.getElementById('box');
  loadImages();

  assert.notEqual(image.src, TRANSPARENT_PIXEL, 'Image started to load');
  assert.notEqual(box.style.backgroundImage, '', 'Background started to load');
  assert.end();
});
