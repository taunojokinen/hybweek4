import { StatusBar,Text,Pressable,} from 'react-native';
import { FlatList, SafeAreaView, View } from 'react-native';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Row from './components/Row.js';
import styles from './styles/Styles.js';
import Add from './components/Add.js';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = '@items_key'

export default function App() {
  const [data, setData] = useState([ ])
  const [selectedId, setSelectedId] = useState(null)

  useEffect(() => {
    getData()
  }, [])
  

  useEffect(() => {
    console.log('Storing data:', data);
    storeData(data)
  }, [data])  



  const add = useCallback((name) => {
    const newItem = {
      id: uuid.v4(),
      name: name,
      strikeThrough: false
    }
    const tempData = [...data, newItem]
    console.log('Adding new item:', newItem);
    console.log('Updated data:', tempData);
    setData(tempData)
  }, [data])

  const select = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const getData = async () => { 
    try {
      const value = await AsyncStorage.getItem(STORAGE_KEY)
      let json = JSON.parse(value)
      if (json === null) {
        json = []
      }
      console.log('Fetched data:', json);
      setData(json)
    } catch(ex) {
      console.log('Error fetching data:', ex);
    }
  }

  const storeData = async (value) => {
    try {
      const json = JSON.stringify(value)
      await AsyncStorage.setItem(STORAGE_KEY, json)
      console.log('Data stored successfully');
    } catch (ex) {
      console.log('Error storing data:', ex);
    }
  }

  return (
    
    <SafeAreaView style={styles.view}>
      <Text style={styles.header}>Todo List</Text>  
      <Add  add={add} setData ={setData} />

    
      <FlatList style={styles.flatlist}
        data={data}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
        renderItem={({ item }) => (
          <Row 
          style={styles.rowText}
            item={item} 
            selectedId ={selectedId}
            select={select}
            data={data}
            setData={setData} 
            />
        )}
      />
    </SafeAreaView>
  );
}
