
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, FlatList } from 'react-native';
import { faker } from '@faker-js/faker'
import Lista from './src/Lista';


export default function App() {

  function populate() {

    const initialFeed = []
    for (let i = 0; i < 10; i++) {
      console.log('Populating')
      let obj = {}
      obj.id = i + 1
      obj.nome = faker.person.fullName()
      obj.descricao = faker.lorem.sentence()
      obj.imgperfil = faker.image.url()
      obj.imgPublicacao = faker.image.url()
      const random = Math.floor(Math.random() * 20)
      obj.likeada = random % 2 == 0 ? true : false
      obj.likers = faker.number.int({ min: 0, max: 200 })
      console.log('Obj:', obj)
      initialFeed.push(obj)
    }
    return initialFeed
  }


  const [feed, setFeed] = useState(populate())
  console.log('Initial:', feed)
  return (
    <View style={styles.container}>
      <View style={styles.header}>        
        <TouchableOpacity>
          <Image
            source={require('./src/assets/images/logo.png')}
            style={styles.logo}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('./src/assets/images/send.png')}
            style={styles.send}
          />
        </TouchableOpacity>
      </View>

      <FlatList
        showsHorizontalScrollIndicator={false}
        data={feed}
        renderItem={({item}) => <Lista data={item}/>}  
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%'    
  },
  header: {
    width: '100%',
    height: 55,
    backgroundColor: '#FFF',
    marginTop: 30,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    borderBottomWidth: 0.2,
    shadowColor: '#000',
  },
  send: {
    width: 23,
    height: 23
  },
  logo: {
  }
});
