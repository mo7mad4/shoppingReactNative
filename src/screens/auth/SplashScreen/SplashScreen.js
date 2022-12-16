import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Colors from '../../../theme/Colors';
import {CustomButton} from '../../../components';

const SplashScreen = props => {

  // const [animating, setAnimating] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setAnimating(false);
  //     //Check if user_id is set or not
  //     //If not then send for Authentication
  //     //else send to Home Screen
  //     AsyncStorage.getItem('user_id').then((value) =>
  //       navigation.replace(
  //         value === null ? 'Auth' : 'DrawerNavigationRoutes'
  //       ),
  //     );
  //   }, 5000);
  // }, []);
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={Colors.primary} />
      <View style={{alignItems: 'center'}}>
        <View style={styles.vectorContainer}>
          <Image
            source={require('../../../assets/images/Vector.png')}
            style={styles.vector}
            resizeMode="stretch"
          />
        </View>
        <Text style={styles.txt}>Shopping App</Text>
      </View>
      <CustomButton
      // animating={animating}
        onPress={() => {
          props.navigation.navigate('signIn');
        }}
        title="Get Started"
        type="SECONDARY"
        />
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.primary,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  vectorContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'white',
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
  vector: {
    width: 50,
    height: 50,
  },
  txt: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 40,
  },
});
