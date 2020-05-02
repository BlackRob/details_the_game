import fs from 'fs'
import path from 'path'


export default (req, res) => {

  let thisPoop = fs.readdirSync(path.join(process.cwd(), '.'))
  //thisPoop.push(`cwd = ${fs.readdirSync(process.cwd()).join(',')}`)
  let message = "" + thisPoop.join('\n') + '\n__________' + path.resolve('./Roboto-Regular.ttf') + '______\n' + fs.readdirSync(path.join(process.cwd(), '.next')).join('\n')
  console.log(message)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(message)
}


//export default Poop
