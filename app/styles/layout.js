import {StyleSheet, Dimensions} from 'react-native';


var {height, width} = Dimensions.get('window');

export default StyleSheet.create({
	inlineView: {
		flexWrap: 'wrap', 
		flexDirection:'row',		
	},
	halfScreen:{
		height:height-420,
		// bottom:10,
		backgroundColor: 'red',

	},
});
