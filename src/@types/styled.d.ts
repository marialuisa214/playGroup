import 'styled-components/native'
import theme from '@theme/index'

//dizer para o styled-comp. qual o tema para acesso
//criar tipagem baseado no conteudo do tema

export type ThemeType = typeof theme;
declare module 'styled-components' {
    export interface DefaultTheme extends ThemeType { };
}
