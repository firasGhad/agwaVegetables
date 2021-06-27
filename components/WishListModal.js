import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import LinearGradient from 'react-native-linear-gradient';
import { Picker } from '@react-native-community/picker';

import {connect} from 'react-redux';
import {add, remove, empty} from '../redux/actions/wishlist';

class WishListModal extends Component{

    constructor(props){
        super(props);
    }

    
    state = {
      selectedDeviceId: 1,
      agwaFarmDevices: [],
      selectedDevice: { orders: [], id: 0 }
  }

    componentDidMount() {
      let agwaFarmDevices =this.props.agwaFarmDevices.map((item) => item.id)
      this.setState({agwaFarmDevices}); 
  }


    removeItem = (id) => {
      this.props.delete(id,this.state.selectedDeviceId);
      this.loadData();
    }

    emptyWishList = () => {
      this.props.empty(this.state.selectedDeviceId);
      this.loadData();
    }

    loadData = () => {
      setTimeout( () => {
        this.props.loadData();
      }, 500);
    }

    onDeviceValueChange(value) {
      this.setState({ selectedDeviceId: value });
      this.getSelectedDevice()
  }

  getSelectedDevice() {
    let ordersForDevices = this.props.agwaFarmDevices, device = { orders: [], id: 0 };
    for (let i = 0; i < ordersForDevices.length; i++) {
      if (ordersForDevices[i].id == this.state.selectedDeviceId) {
        device = ordersForDevices[i];
      }
    }
    this.setState({ selectedDevice: device });
  }


    render() {
        let minHeight = (this.state.selectedDevice.orders === null || this.state.selectedDevice.orders.length === 0) ? 200 : 400;

        return (
             <View style={styles.container}>
                 <Modal isVisible={this.props.isVisible} style={styles.bottomModal}>
                    <LinearGradient colors={['#699dd7', '#6294cf', '#405596', '#4252a0']}>
                    <View style={[styles.modalContent, {minHeight}]}>
                        <TouchableOpacity onPress={ () => this.props.closeModal()}
                          style={styles.closeContainer}>
                            <View style={styles.btnClose}>
                              <Icon name="close" color="#333" size={20}/>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.title}>Wishlist</Text>
                        <ScrollView style={{ flex: 1 }}>
                            <View style={{ flex: 1 }}>
                                {
                                    (this.state.selectedDevice.orders === null || this.state.selectedDevice.orders.length === 0) ?
                                    <Text style={styles.emptyWishlist}>Your wishlist is empty</Text>
                                    :
                                    this.state.selectedDevice.orders.map((ele, ind) =>
                                        <View key={ind} style={styles.wishlistContainer}>
                                          <View style={{  }}>

                                          <Image   source={{uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${ele.imageId}@3x.jpg`}}
                                              style={{ width: 90, height: 100, resizeMode: 'contain' }}/>
                                          </View>
                                          <Text style={{color: "white", marginLeft:4}}>{ele.quantity}</Text>
                                          <Text style={styles.wishlistItem}>{ele.name}</Text>
                                          
                                          <TouchableOpacity onPress={ () => this.removeItem(ele.id)}>
                                            <View>
                                              <FontAwesome name="trash-o" color="#fff" style={{ marginRight: 10 }} size={25}/>
                                            </View>
                                          </TouchableOpacity>
                                        </View>)
                                }
                            </View>
                            <View style={{ flex: 0.7, fontSize: 14 }}>
                                            <Text>Please Choose Device Type</Text>
                                            <Picker
                                                itemStyle={styles.itemStyle}
                                                mode="dropdown"
                                                style={styles.pickerItem}
                                                placeholder='Device Type..'
                                                selectedValue={this.state.selectedDeviceId}
                                                onValueChange={this.onDeviceValueChange.bind(this)}
                                            >
                                                {this.state.agwaFarmDevices.map((item, index) => (
                                                    <Picker.Item
                                                        color="#0087F0"
                                                        label={item}
                                                        value={item}
                                                        index={index}
                                                        key={index}
                                                    />
                                                ))}
                                            </Picker>
                                        </View>
                        </ScrollView>
                    </View>
                    {(this.state.selectedDevice.orders === null) ? null : 
                      <TouchableOpacity onPress={this.emptyWishList} activeOpacity={1}>
                        <View style={styles.emptyWishlistContainer}>
                          <Text style={styles.emptyWishlistText}>Empty your wishlist</Text>
                        </View>
                      </TouchableOpacity>
                    }
                  </LinearGradient>
                </Modal>
             </View>
        );
    }

}

const styles = StyleSheet.create({
    btnClose: {
      backgroundColor: '#fff',
      borderRadius: 25,
      padding: 10
    },
    closeContainer: {
      position: 'absolute',
      top: -10,
      left: 0
    },
    modalContent: {
      padding: 22,
      borderRadius: 4,
      borderColor: 'rgba(0, 0, 0, 0.1)'
    },
    bottomModal: {
      flex: 1,
      justifyContent: 'center',
      marginHorizontal: 10
    },
    title: {
      marginBottom: 35,
      fontSize: 20,
      textAlign: 'center',
      color: '#fff',
      fontWeight: '500'
    },
    emptyWishlist: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 16
    },
    wishlistContainer: {
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    wishlistItem: {
      color: '#fff',
      fontSize: 16,
      flex: 2,
      marginLeft: 10
    },
    pickerItem: {
      color: '#fff',
      fontSize: 16,
      flex: 2,
    },
    emptyWishlistContainer: {
      borderWidth: 1,
      borderColor: 'white',                                    
      paddingHorizontal: 15,
      paddingVertical: 12,
      borderRadius: 50,
      marginHorizontal: 20,
      marginBottom: 40
    },
    emptyWishlistText: {
      textAlign: 'center',
      color: '#fff',
      fontSize: 18
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
export default connect(mapStateToProps, mapDispatchToProps)(WishListModal);