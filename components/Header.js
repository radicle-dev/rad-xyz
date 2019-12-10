import Link from 'next/link'
import Logo from 'Logo'
export default function Header() {
  return (
    <header>
      <Link href="/">
        <a id="logo">
          <Logo />
        </a>
      </Link>
      <nav>
        <div className="links">
          <Link href="https://github.com/radicle-dev">
            <a>source</a>
          </Link>
          <Link href="/updates">
            <a>updates</a>
          </Link>
          <Link href="/docs">
            <a>docs</a>
          </Link>
          <Link href="/upstream">
            <a>upstream</a>
          </Link>
        </div>
      </nav>
    </header>
  )
}
