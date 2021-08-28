import React from "react";
import styled from "@emotion/styled";

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const Root = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

const FiltersScreen: React.FC<IProps> = () => {

    return (
        <Root>
        </Root>
    );
};
export default FiltersScreen;
