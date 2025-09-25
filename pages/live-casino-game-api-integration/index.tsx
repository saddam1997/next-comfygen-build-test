import { useEffect } from "react";
import { useRouter } from "next/router";

export default function liveLinePage(){
 const router = useRouter()

 useEffect(() => {
    router.replace("/")
 },[router])

 return null;
}

