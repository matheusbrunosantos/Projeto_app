import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get("screen").width
const alturaCard = 180

const estilo = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    texto: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textos: {
        flex: 1,
        textAlign: 'left',
        margin: 30
    },
    imagem: {
        width: 300,
        height: 280,
        margin: 10
    },
    descricao: {
        textAlign: 'right'
    }

})

export default estilo;