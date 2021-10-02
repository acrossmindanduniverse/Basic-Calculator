/* eslint-disable react-native/no-inline-styles */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import SecondContent from './components/SecondContent';

const App = () => {
  const [state, setState] = React.useState([]);
  const [operator, setOperator] = React.useState({
    str: '',
    toggle: false,
  });
  const [output, setOutput] = React.useState(0);
  const [errMsg, setErrMsg] = React.useState(false);

  const addValue = item => {
    setState(arr => [...arr, item]);
  };

  React.useEffect(() => {
    if (state.length === 1 && operator.toggle) {
      setErrMsg(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operator.toggle]);

  React.useEffect(() => {
    if (operator.str === '+') {
      setOutput(state.reduce((acc, curr) => acc + curr));
      setOperator({
        ...operator,
        toggle: false,
      });
    }
    if (operator.str === '-') {
      setOutput(state.reduce((acc, curr) => acc - curr));
      setOperator({
        ...operator,
        toggle: false,
      });
    }
    if (operator.str === '*') {
      setOutput(state.reduce((acc, curr) => acc * curr));
      setOperator({
        ...operator,
        toggle: false,
      });
    }
    if (operator.str === '/') {
      setOutput(state.reduce((acc, curr) => acc / curr));
      setOperator({
        ...operator,
        toggle: false,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [operator.str, state, output]);

  React.useEffect(() => {
    if (errMsg) {
      setTimeout(() => {
        setErrMsg(false);
      }, 2000);
    }
  }, [errMsg]);

  return (
    <View style={{padding: 30}}>
      <View style={styles.errMsgWrapper}>
        {errMsg && <Text style={styles.errMsg}>Invalid number input</Text>}
      </View>
      <View>
        <FlatList
          keyExtractor={item => String(item)}
          data={[10, 2, 5]}
          renderItem={({item}) => (
            <View>
              <View style={{padding: 10}} />
              <View style={styles.firstContent}>
                <View style={styles.numberWrapper}>
                  <Text style={styles.primarySize}>{item}</Text>
                </View>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <CheckBox onValueChange={() => addValue(item)} />
                </View>
              </View>
            </View>
          )}
        />
        <SecondContent
          setOperator={setOperator}
          operator={operator}
          output={output}
        />
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
  errMsgWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errMsg: {
    fontSize: 23,
    fontWeight: 'bold',
    color: '#eb3452',
  },
  firstContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  numberWrapper: {
    width: screenWidth / 1.5,
    borderWidth: 2,
    padding: 15,
  },
});

export default App;
