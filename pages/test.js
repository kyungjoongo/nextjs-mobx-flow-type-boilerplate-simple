import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Button} from "antd";
import {useRouter} from "next/router";

export default function Test() {

    const router = useRouter()
    return (
        <div>
            sldkflsdkflksdflk

            <Button onClick={()=>{

                router.back();
            }}>

                sdlkf
            </Button>
        </div>
    )
}
