import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'


export default function Lista(props) {

    const initialFeed = props.data
    const [feed, setFeed] = useState(initialFeed)
    const [st, setSt] = useState(false)

    function like(){

        let _feed = feed

        if(_feed.likeada === true){
            

            console.log('Removendo')
            console.log('Likeada antigo:', _feed.likeada)
            console.log('Likers antigo:', _feed.likers)
            _feed.likeada = false
            _feed.likers = _feed.likers - 1
            console.log('Likeada NOVO:', _feed.likeada)
            console.log('Likers NOVO:', _feed.likers)

            setFeed(_feed)
            setSt(true)

        }
        else{
            console.log('Adicionadno')
            console.log('Likeada antigo:', _feed.likeada)
            console.log('Likers antigo:', _feed.likers)
            _feed.likeada = true
            _feed.likers = _feed.likers + 1
            console.log('Likeada NOVO:', _feed.likeada)
            console.log('Likers NOVO:', _feed.likers)
            setFeed(_feed)
            setSt(false)

        }
    }

    function carregaIcone(){
        if(feed.likeada){
            return require('./assets/images/likeada.png')
        }
        else{
            return require('./assets/images/like.png')
        }
    }
    return (
        <View style={styles.areaFeed}>
            <View style={styles.viewPerfil}>
                <Image
                    source={{ uri: feed.imgperfil }}
                    style={styles.fotoPerfil}
                />

                <Text style={styles.nomeUsuario}>{feed.nome}</Text>

            </View>
            <Image
                style={styles.fotoPublicacao}
                source={{ uri: feed.imgPublicacao }}
            />
            <View style={styles.areaBtn}>
                <TouchableOpacity onPress={()=> like()}>
                    <Image
                        source={carregaIcone()}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/send.png')}
                        style={styles.btnSend}
                    />
                </TouchableOpacity>
            </View>
            <Text>{feed.likers} {st ? '' : ''}{feed.likers > 1 ? 'curtidas' : 'curtida'}</Text>
            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape}>{feed.nome}</Text>
                <Text style={styles.descRodape}>{feed.descricao}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    areaFeed: {

    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center'
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 33,
        height: 33
    },
    btnSend: {
        marginLeft: 10,
        width: 33,
        height: 33
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000',
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
    }
})