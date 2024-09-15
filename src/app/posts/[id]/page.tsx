import { getPost, getComments } from "@/services/posts"
import type { TComment } from "@/types/posts"
import Link from "next/link"

export const dynamic = "error"

const PostPage = async ({ params }: { params: { id: string } }) => {
  const post = await getPost(params.id)
  const comments = await getComments(params.id)

  return (
    <div className="bg-white dark:bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <Link
          href="/"
          className="text-blue-600 dark:text-cyan-400 hover:underline"
        >
          ← Back to posts
        </Link>
        <div className="max-w-2xl mx-auto lg:max-w-none mt-10">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            {post.title}
          </h1>
          <div className="text-gray-600 dark:text-gray-300 space-y-6">
            <p>{post.body}</p>
          </div>
          <section className="mt-12">
            <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Comments:
            </h2>
            <div className="mt-6 space-y-4">
              {comments.map(({ id, name, email, body }: TComment) => (
                <div
                  key={id}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {email}
                  </p>
                  <p className="mt-2 text-gray-700 dark:text-gray-300">
                    {body}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
export default PostPage
