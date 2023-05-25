import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import RNFS from 'react-native-fs';
import { ScrollView } from 'react-native-gesture-handler';
import { getStyles } from './styles';
import Video from 'react-native-video';


const VideoCleaning = () => {
  const [videos, setVideos] = useState<string[]>([]);
  const styles = getStyles();

  const isVideoFile = (fileName: string) => {
    const videoExtensions = ['.mp4', '.mov', '.avi']; // Các phần mở rộng của video hợp lệ
    const fileExtension = fileName.substr(fileName.lastIndexOf('.')).toLowerCase();
    return videoExtensions.includes(fileExtension);
  };

  const fetchVideos = async () => {
    const externalDir = RNFS.ExternalStorageDirectoryPath;
    const cameraDir = `${externalDir}/DCIM/Camera`; // Đường dẫn thư mục chứa video từ máy ảnh
    const files = await RNFS.readDir(cameraDir);
    try {
      const videoPaths = files
        .filter((file) => file.isFile() && isVideoFile(file.name))
        .map((file) => file.path);
      setVideos(videoPaths);
      console.log('List of videos:', videoPaths);
      // Xử lý danh sách video đã lấy được
    } catch (error) {
      console.log('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  const VideoList = ({ data }: { data: string[] }) => {
    const renderItem = ({ item }: { item: string }) => (
      <View >
        <Video
          source={{ uri: item }}
          // style={styles.video}
          resizeMode="contain"
          controls
        />
      </View>
    );

    return (
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.titlePhoto}>Videos Clean Up</Text>
            <Text style={styles.textPhoto}>55 Videos • 14.9 GB</Text>
          </View>
          <View>
            <TouchableOpacity>
              <Text>Sort: </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleContent}>Similar Videos</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton}>Clear Up Now</Text>
            <Text style={styles.textButton}>12 videos • 5.3GB</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleContent}>Duplicate Videos</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton}>Clear Up Now</Text>
            <Text style={styles.textButton}>0 videos • 0GB</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text style={styles.titleContent}>All Videos</Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.titleButton}>Clear Up Now</Text>
            <Text style={styles.textButton}>55 videos • 9.6GB</Text>
          </TouchableOpacity>
        </View>
        <VideoList data={videos} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default VideoCleaning
