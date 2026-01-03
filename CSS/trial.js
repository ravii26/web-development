
import { Buffer } from 'buffer';
import fetch from 'node-fetch';

const imageUrlToBase64 = async (url) => {
  const response = await fetch(url);
  const buffer = await response.buffer();
  return buffer.toString('base64');
};

imageUrlToBase64('https://gratisography.com/wp-content/uploads/2024/10/gratisography-cool-cat-800x525.jpg')
  .then((base64) => {
    console.log(base64.slice(0, 100));
  })
  .catch((error) => {
    console.error('Error:', error);
  });
