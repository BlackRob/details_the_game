import { React } from 'react'
import fs from 'fs'
import { join } from 'path'


export default (req, res) => {

  let thisPoop = fs.readdirSync(join(process.cwd(), '.next'))
  //thisPoop.push(`cwd = ${fs.readdirSync(process.cwd()).join(',')}`)
  console.log(thisPoop.join(','))

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(thisPoop.join(','))
}


//export default Poop
