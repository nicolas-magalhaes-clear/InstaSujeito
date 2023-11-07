import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native'


export default function Lista(props) {
    return (
        <View style={styles.areaFeed}>
            <View style={styles.viewPerfil}>
                <Image
                    source={{ uri: props.data.imgperfil }}
                    style={styles.fotoPerfil}
                />

                <Text style={styles.nomeUsuario}>{props.data.nome}</Text>

            </View>
            <Image
                style={styles.fotoPublicacao}
                source={{ uri: props.data.imgPublicacao }}
            />
            <View style={styles.areaBtn}>
                <TouchableOpacity>
                    <Image
                        source={require('./assets/images/like.png')}
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
            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape}>{props.data.nome}</Text>
                <Text style={styles.descRodape}>{props.data.descricao}</Text>
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