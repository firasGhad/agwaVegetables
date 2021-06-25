import React, {Component} from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity, Image } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialIcons'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import {connect} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {add, remove, empty} from '../redux/actions/wishlist';

class WishListModal extends Component{

    constructor(props){
        super(props);
    }

    removeItem = (id) => {
      this.props.delete(id);
      this.loadData();
    }

    emptyWishList = () => {
      this.props.empty();
      this.loadData();
    }

    loadData = () => {
      setTimeout( () => {
        this.props.loadData();
      }, 500);
    }

    render() {

        let minHeight = (this.props.wishlist === null || this.props.wishlist.length === 0) ? 200 : 400;

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
                                    (this.props.wishlist === null || this.props.wishlist.length === 0) ?
                                    <Text style={styles.emptyWishlist}>Your wishlist is empty</Text>
                                    :
                                    this.props.wishlist.map( (ele, ind) =>
                                        <View key={ind} style={styles.wishlistContainer}>
                                          <View style={{  }}>

                                          <Image   source={{uri: `https://dev-agwa-public-static-assets-web.s3-us-west-2.amazonaws.com/images/vegetables/${ele.plant.imageId}@3x.jpg`}}
                                              style={{ width: 90, height: 100, resizeMode: 'contain' }}/>
                                          </View>
                                          <Text style={styles.wishlistItem}>{ele.plant.name}</Text>
                                          <TouchableOpacity onPress={ () => this.removeItem(ele.plant.id)}>
                                            <View>
                                              <FontAwesome name="trash-o" color="#fff" style={{ marginRight: 10 }} size={25}/>
                                            </View>
                                          </TouchableOpacity>
                                        </View>)
                                }
                            </View>
                        </ScrollView>
                       
                    </View>

                    {(this.props.wishlist === null || this.props.wishlist.length === 0) ? null : 
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
    container: {
        
    },
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
      wishlist: state.wishlistReducer.wishlist
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
      delete: (key) => dispatch(remove(key)),
      add: (item) => dispatch(add(item)),
      empty: () => dispatch(empty())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(WishListModal);