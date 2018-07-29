import { StyleSheet, Platform } from 'react-native';
import { purple, white, green, red ,orange} from './colors'


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: white
    },
    row: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        //    backgroundColor: gray
    },
    submitBtnText: {
        color: purple,
        fontSize: 22,
        textAlign: 'center',
    },
    text: {
        color: purple,
        fontSize: 20,
        //textAlign: 'center',
    },
    text2: {
        color: purple,
        fontSize: 20,
        textAlign: 'center',
    },
    center: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 30,
        marginRight: 30,
    },
    item: {
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    item2: {
        //flex:2,
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: white,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    item3: {
        alignContent: 'center',
        flexDirection: 'row',
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 17,
        justifyContent: 'center',
    },
    item4: {
        alignContent: 'center',
        flexDirection: 'row',
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        justifyContent: 'center',
    },    
    item_cor: {
        //flex:2,
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: green,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    item_wrong: {
        //flex:2,
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: red,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    item_load: {
        //flex:2,
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: orange,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
    item_save_btn: {
        //flex:2,
        alignContent: 'center',
        flexDirection: 'row',
        backgroundColor: green,
        borderRadius: Platform.OS === 'ios' ? 16 : 2,
        padding: 10,
        marginLeft: 70,
        marginRight: 70,
        marginTop: 17,
        justifyContent: 'center',
        shadowRadius: 3,
        shadowOpacity: 0.8,
        shadowColor: 'rgba(0, 0, 0, 0.24)',
        shadowOffset: {
            width: 0,
            height: 3
        },
    },
})
