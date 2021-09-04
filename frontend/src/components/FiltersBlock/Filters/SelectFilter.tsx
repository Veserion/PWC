import React from "react";
import {Select} from "antd";

interface IProps {
    values: string[],
    type: string
    handler: (i: string) => void
}

const { Option } = Select;

export const SelectFilter: React.FC<IProps> = (props) => {

    return <>
        {props.type}
        <Select
            showSearch
            style={{width: 200}}
            placeholder="Select a person"
            optionFilterProp="children"
            onChange={props.handler}
        >
            {props.values.map(i => <Option value={i} key={i}>{i}</Option>)}
        </Select>
    </>
}
