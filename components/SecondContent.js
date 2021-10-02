/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const SecondContent = ({setOperator, operator, output}) => {
  return (
    <View>
      <View style={{paddingVertical: 50}}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={() =>
              setOperator({
                ...operator,
                str: '+',
                toggle: true,
              })
            }
            style={styles.operatorBtn}>
            <Text style={styles.primarySize}>+</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setOperator({
                ...operator,
                str: '-',
                toggle: true,
              })
            }
            style={styles.operatorBtn}>
            <Text style={styles.primarySize}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setOperator({
                ...operator,
                str: '*',
                toggle: true,
              })
            }
            style={styles.operatorBtn}>
            <Text style={styles.primarySize}>X</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              setOperator({
                ...operator,
                str: '/',
                toggle: true,
              })
            }
            style={styles.operatorBtn}>
            <Text style={styles.primarySize}>/</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{borderWidth: 2, backgroundColor: '#000'}} />
      <View style={styles.outputWrapper}>
        <Text style={styles.primarySize}>Hasil:</Text>
        <Text style={styles.primarySize}>{output}</Text>
      </View>
    </View>
  );
};

const screenWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  primarySize: {
    fontSize: 23,
    fontWeight: 'bold',
  },
  operatorWrapper: {
    padding: 20,
  },
  operatorBtn: {
    padding: 15,
    marginHorizontal: screenWidth / 25,
    borderWidth: 4,
    width: screenWidth / 8,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
  },
});

export default SecondContent;
