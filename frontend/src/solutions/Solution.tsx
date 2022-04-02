import React from "react";
import {isLinkSolution, LinkSolution, LinkSolutionProps} from "./LinkSolution";

export type SolutionProps = LinkSolutionProps | { solutionType: string }

export const Solution = (props: SolutionProps) => {
    if (isLinkSolution(props)) return <LinkSolution {...props} />
    else return <div>unimplemented type {props.solutionType}</div>
}