import { View, Text, SafeAreaView } from 'react-native'
import React, { useEffect } from 'react'
import * as Animatable from "react-native-animatable";
import * as Progress from 'react-native-progress';
import { useNavigation } from '@react-navigation/native';


const PreparingOrderScreen = () => {
    const navigation = useNavigation();

    useEffect(()=>{
        setTimeout(()=>{
            navigation.navigate("DeliveryScreen");
        }, 4000);
    },[]);

  return (
    <SafeAreaView className='bg-[#00CCBB] flex-1 items-center justify-center'>
      <Animatable.Image
       source={require("../assets/DeliveryGif.gif")} 
       animation='slideInUp'
       iterationCount={1}
       className='h-[200px] w-[266px]'
      />

      <Animatable.Text 
      animation='slideInUp'
      iterationCount={1}
      className='text-lg my-10 text-white font-bold text-center px-2'>
        Waiting for Restaurant to accept your order!
      </Animatable.Text>

      <Progress.Circle size={60} indeterminate={true} color='white'/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen