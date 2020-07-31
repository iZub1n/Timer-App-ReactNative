import { Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

  containerInline: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
  },

  containerVertical: {
    flexDirection: 'column'
  },

  circularButton:{
    padding: 5,
    height: 80,
    width: 80,  //The Width must be the same as the height
    borderRadius:400, //Then Make the Border Radius twice the size of width or Height   
    backgroundColor:'black',
    justifyContent: "center",
    margin: 10,
  },
  
  textHeadingBig: {
    fontSize: 40,
    fontWeight: "bold",
    padding: 5,
  },
  
  timeInput: {
    borderWidth: 0.5,
    height: 20,
    width:40,
    margin: 5,
    textAlign: "right"
  },
   
  textHeadingSmall: {
    fontWeight: "bold",
    padding: 5,
  },
});

export default styles