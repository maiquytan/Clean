import React, {memo} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';

import navigationService from 'src/services/navigationService';
import {colors, fonts, images, metrics} from 'src/themes';
import {scale} from 'src/themes/mixins';
import {Divider, Icon} from '../atoms';
interface NavBarProps {
  isShowLeftIcon?: boolean;
  title?: string;
  onClickLeftIcon?: () => void;
  renderLeftView?: React.ComponentType<any> | React.ReactElement | null;
  renderRightView?: React.ComponentType<any> | React.ReactElement | null;
  onRightClick?: () => void;
  titleStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  showDivider?: boolean;
  leftRightWidthPercent?: string;
}

const NavBar: React.FC<NavBarProps> = ({
  renderLeftView,
  renderRightView,
  isShowLeftIcon = true,
  title,
  onClickLeftIcon = () => navigationService.goBack(),
  onRightClick = () => {
    // do something
  },
  titleStyle,
  containerStyle,
  showDivider = true,
  leftRightWidthPercent = '20%',
}) => {
  return (
    <>
      <View style={StyleSheet.flatten([styles.container, containerStyle])}>
        <TouchableOpacity
          onPress={onClickLeftIcon}
          style={[styles.leftContainer, {width: leftRightWidthPercent}]}>
          {renderLeftView ? (
            <View>{renderLeftView}</View>
          ) : isShowLeftIcon ? (
            <Icon source={images.icArrowLeft} style={styles.iconLeft} />
          ) : null}
        </TouchableOpacity>

        <View style={StyleSheet.flatten([styles.labelContainer, titleStyle])}>
          <Text style={styles.label} numberOfLines={1}>
            {title}
          </Text>
        </View>
        <TouchableOpacity
          style={[styles.rightContainer, {width: leftRightWidthPercent}]}
          onPress={onRightClick}>
          {renderRightView ? renderRightView : <View />}
        </TouchableOpacity>
      </View>
      {showDivider && <Divider />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: metrics.navBarHeight,
    backgroundColor: colors.white,
    paddingHorizontal: scale(16),
  },
  rightContainer: {
    height: metrics.navBarHeight,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  labelContainer: {
    flex: 1,
    height: metrics.navBarHeight,
    justifyContent: 'center',
  },
  label: {
    textAlign: 'center',
    ...fonts.style.regularBold,
  },
  leftContainer: {
    height: metrics.navBarHeight,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  iconLeft: {
    width: scale(12),
    height: scale(20),
    tintColor: colors.primary,
  },
});

export default memo(NavBar);
