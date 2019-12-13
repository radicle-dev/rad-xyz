import Page from 'layouts/page'
import Link from 'next/link'

export default function Index() {
  return (
    <Page>
      <div className="content">
        <section id="subtitle">
          <div className="container">
            <h1>Secure peer-to-peer code collaboration without intermediaries.</h1>
          </div>
        </section>
        <section id="value-prop">
          <div className="container">
            <div>
              <h2>Peer-to-peer</h2>
              <p>
                Extending git with peer-to-peer networking. No hassle with setting up your own hosting, and no need to trust companies with your data.
              </p>
            </div>
            <div>
              <h2>Local-first</h2>
              <p>
                All data, including issues, comments and other social artifacts is yours & lives on your machine.
              </p>
            </div>
            <div>
              <h2>Secure</h2>
              <p>
                Cryptographic peer identities and way better keys that take security to another level
              </p>
            </div>
            <div>
              <h2>Trustless</h2>
              <p>
                Shared ownership of projects & everything that comes with that.
              </p>
            </div>
          </div>
        </section>
        <section id="how-it-works">
          <div className="container">
            <div className="left-box">
              <h2>How it works</h2>
              <div id="dev-links">
                <p>
                  Read the <Link href="https://github.com/radicle-dev"><a>protocol specification</a></Link>
                </p>
                <p>
                  Browse the <Link href="https://github.com/radicle-dev"><a>protocol source code</a></Link>
                </p>
              </div>
            </div>
            <p>
                We adopt the SSB &quot;social overlay&quot; paradigm to establish a peer-to-peer replication layer on top of distributed version control systems. We model this largely based on an (unmodified) git backend, but strive for the protocol to be general enough to allow implementations on top of different paradigms, e.g pijul. We assume a mostly non-adversarial setting. Features requiring strong sybil resistance (or are otherwise difficult to implement in a purely peer-to-peer way) are out of the scope of this specification.
            </p>
          </div>
        </section>
      </div>
    </Page>
  )
}
