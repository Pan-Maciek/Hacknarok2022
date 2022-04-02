import React from 'react'
import {Card, Collapse, List} from 'antd'
import {Solution, SolutionProps} from "../solutions/Solution";
// header + description with collapse + additional components

export type StepProps = { stepTitle: string, stepDescription: string, stepSolutions: SolutionProps[] }

export const Step = ({ stepTitle, stepDescription, stepSolutions }: StepProps) => {
    return <Card title={stepTitle} extra={"more"} style={{ width: 900, margin: 'auto' }}>
        <p> {stepDescription} </p>
        <List itemLayout="vertical">
            <List.Item>
                {stepSolutions.map((data, i) => <Solution {...data} key={i}/>)}
            </List.Item>
        </List>
    </Card>
}