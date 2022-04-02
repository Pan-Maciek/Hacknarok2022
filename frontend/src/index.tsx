import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createRoot} from "react-dom/client";
import StepList, {StepListProps} from "./steplist/StepList";
import data from './data.json'

const container = document.getElementById('root') as Element
console.log(data)

const root = createRoot(container)
root.render(
    <React.StrictMode>
        <StepList {...(data.categories[0] as any as StepListProps)} />
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
