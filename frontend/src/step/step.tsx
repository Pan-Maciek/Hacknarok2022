import React, {useState} from 'react'
import {Card} from 'antd'
import Title from "antd/lib/typography/Title";
import Likes from "./likes";
// header + description with collapse + additional components

export type StepProps = { title: string, description: string, likesInit?: number, likedInit?: boolean }

const Step = ({ title, description, likesInit, likedInit }: StepProps) => {
    const [likes, setLikes] = useState<number>(likesInit ?? 100)
    const [liked, setLiked] = useState<boolean>(likedInit ?? false)

    const onLiked = () => {
        if(!liked) {
            setLikes(likes+1);
        } else {
            setLikes(likes-1);
        }
        setLiked(!liked)


    }

    return <Card title={title} extra={"more"} style={{width: 900, margin: 'auto'}}>
        {description}
        <Likes likesNumber={likes}  onLiked={onLiked} liked={liked}/>
    </Card>
}

export default Step