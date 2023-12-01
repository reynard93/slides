import { defineConfig } from 'vite'
import { markdownItShikiTwoslashSetup } from "markdown-it-shiki-twoslash"

// https://sli.dev/custom/config-vite.html#configure-internal-plugins
async function createConfig() {
  const shiki = await markdownItShikiTwoslashSetup({
    theme: "nord",
  })
  return defineConfig({
    slidev: {
      markdown: {
        markdownItSetup(md) {
        /* custom markdown-it plugins */
          md.use(shiki)
        },
      }
    }
  })
}

export default createConfig()
