import React from 'react';
import {
  Image,
  Text,
  View,
  FlatList,
} from 'react-native';
import {data} from './Const';
export class Cart extends React.Component {
  render() {
    return (
      <View style={{flex: 1, margin: 5}}>
        <FlatList
          data={data.array}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item, index}) => {
            return (
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  borderBottomWidth: 1,
                  margin: 5,
                }}>
                <Image source={item.img} style={{height: 100, width: 100}} />
                <View>
                  <Text>{item.prdName}</Text>
                  <Text style={{marginTop: 20}}>{item.offerName}</Text>
                </View>
                <Text>{item.price}</Text>
              </View>
            );
          }}
        />
        <View
          style={{
            width: '100%',
            position: 'absolute',
            padding: 20,
            bottom: 0,
            flexDirection: 'row',
            justifyContent: 'space-around',
            backgroundColor: '#f0eff5',
          }}>
          <Text>Total</Text>
          <Text>{data.total} AED</Text>
        </View>
      </View>
    );
  }
}
