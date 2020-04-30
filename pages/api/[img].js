import { drawCanvas } from "../../details/components/drawCanvas"
import { stringIsValid, strToGameState } from '../../details/components/gameStatePack'


export default ({ query: { img } }, res) => {
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
  //res.setHeader("charset", "utf-8")
  res.end(buffy)
}
