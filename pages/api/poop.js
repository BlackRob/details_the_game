import fs from 'fs'
import path from 'path'


export default (req, res) => {

  let thisPoop = fs.readdirSync(path.join(process.cwd(), 'node_modules'))
  //thisPoop.push(`cwd = ${fs.readdirSync(process.cwd()).join(',')}`)
  console.log(thisPoop.join('\n'), '\n', path.resolve('Roboto-Regular.ttf'), '\n', fs.readdirSync(path.join(__dirname, '/node_modules').join('\n')))

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(thisPoop.join('\n'), '\n', path.resolve('Roboto-Regular.ttf'), '\n', fs.readdirSync(path.join(__dirname, '/node_modules').join('\n')))
}


//export default Poop
