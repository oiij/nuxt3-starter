import type { PluginOption } from 'vite'
import {
  NaiveUiResolver,
} from 'unplugin-vue-components/resolvers'
import Components from 'unplugin-vue-components/vite'

export function VitePluginComponents(): PluginOption {
  return Components({
    dirs: [],
    extensions: ['vue', 'md'],
    deep: true,
    include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
    resolvers: [
      NaiveUiResolver(),
    ],
    dts: '../components.d.ts',
  }) // https://github.com/antfu/unplugin-vue-components
}
