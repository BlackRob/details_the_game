import fs from 'fs'
import path from 'path'


export default (req, res) => {

  let thisPoop = fs.readdirSync(path.join(process.cwd(), '.'))
  //thisPoop.push(`cwd = ${fs.readdirSync(process.cwd()).join(',')}`)
  console.log(thisPoop.join('\n'), '\n', path.resolve('Roboto-Regular.ttf'), '\n', (__dirname))

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(thisPoop.join('\n'), '\n', path.resolve('Roboto-Regular.ttf'), '\n', (__dirname))
}


//export default Poop
