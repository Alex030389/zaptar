const fileInputs = document.querySelectorAll('[data-input="file"]');
const dropZone = document.querySelector('[data-dropzone]');
const fileLabelErrorText = document.querySelector('[data-input-error]');
const fileLabelPlaceholder = document.querySelector('[data-input-placeholder]');
const buttonsReset = document.querySelectorAll('[type="reset"]');

if (fileInputs.length) {
  const fileInput = document.querySelector('[data-input="file"]');
  const fileLabel = document.querySelector('[data-input="label"]');

  const updateFileLabel = (files) => {
    if (!files || files.length === 0) {
      fileLabel.textContent = fileLabelPlaceholder.dataset.inputPlaceholder;
      return;
    }

    const invalidFiles = Array.from(files).filter(file => !file.type.startsWith('image/'));

    if (invalidFiles.length > 0) {
      fileLabel.textContent = fileLabelErrorText.dataset.inputError;
      fileInput.value = '';
      return;
    }

    if (files.length === 1) {
      fileLabel.textContent = `${files.length} файл выбран`;
    } else if (files.length <= 4) {
      fileLabel.textContent = `${files.length} файла выбрано`;
    } else {
      fileLabel.textContent = `${files.length} файлов выбрано`;
    }

    dropZone.classList.remove('form-file--bg');
  }

  fileInput.addEventListener('change', () => updateFileLabel(fileInput.files));

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(evt =>
    dropZone.addEventListener(evt, e => e.preventDefault())
  );

  // Обработка drop
  dropZone.addEventListener('drop', e => {
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      fileInput.files = files;
      updateFileLabel(files);
    }
  });

  Array.from(buttonsReset).filter(btnReset =>
    btnReset.addEventListener('click', () => {
      fileLabel.textContent = fileLabelPlaceholder.dataset.inputPlaceholder;
      fileInput.value = '';
      dropZone.classList.add('form-file--bg');
    })
  )
}

const fileInputsWithImage = document.querySelectorAll('[data-input="file-download"]');

if (fileInputsWithImage.length) {
  const fileInputWithImage = document.querySelector('[data-input="file-download"]');
  const fileInputWithImageWrapper = document.querySelector('[data-input="file-download-wrapper"]');
  const fileLabelWithImage = document.querySelector('[data-input="file-download-label"]');
  const fileBlockWithImage = document.querySelector('[data-input="file-download-block"]');
  const fileBlockWithImageImg = document.querySelector('[data-input="file-download-img"]');
  const fileBlockWithImageText = document.querySelector('[data-input="file-download-text"]');
  const fileBlockWithImageDelete = document.querySelector('[data-input="file-download-delete"]');

  const updateFileLabelWithImage = (files) => {
    if (!files || files.length === 0) {
      fileLabelWithImage.textContent = fileLabelPlaceholder.dataset.inputPlaceholder;
      return;
    }

    const invalidFiles = Array.from(files).filter(file => !file.type.startsWith('image/'));

    if (invalidFiles.length > 0) {
      fileLabelWithImage.textContent = fileLabelErrorText.dataset.inputError;
      fileInputWithImage.value = '';
      return;
    }

    // Создаём URL для предпросмотра
    const imageURL = URL.createObjectURL(files[0]);

    fileBlockWithImage.classList.remove('d-none');
    fileBlockWithImageImg.src = imageURL;
    fileBlockWithImageText.textContent = files[0].name;
    fileInputWithImageWrapper.classList.add('d-none');

    fileBlockWithImageImg.onload = () => URL.revokeObjectURL(imageURL);
  }

  fileInputWithImage.addEventListener('change', () => updateFileLabelWithImage(fileInputWithImage.files));

  fileBlockWithImageDelete.addEventListener('click', () => {
    fileInputWithImage.value = '';
    fileBlockWithImage.classList.add('d-none');
    fileBlockWithImageImg.src = '';
    fileBlockWithImageText.textContent = '';
    fileInputWithImageWrapper.classList.remove('d-none');
  })

  Array.from(buttonsReset).filter(btnReset =>
    btnReset.addEventListener('click', () => {
      fileInputWithImage.value = '';
      fileBlockWithImage.classList.add('d-none');
      fileBlockWithImageImg.src = '';
      fileBlockWithImageText.textContent = '';
      fileInputWithImageWrapper.classList.remove('d-none');
    })
  )
}
