import React, {useContext} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Context} from '../context/BlogContext';
import {Feather} from '@expo/vector-icons';

const ShowScreen = ({navigation}) => {
    const {state} = useContext(Context);

    const blogPost = state.find(
        blogPost => blogPost.id === navigation.getParam('id')
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{blogPost.title}</Text>
            <Text style={styles.content}>{blogPost.content}</Text>
        </View>
    );
};

ShowScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: () => (
            <TouchableOpacity
                onPress={() =>
                    navigation.navigate('Edit', {id: navigation.getParam('id')})
                }>
                <Feather style={styles.editIcon} name='edit' size={30} />
            </TouchableOpacity>
        ),
    };
};

const styles = StyleSheet.create({
    editIcon: {
        marginRight: 10,
    },
    container: {
        borderWidth: 1,
        borderColor: 'gray',
        paddingVertical: 30,
        paddingHorizontal: 15,
    },
    title: {
        textDecorationLine: 'underline',
        fontSize: 22,
        fontWeight: 'bold',
    },
    content: {
        fontSize: 18,
        marginTop: 20,
    },
});

export default ShowScreen;
