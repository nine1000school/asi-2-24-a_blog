import Loader from "@/web/components/Loader.jsx"
import Page from "@/web/components/Page.jsx"
import Post from "@/web/components/Post.jsx"
import axios from "axios"
import { useEffect, useState } from "react"

export const getServerSideProps = ({ params }) => ({
  props: {
    params: {
      postId: Number.parseInt(params.postId, 10),
    },
  },
})

const PostPage = (props) => {
  const [post, setPost] = useState(null)
  const { postId } = props.params

  useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await axios(`http://localhost:4000/posts/${postId}`)

      setPost(result)
    })()
  }, [postId])

  return <Page>{post ? <Post post={post} /> : <Loader />}</Page>
}

export default PostPage
