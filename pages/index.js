import Page from 'layouts/page'
// import Link from 'next/link'

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
                All data, including issues, comments and reviews, is yours & lives on your machine. Everything is always available - even offline.
              </p>
            </div>
            <div>
              <h2>Secure &amp; trustless</h2>
              <p>
                All your artefacts&mdash;including reviews&mdash;are cryptographically signed and backed by secure peer identities, so you don't have to trust intermediaries.
              </p>
            </div>
            <div>
              <h2>Sustainable &amp; community-owned </h2>
              <p>
                Fund your open source projects, contributors, and dependencies in a network collectively owned by the FOSS community.
              </p>
            </div>
          </div>
        </section>
        <section id="how-it-works">
          <div className="container">
            <div className="left-box">
              <h2>A <strike>new</strike> old collaboration model</h2>
              <section id="flowers">
                <pre><code>                _(_)_     </code></pre>
                <pre><code>    @@@@       (_)@(_)    </code></pre>
                <pre><code>   @@()@@ wWWWw  (_)\     </code></pre>
                <pre><code>    @@@@  (___)     \|/   </code></pre>
                <pre><code>     /      Y       \|    </code></pre>
                <pre><code>  \ |     \ |/       | /  </code></pre>
                <pre><code>  \\|//   \\|///  \\\|//  </code></pre>
                <pre><code>^^^^^^^^^^^^^^^^^^^^^^^^^^</code></pre>
              </section>
            </div>
            <p>
              Peer-to-peer networking offers a new design space for bazaar-style development. <br/>
              issues & prs locally /
            </p>
            <div className="left-box">
              <h2>How it works</h2>
              <div id="dev-links">
                <p>
                  Read the protocol <a href="https://github.com/radicle-dev/radicle-link/blob/master/spec/out/radicle-link.pdf">specification</a>
                </p>
                <p>
                  Browse the protocol <a href="https://github.com/radicle-dev/radicle-link">source code</a>
                </p>
              </div>
            </div>
            <p>
              We adopt the <a href="https://scuttlebutt.nz/">SSB</a> <q>social overlay</q> paradigm to establish a peer-to-peer replication
              layer on top of distributed version control systems. We model this largely based on an
              (unmodified) <code>git</code> backend, but strive for the protocol to be general enough to allow
              implementations on top of different paradigms, e.g <a href="https://pijul.org">pijul</a>. To complement the replication layer we introduce
              a totally-ordered consensus-backed registry which holds canonical project metadata. This allows projects
              to anchor important information&mdash;such as project state and repository head&mdash;with
              the guarantee of global availability and immutability.
            </p>
          </div>
        </section>
        <section id="clouds">
          <pre><code>                _                                                _                                                     _                                                _                                                    _                                                _                                                </code></pre>
          <pre><code>              (`  ).                   _                       (`  ).                   _                            (`  ).                   _                       (`  ).                   _                           (`  ).                   _                       (`  ).                   _                         </code></pre>
          <pre><code>             (     ).              .:(`  )`.                  (     ).              .:(`  )`.                       (     ).              .:(`  )`.                  (     ).              .:(`  )`.                      (     ).              .:(`  )`.                  (     ).              .:(`  )`.                     </code></pre>
          <pre><code>)           _(       '`.          :(   .    )                _(       '`.          :(   .    )                     _(       '`.          :(   .    )                _(       '`.          :(   .    )                    _(       '`.          :(   .    )                _(       '`.          :(   .    )                    </code></pre>
          <pre><code>        .=(`(      .   )     .--  `.  (    ) )           .=(`(      .   )     .--  `.  (    ) )                .=(`(      .   )     .--  `.  (    ) )           .=(`(      .   )     .--  `.  (    ) )               .=(`(      .   )     .--  `.  (    ) )           .=(`(      .   )     .--  `.  (    ) )                   </code></pre>
          <pre><code>       ((    (..__.:'-'   .+(   )   ` _`  ) )           ((    (..__.:'-'   .+(   )   ` _`  ) )                ((    (..__.:'-'   .+(   )   ` _`  ) )           ((    (..__.:'-'   .+(   )   ` _`  ) )               ((    (..__.:'-'   .+(   )   ` _`  ) )           ((    (..__.:'-'   .+(   )   ` _`  ) )                    </code></pre>
          <pre><code>`.     `(       ) )       (   .  )     (   )  ._        `(       ) )       (   .  )     (   )  ._             `(       ) )       (   .  )     (   )  ._        `(       ) )       (   .  )     (   )  ._            `(       ) )       (   .  )     (   )  ._        `(       ) )       (   .  )     (   )  ._                 </code></pre>
          <pre><code>  )      ` __.:'   )     (   (   ))     `-'.-(`  )        ` __.:'   )     (   (   ))     `-'.-(`  )             ` __.:'   )     (   (   ))     `-'.-(`  )        ` __.:'   )     (   (   ))     `-'.-(`  )            ` __.:'   )     (   (   ))     `-'.-(`  )        ` __.:'   )     (   (   ))     `-'.-(`  )               </code></pre>
          <pre><code>)  )  ( )       --'       `- __.'         :(      ))   ( )       --'       `- __.'         :(      ))        ( )       --'       `- __.'         :(      ))   ( )       --'       `- __.'         :(      ))       ( )       --'       `- __.'         :(      ))   ( )       --'       `- __.'         :(      ))             </code></pre>
          <pre><code>.-'  (_.'          .')                    `(    )  )) (_.'          .')                    `(    )  ))      (_.'          .')                    `(    )  )) (_.'          .')                    `(    )  ))     (_.'          .')                    `(    )  )) (_.'          .')                    `(    )  ))            </code></pre>
          <pre><code>                  (_  )                     ` __.:'                (_  )                     ` __.:'                     (_  )                     ` __.:'                (_  )                     ` __.:'                    (_  )                     ` __.:'                (_  )                     ` __.:'              </code></pre>
          <pre><code>                                                                                                                                                                                                                                                                                                                               </code></pre>
        </section>
      </div>
    </Page>
  )
}
