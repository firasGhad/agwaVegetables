import React, { Component } from 'react';
import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView, Dimensions, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { connect } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-community/picker';

import { add, remove, empty } from '../redux/actions/wishlist';
import WishListModal from '../components/WishListModal';
class VegetableDetails extends Component {

    state = {
        isVisible: false,
        isPlantInWishList: false,
        plant: {},
        selectedDevice: 0
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.loadData();
    }

    addPlant = () => {
        if (this.isPlantInWishlist(this.state.plant, 1)) {
            return;
        }
        this.props.add(this.state.plant, 1);
        setTimeout(() => {
            this.loadData();
        }, 500);

    }

    removePlant = () => {
        if (this.props.agwaFarmDevices[this.state.selectedDevice].orders !== null && this.props.agwaFarmDevices[this.state.selectedDevice].orders.length > 0) {
            this.props.delete(this.state.plant.id, 1);
            setTimeout(() => {
                this.loadData();
            }, 500);
        }
    }

    loadData = () => {
        let plant = this.state.plant.id === undefined ? (this.props.route.params.plant || {}) : this.state.plant;
        let isPlantInWishlist = this.isPlantInWishlist(plant, 1);
        this.setState({ isPlantInWishlist, plant });
    }

    isPlantInWishlist = (plant, deviceId) => {

        let { agwaFarmDevices } = this.props;

        for (let i = 0; i < agwaFarmDevices.length; i++) {
            if (agwaFarmDevices[i].id == deviceId) {
                let orders = agwaFarmDevices[i].orders.filter(order => order.id == plant.id);
                return orders.length > 0;
            }
        }
        // if(agwaFarmDevices !== null){
        //     for(let i=0;i<agwaFarmDevices[deviceId].orders.length;i++){
        //         console.log('helllll')

        //         if(agwaFarmDevices[i].id==deviceId){
        //             console.log('not found')
        //            return !!ordersForDevices[i].orders.filter(order => order.plant.id == plant.id);

        //         }
        //     }
        // }
        return false;
    }

    openModal = () => {
        this.setState({ isVisible: true });
    }

    closeModal = () => {
        this.setState({ isVisible: false });
    }

    onDeviceValueChange(value) {
        this.setState({ selectedDevice: value });
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <LinearGradient colors={['#F2f2f2', '#699dd7', '#6294cf', '#405596', '#4252a0']}>

                    <WishListModal isVisible={this.state.isVisible} closeModal={this.closeModal.bind(this)} loadData={this.loadData.bind(this)} />
                    <View style={styles.customHeader}>
                        <View style={styles.goBackContainer}>
                            <TouchableOpacity onPress={this.props.navigation.goBack}>
                                <View>
                                    <Icon name="chevron-left" color="#fff" size={25} />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.headerTitleContainer}>
                            <Text style={styles.headerTitleText}> {this.state.plant.name} </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={this.openModal}>
                                <View style={{ flexDirection: 'row' }}>
                                    <Image source={require('../assets/images/wishlist_white.png')}
                                        style={{ width: 80, height: 80 }} />

                                    {/* {
                                            (this.props.agwaFarmDevices[this.state.choosenDevice].orders !== null && this.props.agwaFarmDevices[this.state.choosenDevice].orders.length > 0) ? 
                                            <Text style={styles.wishlistCounterText}>{this.props.agwaFarmDevices[this.state.choosenDevice].orders.length}</Text>
                                            : null 
                                        }     */}
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>



                    <View style={styles.movieContainer}>
                        <Image source={{ uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${plant.imageId}@3x.jpg` }}
                            style={styles.mainImage} />
                        <Text style={styles.title}>{this.state.plant.name}</Text>
                        <ScrollView style={{ maxHeight: 150 }}>
                            <Text style={styles.overview}>{this.state.plant.description}</Text>
                        </ScrollView>
                        <View style={styles.footer}>
                            {
                                this.state.isPlantInWishList ?
                                    <View>
                                        <TouchableOpacity style={styles.addRemoveMovieButton} onPress={this.removePlant}>
                                            <View style={styles.buttonContainer}>
                                                <Text style={styles.buttonText}>Remove from Wish List</Text>
                                                <Icon name="heart" size={20} color={'#FFF'} />
                                            </View>
                                        </TouchableOpacity>

                                       
                                    </View>
                                    :
                                    <View>

                                        <TouchableOpacity style={styles.addRemoveMovieButton} onPress={this.addPlant}>
                                            <View style={styles.buttonContainer}>
                                                <Text style={styles.buttonText}>Add to Wish List</Text>
                                                <Icon name="heart-o" size={20} color={'#FFF'} />
                                            </View>
                                        </TouchableOpacity>
                                        <View style={{ flex: 0.7, fontSize: 14 }}>
                                            <Text>Please Choose Device Type</Text>
                                            {/* <Picker
                                                itemStyle={styles.itemStyle}
                                                mode="dropdown"
                                                style={styles.pickerStyle}
                                                placeholder='Device Type..'
                                                selectedValue={this.state.selectedDevice}
                                                onValueChange={this.onDeviceValueChange.bind(this)}
                                            >
                                                {this.props.agwaFarmDevices.map((item, index) => (
                                                    <Picker.Item
                                                        color="#0087F0"
                                                        label={item.id}
                                                        value={item.id}
                                                        index={index}
                                                        key={index}

                                                    />
                                                ))}
                                            </Picker> */}
                                        </View>
                                    </View>

                            }
                        </View>

                    </View>
                </LinearGradient>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#4252a0'
    },
    customHeader: {
        backgroundColor: '#699dd7',
        shadowRadius: 3,
        elevation: 5,
        shadowColor: '#fff',
        shadowOffset: { width: 2, height: 2 },
        shadowOpacity: 0.7,
        width: '100%',
        height: 80,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: 'center',
        paddingHorizontal: 20,
        flexDirection: 'row'
    },
    goBackContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitleContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerTitleText: {
        textAlign: 'center',
        color: "#fff",
        fontSize: 20,
        fontWeight: 'bold'
    },
    wishlistCounterText: {
        fontSize: 15,
        backgroundColor: '#fff',
        width: 30,
        height: 30,
        borderRadius: 25,
        color: '#000',
        textAlign: 'center',
        lineHeight: 30,
        position: 'absolute',
        top: 10,
        left: 10
    },
    movieContainer: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    mainImage: {
        width: 350,
        height: 200,
        marginTop: 30,
        borderRadius: 20
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginVertical: 25,
        textAlign: 'center',
        color: '#FFF'
    },
    overview: {
        fontSize: 15,
        color: '#f2f2f2',
        marginBottom: 10
    },
    footer: {
        flexDirection: 'row',
        marginTop: 20
    },
    textAvg: {
        fontSize: 27,
        marginTop: 10,
        color: 'white'
    },
    textAvgDesc: {
        fontSize: 14,
        color: 'white'
    },
    addRemoveMovieButton: {
        borderWidth: 1,
        borderColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 25,
        borderRadius: 50,
        marginLeft: 20
    },
    buttonContainer: {
        flexDirection: "row",
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText: {
        marginHorizontal: 10,
        color: '#FFF'
    }
});



const mapStateToProps = (state) => {
    return {
        agwaFarmDevices: state.wishlistReducer.agwaFarmDevices
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        delete: (key, deviceId) => dispatch(remove(key, deviceId)),
        add: (item, deviceId) => dispatch(add(item, deviceId)),
        empty: (deviceId) => dispatch(empty(deviceId))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VegetableDetails);