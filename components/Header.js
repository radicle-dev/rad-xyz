import Link from 'next/link'

export default function Header() {
  return (
    <header>
      <p>radicle</p>
      <nav>
        <div className="links">
          <Link href="/protocol">
            <a>protocol</a>
          </Link>
          <Link href="/updates">
            <a>updates</a>
          </Link>

        </div>
      </nav>
    </header>
  )
}
