import React, {useState} from 'react';
import {DatePicker, Select, Space} from 'antd';
import {Moment} from "moment";
import styled from "@emotion/styled";

const {Option} = Select;

type pickerType = 'month' | 'week'

export type IDateRange = {
    type: pickerType,
    value: number
}

type IRawDateRange = {
    type: pickerType,
    value: Moment | null
}

interface IProps {
    handler: (arg0: IDateRange) => void
}

const Title = styled.div`

`

export const DateFilter: React.FC<IProps> = (props) => {
    const [type, setType] = useState<pickerType>('month');

    const onChange = (x: IRawDateRange) => {
        const {value, type} = x
        if (type === 'week') {
            if (!!value) console.log(value.week())
            if (!!value) props.handler({type, value: value.week()})
        }
        if (type === 'month') {
            if (!!value) console.log(value.month())
            if (!!value) props.handler({type, value: value.month()})
        }
    }

    return <>
        <Title>
            Выберите период:
        </Title>
        <Space>
            <Select value={type} onChange={setType}>
                <Option value="week">Week</Option>
                <Option value="month">Month</Option>
            </Select>
            <DatePicker picker={type} onChange={(value) => onChange({type, value})}/>
        </Space>
    </>
}
