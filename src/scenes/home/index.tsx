import React, { useState, useEffect, useContext } from 'react';
import { Image, SafeAreaView, Text, View, FlatList, Dimensions, PermissionsAndroid} from 'react-native';
// import CheckBox from '@react-native-community/checkbox';
import { getStyles } from './styles'

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import images from 'src/themes/images';
import * as ImagePicker from "react-native-image-picker";
import RNFS from 'react-native-fs';
import { ThemeContext } from 'src/App';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { getStylesGlobal } from '../cssglobal';

const Manual = [
  { id: 1, image: images.icPhoto, title: 'Photos', content: 'Photos Cleaning', navigate: 'Photos' },
  { id: 2, image: images.icVideos, title: 'Videos', content: 'Videos Cleaning', navigate: 'Videos' },
  { id: 3, image: images.icContacts, title: 'Contacts', content: 'Contacts Cleaning', navigate: 'Contacts' },
  { id: 4, image: images.icCalendar, title: 'Calendar', content: 'Calendar Cleaning', navigate: 'Calendar' },
]

const windowWidth = Dimensions.get('window').width;
const itemWidth = (windowWidth / 2) - 20;

const HomeScreen = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  const styles = getStyles();
  const stylesGlobal = getStylesGlobal();
  const { theme } = useContext(ThemeContext);
  const arrow = theme === 'light' ? images.icArrowRightDark : images.icArrowRightWhite


  const requestContactsPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
        {
          title: 'Contacts Permission',
          message: 'This app requires access to your contacts.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('Contacts permission granted.');
        // Gọi hàm getContacts() để lấy danh sách liên hệ sau khi quyền được cấp
        // getContacts();
      } else {
        console.log('Contacts permission denied.');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <ScrollView>
      <SafeAreaView style={stylesGlobal.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={images.icClean}
            />
            <Text style={stylesGlobal.topic}>Wise Cleaner</Text>
          </View>
          <View style={styles.headerRight}>
            <Image style={styles.iconHeader} source={images.icDiamond} />
            <TouchableOpacity style={styles.imgSetting} onPress={() => navigation.navigate('Setting')}>
              <Image source={theme === 'light' ? images.icSettingBlack : images.icSettingWhite} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.clean}>
          <View style={styles.cleanContent}>
            <View style={styles.cleanLeft}>
              <View style={styles.storage}>
                <Text style={{fontSize: 18, fontWeight: '700'}}>19%</Text>
              </View>
              <Text style={[stylesGlobal.textGray,{color:'rgba(28, 28, 30, 0.4)'}]}> Storage Used </Text>
              <Text style={[stylesGlobal.title,{color: '#1C1C1E'}]}>192 GB</Text>
              <Text>of 512 GB</Text>
            </View>
            <View style={styles.cleanAll}>
              <View style={styles.cleanRight}>
                <View>
                  <Image style={styles.imageClean} source={images.icWifi} />
                </View>
                <View>
                  <Text style={[stylesGlobal.textGray,{color:'rgba(28, 28, 30, 0.4)'}]}>Download</Text>
                  <Text style={[stylesGlobal.title,{color: '#1C1C1E'}]}>0 KB/s</Text>
                </View>
              </View>
              <View style={styles.cleanRight}>
                <View>
                  <Image style={styles.imageClean} source={images.icRAM} />
                </View>
                <View>
                  <Text style={[stylesGlobal.textGray,{color:'rgba(28, 28, 30, 0.4)'}]}>Available</Text>
                  <Text style={[stylesGlobal.title,{color: '#1C1C1E'}]}>205 GB</Text>
                </View>
              </View>
              <View style={styles.cleanRight}>
                <View>
                  <Image style={styles.imageClean} source={images.icCPU} />
                </View>
                <View>
                  <Text style={[stylesGlobal.textGray,{color:'rgba(28, 28, 30, 0.4)'}]}>Used</Text>
                  <Text style={[stylesGlobal.title,{color: '#1C1C1E'}]}>50.7 GB</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.cleanButtonClean} onPress={() => navigation.navigate('QuickClean')}>
            <Image source={images.icClean} />
            <Text style={styles.textButtonClean}>Quick Cleaner</Text>
          </TouchableOpacity>
        </View>
        <Text style={[stylesGlobal.topic, { marginTop: 36, marginBottom: 4 }]}>Manual Cleaning</Text>
        <View style={styles.manual}>

          <FlatList
            data={Manual}
            numColumns={2}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item }) => (
              <View style={[styles.oneManual, { width: itemWidth }]}>
                <Image source={item.image} />
                <Text style={styles.titleManual}>{item.title}</Text>
                <TouchableOpacity onPress={() => navigation!.navigate(item.navigate)} style={styles.manualButton}>
                  <Text style={styles.textManual}>{item.content}</Text>
                  <Image source={arrow} />
                </TouchableOpacity>
              </View>
            )}
          />

        </View>
        <Text style={[stylesGlobal.topic, { marginBottom: 4 }]}> Discover</Text>
        <View style={styles.discover}>
          <Image source={images.icSpeed} />
          <View>
            <Text style={[stylesGlobal.title,{paddingHorizontal: 10}]}>Speed Test</Text>
            <Text style={[stylesGlobal.textGray,{paddingHorizontal: 10}]}>Check your internet connection</Text>
          </View>
          <View style={styles.imgArrowRight}>
            <Image source={arrow} />
          </View>
        </View>
        <Text style={[stylesGlobal.topic, { marginBottom: 4 }]}>How to Clean Up?</Text>
        <View style={styles.cleanUp}>
          <Image source={images.icTele} style={{ marginRight: 10 }} />
          <Image source={images.icWhatsaap} style={{ marginRight: 10 }} />
          <Image source={images.icViber} />
          <View >
            <Text style={[stylesGlobal.title, { width: '80%',paddingHorizontal: 10, }]}>View Stories</Text>
            <Text style={[stylesGlobal.textGray, { width: '80%',paddingHorizontal: 10, }]}>Discover how to optimizze your iPhone Storage</Text>
          </View>
          <View style={styles.imgArrowRight}>
            <Image source={arrow} />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>

  );
};

export default HomeScreen;
