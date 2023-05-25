import React, { useState, useEffect } from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStyles } from './styles'
import RNFS from 'react-native-fs';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

const Sort = [
  { id: 1, title: 'All' },
  { id: 2, title: 'Year' },
  { id: 3, title: 'Month' },
  { id: 4, title: 'Week' },
  { id: 5, title: '24 Hours' },
]

const PhotoCleaning = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  const styles = getStyles();
  const [photos, setPhotos] = useState<string[]>([]);
  const [photoScreenshot, setPhotoScreenShot] = useState<string[]>([]);
  const [fetchTrigger, setFetchTrigger] = useState(false);

  const fetchImages = async () => {
    const externalDir = RNFS.ExternalStorageDirectoryPath;
    const picturesDir = `${externalDir}/Pictures/.thumbnails`;
    const picturesDirScreen = `${externalDir}/Pictures/Screenshots`;

    const imageExtensions = ['.jpg', '.png', '.jpeg'];
    const files = await RNFS.readDir(picturesDir);
    const files1 = await RNFS.readDir(picturesDirScreen);
    try {
      const imagePaths = files.filter((file) => {
        const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        return file.isFile() && imageExtensions.includes(fileExtension);
      }).map((file) => `file://${file.path}`);
      const imagePaths1 = files1.filter((file) => {
        const fileExtension = file.name.substring(file.name.lastIndexOf('.')).toLowerCase();
        return file.isFile() && imageExtensions.includes(fileExtension);
      }).map((file) => `file://${file.path}`);
      setPhotos(imagePaths);
      setPhotoScreenShot(imagePaths1)
      console.log('List of images:', imagePaths1);
      // Xử lý danh sách ảnh đã lấy được
    } catch (error) {
      console.log('Error fetching images:', error);
    }
  };

  useEffect(() => {
    if (fetchTrigger) {
      fetchImages();
      setFetchTrigger(false); // Đặt lại giá trị của fetchTrigger sau khi đã gọi fetchImages
    }
  }, [fetchTrigger]);

  useEffect(() => {
    setFetchTrigger(true); // Kích hoạt fetchImages khi component được mount
  }, []);

  const ImageList = ({ data }: { data: string[] }) => {
    const renderItem = ({ item }: { item: string }) => (
      <View style= {{backgroundColor: 'red'}}>
        <Image source={{ uri: item }} style={styles.image} />
      </View>
    );
    const limitedData = data.slice(0, 4);

    return (
      <View style={styles.listPhoto}>
        <FlatList
          data={limitedData}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          horizontal
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.titlePhoto}>Photos Clean Up</Text>
            <Text style={styles.textPhoto}>2130 Photos • 9.56 GB</Text>
          </View>
          <View>
            <Text>Sort: </Text>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleContent}>Screenshot</Text>
          <ImageList data={photos} />
          <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Screenshot', { data: photoScreenshot })}
          >
            <Text style={styles.titleButton}>Clear Up Now</Text>
            <Text style={styles.textButton}>102 Photos • 2.3GB</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleContent}>Duplicate Photos</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton}>Clear Up Now</Text>
            <Text style={styles.textButton}>102 Photos • 2.3GB</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleContent}>Similar Photos</Text>
          <ImageList data={photoScreenshot} />
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton}>Clear Up Now</Text>
            <Text style={styles.textButton}>102 Photos • 2.3GB</Text>
          </TouchableOpacity>
        </View>


      </ScrollView>
    </SafeAreaView>
  )
}

export default PhotoCleaning;
