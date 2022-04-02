import React from 'react'

export type LinkSolutionProps = {
    solutionType: 'linkSolution',
    solutionTitle: string,
    solutionLink: string,
    solutionIcon: string,
    solutionDescription: string,
    likesCount: number
}

export const isLinkSolution = (props: { solutionType: string }): props is LinkSolutionProps =>
    props.solutionType === 'linkSolution'

export const LinkSolution = ({solutionTitle, solutionDescription}: LinkSolutionProps) => {

    return <div>
        {solutionTitle}
    </div>
}