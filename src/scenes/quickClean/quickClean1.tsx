import React, { useState } from 'react'
import { FlatList, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { getStyles } from './styles'
import { getStylesGlobal } from '../cssglobal'
import CheckboxButton from 'src/components/buttonCheckBox'
import { NavigationProp, ParamListBase } from '@react-navigation/native'

const Clean = [
  { id: 1, title: 'Screenshots', content: '75.7 MB/ 29 Photos' },
  { id: 2, title: 'Duplicate Photos', content: '75.7 MB/ 29 Photos' },
  { id: 3, title: 'Similar Photos', content: '75.7 MB/ 29 Photos' },
  { id: 4, title: 'Similar Live Photos', content: '75.7 MB/ 29 Photos' },
  { id: 5, title: 'Similar Burts Photos', content: '75.7 MB/ 29 Photos' },
  { id: 6, title: 'Burts Photos', content: '75.7 MB/ 29 Photos' },
]

const QuickClean = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  const styles = getStyles();
  const stylesGlobal = getStylesGlobal();

  const renderItem = ({ item }: { item: { title: string, content: string } }) => (
    <View style={styles.cleanContent}>
      <CheckboxButton checked={true}/>
      <View>
        <Text style={stylesGlobal.title}>{item.title}</Text>
        <Text style={stylesGlobal.textGray}>{item.content}</Text>
      </View>
    </View>
  );
  return (
    <SafeAreaView style={stylesGlobal.container}>
      <ScrollView>
        <View style={styles.cleanCircle}>
          <View style={styles.round1}>
            <View style={styles.round2}>
              <View style={styles.round3}>
                <TouchableOpacity style={styles.round4} onPress={() => navigation.navigate('QuickClean2')}>
                  <Text style={{ fontWeight: '500' }}>25%</Text>
                  <Text style={{ fontSize: 13, color: 'rgba(0, 0, 0, 0.4)' }}>to Clean Up</Text>
                  <Text style={{ fontSize: 24, fontWeight: 'bold' }}> 7.2 GB</Text>
                </TouchableOpacity>
                <View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <FlatList data={Clean}
        style={{marginBottom: 30}}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default QuickClean;
