import { Group } from '@screens/Groups';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index' 
import {useFonts, Roboto_400Regular, Roboto_700Bold} from '@expo-google-fonts/roboto'
import { Loading } from '@components/Loading';
import { StatusBar } from 'react-native';

export default function App() {
  //logica de carregamento daa font paraaa o app -> guada se carregou
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});



  return (
    <ThemeProvider theme={theme}>
      <StatusBar 
        barStyle='light-content'
        backgroundColor='transparent'
        translucent ={true}
      />
      {fontsLoaded ? <Group/> : <Loading/>} 
    </ThemeProvider>
  );
}
