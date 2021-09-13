import Link from 'next/link'

const postIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default function Posts() {
  return (
    <div>
      <h1>Posts</h1>

      <ul>
        {postIds.map((postId) => {
          const href = `posts/${postId}`
          return (
            <li key={postId}>
              <Link href={href}>
                <a>{postId}</a>
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
