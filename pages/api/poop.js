import { React } from 'react'
import fs from 'fs'
import { join } from 'path'


export default (req, res) => {

  let thisPoop = fs.readdirSync(join(process.cwd(), '.next/serverless/pages/api'))
  //thisPoop.push(`cwd = ${fs.readdirSync(process.cwd()).join(',')}`)
  console.log(thisPoop.join('\n'), '\n', path.resolve('Roboto-Regular.ttf'))

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(thisPoop.join(','))
}


//export default Poop
