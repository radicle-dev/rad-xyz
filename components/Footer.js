import Link from 'next/link'


export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div>
          <h2>Follow us</h2>
          <p>
              Radicle is actively being built, explored, and experimented with. To follow our progress you can:
          </p>
          <ul>
            <li>Follow us on <Link href="https://twitter.com/radicle_xyz">
              <a>twitter</a>
            </Link></li>
            <li>Explore the code on <Link href="https://github.com/radicle-dev">
              <a>github</a>
            </Link></li>
            <li>Join the conversation on <Link href="https://radicle.community">
              <a>discourse</a></Link> and <Link href="irc://freenode:1/radicle">
              <a>IRC</a>
            </Link></li>
          </ul>
        </div>
        <div>
          <h2>Stay up to date</h2>
          <p>If you'd like to be informed of progress, hand us your e-mail and we'll keep you in the loop.</p>
          <form action="https://formspree.io/xrgbwygl" method="POST" className="input">
            <input type="email" name="email" placeholder="E-mail" required />
            <button type="submit">Subscribe</button>
            <input type="hidden" name="_subject" value="Subscription" />
            <input type="hidden" name="_format" value="plain" />
            <input type="hidden" name="_next" value="/subscribed" />
          </form>
        </div>
      </div>
    </footer>)
}
