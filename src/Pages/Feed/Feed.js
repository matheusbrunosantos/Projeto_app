import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native'
import estilo from './estilo';


const Feed = () => {
    return (
        <View>
        <View style={estilo.container}>
            <View style={estilo.card}>
                <View style={estilo.textos}>
                    <Text style={estilo.texto}> News of The World </Text>
                    <Text> É um fato conhecido de todos que um leitor se "Conteúdo aqui, 
                        conteúdo aqui", fazendo com que ele tenha uma aparência similar 
                        a de um texto legível. Muitos softwares de publicação e editores 
                        de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão.</Text>
                        <Text style={estilo.data}>Data de Publicação</Text>   
                </View>
                <View>
                    <Image
                    source={require('../../../assets/Images/download.png')}
                    style={estilo.imagem}
                    />
                </View>
            </View>
        </View>
        </View>
    )
}


export default Feed;