const nameInput = document.querySelector('#name-input');

const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', () => {
    const valueName = nameInput.value.trim();
    nameOutput.textContent = valueName ? valueName : 'Anonymous';
})