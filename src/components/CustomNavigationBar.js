import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CustomNavigationBar = ({back, headername, style, navigation}) => {
  navigation = useNavigation();
  return (
    <View style={{...style}}>
      <StatusBar backgroundColor="transparent" barStyle="dark-content" />
      <View style={styles.headrViewStyle}>
        {back && (
          <TouchableOpacity
            style={styles.leftBtnStyle}
            onPress={() => navigation.goBack()}>
            {/* <AntDesign name="left" size={30} color="#fff" /> */}
            <FontAwesome name="arrow-left" size={30} color="#fff" />
          </TouchableOpacity>
        )}
        <View style={styles.headerContentStyle}>
          <Text style={styles.headerTextStyle}>{headername}</Text>
        </View>
      </View>
    </View>
  );
};

export default CustomNavigationBar;

const styles = StyleSheet.create({
  headrViewStyle: {
    height: 60,
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 5,
    paddingVertical: 8,
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  leftBtnStyle: {
    paddingHorizontal: 0,
    paddingVertical: 4,
    width: 60,
  },
  headerContentStyle: {
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTextStyle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#fff',
  },
});
