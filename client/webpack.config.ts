

import {Configuration, RuleSetRule, WatchIgnorePlugin, WebpackPluginInstance} from "webpack";
import HtmlWebpackPlugin from "html-webpack-plugin";
import {join} from "path";
import {BabelRuleBase, commonConfig, cssRuleBase, tsRuleBase} from "./webpack.common";

const webAppPlugins: WebpackPluginInstance[] = [
    new HtmlWebpackPlugin({
        template:"./public/index.html"
    })
]
const tsRuleWebApp: RuleSetRule = {
    ...tsRuleBase,
    options: {
        configFile: join(__dirname, 'tsconfig.json')
    }
}
module.exports =  {
    entry: join(__dirname, 'source', 'index.tsx'),
    mode: 'development',
    resolve: {
        extensions: ['.tsx','.ts','.js','.json']
    },
    output: {
        path: join(__dirname, '..', 'dist'),
        filename: 'bundle.js',
    },
    target: 'web',
    plugins: webAppPlugins,
    
    module: {
        rules: [ cssRuleBase, BabelRuleBase]
    },
    devServer: {
        static: {
          directory: join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
      },
}