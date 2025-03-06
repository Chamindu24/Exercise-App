import { LinearGradient } from 'expo-linear-gradient';
import React from 'react'
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { bodyParts } from '../constants';
import { useRouter } from 'expo-router';
import Animated,{FadeIn,FadeInDown,FadeOut} from 'react-native-reanimated';


export default function BodyParts(){
    const router = useRouter();
    return (
      <View className="mx-4">
        <Text style={{fontSize:hp(3)}} className="font-semibold text-neutral-700"> 
            Exercises
        </Text>

        <FlatList
            data={bodyParts}
            numColumns={2}
            keyExtractor={item => item.name}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom:50,paddingTop:20}}
            columnWrapperStyle={{justifyContent:'space-between'}}
            renderItem={({item,index}) => <BodyPartCard item={item} index={index} router={router} />}
        />

      </View>
    )
}

const BodyPartCard = ({item,router,index}) => {
    return (
        <Animated.View enetering={FadeInDown.duration(400).delay(index*200).springify()} >
            <TouchableOpacity
                onPress={() => router.push({ 
                    pathname: '/exercises', 
                    params: { 
                        name: item.name, 
                        image: item.image 
                    } 
                })}
                style={{width:wp(44),height:wp(52)}}
                className="flex justify-end p-4 mb-4"
            >
                <Image source={item.image} style={{width:wp(44),height:wp(52)}} resizeMode="cover" className="rounded-[35px] absolute" />

                <LinearGradient
                    colors={['transparent','rgba(0,0,0,0.9)']}
                    style={{width:wp(44),height:hp(15)}}
                    start={{x:0.5,y:0}}
                    end={{x:0.5,y:1}}
                    className="rounded-b-[35px] absolute bottom-0"
                />

                <Text style={{fontSize:hp(2.3)}} className="font-semibold text-white text-center tracking-wide">
                    {item?.name}
                </Text>

            </TouchableOpacity>
        </Animated.View>
    )
}