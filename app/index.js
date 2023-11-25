import { View , ScrollView , SafeAreaView ,Text} from "react-native";
import { useState } from "react";
import { Stack , useRouter} from "expo-router";
import { Nearbyjobs , Popularjobs , Welcome , ScreenHeaderBtn} from "../components";
import {COLORS , icons , images , SIZES} from "../constants";
const Home = () =>{

    const router = useRouter();

   return(
    <SafeAreaView style={{flex:1,backgroundColor:COLORS.lightWhite}}>
        <Stack.Screen options={{
            headerStyle:{backgroundColor:COLORS.lightWhite},
            headerShadowVisible:false,
            headerLeft:()=>(
                <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                
            ),
            headerRight:()=>(
                <ScreenHeaderBtn iconUrl={images.profile} dimension='100%' />
            ),
            headerTitle:""
        }} />

        <ScrollView showsVerticalScrollIndicator={false}>
            <View
               style={{
                flex:1,
                padding:SIZES.medium
               }}>

               <Welcome/>

               <Popularjobs/>
               <Nearbyjobs/>


            </View>
        </ScrollView>
    </SafeAreaView>
   )
}

export default Home;