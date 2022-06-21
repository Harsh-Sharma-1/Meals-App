import React, { useContext, useEffect, useLayoutEffect } from 'react';
import {
    Image,
    StyleSheet,
    Text,
    View,
    Dimensions,
    ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import IconButton from '../components/IconButton';
import List from '../components/MealDetail/List';
import Subtitle from '../components/MealDetail/Subtitle';
import MealDetails from '../components/MealDetails';
import { MEALS } from '../data/dummy-data';
// import { FavoritesContext } from '../store/context/favorites-context';
import { actions } from '../store/redux/favorites';

const MealDetailScreen = ({ route, navigation }) => {
    // const favoriteMealsCtx = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();
    const { id } = route.params;
    const selectedMeal = MEALS.find((meal) => meal.id === id);
    // const mealIsFavorite = favoriteMealsCtx.ids.includes(id);

    const mealIsFavorite = favoriteMealIds.includes(id);

    function changeFavoriteStatusHandler() {
        if (mealIsFavorite) {
            // favoriteMealsCtx.removeFavorite(id);
            dispatch(actions.removeFavorite({ id }));
        } else {
            // favoriteMealsCtx.addFavorite(id);
            dispatch(actions.addFavorites({ id }));
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <IconButton
                    onPress={changeFavoriteStatusHandler}
                    icon={mealIsFavorite ? 'star' : 'star-outline'}
                    color='white'
                />
            ),
        });
    }, [navigation, changeFavoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image
                style={styles.image}
                source={{
                    uri: selectedMeal.imageUrl,
                }}
            />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails
                duration={selectedMeal.duration}
                complexity={selectedMeal.complexity}
                affordability={selectedMeal.affordability}
                textStyle={styles.detailText}
            />
            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List data={selectedMeal.ingredients} />

                    <Subtitle>Steps</Subtitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
};

export default MealDetailScreen;

const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32,
    },
    image: {
        width: '100%',
        height: deviceHeight / 3,
    },
    title: {
        fontFamily: 'PromptBold',
        fontSize: 20,
        margin: 8,
        textAlign: 'center',
        color: 'white',
    },
    detailText: {
        color: 'white',
    },
    listOuterContainer: {
        alignItems: 'center',
    },
    listContainer: {
        width: '80%',
    },
});
