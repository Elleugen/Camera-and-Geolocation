import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text as PaperText, Button as PaperButton} from 'react-native-paper';
import {Fonts} from '../../../assets';
// import {translations} from '../../../constants/translations/index';

function ButtonWarning() {
  return (
    <View style={styles.mainView}>
      <PaperText style={styles.headerTitle}>
        Out of service. Please try again!
      </PaperText>
    </View>
  );
}

export default ButtonWarning;

const styles = StyleSheet.create({
  mainView: {
    // borderTopWidth: 0.6,
    borderRadius: 20,
    borderColor: 'lightgrey',
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: 'rgba(255, 0, 0, 1)',
    marginVertical: '100%',
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
