import React, {useState} from "react";
import {Radio} from 'antd';

interface IProps {
    values: string[],
    type: string
    handler: (i: string) => void
}


export const RadioFilter: React.FC<IProps> = (props) => {
    const [state, setState] = useState<string>()

    const handler = (value: string) => {
        setState(value)
        props.handler(value)
    }

    return <Radio.Group onChange={(value) => handler(value.target.value)} value={state}>
        {props.values.map(i => <Radio.Button value={i} key={i}>{i}</Radio.Button>)}
    </Radio.Group>
}
