import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect, useState } from 'react';
import { Text, TouchableOpacity, View, Image } from 'react-native';
import { fetchExercisesByBodyPart } from '../api/exerciseDB';
import { StatusBar } from 'expo-status-bar';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ExeercisesList from '../components/ExeercisesList';
import { ScrollView } from 'react-native-virtualized-view';



export default function Exercises() {
    const router = useRouter();
    const { name, image } = useLocalSearchParams(); 
    const [exercises,setExercises] = useState([]);
    const item  = useLocalSearchParams();
    

    //console.log('got items', { name, image });

    useEffect(() => {
        if (item) getExercises(item.name);
    }, [item]);

    const getExercises = async (bodyPart) => {
        let data = await fetchExercisesByBodyPart(bodyPart);
        setExercises(data);
    }

    return (
        <ScrollView>
            <StatusBar style="light" />
            <Image
                source={item.image}
                style={{ width: wp(100), height: hp(45) }}
                className="rounded-b-[40px]"
            />
            <TouchableOpacity
                onPress={() => router.back()}
                className="bg-red-500 mx-4  absolute flex justify-center items-center pr-1 rounded-full"
                style={{ width: wp(5.5), height: wp(5.5), marginTop: hp(7) }}
            >
                <Ionicons name="caret-back-outline" size={hp(4)} color="white" />
            </TouchableOpacity>

            {/* Exercises */}
            <View className="mx-4 space-y-3 mt-4">
                <Text style={{ fontSize: hp(3) }} className="font-semibold text-neutral-700">
                    {item.name} exercises
                </Text>

                <View className="mb-10">
                    <ExeercisesList data={exercises} />
                </View>
            </View>
        </ScrollView>
      
    );
}
