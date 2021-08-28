import React, {useState} from "react";
import styled from "@emotion/styled";
import {CheckboxFilter, DateFilter, IDateRange} from "@components/FiltersBlock/Filters";
import {CHECKBOX_TYPES} from "@src/constants/filterConstants";
import {Button} from 'antd';

interface IProps extends React.HTMLAttributes<HTMLDivElement> {
}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const Title = styled.div`

`

// type dates = ['jan' | 'feb'] | ['']
// interface filters {
//     period: 'Месяц' | 'Неделя',
//     // date:
// }
export interface IFilters {
    date: IDateRange | null,
    name: string[] | null,
    country: string[] | null,
    network: string[] | null,
    client: string[] | null,
    vendor: string[] | null,
}

export const FiltersScreen: React.FC<IProps> = (props) => {


    const initState = {
        date: null,
        name: null,
        client: null,
        country: null,
        network: null,
        vendor: null,
    }

    const [state, setState] = useState<IFilters>(initState)

    return (
        <Root>
            <Title>
                Выберите фильтры:
            </Title>
            <DateFilter handler={(x) => setState({...state, date: x})}/>

            <CheckboxFilter values={['говно', 'жопа', 'моча']} type={CHECKBOX_TYPES.NAME}
                            handler={(x) => setState({...state, name: x})}/>

            <CheckboxFilter values={['говно', 'жопа', 'моча']} type={CHECKBOX_TYPES.CLIENT}
                            handler={(x) => setState({...state, client: x})}/>

            <CheckboxFilter values={['говно', 'жопа', 'моча']} type={CHECKBOX_TYPES.NETWORK}
                            handler={(x) => setState({...state, country: x})}/>

            <CheckboxFilter values={['говно', 'жопа', 'моча']} type={CHECKBOX_TYPES.COUNTRY}
                            handler={(x) => setState({...state, network: x})}/>

            <CheckboxFilter values={['говно', 'жопа', 'моча']} type={CHECKBOX_TYPES.VENDOR}
                            handler={(x) => setState({...state, vendor: x})}/>

            <Button onClick={() => console.log(state)}>
                Submit
            </Button>
        </Root>
    );
};
