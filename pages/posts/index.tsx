import { GetStaticProps } from 'next'
import Link from 'next/link'

type PostIds = number[]

export const getStaticProps: GetStaticProps = async () => {
  const postIds: PostIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]

  return {
    props: { postIds },
  }
}

export default function Posts({ postIds }: { postIds: PostIds }) {
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
