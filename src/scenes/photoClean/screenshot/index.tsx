import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getStyles } from './styles';

const Screenshot = ({ route }: { route: any }) => {
  const styles = getStyles();
  const { data } = route.params;
  console.log(data)

  const ImageList = ({ data }: { data: string[] }) => {
    const renderItem = ({ item }: { item: string }) => (
      <Image source={{ uri: item }} style={styles.image} />
    );
    const formatData = (data: string[], numColumns: number) => {
      const numberOfFullRows = Math.floor(data.length / numColumns);
      let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;

      while (
        numberOfElementsLastRow !== numColumns &&
        numberOfElementsLastRow !== 0
      ) {
        data.push('');
        numberOfElementsLastRow++;
      }

      return data;
    };

    return (
      <View style={styles.listPhoto}>
        <FlatList
          data={formatData(data, 3)}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          numColumns={3}
        // horizontal
        />
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={{ padding: 8 }}>
          <Text style={styles.titlePhoto}>Screenshot</Text>
          <Text style={styles.textPhoto}>29 Photos</Text>
        </View>
        <ImageList data={data} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Screenshot
