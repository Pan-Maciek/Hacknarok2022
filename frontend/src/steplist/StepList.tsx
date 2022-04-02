import React from "react";
import {Step, StepProps} from "../step/Step";
import {List} from "antd";

export type StepListProps = { categoryTitle: string, categoryDescription: string,  steps: StepProps[] }
const text = (
    <p style={{ paddingLeft: 24 }}>
        A dog is a type of domesticated animal. Known for its loyalty and faithfulness, it can be found
        as a welcome guest in many households across the world.
    </p>
);

const StepList = ({ categoryTitle, steps }: StepListProps) => {

    return <List>
        {steps.map((data, i) => <Step key={i} {...data}/>)}
   </List>

}
export default StepList