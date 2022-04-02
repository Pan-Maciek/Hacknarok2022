import React from 'react'
// header + description with collapse + additional components

type StepProps = { title: string, description: string }

const Step = ({ title, description }: StepProps) => {

    return <div>
        <h1>{title}</h1>
    </div>
}

export default Step