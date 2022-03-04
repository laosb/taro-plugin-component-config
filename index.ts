import { IPluginContext } from '@tarojs/service'

interface IComponentConfig {
  includes: Set<string>
  excludes: Set<string>
  thirdPartyComponents: Set<string>
  includeAll: boolean
}

interface ModifyComponentConfigArgs {
  componentConfig: IComponentConfig
  config: Record<string, any>
}

export type PluginOptions = {
  additionalIncludes?: string[]
  additionalExcludes?: string[]
  additionalThirdPartyComponents?: string[]
} & Partial<IComponentConfig>

export default (ctx: IPluginContext, pluginOpts: PluginOptions) => {
  ctx.modifyComponentConfig(
    ({ componentConfig }: ModifyComponentConfigArgs) => {
      if (pluginOpts.additionalIncludes) {
        pluginOpts.additionalIncludes.forEach((item) =>
          componentConfig.includes.add(item)
        )
      }
      if (pluginOpts.additionalExcludes) {
        pluginOpts.additionalExcludes.forEach((item) =>
          componentConfig.excludes.add(item)
        )
      }
      if (pluginOpts.additionalThirdPartyComponents) {
        pluginOpts.additionalThirdPartyComponents.forEach((item) =>
          componentConfig.thirdPartyComponents.add(item)
        )
      }

      if (typeof pluginOpts.includeAll === 'boolean') {
        componentConfig.includeAll = pluginOpts.includeAll
      }
      if (pluginOpts.includes) {
        componentConfig.includes = pluginOpts.includes
      }
      if (pluginOpts.excludes) {
        componentConfig.excludes = pluginOpts.excludes
      }
      if (pluginOpts.thirdPartyComponents) {
        componentConfig.thirdPartyComponents = pluginOpts.thirdPartyComponents
      }
    }
  )
}
