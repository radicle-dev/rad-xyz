import Link from 'next/link'
import Logo from 'Logo'
export default function Header() {
  return (
    <header>
      <div className="container">
        <Link href="/">
          <a id="logo">
            <Logo />
          </a>
        </Link>
      </div>
    </header>
  )
}
