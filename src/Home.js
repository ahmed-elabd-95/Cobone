import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';

export class Home extends React.Component {
  
  static navigationOptions = ({navigation}) => ({
    headerTitle: () => <Text>Home</Text>,
    headerLeft: () => (
      <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
        <Image
          source={require('../images/menu.png')}
          style={{width: 40, height: 40, borderRadius: 20, marginRight: 10}}
        />
      </TouchableOpacity>
    ),
    headerRight: () => (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Image
            source={require('../images/cart.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../images/search.png')}
            style={{width: 40, height: 40}}
          />
        </TouchableOpacity>
      </View>
    ),
  });

  render() {
    const {touchableOpacity, menuStyle} = styles;
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={inputData}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{alignItems: 'center'}}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity style={touchableOpacity}>
                <Text style={{fontSize: 14, color: '#39abf2'}}>
                  {item.name}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
        <View style={menuStyle}></View>
        <FlatList
          data={product}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View>
                <Image source={item.img} style={{height: 250, width: '100%'}} />
                <Text style={{fontSize: 14, margin: 10}}>{item.prdName}</Text>
                <Text style={{fontWeight: 'bold', margin: 10}}>
                  {item.offerName}
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-around',
                    backgroundColor: '#39abf2',
                    padding: '5%',
                  }}>
                  <Text>5%</Text>
                  <TouchableOpacity
                    style={{
                      backgroundColor: '#fff',
                      padding: 6,
                      borderRadius: 10,
                    }}
                    onPress={() =>
                      this.props.navigation.navigate('Product', {item})
                    }>
                    <Text>View Deal</Text>
                  </TouchableOpacity>
                </View>
                <View style={{padding: 5}}></View>
              </View>
            );
          }}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  touchableOpacity: {
    width: 70,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    flexDirection: 'row',
  },
  menuStyle: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 2,
  },
});

const inputData = [
  {
    name: 'FEATURED',
    key: '1',
  },
  {
    name: 'NEW IN',
    key: '2',
  },
  {
    name: 'DISCOUNT',
    key: '3',
  },
  {
    name: 'FOOD',
    key: '4',
  },
  {
    name: 'ACTIVITY',
    key: '5',
  },
  {
    name: 'TRAVEL',
    key: '6',
  },
];
const product = [
  {
    img: require('../images/activity1.jpg'),
    prdName: 'have fun with dolphin',
    des:
      'Dolphins are well known for their intelligence.They are capable of emotion, objectivity, humor and creativity. Unlike the vast majority of animals in the wild, dolphins are regularly observed approaching humans and voluntarily interacting. They have a reputation for friendliness and intelligence toward other species, but they also love to be with each other, just hanging out. In fact, the average dolphin day looks remarkably like the ideal human day. Dolphins are well known for their intelligence.They are capable of emotion, objectivity, humor and creativity. Unlike the vast majority of animals in the wild, dolphins are regularly observed approaching humans and voluntarily interacting. They have a reputation for friendliness and intelligence toward other species, but they also love to be with each other, just hanging out. In fact, the average dolphin day looks remarkably like the ideal human day.',
    price: 20,
    offerName: 'option with selfie',
    id: '10',
  },
  {
    img: require('../images/food3.jpg'),
    prdName: 'buy one get one',
    des:
      'A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun',
    price: 5,
    offerName: 'option with selfie',
    id: '11',
  },
  {
    img: require('../images/featured1.jpg'),
    prdName: 'cinema',
    des:
      'A movie theater, cinema, or cinema hall, also known as a picture house, the pictures, or the movies, is a building that contains auditoria for viewing films for entertainment. A movie theater, cinema, or cinema hall, also known as a picture house, the pictures, or the movies, is a building that contains auditoria for viewing films for entertainment.A movie theater, cinema, or cinema hall, also known as a picture house, the pictures, or the movies, is a building that contains auditoria for viewing films for entertainment.A movie theater, cinema, or cinema hall, also known as a picture house, the pictures, or the movies, is a building that contains auditoria for viewing films for entertainment.A movie theater, cinema, or cinema hall, also known as a picture house, the pictures, or the movies, is a building that contains auditoria for viewing films for entertainment.A movie theater, cinema, or cinema hall, also known as a picture house, the pictures, or the movies, is a building that contains auditoria for viewing films for entertainment.',
    price: 10,
    
    offerName: 'option with selfie',
    id: '12',
  },
];