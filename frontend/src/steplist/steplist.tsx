import React from "react";
import Step, {StepProps} from "../step/step";

type StepListProps = { steps: StepProps[] }

const StepList = ({ steps }: StepListProps) => {

    return <div>
       {steps.map(data => <Step {...data}/>)}
   </div>

}
export default StepList