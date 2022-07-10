import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { StarIcon } from 'react-native-heroicons/solid'
import { LocationMarkerIcon } from 'react-native-heroicons/outline'
import { urlFor } from '../sanity'
import { useNavigation } from '@react-navigation/native'

const RestaurantCard = ({
    id,
    imgUrl,
    title,
    rating,
    genre,
    address,
    short_description,
    dishes,
    long,
    lat,
}) => {

  const navigation = useNavigation();
  return (
    <TouchableOpacity
    onPress={()=>{
      navigation.navigate('Restaurant',{
        id,
        imgUrl,
        title,
        rating,
        genre,
        address,
        short_description,
        dishes,
        long,
        lat,
      });
    }}
    className='bg-white mr-3 shadow w-[256px]'>
      
      <View className='h-36 w-[256px] rounded-sm items-center justify-center flex-row'>
        <Image 
        source={{
          uri: urlFor(imgUrl).url(),
          }}
          resizeMode='cover'
          
          className='h-full w-full rounded-sm self-center justify-self-center '
        />
      </View>

      <View className='px-3 pb-4'>
        <Text className='font-bold text-lg pt-2'>{title}</Text>
        <View className='flex-row items-center space-x-1'>
            <StarIcon color='green' opacity={0.5} size={22}/>
            <Text className='text-xs text-gray-500'>
               <Text className='text-green-500'>{rating}</Text> • {genre}
            </Text>
        </View>
        <View className='flex-row items-center space-x-1 flex-1 whitespace-normal'>
            <LocationMarkerIcon color='gray' opacity={0.4} size={22} />
            <Text className='text-sm text-gray-500'>Nearby • {address}</Text>
        </View>
      </View>

    </TouchableOpacity>
  )
}

export default RestaurantCard