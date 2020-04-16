import { useRouter } from 'next/router'
//import { glob } from 'glob'


const PostTemplate = () => {
  //const router = useRouter()
  //const glob = require('glob')
  //let files = []

  /* glob('*.js', function (err, files) {

    if (err) {

      console.log(err);

    } else {

      // a list of paths to javaScript files in the current working directory
      console.log(files);

    }

  }); */

  console.log('poop')
  //console.log(files)

  //const { pid } = router.query

  return <p>Post: poop</p>
}

export default PostTemplate

/*
export async function getStaticProps(context) {
  // const { slug } = context.query
  // return { slug }
  return { props: {} }
} */
