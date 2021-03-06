import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text as PaperText, Button as PaperButton} from 'react-native-paper';
import {Fonts} from '../../../assets';
// import {translations} from '../../../constants/translations/index';

function HeaderComponent() {
  return (
    <View style={styles.mainView}>
      <PaperText style={styles.headerTitle}>Camera</PaperText>
      {/* <PaperText style={styles.headerTitle}>and</PaperText> */}
      <PaperText style={styles.headerTitle}>Geolocation</PaperText>
    </View>
  );
}

export default HeaderComponent;

const styles = StyleSheet.create({
  mainView: {
    // borderTopWidth: 0.6,
    borderRadius: 20,
    borderColor: 'lightgrey',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 0, 0, 0.4)',
    marginVertical: 20,
    marginHorizontal: 50,
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 36,
    // paddingBottom: 8,
    color: 'white',
    fontWeight: 'bold',
  },
  headerText: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    paddingBottom: 10,
    color: 'black',
  },
});
