import { StyleSheet, StatusBar, Button } from 'react-native';

const styles = StyleSheet.create({
    view: {
      flex: 1,
      marginTop: StatusBar.currentHeight || 20,
      alignItems: 'center',
      justifyContent: 'center',
    },
    container: {
      flexDirection: 'row', 
      backgroundColor: 'fff',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30,
        padding: 16,
    },
    header: {
      fontSize: 24,
      color: 'lightblue',
      marginTop: 40,
      textAlign: 'center',
    },
    flatlist: {
        flexDirection: 'column',
      width: '100%',
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 4,
        marginLeft: 12,
        marginRight: 12,
    },
    rowText: {
      fontSize: 16,
      padding: 4,
      margin: 4,   
    },
    form: {
        height: 50,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 0,
        padding: 4,
        width: '80%',
      },
      searchBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        padding: 4,
        margin: 4,
        width: '100%',
      },
      button: {
        width: '20%',
        height: 50,
        backgroundColor: 'lightblue',
        padding: 0,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    buttonText: {
        color: 'white',
    },   

});

export default styles;