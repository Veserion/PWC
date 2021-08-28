import React, {useState} from "react";
import {Checkbox} from "antd";
import {CHECKBOX_TYPES} from "@src/constants/filterConstants";

interface IProps {
    values: string[],
    type: string
    handler: (i: string[]) => void
}


export const CheckboxFilter: React.FC<IProps> = (props) => {

    const plainOptions = props.values;
    const defaultCheckedList = [''];

    const [checkedList, setCheckedList] = useState<string[]>(defaultCheckedList);
    const [indeterminate, setIndeterminate] = useState(true);
    const [checkAll, setCheckAll] = useState(false);

    const onChange = (list: any[]) => {
        setCheckedList(list);
        setIndeterminate(!!list.length && list.length < plainOptions.length);
        setCheckAll(list.length === plainOptions.length);
        props.handler(list)
    };

    const onCheckAllChange = (e: any) => {
        setCheckedList(e.target.checked ? plainOptions : []);
        setIndeterminate(false);
        setCheckAll(e.target.checked);
        props.handler(plainOptions)
    };

    let titleName: string

    switch (props.type) {
        case CHECKBOX_TYPES.NAME:
            titleName = "Имя"
            break;
        case CHECKBOX_TYPES.COUNTRY:
            titleName = "Страна"
            break;
        case CHECKBOX_TYPES.NETWORK:
            titleName = "Сеть"
            break;
        case CHECKBOX_TYPES.CLIENT:
            titleName = "Клиент"
            break;
        case CHECKBOX_TYPES.VENDOR:
            titleName = "Вендор"
            break;
        default:
            titleName = ""
            break;
    }

    return <>
        {titleName}
        <Checkbox indeterminate={indeterminate} onChange={onCheckAllChange} checked={checkAll}>
            Выбрать все
        </Checkbox>
        <Checkbox.Group options={plainOptions} onChange={onChange} value={checkedList}/>
    </>
}
