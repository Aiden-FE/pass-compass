import { execSync } from 'node:child_process';

const execOptions = {
  stdio: 'inherit',
};

execSync('echo $PWD', execOptions);

execSync('npm i --omit=dev --registry https://registry.npmmirror.com/', execOptions);

execSync('npm run start', execOptions);
