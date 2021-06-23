import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Image,
} from 'react-native';
import axios from 'axios';
import {fonts} from '../../utils/fonts';
import {colors} from '../../utils/colors';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {Icon} from 'react-native-elements';

export default function Pemakaian({navigation}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.post('https://zavalabs.com/mylaundry/api/pemakaian.php').then(res => {
      console.log('detail transaksi', res.data);
      setData(res.data);
    });
  }, []);
  return (
    <SafeAreaView
      style={{
        padding: 10,
      }}>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 10,
        }}>
        <View style={{flex: 1}}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 16,
              color: colors.primary,
            }}>
            Kebutuhan Laundry
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('PemakaianTambah');
          }}
          style={{
            backgroundColor: colors.primary,
            padding: 10,
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <Icon type="ionicon" name="add" size={22} color={colors.white} />
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 16,
              color: colors.white,
            }}>
            Tambah
          </Text>
        </TouchableOpacity>
      </View>
      <ScrollView>
        {data.map(item => {
          return (
            <View
              style={{
                padding: 10,
                // borderWidth: 1,
                elevation: 1,
                marginVertical: 2,
                // borderColor: colors.primary,
                backgroundColor: colors.white,
              }}>
              <Text
                style={{
                  fontFamily: fonts.secondary[600],
                  color: colors.secondary,
                }}>
                {item.tanggal}
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={{padding: 5}}>
                  <Image
                    resizeMode="contain"
                    source={{uri: item.foto}}
                    style={{width: 100, aspectRatio: 2}}
                  />
                </View>
                <View style={{padding: 5, flex: 1}}>
                  <Text style={{fontFamily: fonts.secondary[600]}}>
                    {item.nama_barang}
                  </Text>
                  <View
                    style={{
                      flexDirection: 'row',
                    }}>
                    <Text
                      style={{
                        fontFamily: fonts.secondary[400],
                        marginRight: 5,
                      }}>
                      {item.harga} per {item.uom}
                    </Text>
                    <Text
                      style={{
                        fontFamily: fonts.secondary[400],
                        color: colors.primary,
                      }}>
                      X
                    </Text>
                    <Text
                      style={{
                        fontFamily: fonts.secondary[400],
                        marginHorizontal: 5,
                      }}>
                      {item.qty}
                    </Text>
                  </View>
                </View>
                <View style={{justifyContent: 'center'}}>
                  <Text
                    style={{
                      fontFamily: fonts.secondary[600],
                      fontSize: 18,
                      color: colors.primary,
                    }}>
                    {item.total}
                  </Text>
                </View>
              </View>
            </View>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
