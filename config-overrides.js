/* eslint-disable @typescript-eslint/no-var-requires */
const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
  addBundleVisualizer,
  addWebpackAlias,
  adjustWorkbox,
  // eslint-disable-next-line @typescript-eslint/no-var-requires
} = require('customize-cra')
const path = require('path')

module.exports = override(
  // enable legacy decorators babel plugin
  addDecoratorsLegacy(),

  // disable eslint in webpack
  disableEsLint(),

  // add webpack bundle visualizer if BUNDLE_VISUALIZE flag is enabled
  process.env.BUNDLE_VISUALIZE === 1 && addBundleVisualizer(),

  // add an alias for "ag-grid-react" imports
  addWebpackAlias({
    _pages: path.resolve(__dirname, 'src/pages'),
    _layouts: path.resolve(__dirname, 'src/layouts'),
    _components: path.resolve(__dirname, 'src/components'),
  }),

  // adjust the underlying workbox
  adjustWorkbox(wb =>
    Object.assign(wb, {
      skipWaiting: true,
      exclude: (wb.exclude || []).concat('index.html'),
    }),
  ),
)
