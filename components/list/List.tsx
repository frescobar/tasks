import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import useFetch from '../../hooks/useFetch';
import { ListInterface } from '../../models/ListInterface';
import Loading from '../loading/Loading';

function List() {
  const dataUrl = "https://6172cfe5110a740017222e2b.mockapi.io/elements";
  const fetchData = useFetch(dataUrl);
  const { data, loading, error } = fetchData;
  const [imageError, setImageError] = useState(false);

  const renderList = ({ item }: { item: ListInterface }) => {
    const createdAt = new Date(item.createdAt).toLocaleString();

    return (
      <View style={styles.listItem}>
        <Image
          source={imageError ? require('../assets/Default_pfp.svg.png') : { uri: item.avatar }}
          style={styles.avatar}
          onError={() => setImageError(true)}
        />
        <View style={styles.itemDetails}>
          <Text style={styles.itemName}>{item.name}</Text>
          <Text style={styles.creationDate}>Created at: {createdAt}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {loading && <Loading />}
      {error && <Text>{error}</Text>}
      {data && (
        <FlatList
          data={data}
          renderItem={renderList}
          keyExtractor={(item) => item.id}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    borderBottomColor: '#d7d3d3',
    borderBottomWidth: 0.5,
    paddingBottom: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  itemDetails: {
    flex: 1,
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  creationDate: {
    fontSize: 12,
    color: 'gray',
  },
});

export default List;
