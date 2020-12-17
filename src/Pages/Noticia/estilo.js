import React from 'react';
import {Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get("screen").width
const alturaCard = 180

const estilo = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        //backgroundColor: 'white'
    },
    texto: {
        fontWeight: 'bold',
        textAlign: 'center'
    },
    textos: {
        flex: 1,
        textAlign: 'center',
        margin: 15,
        fontSize: 20
    },
    imagem: {
        width: 350,
        height: 280,
        margin: 10,
        borderRadius: 7
    },
    descricao: {
        textAlign: 'left',
        padding: 10
    },
    publicacao: {
        justifyContent: 'center'
    },
    autor: {
        fontWeight: 'bold',
        margin: 3
    },
    data: {
        margin: 7
    },
    content: {
        textAlign: 'center',
        padding: 7
    },
    url: {
        width: largura * 1,
        minHeight: alturaCard,
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 12,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: 'bold',
        //flexDirection: "row",
        flexWrap: 'wrap',
        border: 1
    }

})

export default estilo;