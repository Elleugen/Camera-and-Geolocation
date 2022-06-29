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
import {Component} from '../../../../components';
import {connect} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import MapView, {
  enableLatestRenderer,
  PROVIDER_GOOGLE,
} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

function LocationScreen() {
  enableLatestRenderer();
  const navigation = useNavigation();

  const [data, setData] = useState({});

  function handleOnPress() {
    navigation.navigate('Dashboard.DashboardScreen');
    ToastAndroid.showWithGravity(
      'Location captured!',
      ToastAndroid.LONG,
      ToastAndroid.TOP,
    );
  }
  // if (location == null) {
  // }
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={Images.background}
        style={{height: '100%'}}
        imageStyle={{opacity: 0.9}}>
        <View style={styles.container}>
          <MapView
            // provider={PROVIDER_GOOGLE} // remove if not using Google Maps
            style={styles.map}
            region={{
              latitude: 37.78825,
              longitude: -122.4324,
              latitudeDelta: 0.015,
              longitudeDelta: 0.0121,
            }}></MapView>
        </View>
      </ImageBackground>
    </View>
  );
}

export default LocationScreen;

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
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 400,
    width: 400,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
