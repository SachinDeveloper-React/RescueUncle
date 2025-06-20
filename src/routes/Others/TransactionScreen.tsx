import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import {CustomCard} from '../../components';
import {FilterIcon, SearchIcon} from '../../assets';
import {colors} from '../../constants';

type Transaction = {
  id: string;
  title: string;
  date: string;
  warranty: string;
  image: {uri: string};
};

const fakeTransactions: Transaction[] = Array.from({length: 20}, (_, i) => ({
  id: `${i + 1}`,
  title: `Order History ${i + 1}`,
  date: `22-0${(i % 9) + 1}-2025`,
  warranty: `${(i % 3) + 1} years`,
  image: {
    uri: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2960&auto=format&fit=crop',
  },
}));

const TransactionScreen = () => {
  const [search, setSearch] = useState('');
  const [filteredList, setFilteredList] = useState(fakeTransactions);

  const handleSearch = (text: string) => {
    setSearch(text);
    const filtered = fakeTransactions.filter(item =>
      item.title.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredList(filtered);
  };

  const renderItem: ListRenderItem<Transaction> = ({item}) => (
    <CustomCard
      image={item.image}
      title={item.title}
      date={item.date}
      warranty={item.warranty}
      onPress={() => console.log('Clicked:', item.title)}
    />
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.searchFilterRow}>
          <View style={styles.searchInput}>
            <SearchIcon width={18} height={18} />
            <TextInput
              placeholder="Search Order"
              style={styles.input}
              value={search}
              onChangeText={handleSearch}
              placeholderTextColor="#888"
            />
          </View>
          <TouchableOpacity
            style={styles.filterBtn}
            onPress={() => console.log('Open filter modal')}>
            <FilterIcon width={18} height={18} />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>
        </View>

        <FlatList
          data={filteredList}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
          initialNumToRender={6}
          maxToRenderPerBatch={10}
          windowSize={10}
          removeClippedSubviews
        />
      </View>
    </SafeAreaView>
  );
};

export default TransactionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.inputBackground,
    paddingHorizontal: 16,
  },
  listContent: {
    paddingBottom: 20,
  },
  searchFilterRow: {
    flexDirection: 'row',
    marginVertical: 12,
    alignItems: 'center',
  },
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 12,
    paddingVertical: Platform.OS === 'ios' ? 10 : 0,
    alignItems: 'center',
    marginRight: 10,
  },
  input: {
    marginLeft: 8,
    flex: 1,
    fontSize: 14,
    color: '#333',
  },
  filterBtn: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 30,
    paddingHorizontal: 14,
    paddingVertical: 10,
    alignItems: 'center',
  },
  filterText: {
    fontSize: 14,
    marginLeft: 6,
    color: '#333',
  },
});
