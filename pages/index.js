import Page from 'layouts/page'
import Link from 'next/link'

export default function Index() {
  return (
    <Page>
      <div className="content">
        <section>

          <h1>A peer-to-peer network for code collaboration 🌱</h1>
          <input type="email" placeholder="Enter your email"/>
          <button>Join the network</button>
        </section>
        <section id="three-up">
          <div>
            <h3>🤝 Peer-to-peer</h3>
            <p>
          Extending git with peer-to-peer networking. No hassle with setting up your own hosting, and no need to trust companies with your data.
            </p>
          </div>
          <div>
            <h3>💾 Local-first</h3>
            <p>
          All data, including issues, comments and other social artifacts is yours & lives on your machine.
            </p>
          </div>
          <div>
            <h3>🔑 Trustless</h3>
            <p>
          Cryptographic peer identities and way better keys that take security to another level
            </p>
          </div>
        </section>
        <hr/>
        <section>

          <h2>a new collaboration model</h2>
          <p>
          Peer-to-peer networking offers a new design space for bazaar-style development, as it provides new communication pathways for developers that aren't limited by current processes and workflows. That's why we've decided to pursue a **multi-upstream** model for Radicle. We've realized by exploring multi-upstream peer-to-peer development makes it far easier for developers and maintainers to develop not just a shared, but a **trusted** representation grounded in actual source code *and* secure peer identities.
          </p>
          <Link href="/protocol">
            <a>→ How Radicle works</a>
          </Link>
          <img src="https://res.cloudinary.com/dvargvav9/image/upload/v1575920463/clone_rtbkzp.png" alt="how-it-works"/>
          <hr/>
          <h2>radicle-upstream</h2>
          <p>
          A desktop client for managing issues, collaborating on code and connecting to peers on the Radicle network. Yes it has dark mode.
          </p>
          <Link href="/upstream">
            <a>→ Try it out</a>
          </Link>
        </section>
        <hr/>
        <section>
          <h2>We believe in trust & sustainability for open-source.</h2>
          <p>
          Our mission is to create a peer-to-peer network run by the free software community and backed by a sustainable economy — one in which value is redistributed back to those who contribute and maintain our digital commons. Therefore, we plan to distribute a majority of the network to the greater free and open source community.
          </p>
          <Link href="/about">
            <a>→ Read more here</a>
          </Link>
          <br/>
          <img src="https://res.cloudinary.com/dvargvav9/image/upload/v1568983538/Untitled_1_xdcakc.png" alt="sustain-os"/>
        </section>
      </div>
    </Page>
  )
}
