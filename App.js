import { useFonts } from 'expo-font';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import { Provider } from 'react-redux';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import FavoritesScreen from './screens/FavoritesScreen';
import FavoritesContextProvider from './store/context/favorites-context';
import { store } from './store/redux/store';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#351401',
                },
                headerTintColor: 'white',
                sceneContainerStyle: {
                    backgroundColor: '#3f2f25',
                },
                drawerContentStyle: {
                    backgroundColor: '#351401',
                },
                drawerInactiveTintColor: 'white',
                drawerActiveTintColor: '#351401',
                drawerActiveBackgroundColor: '#e4baa1',
            }}
        >
            <Drawer.Screen
                name='Categories'
                component={CategoriesScreen}
                options={{
                    title: 'All Categories',
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='list' color={color} size={size} />
                    ),
                }}
            />
            <Drawer.Screen
                name='Favorites'
                component={FavoritesScreen}
                options={{
                    drawerIcon: ({ color, size }) => (
                        <Ionicons name='star' color={color} size={size} />
                    ),
                }}
            />
        </Drawer.Navigator>
    );
}

export default function App() {
    const [fontLoaded] = useFonts({
        PromptBold: require('./assets/fonts/Prompt-Bold.ttf'),
        PromptRegular: require('./assets/fonts/Prompt-Regular.ttf'),
    });

    if (!fontLoaded) {
        return (
            <View
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Text>Loading...</Text>
            </View>
        );
    }
    return (
        <>
            <StatusBar style='light' />
            {/* <FavoritesContextProvider> */}
            <Provider store={store}>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: {
                                backgroundColor: '#351401',
                            },
                            headerTintColor: 'white',
                            contentStyle: {
                                backgroundColor: '#3f2f25',
                            },
                            animation: 'slide_from_right',
                        }}
                    >
                        <Stack.Screen
                            name='Drawer'
                            component={DrawerNavigator}
                            options={{
                                headerShown: false,
                            }}
                        />
                        <Stack.Screen
                            name='MealsOverview'
                            component={MealsOverviewScreen}
                            // options={({ route, navigation }) => {
                            //     const { categoryName } = route.params;
                            //     return {
                            //         title: categoryName,
                            //     };
                            // }}
                        />

                        <Stack.Screen
                            name='MealDetail'
                            component={MealDetailScreen}
                            options={{
                                //   headerRight: () => <Button title='Tap me' />,
                                title: 'About the meal',
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </Provider>
            {/* </FavoritesContextProvider> */}
        </>
    );
}

const styles = StyleSheet.create({});
