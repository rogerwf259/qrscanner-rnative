import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

class QRreader extends Component {
  state = {
    info: null,
    shouldDetect: true,
  };
  barcodeRecognized = ({barcodes}) => {
    const found = barcodes.find(({data}) => typeof data !== 'object');
    if (found) {
      this.props.getData(found);
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.instructions}>
          To get started, point the camera at a QR code
        </Text>
        <RNCamera
          ref={(ref) => {
            this.camera = ref;
          }}
          style={{
            flex: 1,
            width: '100%',
          }}
          onGoogleVisionBarcodesDetected={
            this.state.shouldDetect ? this.barcodeRecognized : null
          }></RNCamera>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QRreader;
