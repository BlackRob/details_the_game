import fs from 'fs'
import path from 'path'


export default (req, res) => {

  let poop1 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/next-server/lib/router/utils/'))
  let poop2 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/next-server/server/lib/'))
  let poop3 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/compiled/'))
  let poop4 = fs.readdirSync(path.join(process.cwd(), '.next/serverless/pages/api/'))

  let message = "" + poop1.join('\n') + '\n_____\n' + poop2.join('\n') + '\n_____\n' + poop3.join('\n')
  console.log(message)

  res.statusCode = 200
  res.setHeader('Content-Type', 'text/html')
  res.end(message)
}


//let poop1 = fs.readdirSync(path.join(process.cwd(), 'node_modules/fonttrick/'))
//let poop2 = path.resolve(RobotoR)
//let poop3 = "ppop3" //fs.readdirSync(path.join(process.cwd(), 'node_modules/canvas/lib/'))
//let poop3 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/compiled/'))
//let poop1 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/next-server/lib/router/utils/'))
//let poop2 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/next-server/server/lib/'))
//let poop3 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/compiled/'))
//let poop4 = fs.readdirSync(path.join(process.cwd(), '.next/serverless/pages/api/'))

//let message = "" + poop1.join('\n') + '\n_____\n' + poop2 + '\n_____\n' + poop3.join('\n')
//console.log(poop1.join('\n'))

/* registerFont(fonttrick(), { family: 'Roboto' })
const canvas = createCanvas(1000, 1000)
const ctx = canvas.getContext('2d')
ctx.font = "40px Roboto"
ctx.fillStyle = "red"
ctx.fillText("poop", 200, 200)
let output = canvas.toDataURL(); */
