import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import getNoticias from '../../api/noticias';
import estilo from './estilo';
import Noticias from '../Noticias'


const Feed = ({navigation}) => {
    const [noticias, setNoticias] = useState('')

    useEffect(() => {
        getNoticias(setNoticias)
    }, [])

    return (
        <ScrollView>
        <View>
        <View style={estilo.container}>
            <FlatList 
                data={noticias}
                keyExtractor={(item, index) => index.toString() }
                renderItem={({item}) => (
                    <TouchableOpacity
                    onPress={() => navigation.navigate('Noticias', {item})}>
                         <View style={estilo.card}>
                        <View style={estilo.imagem}>
                            <Image
                            source={item.urlToImage}
                            style={estilo.imagem}
                            />
                        </View>
                        <View style={estilo.textos}>
                            <Text> <strong> {item.title} </strong></Text>      
                        </View>
                        <View style={estilo.descricao}>
                        <Text> {item.description}</Text>
                        </View>
                    </View>
                    </TouchableOpacity>
                   
                )}
            />
        </View>

        </View>
        </ScrollView>
    )
}


export default Feed;