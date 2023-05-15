import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import RNFS from 'react-native-fs';

const ImageList = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Scan and load images from device storage
    const scanImages = async () => {
      try {
        const imageDir = RNFS.PicturesDirectoryPath; // Change to your desired directory
        const imageFiles = await RNFS.readDir(imageDir);
        const imagePaths = imageFiles.map((file) => file.path);
        setImages(imagePaths);
      } catch (error) {
        console.log('Error scanning images:', error);
      }
    };

    scanImages();
  }, []);

  const handleImagePicker = () => {
    const options = {
      title: 'Select Image',
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error:', response.error);
      } else {
        // Handle selected image
        const imagePath = response.uri;
        // Perform image comparison logic here
      }
    });
  };

  const handleImagePress = (imagePath) => {
    // Handle image press event here
    console.log('Image pressed:', imagePath);
  };

  const renderItem = ({ item }) => (
    <View>
      <TouchableOpacity onPress={() => handleImagePress(item)}>
        <Image source={{ uri: item }} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>
    </View>
  );

  return (
    <View>
      <TouchableOpacity onPress={handleImagePicker}>
        <Text>Select Image</Text>
      </TouchableOpacity>
      <FlatList
        data={images}
        renderItem={renderItem}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default ImageList;
