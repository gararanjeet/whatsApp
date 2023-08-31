import React, {useEffect} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import styles from './splashStyles';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {Screen} from 'react-native-screens';
import {Screens} from '../../../constants';

const Splash = ({navigation}) => {
  const random = () => {};
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(Screens.home);
    }, 0);
  }, []);
  return (
    <>
      <View style={styles.parentContainer}>
        <View style={styles.imageContainer}>
          <MaterialIcon name="whatsapp" color="#fff" size={90} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.text}>from</Text>
          <Text style={styles.author}>Unknow</Text>
        </View>
      </View>
    </>
  );
};

export default Splash;
