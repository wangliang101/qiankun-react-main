const { exec } = require('shelljs');

const tagReg = /tag=(.+)/;
const tag = process.argv[2].match(tagReg)[1];

exec(
  `docker build --platform linux/amd64 -t wangliang4468/qiankun:react-main-${tag} .`
);
exec(`docker push wangliang4468/qiankun:react-main-${tag}`);
