import fs from 'fs'
import path from 'path'


export default (req, res) => {

  let thisPoop = fs.readdirSync(path.join(process.cwd(), '.'))
  //thisPoop.push(`cwd = ${fs.readdirSync(process.cwd()).join(',')}`)
  let message = "" + thisPoop.join('\n') + '__________' + path.resolve('Roboto-Regular.ttf') + '______' + fs.readdirSync(__dirname).join('\n')
  console.log(message)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(message)
}


//export default Poop
