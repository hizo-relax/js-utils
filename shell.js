const shell = require('shelljs');
const name = process.argv[2] || 'Auto-commit';

if (shell.exec('git add .').code !== 0) {
    echo('Error: Git add failed');
    exit(1);
}
if (shell.exec(`git commit -am "${name}"`).code !== 0) {
    echo('Error: Git commit failed');
    exit(1);
}
if (shell.exec('git push').code !== 0) {
    echo('Error: Git push failed');
    exit(1);
}