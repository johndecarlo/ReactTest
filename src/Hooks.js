import React, { useState } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

export const aFunc = ()=>{};
export default function Hooks(props) {
    const {name} = props;
    let [clicks, setClicks] = useState(0);

    const doSomething = function (event) {
        console.log(event.currentTarget.getAttribute('data-something'));
        setClicks(clicks + 2);
    }
    return (
        <React.Fragment>
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="text" animation="wave"/>
            <Skeleton variant="rect" width={210} height={110} animation="wave"/>
        </React.Fragment>
    );
}
