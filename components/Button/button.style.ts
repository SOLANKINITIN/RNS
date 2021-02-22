import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Primary: {
    backgroundColor: '#424242',
  },
  Seconadary: {
    backgroundColor: '#00C48C',
  },
  disable: {
    width: 200,
    backgroundColor: 'transparent',
  },
  Regular: {
    // backgroundColor: '',                     
    borderWidth: 2,
    borderColor: '#424242',
  },
  appButtonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
  appButtonText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
});
