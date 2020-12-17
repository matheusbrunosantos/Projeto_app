import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView, FlatList, TouchableOpacity} from 'react-native'
import getNoticias from '../../api/noticias';
import estilo from './estilo';

const Noticia = ({route}) => {
    const item = route.params.item
    /* const [noticias, setNoticias] = useState('')

    useEffect(() => {
        getNoticias(setNoticias)
    }, [])
 */
    console.log(item)
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            
                        <View style={estilo.container}>
                            <View>
                                    <Text style={estilo.textos}> <strong> {item.title} </strong></Text>      
                            </View>
                            <View>
                                    <Text style={estilo.descricao}> {item.description}</Text>
                            </View>
                            <View>
                                    <Text style={estilo.autor}> {item.author}</Text>
                                </View>
                                <View>
                                    <Text style={estilo.data}> {item.publishedAt}</Text>
                                </View>
                                <View>
                                    <Image
                                        source={item.urlToImage}
                                        style={estilo.imagem}
                                    />
                                </View>
                                <View>
                                    <Text style={estilo.content}> {item.content}</Text>
                                </View>
                                <View>
                                    <Text style={estilo.url}> {item.url}</Text>
                                </View>
                                <View
                                    style={{
                                    borderBottomColor: 'black',
                                    borderBottomWidth: 0.2,
                                }}
                                />      
                        </View>        
            
        </ScrollView>
    )
}


export default Noticia;

/* 78351fd5498445c9ad0063abdf2ff83e *///

