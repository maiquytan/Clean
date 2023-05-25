import React, { useContext } from 'react'
import { Button, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import images from 'src/themes/images'
import {getStyles} from './styles'
import {ThemeContext} from '../../App'
import { ScrollView } from 'react-native-gesture-handler'

const Setting = () => {
  const { theme, setTheme } = useContext(ThemeContext);
  const styles = getStyles();
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View style={styles.back}>
            <Image source={images.icLeftBlue} />
            <Text style={styles.backText}>Back</Text>
          </View>
          <Text style={styles.titleHeader}>Settings</Text>
        </View>
        <View style={styles.banner}>
          <Image source={images.icBanner} style={{ width: '100%', height: 100 }} />
          <View style={styles.contentBanner}>
            <Text style={styles.titleBanner}>Wise Cleaner Pro</Text>
            <Text style={styles.textBanner}>Access All Features</Text>
            <TouchableOpacity style={styles.buttonBanner}>
              <Text style={styles.buttonTextBanner}>Update</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.imgBanner}>
            <Image source={images.icImgBanner} />
          </View>
        </View>
        <Text style={styles.titleSetting}>SECRET LIBRARY</Text>
        <View style={styles.oneSetting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.icPasscode} />
            <Text style={styles.textSetting}>Use Passcode</Text>
          </View>
          <View>
            <Image source={images.icSwitch} />
          </View>
        </View>
        <View style={[styles.horizontalRule, { marginHorizontal: 16 }]} />
        <View style={styles.oneSetting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.icUseID} />
            <Text style={styles.textSetting}>Use ID</Text>
          </View>
          <View>
            <Image source={images.icSwitch} />
          </View>
        </View>
        <View style={styles.horizontalRule} />
        <Text style={styles.titleSetting}>REMOVE AFTER IMPORT</Text>
        <View style={styles.oneSetting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.icPhotoVideo} />
            <Text style={styles.textSetting}>Photos & Videos</Text>
          </View>
          <View>
            <Image source={images.icSwitch} />
          </View>
        </View>
        <View style={[styles.horizontalRule, { marginHorizontal: 16 }]} />
        <View style={styles.oneSetting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.icContact} />
            <Text style={styles.textSetting}>Contacts</Text>
          </View>
          <View>
            <Image source={images.icSwitch} />
          </View>
        </View>
        <View style={[styles.horizontalRule, { marginBottom: 20 }]} />
        <View style={styles.horizontalRule} />
        <View style={styles.oneSetting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.icTheme} />
            <Text style={styles.textSetting}>Theme</Text>
          </View>
          <View style={styles.theme}>
            <TouchableOpacity style={[styles.lightdark,{backgroundColor: theme==='light'? '#141718':'transparent'}]} onPress={()=>setTheme('light')}>
              <Image source={images.icSun} />
              <Text style={[styles.textTheme,styles.textLight]}>Light</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.lightdark,{backgroundColor: theme==='light'? 'transparent' :'#FFFFFF'}]} onPress={()=>setTheme('dark')}>
              <Image source={images.icMoon}/>
              <Text style={[styles.textTheme,styles.textDark]}>Dark</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.horizontalRule} />
        <Text style={styles.titleSetting}>GENERAL</Text>
        <View style={styles.oneSetting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.icReminder} />
            <Text style={styles.textSetting}>Reminder</Text>
          </View>
          <View>
            <Image source={images.icSwitch} />
          </View>
        </View>
        <View style={styles.horizontalRule} />
        <View style={styles.oneSetting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.icCharging} />
            <Text style={styles.textSetting}>My Charging</Text>
          </View>
          <View>
            <Image source={images.icRightGray} />
          </View>
        </View>
        <View style={[styles.horizontalRule, { marginHorizontal: 16 }]} />
        <View style={styles.oneSetting}>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={images.icFeedback} />
            <Text style={styles.textSetting}>Feedback</Text>
          </View>
          <View>
            <Image source={images.icRightGray} />
          </View>
        </View>
        <View style={styles.horizontalRule} />
        <View style={styles.oneSetting}>
          <Text style={styles.textSetting}> Term of Service </Text>
          <Image source={images.icRightGray} />
        </View>
        <View style={[styles.horizontalRule, { marginHorizontal: 16 }]} />
        <View style={styles.oneSetting}>
          <Text style={styles.textSetting}> Privacy Policy </Text>
          <Image source={images.icRightGray} />
        </View>
        <View style={[styles.horizontalRule, { paddingLeft: 16 }]} />
        <View style={styles.oneSetting}>
          <Text style={styles.textSetting}> Clear Caches </Text>
          <Text style={styles.textCaches}> 0.00 MB</Text>
        </View>
        <View style={[styles.horizontalRule,{marginBottom: 80}]} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Setting
