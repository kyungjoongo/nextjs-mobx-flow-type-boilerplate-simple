// @flow

import styles from '../styles/Home.module.css'
import {View} from "react-native-web";
import {useRouter} from "next/router";
import {Button} from "antd";
import {Observer} from "mobx-react";
import {useEffect} from "react";
import sharedService from "../services/SharedService";
import _ from 'lodash'
import {toJS} from "mobx";

type Props = {
    data: any,
}

export default function Home(props: Props) {
    const router = useRouter()

    useEffect(() => {
        sharedService.results = props.data
        console.log("results=====>", toJS(sharedService.results));

    }, [])

    return (
        <Observer>
            {() => (
                <div className={styles.container}>
                    <View style={{flexDirection: 'row', margin: 50,}}>
                        <Button
                            style={{background: 'green'}}
                            type={"primary"}
                            onClick={() => {
                                // router.push({
                                //     pathname: '/test',
                                //     query: {
                                //         param1: 'kyungjoon is genius'
                                //     },
                                //
                                // },
                                //     );

                                router.push("/test", undefined, {shallow: true})

                            }}
                        >
                            kyungjoon is genius
                        </Button>
                    </View>
                    {sharedService.results.map((item, index) => {
                        return (
                            <View key={index.toString()}>
                                <div>{item.title}</div>
                            </View>
                        )
                    })}
                </div>
            )}
        </Observer>
    )
}


export async function getServerSideProps() {
    const data = await fetch('https://jsonplaceholder.typicode.com/posts').then((res) =>
        res.json()
    );
    console.log("temp=====>", data);

    return {
        props: {data: data},
    };
}
