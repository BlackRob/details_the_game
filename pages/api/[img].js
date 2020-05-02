import { drawCanvas } from "../../details/components/drawCanvas"
import { stringIsValid, strToGameState } from '../../details/components/gameStatePack'
import fs from 'fs'
import path from 'path'


export default ({ query: { img } }, res) => {

  let poop1 = fs.readdirSync(__dirname)
  let poop2 = fs.readdirSync(path.join(__dirname, 'usr'))
  let poop3 = fs.readdirSync(path.join(__dirname, 'usr/share/'))
  //let poop3 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/compiled/'))
  //let poop1 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/next-server/lib/router/utils/'))
  //let poop2 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/next-server/server/lib/'))
  //let poop3 = fs.readdirSync(path.join(process.cwd(), 'node_modules/next/dist/compiled/'))
  let poop4 = fs.readdirSync(path.join(process.cwd(), '.next/serverless/pages/api/'))

  let message = "" + poop1.join('\n') + '\n_____\n' + poop2.join('\n') + '\n_____\n' + poop3.join('\n')
  console.log(message)

  const fallbackString = "1xThe~2ysent~3zlink~4yis~5wnot~6xa~7xvalid~8zsentence~9f~~"
  let output = null
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
