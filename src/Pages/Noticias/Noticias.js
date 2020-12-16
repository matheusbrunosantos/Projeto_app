import React, { useEffect, useState } from 'react';
import {View, Text, Image, ScrollView, FlatList} from 'react-native'
import estilo from './estilo';

const Noticias = () => {
    return (
        <ScrollView>
        <View>
            <View style={estilo.container}>
                <View style={estilo.textos}>
                    <Text><strong> É um fato conhecido de todos que um leitor se "Conteúdo aqui, 
                        conteúdo aqui", fazendo com que ele tenha uma aparência similar 
                        a de um texto legível. Muitos softwares de publicação e editores 
                        de páginas na internet agora usam Lorem Ipsum como texto-modelo padrão.</strong></Text>
                </View>

                <View style={estilo.descricao}>
                    <Text>Descrição da Postagem</Text>
                </View>

                <View>
                    <Text>Autor da Postagem</Text>
                </View>
                <View>
                    <Image
                    source={require('../../../assets/Images/download.png')}
                    style={estilo.imagem}
                    />
                </View>
                <View style={estilo.publicacao}>
                    <Text>Texto da Publicação</Text>
                </View>
        </View>
        </View>
        </ScrollView>
    )
}

export default Noticias;

/* 78351fd5498445c9ad0063abdf2ff83e *///

