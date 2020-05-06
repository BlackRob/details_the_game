import { drawCanvas } from "../../details/components/drawCanvas"
import { stringIsValid, strToGameState } from '../../details/components/gameStatePack'
import fonttrick from 'fonttrick'


export default (req, res) => {      // { query: { img } }
  // some constants
  const fallbackString = "1xThe~2ysent~3zlink~4yis~5wnot~6xa~7xvalid~8zsentence~9f~~"

  // some variables
  let imageWidth = 1200     // standard for fb ogimage
  let imageHeight = 630     // standard for fb ogimage

  // if we can get information from the request that indicates it's
  // from a site that prefers a different ration, we'll set
  // height and width correspondingly
  console.log(req)

  // we need to remove the initial "/api/" before we can use the image string
  const img = req.url.split('/')[2]
  console.log("grumble", img)
  //const pathToRoboto = path.join(process.cwd(), 'node_modules/fonttrick/Roboto-Regular.ttf')
  let output = null

  if (stringIsValid({ sentenceString: img })) {
    let data = JSON.parse(strToGameState({ canvasURLstring: img }))
    output = drawCanvas({
      sentence: data.sentence,
      cards: data.cards,
      width: imageWidth,
      height: imageHeight,
      fontPath: fonttrick()
    })
  } else {
    console.log(img)
    let data = JSON.parse(strToGameState({ canvasURLstring: fallbackString }))
    output = drawCanvas({
      sentence: data.sentence,
      cards: data.cards,
      width: imageWidth,
      height: imageHeight,
      fontPath: fonttrick()
    })
  }

  const buffy = new Buffer.from(output.split(',')[1], 'base64')
  res.statusCode = 200
  res.setHeader('Content-Type', 'image/png')
  res.end(buffy)
}

