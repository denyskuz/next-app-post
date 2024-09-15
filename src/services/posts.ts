import { TPost } from "@/types/posts"

export const getAllPosts = async (): Promise<TPost[]> => {
  const res = await fetch(`${process.env.BASE_URL}/posts`)
  if (!res.ok) {
    throw new Error("Failed to fetch posts")
  }
  return res.json()
}

export const getPost = async (id: string): Promise<TPost> => {
  const res = await fetch(`${process.env.BASE_URL}/posts/${id}`)
  if (!res.ok) {
    throw new Error("Failed to fetch post")
  }
  return res.json()
}

export const getComments = async (postId: string) => {
  const res = await fetch(`${process.env.BASE_URL}/posts/${postId}/comments`)
  if (!res.ok) {
    throw new Error("Failed to fetch comments")
  }
  return res.json()
}
