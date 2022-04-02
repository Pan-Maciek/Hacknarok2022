import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Step from "./step";
import {createRoot} from "react-dom/client";

const container = document.getElementById('root') as Element

const root = createRoot(container)
root.render(
    <React.StrictMode>
        <Step title="Test" description=""/>
    </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
