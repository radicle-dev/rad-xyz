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
            <li>Follow us on <a href="https://twitter.com/radicle_xyz">
              twitter
            </a></li>
            <li>Explore the code on <a href="https://github.com/radicle-dev">
              github
            </a></li>
            <li>Join the conversation on <a href="https://radicle.community">
              discourse</a> and <a href="irc://freenode:1/radicle">
              IRC</a>
            </li>
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
            <input type="hidden" name="_next" value="https://radicle.xyz/subscribed" />
          </form>
        </div>
      </div>
    </footer>)
}
