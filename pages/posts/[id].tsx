import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Post() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <h1>Post ID: {id}</h1>
      <p>
        Return to{' '}
        {
          <Link href="/posts">
            <a>Posts</a>
          </Link>
        }
        .
      </p>
    </div>
  )
}
