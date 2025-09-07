import React from 'react';
import {
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {SceneMap, TabView} from 'react-native-tab-view';
import DropCustomer from './DropCustomer';
import DropService from './DropService';
import {colors} from '../../../constants';

const renderScene = SceneMap({
  dropCustomer: DropCustomer,
  dropService: DropService,
});

const routes = [
  {key: 'dropCustomer', title: 'Drop Customer'},
  {key: 'dropService', title: 'Drop Service'},
];

const WarehouseScreen = () => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);

  const renderTabBar = (props: any) => (
    <View style={styles.tabBarContainer}>
      {props.navigationState.routes.map((route: any, i: number) => {
        const isActive = index === i;
        return (
          <TouchableOpacity
            key={route.key}
            style={[styles.tabItem, isActive && styles.activeTab]}
            onPress={() => setIndex(i)}>
            <Text style={[styles.tabText, isActive && styles.activeTabText]}>
              {route.title}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        lazy
      />
    </View>
  );
};

export default WarehouseScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  tabBarContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    margin: 12,
    borderRadius: 12,
    padding: 4,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    elevation: 3,
  },
  tabItem: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  activeTab: {
    backgroundColor: colors.primary,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6B7280',
  },
  activeTabText: {
    color: '#fff',
  },
});
