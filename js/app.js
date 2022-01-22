const encryptInput = document.querySelector('#encryptor_input');
const encryptBtn = document.querySelector('#encrypt');
const dencryptBtn = document.querySelector('#decrypt');
const messageImage = document.querySelector('.messages img');
const messageText = document.querySelector('.messages .messages__text');
const encryptedDiv = document.querySelector('.messages__encrypted');
const encryptedText = document.querySelector('#encrypted__text');


encryptBtn.addEventListener('click', encrypt);

encryptInput.addEventListener('click', () => {

    if (encryptInput.value == 'Type the text here') {
        encryptInput.value =  '';
    }
});

function encrypt() {
    let inputValue = encryptInput.value;
    let encryptValue = inputValue.replace(/e/gi, 'enter')
                       .replace(/i/gi, 'imes')
                       .replace(/a/gi, 'ai')
                       .replace(/o/gi, 'ober')
                       .replace(/u/gi, 'ufat');

    hideDefaultMessage();
    showEncryptText(encryptValue);
}

function hideDefaultMessage() {
    messageImage.classList.add('display--none');
    messageText.classList.add('display--none');
}

function showEncryptText(text) {
    encryptedText.textContent = text;
    encryptedDiv.classList.remove('display--none');
}