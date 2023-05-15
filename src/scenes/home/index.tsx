import React from 'react';
import { Image, SafeAreaView, Text, View, } from 'react-native';

import { Header } from 'src/components/molecules';
import styles from './styles';

import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import images from 'src/themes/images';
import { useNavigation } from '@react-navigation/native';
// import {LinearGradient} from 'react-native-linear-gradient';

const Manual = [
  { id: 1, image: images.icPhoto, title: 'Photos', content: 'Photos Cleaning' },
  { id: 2, image: images.icVideos, title: 'Videos', content: 'Videos Cleaning' },
  { id: 3, image: images.icContacts, title: 'Contacts', content: 'Contacts Cleaning' },
  { id: 4, image: images.icCalendar, title: 'Calendar', content: 'Calendar Cleaning' },
]

const HomeScreen = () => {

  const navigation = useNavigation();

  // const handlePhotoCleaningPress = () => {
  //   navigation.navigate('ImageList'); // Chuyển sang màn hình ImageList
  // };

  return (
    <SafeAreaView >
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <Image
              source={images.icClean}
            />
            <Text style={styles.title}>Wise Cleaner</Text>
          </View>
          <View style={styles.headerRight}>
            <Image style={styles.iconHeader} source={images.icDiamond} />
            <TouchableOpacity>
              <Image source={images.icSetting} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.clean}>
          <View style={styles.cleanContent}>
            <View style={styles.cleanLeft}>
              <View style={styles.storage}>
              <Text>19%</Text>
              </View>
              <Text style={styles.titleClean}> Storage Used </Text>
              <Text style={styles.textClean}>192 GB</Text>
              <Text>of 512 GB</Text>
            </View>
            <View style={styles.cleanAll}>
              <View style={styles.cleanRight}>
                <View>
                  <Image style={styles.imageClean} source={images.icWifi} />
                </View>
                <View>
                  <Text style={styles.titleClean}>Download</Text>
                  <Text style={styles.textClean}>0 KB/s</Text>
                </View>
              </View>
              <View style={styles.cleanRight}>
                <View>
                  <Image style={styles.imageClean} source={images.icRAM} />
                </View>
                <View>
                  <Text style={styles.titleClean}>Available</Text>
                  <Text style={styles.textClean}>205 GB</Text>
                </View>
              </View>
              <View style={styles.cleanRight}>
                <View>
                  <Image style={styles.imageClean} source={images.icCPU} />
                </View>
                <View>
                  <Text style={styles.titleClean}>Used</Text>
                  <Text style={styles.textClean}>50.7 GB</Text>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity style={styles.cleanButtonClean}>
            <Image source={images.icClean} />
            <Text style={styles.textButtonClean}>Quick Cleaner</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.title}>Manual Cleaning</Text>
        <View>
          {Manual.map((man, index) => (
            <View key={index}>
              <Image source={man.image} />
              <Text style={styles.titleManual}>{man.title}</Text>
              <TouchableOpacity >
                <Text style={styles.textManual}>{man.content}</Text>
              </TouchableOpacity>
              <Image source={images.icArrowRight} />
            </View>
          ))}
        </View>
        <Text style={styles.title}> Discover</Text>
        <View>
          <Image source={images.icSpeed} />
          <View>
            <Text>Speed Test</Text>
            <Text>Check your internet connection</Text>
          </View>
          <Image source={images.icArrowRight} />
        </View>
        <Text style={styles.title}>How to Clean Up?</Text>
        <View>
          <Image source={images.icTele} />
          <Image source={images.icWhatsaap} />
          <Image source={images.icViber} />
          <View>
            <Text>View Stories</Text>
            <Text>Discover how to optimizze your iPhone Storage</Text>
          </View>
          <Image source={images.icArrowRight} />
        </View>
      </ScrollView>
    </SafeAreaView>

  );
};

export default HomeScreen;
