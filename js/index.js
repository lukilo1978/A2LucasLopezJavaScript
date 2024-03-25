
const imageList = document.getElementById('image-list');

const addImageBtn = document.getElementById('add-image-btn');

const fileInput = document.getElementById('file-input');

addImageBtn.addEventListener('click', function() {

  fileInput.click();
});


fileInput.addEventListener('change', function() {

  const file = fileInput.files[0];
  if (file) {

    const li = document.createElement('li');

    const img = document.createElement('img');

    img.src = URL.createObjectURL(file);

    img.alt = 'Uploaded Image';

    img.className = 'clickable-image';

    li.appendChild(img);

    imageList.appendChild(li);


    img.addEventListener('click', function() {

      enlargedImage.innerHTML = ''; 
      const enlargedImg = document.createElement('img');
      enlargedImg.src = img.src;
      enlargedImage.appendChild(enlargedImg);
    });
  }
});


const images = document.querySelectorAll('.clickable-image');

const enlargedImage = document.querySelector('.enlarged-image');



images.forEach(function(image) {
  image.addEventListener('click', function() {

    images.forEach(function(img) {
        img.classList.remove('active-image');
      });

      image.classList.add('active-image');
    enlargedImage.innerHTML = '';
    const enlargedImg = document.createElement('img');
    enlargedImg.src = image.src;

    const figcaption = document.createElement('figcaption');
    
    enlargedImage.appendChild(enlargedImg);
    enlargedImage.appendChild(enlargedImg);
  });
});