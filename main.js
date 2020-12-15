const {app, BrowserWindow} = require('electron')

function createWindow() {
    // Create the browser window.
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')

    const executablePath = 'mp3gain'; // v1.5.2 @ http://mp3gain.sourceforge.net/
    const mp3gainArgs = [
        '-k', // Automatically lower Track/Album gain to not clip audio
        'test_album/*.mp3' // Files to analyze
    ];
    const child = require('child_process');
    child.execFile(executablePath, mp3gainArgs, function (err, stdout, stderr) {
        if (err) {
            console.error(`err: ${err}`);
            return;
        }
        console.log(`stdout: ${stdout.toString()}`);
        console.log(`stderr: ${stderr.toString()}`);
    });
}

app.whenReady().then(createWindow)
