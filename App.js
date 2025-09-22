import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground } from 'react-native';

export default function App() {

  const lista = [
    {
      id: '1',
      nome: 'Aria',
      pelagem: 'Branca',
      corolho: 'Marrom Cocô',
      icone: require('./assets/aria.jpg')
    },
    {
      id: '2',
      nome: 'Spencer',
      pelagem: 'Branca',
      corolho: 'Marrom Bombom',
      icone: require('./assets/spencer.jpg')
    },
    {
      id: '3',
      nome: 'Hanna',
      pelagem: 'Branca',
      corolho: 'Azul Gelo',
      icone: require('./assets/hanna.jpg')
    },
    {
      id: '4',
      nome: 'Emily',
      pelagem: 'Parda',
      corolho: 'Marrom Coco',
      icone: require('./assets/emily.jpg')
    }
  ]

  return (
    <ImageBackground source={require('./assets/background.png')} style={styles.container} resizeMode="cover">
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <StatusBar style="auto" />

      <FlatList
      data={lista}
      renderItem={({ item }) => (
        <View style={styles.viewItem}>
          <Image style={styles.icone} source={item.icone} />
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Pelagem: {item.pelagem}</Text>
            <Text>Cor do Olho: {item.corolho}</Text>
          </View>
        </View>
      )}
    />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80
  },
  viewItem: {
    backgroundColor: '#FFECD1',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  texto: {
    color: '#FFECD1',
    fontSize: 20,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: '40'
  },
  logo: {
    width: 200,
    height: 100,
    marginBottom: 20,
    marginTop: 30
  },
  icone: {
    width: 100,
    height: 100,
    marginRight: 15,
    borderRadius: 50,
    borderColor: '#3E000C',
    borderWidth: 4
  }
});
