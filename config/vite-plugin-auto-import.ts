import type { PluginOption } from 'vite'
import { VueHooksPlusResolver } from '@vue-hooks-plus/resolvers'
import AutoImport from 'unplugin-auto-import/vite'

export function VitePluginAutoImport(): PluginOption {
  return AutoImport({
    /* options */
    include: [
      /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
      /\.vue$/,
      /\.vue\?vue/, // .vue
    ],
    exclude: [
      /[\\/]node_modules[\\/]/,
      /[\\/]packages[\\/]/,
      /[\\/]\.git[\\/]/,
    ],
    imports: [
      { from: 'await-to-js', imports: ['to'] },
    ],
    dirs: ['src/api'],
    vueTemplate: true,
    resolvers: [VueHooksPlusResolver()],
    dts: '../auto-imports.d.ts',
  }) // https://github.com/antfu/unplugin-auto-import
}
