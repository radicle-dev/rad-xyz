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
              <h2>A peer-to-peer collaboration model</h2>
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
              Peer-to-peer networking offers a new design space for bazaar-style development, as it provides new communication pathways for developers that aren't limited by current processes and workflows. That's why we've decided to pursue a <em>multi-upstream</em> model for Radicle. We've realized by exploring multi-upstream peer-to-peer development makes it far easier for developers and maintainers to develop not just a shared, but a <em>trusted</em> representation grounded in actual source code <em>and</em> secure peer identities.
            </p>
            <div className="left-box">
              <h2>How it works</h2>
              <div id="dev-links">
                <p>
                  Read the protocol <Link href="https://github.com/radicle-dev/radicle-link/blob/master/spec/out/radicle-link.pdf"><a>specification</a></Link>
                </p>
                <p>
                  Browse the protocol <Link href="https://github.com/radicle-dev/radicle-link"><a>source code</a></Link>
                </p>
              </div>
            </div>
            <p>
                We adopt the SSB <q>social overlay</q> paradigm to establish a peer-to-peer replication layer on top of distributed version control systems. We model this largely based on an (unmodified) git backend, but strive for the protocol to be general enough to allow implementations on top of different paradigms, e.g pijul. We assume a mostly non-adversarial setting. Features requiring strong sybil resistance (or are otherwise difficult to implement in a purely peer-to-peer way) are out of the scope of this specification.
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
