module.exports = function fonttrick() {
  const fs = require('fs')
  const path = require('path')
  const { COPYFILE_EXCL } = fs.constants;
  const { COPYFILE_FICLONE } = fs.constants;

  //const pathToRoboto = path.join(process.cwd(), 'node_modules/registerfonttrick/Roboto-Regular.ttf')

  try {
    if (fs.existsSync('/tmp/Roboto-Regular.ttf')) {
      console.log("Roboto lives in tmp!!!!")
    } else {
      fs.copyFileSync('./Roboto-Regular.ttf', '/tmp/Roboto-Regular.ttf', COPYFILE_FICLONE | COPYFILE_EXCL)
    }
  } catch (err) {
    console.error(err)
  }

  return '/tmp/Roboto-Regular.ttf'
};
