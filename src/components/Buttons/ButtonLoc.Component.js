import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text as PaperText, Button as PaperButton} from 'react-native-paper';
import {Fonts} from '../../../assets';
// import {translations} from '../../../constants/translations/index';

function ButtonLoc() {
  return (
    <View style={styles.mainView}>
      <PaperText style={styles.headerTitle}>Get location</PaperText>
    </View>
  );
}

export default ButtonLoc;

const styles = StyleSheet.create({
  mainView: {
    // borderTopWidth: 0.6,
    borderRadius: 20,
    borderColor: 'lightgrey',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(0, 0, 200, 0.8)',
    marginVertical: 20,
    marginHorizontal: '10%',
    // paddingVertical: 20,
    paddingHorizontal: 20,
  },
  headerTitle: {
    textAlign: 'center',
    fontFamily: 'Poppins-Regular',
    fontSize: 22,
    // paddingBottom: 8,
    color: 'white',
    fontWeight: 'bold',
  },
});
