import type { TPost } from "@/types/posts"
import Link from "next/link"

const Item = ({ id, title, body }: TPost) => {
  return (
    <article className="relative isolate flex flex-col gap-8 lg:flex-row">
      <div className="flex-auto">
        <h3 className="mt-3 text-2xl font-semibold leading-6 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
          <Link href={`/posts/${id}`}>
            <span className="absolute inset-0"></span>
            {title}
          </Link>
        </h3>
        <p className="mt-5 text-sm leading-6 text-gray-600 dark:text-gray-300 line-clamp-3">
          {body}
        </p>
        <div className="mt-6 flex border-t border-gray-900/5 dark:border-gray-700 pt-6">
          <div className="relative flex items-center gap-x-4">
            <div className="text-sm leading-6">
              <p className="font-semibold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-cyan-400 transition-colors">
                <Link href={`/posts/${id}`}>Read more →</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Item
