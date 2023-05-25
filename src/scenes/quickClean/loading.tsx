import { NavigationProp, ParamListBase } from '@react-navigation/native';
import React, { useState, useEffect, useRef } from 'react'
import { Image, Text, View, StyleSheet, Animated, Easing } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context'
import images from 'src/themes/images';

const colors = ['#FFB340', '#4075FF', '#FF404B']

const Loading = ({ navigation }: { navigation: NavigationProp<ParamListBase> }) => {
  const [backgroundColor, setBackgroundColor] = useState(colors[0]);
  const rotation = useRef(new Animated.Value(0)).current;
  const [isRunning, setIsRunning] = useState(true);
  const [dotCount, setDotCount] = useState(1);

  //Thay đổi màu nền
  useEffect(() => {
    const interval = setInterval(() => {
      // Thay đổi màu nền sau mỗi 5 giây
      const currentIndex = colors.indexOf(backgroundColor);
      const nextIndex = (currentIndex + 1) % colors.length;
      setBackgroundColor(colors[nextIndex]);
    }, 5000);

    // Dừng interval sau 15 giây
    setTimeout(() => {
      clearInterval(interval);
      setIsRunning(false);
      navigation.navigate('QuickClean2', { successMessage: 'Xóa thành công!' });
    }, 15000);

    return () => {
      clearInterval(interval);
    };
  }, [backgroundColor]);

  //Xoay ảnh
  useEffect(() => {
    const rotateAnimation = Animated.loop(
      Animated.timing(rotation, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    );

    if (isRunning) {
      rotateAnimation.start();
    } else {
      rotateAnimation.stop();
    }

    return () => {
      rotateAnimation.stop();
    };
  }, [isRunning]);

  const rotateInterpolation = rotation.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  //Chuyển động dấu ...
  useEffect(() => {
    if (isRunning) {
      const interval = setInterval(() => {
        setDotCount((prevCount) => (prevCount === 3 ? 1 : prevCount + 1));
      }, 500);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isRunning]);

  const renderDots = () => {
    const dots = [];
    for (let i = 1; i <= dotCount; i++) {
      dots.push(<View key={i} style={[styles.dot,i > 1 && styles.dotMargin]} />);
    }
    return dots;
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>

      <View>
        <Animated.Image source={images.icAnimation} style={{ transform: [{ rotate: rotateInterpolation }], }} />
      </View>
      <Text style={styles.textLoading}>Waiting to delete {renderDots()}</Text>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    alignItems: 'center',
    position: 'relative',
  },
  textLoading: {
    fontSize: 17,
    fontWeight: '600',
    color: '#FFFFFF',
    marginBottom: 49,
    position: 'absolute',
    bottom: 50,
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 1,
    backgroundColor: '#FFFFFF',
  },
  dotMargin: {
    marginRight: 5,
  },
})

export default Loading
