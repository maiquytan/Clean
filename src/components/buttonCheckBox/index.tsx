import React, { useState } from 'react';
import { TouchableOpacity, View, Text, StyleSheet ,Image } from 'react-native';
import images from 'src/themes/images';

interface CheckboxButtonProps {
  checked: boolean;
}

const CheckboxButton: React.FC<CheckboxButtonProps> = ({ checked }) => {
  const [isChecked, setIsChecked] = useState<boolean>(checked);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={handleCheckboxToggle}
    >
      {isChecked ===false && (
        <View style={styles.box}></View>
      )}
      {isChecked ===true && (
        <View style={styles.checked}>
          <Image source={images.icCheck}/>
        </View>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  box: {
    backgroundColor: 'transparent',
    width: 20,
    height: 20,
    borderColor: 'rgba(28, 28, 30, 0.6)',
    borderWidth: 2 ,
    borderStyle: 'solid',
    borderRadius: 5,
  },
  checked: {
    backgroundColor: '#0A84FF',
    width: 20,
    height: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CheckboxButton;
