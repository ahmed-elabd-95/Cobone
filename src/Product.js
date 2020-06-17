import React from 'react';
import {
  Image,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {data} from './Const';
export class Product extends React.Component {
  state = {
    counter: 0,
  };
  onIncrement = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };
  onDecrement = () => {
    this.setState({
      counter: this.state.counter - 1,
    });
  };

  onAddtoCart = () => {
    const item = this.props.navigation.getParam('item');
    this.props.navigation.navigate('Cart');
    data.array = [...data.array, item];
    data.total = item.price + data.total;
  };

  render() {
    const item = this.props.navigation.getParam('item');
    const counter = this.state.counter;
    return (
      <View style={{flex: 1}}>
        <Text style={{margin: 5, fontSize: 18}}>{item.offerName}</Text>
        <Image source={item.img} style={{height: 250, width: '100%'}} />
        <Text style={{margin: 5, fontSize: 18, color: '#ff0100'}}>
          {item.prdName}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <View style={{flexDirection: 'row'}}>
            <TouchableOpacity
              style={{padding: 5, backgroundColor: '#ccc'}}
              onPress={this.onIncrement}>
              <Text>+</Text>
            </TouchableOpacity>
            <Text style={{padding: 5}}>{counter}</Text>
            <TouchableOpacity
              style={{padding: 5, backgroundColor: '#ccc'}}
              onPress={this.onDecrement}
              disabled={this.state.counter == 0}>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
          <Text>{item.price}</Text>
        </View>
        <Text style={{marginTop: 10}}>{item.des}</Text>
        <TouchableOpacity
          style={{
            backgroundColor: '#39abf2',
            padding: 20,
            position: 'absolute',
            width: '100%',
            bottom: 0,
            alignItems: 'center',
          }}
          onPress={this.onAddtoCart}>
          <Text style={{color: '#fff'}}>Add To Cart</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
