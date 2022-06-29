import React, {useCallback, useRef, useState, useEffect, Fragment} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView as SafeAreaView,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
  Linking,
  ToastAndroid,
} from 'react-native';
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Divider,
  Portal,
  Dialog,
  RadioButton,
  // Searchbar,
} from 'react-native-paper';
import {useFocusEffect} from '@react-navigation/native';
import {Theme} from '../../../../configs/ThemeConfig';
import {FontWeightConfig} from '../../../../configs/FontConfig';
import Images from '../../../../assets/';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {HeaderComponent} from '../../components';
import {
  Camera,
  useCameraDevices,
  frameRateIncluded,
} from 'react-native-vision-camera';
import {white} from 'react-native-paper/lib/typescript/styles/colors';
import {useNavigation} from '@react-navigation/native';

function CameraScreen() {
  const navigation = useNavigation();
  const cameraPermission = Camera.getCameraPermissionStatus();
  const microphonePermission = Camera.getMicrophonePermissionStatus();
  // console.log('cameraPermission:', cameraPermission);
  // console.log('microphonePermission:', microphonePermission);
  const newCameraPermission = Camera.requestCameraPermission();
  const newMicrophonePermission = Camera.requestMicrophonePermission();
  // console.log('newCameraPermission:', newCameraPermission);
  // console.log('newMicrophonePermission:', newMicrophonePermission);

  // const devices = Camera.getAvailableCameraDevices();
  // const devices = 'Physical';
  // const devices = useCameraDevices();
  const devices = useCameraDevices();
  const device = devices.back;
  // console.log('device:', device);

  const camera = useState(null);
  const [data, setData] = useState({});

  function handleOnPress() {
    // const handleOnPress = async () => {
    // const photo = await camera.takePhoto();
    // setData(photo);
    console.log('Data:', data);
    navigation.navigate('Dashboard.DashboardScreen');
    ToastAndroid.showWithGravity(
      'Photo captured!',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  }
  if (device == null) {
    return (
      <View style={styles.screen}>
        <ImageBackground
          source={Images.background}
          style={{height: '100%'}}
          imageStyle={{opacity: 0.9}}>
          {/* <HeaderComponent /> */}
          <SafeAreaView>
            <HeaderComponent />
          </SafeAreaView>
        </ImageBackground>
      </View>
    );
  } else {
    return (
      <View style={styles.screen}>
        <Camera
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
        <View style={styles.button}></View>
        <TouchableOpacity onPress={handleOnPress}>
          <Text style={styles.buttonText}>Take picture</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default CameraScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center'
    backgroundColor: Theme.background,
  },
  button: {
    // alignSelf: 'center',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 2,
    marginVertical: '50%',
    marginHorizontal: '10%',
    // height: 32,
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    borderRadius: 30,
    fontSize: 32,
    color: 'white',
    paddingHorizontal: 20,
    paddingVertical: 5,
    marginHorizontal: '20%',
    marginBottom: '10%',
  },
});
