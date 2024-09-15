import type { TPost } from "@/types/posts"
import Item from "@/components/Item"

const ItemList = ({ posts }: { posts: TPost[] }) => (
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="max-w-2xl mx-auto lg:max-w-none">
      <div className="mt-10 space-y-16">
        {posts.map((post: TPost) => (
          <Item key={post.id} {...post} />
        ))}
      </div>
    </div>
  </div>
)

export default ItemList
