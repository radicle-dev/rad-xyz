import Link from 'next/link'
import Logo from 'Logo'
import Leaf from 'Leaf'

export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <a id="logo">
            <Logo />
            <Leaf />
          </a>
        </Link>
        <nav>
          <a href="https://radicle.community">community</a>
          <a href="https://github.com/radicle-dev">code</a>
        </nav>
      </div>
    </header>
  )
}
