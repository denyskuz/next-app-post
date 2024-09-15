import ItemList from "@/components/ItemList"
import { getAllPosts } from "@/services/posts"

export const dynamic = "error"

const Home = async () => {
  const posts = await getAllPosts()

  return (
    <main className="flex items-center justify-center p-20">
      <ItemList posts={posts} />
    </main>
  )
}

export default Home
