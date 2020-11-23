import React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ColorContext from '../context/ColorContext';

export default function DetailsScreen({route, navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Details</Text>
      <Text>{route.params.info.data}</Text>
      <Button title="Go to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
}
