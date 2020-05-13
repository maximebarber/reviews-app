import React, { useState } from 'react';
import {
  Text, View, FlatList, TouchableOpacity, Modal, StyleSheet, Button,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { globalStyles } from '../styles/global';
import Card from '../shared/card';

const Home = ({ navigation }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [reviews] = useState([
    {
      title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'lorem ipsum', key: 1,
    },
    {
      title: 'Gotta catch Them All(again)', rating: 4, body: 'lorem ipsum', key: 2,
    },
    {
      title: 'Not So "Final" Fantasy', rating: 3, body: 'lorem ipsum', key: 3,
    },
  ]);
  return (
    <View style={globalStyles.container}>

      <Modal animationType="slide" visible={modalOpen}>
        <View style={styles.modalContent}>
          <MaterialIcons name="close" size={24} onPress={() => setModalOpen(false)} style={{ ...styles.modalToggle, ...styles.modalClose }} />
          <Text>Hello from the modal</Text>
        </View>
      </Modal>

      <MaterialIcons name="add" size={24} onPress={() => setModalOpen(true)} style={styles.modalToggle} />

      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
});

export default Home;
