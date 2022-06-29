import React, {useCallback, useState, useEffect, Fragment} from 'react';
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
} from 'react-native';
import {
  Avatar,
  // Button,
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
import {HeaderComponent} from '../../components';
import {Component} from '../../../../components';
import {Theme} from '../../../../configs/ThemeConfig';
import {FontWeightConfig} from '../../../../configs/FontConfig';
import Images from '../../../../assets/';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectorCurrentDashboard, getDashboard} from '../../redux';
import {FloatingAction} from 'react-native-floating-action';
import {useNavigation} from '@react-navigation/native';

function DashboardScreen({currentDashboard, getDashboard}) {
  const navigation = useNavigation();
  const actions = [
    {
      text: 'Pick your location',
      icon: Images.location,
      name: 'bt_location',
      position: 1,
    },
    {
      text: 'Take a picture',
      icon: Images.camera,
      name: 'bt_camera',
      position: 2,
    },
  ];
  return (
    <View style={styles.screen}>
      <ImageBackground
        source={Images.background}
        style={{height: '100%'}}
        imageStyle={{opacity: 0.9}}>
        <SafeAreaView>
          <HeaderComponent />
          {/* <SearchBarComponent />
          <BookRecomendationsComponent />
          <BookCardsComponent /> */}
          <View style={styles.btnContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Camera.CameraScreen');
              }}>
              <Component.ButtonEx></Component.ButtonEx>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Location.LocationScreen');
              }}>
              <Component.ButtonLoc></Component.ButtonLoc>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
      <FloatingAction
        actions={actions}
        onPressItem={name => {
          navigation.navigate('Camera.CameraScreen');
          console.log(`selected button: ${name}`);
        }}
      />
    </View>
  );
}

const mapStateToProps = createStructuredSelector({
  currentDashboard: selectorCurrentDashboard,
});

const mapDispatchToProps = dispatch => ({
  getDashboard: () => dispatch(getDashboard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardScreen);

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Theme.background,
  },
  btnContainer: {
    borderColor: 'rgba(0, 0, 200, 0.4)',
    borderWidth: 2,
    borderRadius: 30,
    marginTop: '30%',
    marginHorizontal: '10%',
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
});
