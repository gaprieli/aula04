import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList, Image, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {

  const lista = [
    {
      id: '1',
      nome: 'Aria',
      pelagem: 'Branca',
      corolho: 'Azul Cocô',
      icone: require('./assets/aria.jpg'),
      descricao: 'Aria é muito chata e insuportável'
    },
    {
      id: '2',
      nome: 'Spencer',
      pelagem: 'Branca',
      corolho: 'Marrom Bombom',
      icone: require('./assets/spencer.jpg'),
      descricao: 'Spencer é uma diva inteligente'
    },
    {
      id: '3',
      nome: 'Hanna',
      pelagem: 'Branca',
      corolho: 'Azul Gelo',
      icone: require('./assets/hanna.jpg'),
      descricao: 'Hanna é uma queridona meio burrinha'
    },
    {
      id: '4',
      nome: 'Emily',
      pelagem: 'Parda',
      corolho: 'Marrom Coco',
      icone: require('./assets/emily.jpg'),
      descricao: 'Emily é a atleta do grupo, uma diva meio chatinha'
    },
    {
      id: '5',
      nome: 'Mona',
      pelagem: 'Branca',
      corolho: 'Marrom Mel',
      icone: require('./assets/mona.jpg'),
      descricao: 'Mona é a mais mais'
    },
    {
      id: '6',
      nome: 'Alison',
      pelagem: 'Branca',
      corolho: 'Azul Fumaça',
      icone: require('./assets/alisson.jpg'),
      descricao: 'Se acha demais'
    }
  ]

  return (
    <ImageBackground source={require('./assets/background.png')} style={styles.container} resizeMode="cover">
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <StatusBar style="auto" />

      <FlatList
      data={lista}
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.viewItem} onPress={() => alert(item.descricao)}>
        <View style={styles.viewItem}>
          <Image style={styles.icone} source={item.icone} />
          <View>
            <Text>Nome: {item.nome}</Text>
            <Text>Pelagem: {item.pelagem}</Text>
            <Text>Cor do Olho: {item.corolho}</Text>
          </View>
        </View>
        </TouchableOpacity>
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