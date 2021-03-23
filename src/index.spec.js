import tester from '@dword-design/tester'
import testerPluginPuppeteer from '@dword-design/tester-plugin-puppeteer'
import withLocalTmpDir from 'with-local-tmp-dir'
import { outputFile } from 'fs-extra'
import { Nuxt, Builder } from 'nuxt'
import { endent } from '@dword-design/functions'
import packageName from 'depcheck-package-name'

export default tester({
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
        dev: true,
        css: ['~/../src/index.scss'],
        modules: [
          packageName`nuxt-sourcemaps-abs-sourceroot`,
        ]
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
  }
}, [testerPluginPuppeteer()])
