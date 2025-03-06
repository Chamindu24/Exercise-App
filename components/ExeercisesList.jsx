import { useRouter } from 'expo-router';
import React from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { Image } from 'expo-image';
import Animated,{FadeIn,FadeInDown,FadeOut} from 'react-native-reanimated';


export default function ExeercisesList(){
    const router = useRouter();
    return (
      <View className="mx-4">
              
      
              <FlatList
                  data={data}
                  numColumns={2}
                  keyExtractor={item => item.name}
                  showsVerticalScrollIndicator={false}
                  contentContainerStyle={{paddingBottom:60,paddingTop:20}}
                  columnWrapperStyle={{justifyContent:'space-between'}}
                  renderItem={({item,index}) => <ExerciseCard item={item} index={index} router={router} />}
              />
      
            </View>
    )
}

const ExerciseCard = ({}) => {
    return (
        <Animated.View enetering={FadeInDown.duration(400).delay(index*200).springify()} >
            <TouchableOpacity onPress={()=> router.push({pathname:'/exerciseDetails',params:item})} className='flex  py-3 space-y-3'>
                <View className='bg-neutral-200 shadow rounded-[25px]'>
                    <Image
                        source={{ uri: item.gifUrl }}
                        style={{ width: wp(44), height: wp(52) }}
                        className="rounded-[25px]"
                        contentFit='cover'
                    />
                </View>
                <Text
                    style={{ fontSize: hp(1.7) }}
                    className="font-semibold text-neutral-700 ml-1 tracking-wide"
                >
                    {
                        item?.name?.length>20? item.name.slice(0,20)+'...':item.name
                    }
                </Text>

            </TouchableOpacity>
        </Animated.View>
    )
}
