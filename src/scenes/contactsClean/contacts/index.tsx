import React, { useState } from 'react'
import { View, Image } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import images from 'src/themes/images';

const Contacts = () => {
  const [search, setSearch] = useState('');
  return (
    <SafeAreaView>
      <ScrollView>
        <View>
          <Image source={images.icSearch} />
          <TextInput
            // style={styles.input}
            onChangeText={e => setSearch(e)}
            value={search}
            placeholder="Search via name, number or email"
            // keyboardType="numeric"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Contacts
