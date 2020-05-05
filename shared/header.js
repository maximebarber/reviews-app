import * as React from 'react';
import {
  View, Text, StyleSheet, Dimensions,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';


const Header = ({ navigation, title }) => {
  const openDrawer = () => {
    navigation.openDrawer();
  };

  return (
    <View style={styles.header}>
      <MaterialIcons name="menu" size={28} style={styles.icon} onPress={openDrawer} />
      <View>
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
    fontFamily: 'Victor-Mono-Bold',
    fontSize: 20,
    color: '#fff',
    letterSpacing: 1,
  },
  icon: {
    position: 'absolute',
    left: 16,
    color: '#fff',
  },
});

export default Header;
