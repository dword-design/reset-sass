import { endent } from '@dword-design/functions'
import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import packageName from 'depcheck-package-name'
import { outputFile } from 'fs-extra'
import { Builder, Nuxt } from 'nuxt'
import withLocalTmpDir from 'with-local-tmp-dir'

export default tester(
  {
    works() {
      return withLocalTmpDir(async () => {
        await outputFile(
          'pages/index.vue',
          endent`
          <template>
            <button class="foo" />
          </template>

        `
        )

        const nuxt = new Nuxt({
          css: ['~/../src/index.scss'],
          dev: true,
          modules: [packageName`nuxt-sourcemaps-abs-sourceroot`],
        })
        await new Builder(nuxt).build()
        try {
          await nuxt.listen()
          await this.page.goto('http://localhost:3000')
          await this.page.waitForSelector('.foo')
        } finally {
          nuxt.close()
        }
      })
    },
  },
  [testerPluginPuppeteer()]
)
