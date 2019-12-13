import Link from 'next/link'

import 'styles/style.scss'
export default function Index() {
  return (
      <section id="subscribed">
        <div className="container">
          <h1>
          Thank you!
          </h1>
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
          <br/>
          <Link href="/">
            <button>
            &larr; Back home
            </button>
          </Link>
        </div>
      </section>
  )
}
