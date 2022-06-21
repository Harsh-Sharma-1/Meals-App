import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useLayoutEffect } from 'react';
// import { useRoute } from '@react-navigation/native';

import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealsList/MealItem';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
    // const route = useRoute();
    const { categoryName, categoryId } = route.params;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: categoryName,
        });
    }, [categoryName, navigation]);

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    });

    return <MealsList items={displayedMeals} />;
};

export default MealsOverviewScreen;
