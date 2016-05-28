/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
var Swiper = require('react-native-swiper');//引入swiper

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    ScrollView,
} from 'react-native';

var sliderImages = [
  'http://images3.c-ctrip.com/SBU/apph5/201505/16/app_home_ad16_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/C1/201505/app_home_ad49_640_128.png',
    'http://images3.c-ctrip.com/rk/apph5/D1/201506/app_home_ad05_640_128.jpg'
];

var BUIcon = [
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/%E6%9C%AA%E6%A0%87%E9%A2%98-1.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/feiji.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/lvyou.png',
    'https://raw.githubusercontent.com/vczero/vczero.github.io/master/ctrip/gonglue.png'
];

var Images = [
    'http://webresource.c-ctrip.com/ResCRMOnline/R5/html5/images/zzz_pic_salead01.png',
    'http://images3.c-ctrip.com/rk/apph5/B1/201505/app_home_ad06_310_120.jpg'
];

//将轮播图封装成单独的组件，就可以直接在render的时候直接调用
class Slider extends Component {
  render(){
    return(
        <Swiper style={styles.wrapper} showsButtons={false} autoplay={true} height={150} showsPagination={false}>
          <Image style={[styles.slide,]} source={{uri:sliderImages[0]}}></Image>
          <Image style={[styles.slide,]} source={{uri:sliderImages[1]}}></Image>
          <Image style={[styles.slide,]} source={{uri:sliderImages[2]}}></Image> 
        </Swiper>
      );
  }
};


class Index extends Component{
    render() {
    return(
        <ScrollView>
            <View style={styles.container}>
            <Slider></Slider>
                <View style={[styles.sbu_red,styles.sbu_view]}>
                    <TouchableHighlight underlayColor={'#fa6778'} style={{flex:1}}>
                        <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                            <View style={[styles.sub_con_flex,styles.sub_text]}>
                                <Text style={[styles.font16]}>酒店</Text>
                            </View>
                            <View style={[styles.sub_con_flex]}>
                                <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[0]}}></Image>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>海外</Text>
                        </View>
                        <View style={[styles.sub_con_flex,styles.sub_text]}>
                            <Text style={[styles.font16]}>周边</Text>
                        </View>
                    </View>

                    <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>团购.特惠</Text>
                        </View>
                        <View style={[styles.sub_con_flex,styles.sub_text]}>
                            <Text style={[styles.font16]}>客栈.公寓</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.sbu_blue,styles.sbu_view]}>
                    <TouchableHighlight underlayColor={'#fa6778'} style={{flex:1}}>
                        <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                            <View style={[styles.sub_con_flex,styles.sub_text]}>
                                <Text style={[styles.font16]}>机票</Text>
                            </View>
                            <View style={[styles.sub_con_flex]}>
                                <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[1]}}></Image>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>火车票</Text>
                        </View>
                        <View style={[styles.sub_con_flex,styles.sub_text]}>
                            <Text style={[styles.font16]}>接收机</Text>
                        </View>
                    </View>

                    <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>汽车票</Text>
                        </View>
                        <View style={[styles.sub_con_flex,styles.sub_text]}>
                            <Text style={[styles.font16]}>自驾.专车</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.sbu_green,styles.sbu_view]}>
                    <TouchableHighlight underlayColor={'#fa6778'} style={{flex:1}}>
                        <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                            <View style={[styles.sub_con_flex,styles.sub_text]}>
                                <Text style={[styles.font16]}>旅游</Text>
                            </View>
                            <View style={[styles.sub_con_flex]}>
                                <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[1]}}></Image>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>门票.玩乐</Text>
                        </View>
                        <View style={[styles.sub_con_flex,styles.sub_text]}>
                            <Text style={[styles.font16]}>处境WIFI</Text>
                        </View>
                    </View>

                    <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>游轮</Text>
                        </View>
                        <View style={[styles.sub_con_flex,styles.sub_text]}>
                            <Text style={[styles.font16]}>签证</Text>
                        </View>
                    </View>
                </View>

                <View style={[styles.sbu_yellow,styles.sbu_view]}>
                    <TouchableHighlight underlayColor={'#fa6778'} style={{flex:1}}>
                        <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                            <View style={[styles.sub_con_flex,styles.sub_text]}>
                                <Text style={[styles.font16]}>攻略</Text>
                            </View>
                            <View style={[styles.sub_con_flex]}>
                                <Image style={[styles.sbu_icon_img]} source={{uri:BUIcon[1]}}></Image>
                            </View>
                        </View>
                    </TouchableHighlight>
                    <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>周末游</Text>
                        </View>
                        <View style={[styles.sub_con_flex,styles.sub_text]}>
                            <Text style={[styles.font16]}>礼品卡</Text>
                        </View>
                    </View>

                    <View style={[styles.sbu_flex,styles.sbu_borderRight]}>
                        <View style={[styles.sub_con_flex,styles.sub_text,styles.sbu_borderBottom]}>
                            <Text style={[styles.font16]}>美食.购物</Text>
                        </View>
                        <View style={[styles.sub_con_flex,styles.sub_text]}>
                            <Text style={[styles.font16]}>更多</Text>
                        </View>
                    </View>
                </View>


                <View style={[styles.img_view]}>
                    <View style={[styles.img_flex,{borderRightWidth:0.5}]}>
                        <Image style={[styles.img_wh]} source={{uri:Images[0]}}></Image>
                    </View>
                    <View style={[styles.img_flex,{borderRightWidth:0}]}>
                        <Image style={[styles.img_wh]} source={{uri:Images[1]}}></Image>
                    </View>
                </View>

            </View>
        </ScrollView>
    );
    }

};


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'#F2F2F2',
    },
  wrapper:{
    height:80,
  },
  slide:{
    height:80,
    resizeMode:Image.resizeMode.contain,
  },

  sbu_view:{
    height:84,
    marginLeft:5,
    marginRight:5,
    borderWidth:1,
    borderRadius:5,
    marginBottom:10,
    flexDirection:'row',
  },

  sbu_red:{
    backgroundColor:'#fa6778',
    borderColor:'#fa6778',
    marginTop:-70,
  },

  sbu_blue:{
    backgroundColor:'#3d98ff',
    borderColor:'#3d98ff',
  },

  sbu_green:{
    backgroundColor:'#5ebe00',
    borderColor:'#5ebe00',
  },
  sbu_yellow:{
    backgroundColor:'#fc9720',
    borderColor:'#fc9720',
  },

  sbu_flex:{
    flex:1,
  },

  sbu_borderRight:{
    borderColor:'#fff',
    borderRightWidth:0.5,
  },

  sbu_icon_img:{
    height:40,
    width:40,
    resizeMode:Image.resizeMode.contain,
  },

  sub_con_flex:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },

  sub_text:{
    justifyContent:'center',
  },

  font16:{
    fontSize:17,
    color:'#fff',
    fontWeight:'900',
  },

  sbu_borderBottom:{
    borderBottomWidth:0.5,
    borderBottomColor:'#fff',
  },

  img_view:{
    height:62,
    marginLeft:5,
    marginRight:5,
    flexDirection:'row',
    marginBottom:20,
    backgroundColor:'#fff',
  },

  img_flex:{
    flex:1,
    borderWidth:1,
    borderColor:'#ccc',
  },

  img_wh:{
    height:59,
    borderRightWidth:0,
    resizeMode:Image.resizeMode.contain,
  },
});

module.exports = Index;