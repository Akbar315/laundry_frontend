import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  ActivityIndicator,
} from 'react-native';
// import { fetchData } from '../utils/ApiService'; // Make sure this works with your base URL
import {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {useMutation} from '../utils/ApiService';

const Adoption = () => {
  const [selectedCategory, setSelectedCategory] = useState('all'); // all, dog, cat, etc.
  const [pets, setPets] = useState([]);
  const {fetchData, loading, data} = useMutation();

  const navigation = useNavigation();

  // Fetch data when component mounts
  useEffect(() => {
    fetchPets();
  }, []);

  // Fetch pets from API
  const fetchPets = async () => {
    try {
      const response = await fetchData('pet-listings'); // Updated API endpoint
      console.log('Fetched Pets:', response);
      setPets(response);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching pets:', error);
      setLoading(false);
    }
  };

  // Filter pets based on category
  const filterPets = () => {
    if (selectedCategory === 'all') return pets;
    return pets.filter(pet => pet.type === selectedCategory);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>takee</Text>

      <View style={styles.categoryContainer}>
        {['all', 'cat', 'dog', 'birds'].map(category => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.activeCategory,
            ]}
            onPress={() => setSelectedCategory(category)}>
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.activeText,
              ]}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#FF7F50" />
      ) : (
        <FlatList
          data={filterPets()}
          numColumns={2}
          keyExtractor={item => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => (
            <View style={styles.card}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('Adopt_petdetails', {pet: item})
                }>
                <Image
                  source={{uri: item.petImageUrl}}
                  style={styles.petImage}
                />
              </TouchableOpacity>
              <Text style={styles.petName}>{item.petName}</Text>
              <Text style={styles.petAge}>Age: {item.age} yrs</Text>
              <Text style={styles.petBreed}>{item.breed}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default Adoption;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#222',
    marginBottom: 20,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  categoryButton: {
    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 20,
    backgroundColor: '#EAEAEA',
  },
  activeCategory: {
    backgroundColor: '#FF7F50',
  },
  categoryText: {
    fontSize: 16,
    color: '#555',
  },
  activeText: {
    color: 'white',
    fontWeight: 'bold',
  },
  card: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 12,
    margin: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {width: 0, height: 2},
    elevation: 3,
  },
  petImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
    marginBottom: 8,
  },
  petName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#222',
  },
  petAge: {
    fontSize: 14,
    color: '#666',
  },
  petBreed: {
    fontSize: 12,
    color: '#888',
  },
});
