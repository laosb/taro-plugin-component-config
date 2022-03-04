# `taro-plugin-component-config`

A Taro plugin to customize component config.

## Usage

`config/index.js`:

```js
const config = {
  plugins: [
    [
      'taro-plugin-component-config',
      {
        additionalIncludes: ['picker-view', 'picker-view-column'],
      },
    ],
  ],
}
```

### Available Options

```ts
interface IComponentConfig {
  includes: Set<string>
  excludes: Set<string>
  thirdPartyComponents: Set<string>
  includeAll: boolean
}

export type PluginOptions = {
  additionalIncludes?: string[]
  additionalExcludes?: string[]
  additionalThirdPartyComponents?: string[]
} & Partial<IComponentConfig>
```

If any field in `IComponentConfig` (e.g. `includes`) is specified, its corresponding `additional` field (e.g. `additionalIncludes`) will be ignored.

# License

[MIT](https://laosb.mit-license.org).
