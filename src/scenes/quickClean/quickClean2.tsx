import React, { useState, useEffect } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, View, Modal } from 'react-native'
import CheckboxButton from 'src/components/buttonCheckBox'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { NavigationProp, ParamListBase, RouteProp } from '@react-navigation/native'

import { getStylesGlobal } from '../cssglobal'
import { getStyles } from './styles'
import { HOME_SCREEN } from 'src/navigation/appRouters'

const Clean = [
  { id: 1, title: 'Screenshots', content: '75.7 MB/ 29 Photos' },
  { id: 2, title: 'Duplicate Photos', content: '75.7 MB/ 29 Photos' },
  { id: 3, title: 'Similar Photos', content: '75.7 MB/ 29 Photos' },
  { id: 4, title: 'Similar Live Photos', content: '75.7 MB/ 29 Photos' },
  { id: 5, title: 'Similar Burts Photos', content: '75.7 MB/ 29 Photos' },
  { id: 6, title: 'Burts Photos', content: '75.7 MB/ 29 Photos' },
]
type QuickClean2RouteProp = RouteProp<ParamListBase, 'QuickClean2'>;

type QuickClean2Props = {
  navigation: NavigationProp<ParamListBase, 'QuickClean2'>;
  route: QuickClean2RouteProp & {
    params: {
      successMessage?: string;
    };
  };
};

const QuickClean2 = ({ navigation, route }: QuickClean2Props) => {
  const styles = getStyles();
  const stylesGlobal = getStylesGlobal();
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  useEffect(() => {
    const successMessage = route.params?.successMessage || '';
    if (successMessage) {
      setShowSuccessModal(true);
    }
    // Do something with the navigation state...
  }, [route.params]);

  const renderItem = ({ item }: { item: { title: string, content: string } }) => (
    <View style={styles.cleanContent}>
      <CheckboxButton checked={true} />
      <View>
        <Text style={stylesGlobal.title}>{item.title}</Text>
        <Text style={stylesGlobal.textGray}>{item.content}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={[stylesGlobal.container, { position: 'relative' }]}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={stylesGlobal.textGray}>to Clean Up</Text>
          <Text style={{ fontSize: 24, fontWeight: 'bold' }}> 13GB </Text>
        </View>
        <View style={styles.colorBar}>
          <View style={styles.colorBlock1}></View>
          <View style={styles.colorBlock2}></View>
          <View style={styles.colorBlock3}></View>
        </View>
        <View style={styles.explanation}>
          <View style={[styles.dot, { backgroundColor: '#32D74B' }]}></View>
          <Text style={[stylesGlobal.textGray, { marginRight: 20 }]}>Screenshots</Text>
          <View style={[styles.dot, { backgroundColor: '#FF453A' }]}></View>
          <Text style={[stylesGlobal.textGray, { marginRight: 20 }]}>Photos</Text>
          <View style={[styles.dot, { backgroundColor: '#FF9F0A' }]}></View>
          <Text style={[stylesGlobal.textGray, { marginRight: 20 }]}>Videos</Text>
        </View>
        <Text style={[stylesGlobal.textGray, { marginTop: 23, marginBottom: 4 }]}>CALENDAR</Text>
        <View style={styles.cleanContent}>
          <CheckboxButton checked={true} />
          <View>
            <Text style={stylesGlobal.title}>Calendar</Text>
            <Text style={stylesGlobal.textGray}>Event: 1</Text>
          </View>
        </View>
        <Text style={[stylesGlobal.textGray, { marginTop: 23, marginBottom: 4 }]}>PHOTOS AND VIDEOS</Text>
        <FlatList data={Clean}
          style={{ marginBottom: 80 }}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
        />
        {showSuccessModal && (
          <Modal >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={stylesGlobal.caption}>Do you Want to Exit</Text>
                <Text style={[stylesGlobal.title, { fontWeight: '400' }]}>Your current search progress will be lost</Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={[styles.button,styles.cancel]} onPress={() => setShowSuccessModal(false)}>
                    <Text style={[stylesGlobal.caption, { backgroundColor: 'rgba(28, 28, 30, 0.6)' }]}>Cancel</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(HOME_SCREEN)}>
                    <Text style={[stylesGlobal.caption, { backgroundColor: '#FFFFFF' }]}>OK</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        )}
      </ScrollView>
      <View style={styles.viewCleanUp}>
        <TouchableOpacity style={styles.buttonClean} onPress={() => navigation.navigate('Loading')}>
          <Text style={[stylesGlobal.caption, { color: '#FFFFFF' }]}>Cleaner Up</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default QuickClean2;
