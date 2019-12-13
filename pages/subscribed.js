import Link from 'next/link'
import Page from 'layouts/page'

export default function Index() {
  return (
    <Page>
      <section id="subscribed">
        <div className="container">
          <h1>
          Subscribed!
          </h1>
          <Link href="/">
            <button>
            Go back
            </button>
          </Link>
          <section id="flowers-success">
            <pre><code>                _(_)_                     _(_)_                     _(_)_     </code></pre>
            <pre><code>    @@@@       (_)@(_)        @@@@       (_)@(_)        @@@@       (_)@(_)    </code></pre>
            <pre><code>   @@()@@ wWWWw  (_)\        @@()@@ wWWWw  (_)\        @@()@@ wWWWw  (_)\     </code></pre>
            <pre><code>    @@@@  (___)     \|/       @@@@  (___)     \|/       @@@@  (___)     \|/   </code></pre>
            <pre><code>     /      Y       \|         /      Y       \|         /      Y       \|    </code></pre>
            <pre><code>  \ |     \ |/       | /    \ |     \ |/       | /    \ |     \ |/       | /  </code></pre>
            <pre><code>  \\|//   \\|///  \\\|//    \\|//   \\|///  \\\|//    \\|//   \\|///  \\\|//  </code></pre>
            <pre><code>^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^</code></pre>
          </section>
        </div>
      </section>
    </Page>
  )
}
