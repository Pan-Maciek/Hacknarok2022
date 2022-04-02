import React from 'react'
import {Card} from 'antd'
import Title from "antd/lib/typography/Title";
// header + description with collapse + additional components

export type StepProps = { title: string, description: string }

const Step = ({ title, description }: StepProps) => {

    return <Card title={title} extra={"more"} style={{width: 900, margin: 'auto'}}>
        {description}
    </Card>
}

export default Step