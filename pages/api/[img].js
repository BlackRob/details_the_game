import { drawCanvas } from "../../details/components/drawCanvas"
import { registerFont, createCanvas } from 'canvas';
import { stringIsValid, strToGameState } from '../../details/components/gameStatePack'
import fs from 'fs'
import path from 'path'
//import RobotoR from '../../public/Roboto-Regular.ttf'
//import fonttrick from 'fonttrick'


export default ({ query: { img } }, res) => {

  let poop1 = fs.readdirSync(path.join(process.cwd(), 'node_modules/fonttrick/'))
  //let poop2 = path.resolve(RobotoR)
  //let poop3 = "ppop3" //fs.readdirSync(path.join(process.cwd(), 'node_modules/canvas/lib/'))
  //let poop3 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/compiled/'))
  //let poop1 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/next-server/lib/router/utils/'))
  //let poop2 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/next-server/server/lib/'))
  //let poop3 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/compiled/'))
  //let poop4 = fs.readdirSync(path.join(process.cwd(), '.next/serverless/pages/api/'))

  //let message = "" + poop1.join('\n') + '\n_____\n' + poop2 + '\n_____\n' + poop3.join('\n')
  console.log(poop1.join('\n'))

  /* const { COPYFILE_EXCL } = fs.constants;
  const { COPYFILE_FICLONE } = fs.constants;
  const pathToRoboto = path.join(process.cwd(), 'node_modules/fonttrick/Roboto-Regular.ttf')

  try {
    if (fs.existsSync(pathToRoboto)) {
      console.log("Roboto lives in tmp!!!!")
    } else {
      fs.copyFileSync(pathToRoboto, '/tmp/Roboto-Regular.ttf', COPYFILE_FICLONE | COPYFILE_EXCL)
    }
  } catch (err) {
    console.error(err)
  } */
  //let poof=fonttrick()
  //console.log(fs.readdirSync('/tmp'))

  /* registerFont(fonttrick(), { family: 'Roboto' })
  const canvas = createCanvas(1000, 1000)
  const ctx = canvas.getContext('2d')
  ctx.font = "40px Roboto"
  ctx.fillStyle = "red"
  ctx.fillText("poop", 200, 200)
  let output = canvas.toDataURL(); */

  const fallbackString = "1xThe~2ysent~3zlink~4yis~5wnot~6xa~7xvalid~8zsentence~9f~~"

  if (stringIsValid({ sentenceString: img })) {
    let data = JSON.parse(strToGameState({ canvasURLstring: img }))
    output = drawCanvas({ sentence: data.sentence, cards: data.cards })
  } else {
    let data = JSON.parse(strToGameState({ canvasURLstring: fallbackString }))
    output = drawCanvas({ sentence: data.sentence, cards: data.cards })
  }

  const buffy = new Buffer.from(output.split(',')[1], 'base64')
  res.statusCode = 200
  res.setHeader('Content-Type', 'image/png')
  res.end(buffy)
}

function canRead(path, callback) {
  fs.access(path, fs.R_OK, function (err) {
    callback(null, !err);
  });
}
