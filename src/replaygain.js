/*
function applyAlbumGain() {
    const executablePath = 'mp3gain'; // v1.5.2 @ http://mp3gain.sourceforge.net/
    const mp3gainArgs = [
        '-k', // Automatically lower Track/Album gain to not clip audio
        'test_album/!*.mp3' // Files to analyze
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
*/
