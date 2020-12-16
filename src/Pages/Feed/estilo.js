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
    card: {
        width: largura * 1,
        minHeight: alturaCard,
        borderColor: '#cccccc',
        borderRadius: 7,
        backgroundColor: '#D3D3D3',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginTop: 12,
        marginBottom: 20,
        //flexDirection: "row",
        flexWrap: 'wrap',
        border: 1
    },
    textos: {
        flex: 1,
        textAlign: 'left',
        margin: 8
    },
    imagem: {
       width: 360,
       height: 180,
       borderRadius: 7
    },
    data: {
        fontWeight: 'bold',
        margin: 5
    },
    descricao: {
        textAlign: 'left',
        margin: 8
    }

})

export default estilo;