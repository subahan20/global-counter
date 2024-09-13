import axios from "axios"
import { useEffect, useState } from "react"




const withProfile = (Component) =>{
    return () =>{
        const[profileData,setProfileData]=useState({})
        useEffect(()=>{
            fetchData()
        },[])

        const fetchData = async() =>{
            const fetch = await axios.get("https://dummyjson.com/users/1")
            if(fetch.status === 200){
                setProfileData(fetch.data)
            }
        }
        return <Component profile={profileData} />
    }
}
export default withProfile