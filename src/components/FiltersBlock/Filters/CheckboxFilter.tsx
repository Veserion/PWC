import React from "react";
import {Checkbox} from "antd";

interface IProps {
    values: string[],
    type: string
    handler: (i: string[]) => void
}


export const CheckboxFilter: React.FC<IProps> = (props) => {
    return <>
        {props.type}
        <Checkbox.Group options={props.values} onChange={(value: any[]) => props.handler(value)} />
    </>
}
