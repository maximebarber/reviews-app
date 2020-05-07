import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions, Image,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const heartLogo = require('../assets/images/heart_logo.png');


const Header = ({ navigation, title }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openDrawer} />
      <View style={styles.headerTitle}>
        <Image style={styles.heartLogo} source={heartLogo} />
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    fontFamily: 'VictorMono-SemiBoldItalic',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
    color: '#fff',
  },
  headerTitle: {
    flexDirection: 'row',
  },
  heartLogo: {
    height: 26,
    width: 26,
    marginRight: 10,
  },
});

export default Header;
