import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  ImageBackground,
  SafeAreaView,
  Image,
  Animated,
} from 'react-native';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import {color} from 'react-native-reanimated';
import {getData} from '../../utils/localStorage';
import {PermissionsAndroid} from 'react-native';
import LottieView from 'lottie-react-native';

export default function Splash({navigation}) {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  useEffect(() => {
    const unsubscribe = getData('user').then(res => {
      // console.log(res);
      if (!res) {
        // console.log('beum login');

        setTimeout(() => {
          navigation.replace('GetStarted');
        }, 1500);
      } else {
        console.log('sudah login logon');

        setTimeout(() => {
          navigation.replace('MainApp');
        }, 1500);
      }
    });
  }, []);
  return (
    <SafeAreaView style={styles.page}>
      <LottieView
        style={{flex: 1}}
        source={require('../../assets/splash.json')}
        autoPlay
        loop
      />
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingBottom: windowHeight / 4,
        }}>
        <Text
          style={{
            fontFamily: fonts.secondary[800],
            fontSize: windowWidth / 9,
            color: colors.white,
          }}>
          MY LAUNDRY
        </Text>
        <Text
          style={{
            fontFamily: fonts.secondary[600],
            fontSize: windowWidth / 20,
            color: colors.white,
          }}>
          Farah Laundry Kebagusan
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  image: {
    aspectRatio: 1,
    width: 250,
    height: 250,
  },
});
