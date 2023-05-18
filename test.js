// run 'ls' command in powershell and print the output
import { exec } from 'child_process';
exec('dir src', (err, stdout, stderr) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(stdout);
    }
);