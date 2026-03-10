// Lógica para generar contraseñas seguras
document.getElementById('generateBtn').addEventListener('click', generatePassword);
document.getElementById('copyBtn').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const includeUppercase = document.getElementById('uppercase').checked;
    const includeNumbers = document.getElementById('numbers').checked;
    const includeSymbols = document.getElementById('symbols').checked;

    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById('passwordDisplay').textContent = password;
    document.getElementById('copyBtn').style.display = 'inline-block';
}

function copyPassword() {
    const password = document.getElementById('passwordDisplay').textContent;
    navigator.clipboard.writeText(password).then(() => {
        alert('Contraseña copiada al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar: ', err);
    });
}