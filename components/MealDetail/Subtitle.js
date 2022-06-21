import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Subtitle = ({ children }) => {
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    subtitle: {
        color: '#e2b497',
        fontSize: 18,
        fontFamily: 'PromptBold',
        textAlign: 'center',
    },
    subtitleContainer: {
        margin: 6,
        marginHorizontal: 12,
        padding: 6,
        borderBottomColor: '#e2b497',
        borderBottomWidth: 2,
    },
});

export default Subtitle;
