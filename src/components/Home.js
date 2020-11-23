import React, {useEffect, useState} from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import QRreader from './QRreader';

export default function HomeScreen({navigation}) {
  const [showCamera, setShowCamera] = useState(false);
  const [rData, setrData] = useState(null);
  const getData = (data) => {
    setTimeout(() => setrData(data), 500);
  };
  useEffect(() => {
    if (rData) {
      navigation.navigate('Details', {
        info: rData,
      });
    }
    return () => setShowCamera(false);
  }, [rData]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>QR Scanner</Text>
      <Button
        title={`${showCamera ? 'Stop scanning' : 'Start scanning'}`}
        onPress={() => setShowCamera(!showCamera)}
      />
      {showCamera && <QRreader getData={getData} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});
