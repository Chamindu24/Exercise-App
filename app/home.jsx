import React  from 'react'
import { Image, Text, View } from 'react-native'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Imageslider from '../components/Imageslider';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import BodyParts from '../components/BodyParts';


export default function Home() {
    return (
        <SafeAreaView className="flex-1 bg-white flex space-y-5 " edges={['top']} > 
            <StatusBar style="dark" />

            {/* punchline and avatar */}
            <View className="flex-row items-center mx-5 justify-between">
                <View className="space-y-2">
                    <Text
                        style={{fontSize:hp(4.5)}}
                        className="text-neutral-700 font-bold tracking-wider"
                    >
                        READY TO
                    </Text>
                    <Text
                        style={{fontSize:hp(4.5)}}
                        className="text-rose-500 font-bold tracking-wider"
                    >
                        WORKOUT
                    </Text>
                </View>
                <View className="flex items-center justify-center space-y-2">
                    <Image
                        source={require("../assets/images/avatar.png")}
                        className="rounded-full"
                        style={{height:hp(10),width:hp(10)}}
                    />
                    <View 
                        className="bg-neutral-200 rounded-full flex justify-center items-center boarder-[3px] boarder-neutral-300"
                        style={{height:hp(5.5),width:hp(5.5)}}
                    >
                        <Ionicons name="notifications" size={hp(3)} color="gray" />
                    </View>
                </View>
            </View>

            <View>
                <Imageslider/>
            </View>

            {/* Image slider */}
            <View className="flex-1">
                <BodyParts/>
            </View>
        </SafeAreaView>
    )
}
