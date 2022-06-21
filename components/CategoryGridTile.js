import {
    Pressable,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Platform,
} from 'react-native';

// import { useNavigation } from '@react-navigation/native';

const CategoryGridTile = ({ title, color, onPress }) => {
    // const navigation = useNavigation();
    return (
        <View style={styles.gridItem}>
            <Pressable
                android_ripple={{ color: '#ccc' }}
                style={({ pressed }) => [
                    styles.button,
                    pressed ? styles.buttonPressed : null,
                ]}
                onPress={onPress}
            >
                <View
                    style={[
                        styles.innerContainer,
                        {
                            backgroundColor: color,
                        },
                    ]}
                >
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
};

const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        height: deviceHeight / 5,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    },
    innerContainer: {
        borderRadius: 8,
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
    },
    title: {
        fontSize: deviceWidth / 25,
        fontFamily: 'PromptRegular',
    },
});

export default CategoryGridTile;
