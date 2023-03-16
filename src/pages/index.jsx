import Page from "@/web/components/Page.jsx"
import PostSummary from "@/web/components/PostSummary.jsx"
import axios from "axios"
import { useEffect, useState } from "react"

const IndexPage = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    ;(async () => {
      const {
        data: { result },
      } = await axios("http://localhost:4000/posts")

      setPosts(result)
    })()
  }, [])

  return (
    <Page className="gap-8">
      {posts.map((post) => (
        <PostSummary key={post.id} post={post} />
      ))}
    </Page>
  )
}

export default IndexPage
