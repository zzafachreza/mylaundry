import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import {Icon} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {colors} from '../../utils/colors';
import {fonts} from '../../utils/fonts';
import 'intl';
import 'intl/locale-data/jsonp/en';

export default function MyTerbaik() {
  useEffect(() => {
    // axios.get('https://zavalabs.com/sebatiku/api/barang.php').then(res => {
    //   console.log(res.data);
    //   setData(res.data);
    //   // setData(res.data.data);
    // });
  }, []);

  const navigation = useNavigation();
  const [data, setData] = useState([
    {
      nama_barang: 'Cuci',
      keterangan: 'Cuci Pakaian Kotor',
      harga: 7000,
      uom: 'Kg',
      foto: 'https://cdn1-production-images-kly.akamaized.net/PWQ_iCfc-PXUgf_qL8iotQJpRAI=/673x379/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/3175583/original/092818600_1594346182-row-industrial-laundry-machines-laundromat-public-laundromat-with-laundry-basket-thailand_28914-1091.jpg',
    },
    {
      nama_barang: 'Setrika',
      keterangan: 'Setriak Pakaian Bersih',
      harga: 7000,
      uom: 'Kg',
      foto: 'https://image.cermati.com/q_70/w2g7erdjpoec5yzokapa',
    },
    {
      nama_barang: 'Boneka Kecil',
      keterangan: 'Cuci Boneka Kecil',
      harga: 20000,
      uom: 'Satuan',
      foto: 'https://images.unsplash.com/photo-1619233985563-fcba75ff25a5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=80',
    },
    {
      nama_barang: 'Boneka Besar',
      keterangan: 'Cuci Boneka Besar',
      harga: 30000,
      uom: 'Satuan',
      foto: 'https://ae01.alicdn.com/kf/HTB1TO07Bh9YBuNjy0Ffq6xIsVXaD/100-260Cm-Boneka-Besar-Beruang-Besar-Kulit-Beruang-Besar-Amerika-Beruang-Kerang-Besar-Boneka-Mewah-Mainan.jpg_Q90.jpg_.webp',
    },
  ]);

  const renderItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => navigation.navigate('Barang', item)}
        activeOpacity={1.0}>
        <Image style={styles.image} source={{uri: item.foto}} />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
          }}>
          <Text
            style={{
              fontFamily: fonts.secondary[600],
              fontSize: 14,
              flex: 1,
              backgroundColor: colors.primary,
              paddingHorizontal: 10,
              paddingVertical: 5,
              // borderBottomLeftRadius: 20,
              // borderTopRightRadius: 20,
              color: colors.white,
            }}>
            {item.nama_barang}
          </Text>
        </View>
        <View style={styles.detailsContainer}>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.title}>
              {' '}
              Rp. {new Intl.NumberFormat().format(item.harga)} / {item.uom}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
            }}>
            <Text style={styles.subTitle}>{item.keterangan}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <View
        style={{
          flex: 1,
          padding: 10,
          backgroundColor: '#FFF',
        }}>
        <View
          style={{
            flexDirection: 'row',
            // justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 5,
          }}>
          <Icon type="ionicon" name="grid" color={colors.primary} size={16} />
          <Text
            style={{
              fontFamily: 'Montserrat-SemiBold',
              color: colors.primary,
              left: 10,
              fontSize: 16,
            }}>
            LAYANAN KAMI
          </Text>
        </View>
        <FlatList
          // numColumns={2}
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: 'white',
  },
  card: {
    shadowColor: 'white',
    shadowColor: '#000',
    shadowOffset: {
      width: -10,
      height: 2,
    },
    shadowOpacity: 0.44,
    shadowRadius: 5.32,

    elevation: 5,

    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: 'white',
    marginBottom: 20,
    flex: 1,
    marginHorizontal: 5,
  },
  image: {
    width: '100%',
    height: 200,
  },
  detailsContainer: {
    padding: 10,
    flex: 1,
  },
  detailsContainerButton: {
    paddingHorizontal: 5,
  },
  title: {
    marginBottom: 7,
    fontFamily: 'Nunito-ExtraBold',
    fontSize: 18,
    color: colors.black,
  },
  subTitle: {
    // flex: 1,
    // backgroundColor: 'red',
    fontFamily: fonts.secondary[600],
    fontSize: 14,
    color: '#000',
    marginBottom: 5,
  },
});
