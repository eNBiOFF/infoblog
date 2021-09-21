import {Configuration, RuleSetRule} from "webpack";

export const tsRuleBase: RuleSetRule = {
    test: /\.(ts|js)x?$/,
    exclude: /node_modules/,
    loader: 'ts-loader'
}

export const BabelRuleBase: RuleSetRule = {
    test: /\.(ts|js)x?$/,
    loader: 'babel-loader'
}

export const cssRuleBase: RuleSetRule = {
    test: /\.css$/i,
    loader: 'css-loasder'
}

export const smRuleBase: RuleSetRule = {
    enforce: 'pre',
    test: /\.js$/,
    loader: 'source-map-loaders'
}

export const commonConfig: Configuration = {
    mode: 'development',
    resolve: {
        extensions: [ '.js', '.json', '.tsx', '.ts']
        
    },
}