const input = document.querySelector('.input');
const output = document.getElementById('output');
const commandHistory = [];
let historyIndex = -1;

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        const command = input.value.trim();
        processCommand(command);
        commandHistory.push(command);
        input.value = '';
        historyIndex = commandHistory.length;
    } else if (event.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex--;
            input.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex++;
            input.value = commandHistory[historyIndex] || '';
        } else {
            historyIndex = commandHistory.length;
            input.value = '';
        }
    }
});

function processCommand(command) {
    output.innerHTML += `<p>root@ariaw:~$ ${command}</p>`;
    switch (command.toLowerCase()) {
        case 'help':
            output.innerHTML += `
                <p>Available commands:</p>
                <p>about - Displays information about me.</p>
                <p>skills - Lists my skills.</p>
                <p>projects - Displays my projects.</p>
                <p>contact - Provides my contact information.</p>
                <p>cls - Clears the terminal.</p>
            `;
            break;
        case 'about':
            output.innerHTML += '<p>Hello, I’m Aria, and I have nothing else to say.</p>';
            break;
        case 'skills':
            output.innerHTML += '<p>HTML, CSS, JavaScript, Bootstrap, Bulma, Tailwind CSS, Php, Sql, Python and ...</p>';
            break;
        case 'projects':
            output.innerHTML += '<p>1. Project A<br>2. Project B<br>3. Project C</p>';
            break;
        case 'contact':
            output.innerHTML += '<p>Telegram: @ariaw</p>';
            break;
        case 'cls':
            output.innerHTML = '';
            break;
        default:
            output.innerHTML += '<p>Command not recognized. Type "help" for assistance.</p>';
    }
    output.scrollTop = output.scrollHeight;
}

function focusInput() {
    input.focus();
}
