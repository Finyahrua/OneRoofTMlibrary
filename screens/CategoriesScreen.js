import React from 'react'
import { View, Text } from 'react-native'
import CategoriesBanner from '../components/categoriesScreenComps/Banner'
import Categories from '../components/categoriesScreenComps/Categories'

const CategoriesScreen = () => {
    return (
        <View style={{flex:1}}>
            <CategoriesBanner/>
            <Categories/>
        </View>
    )
}

export default CategoriesScreen
