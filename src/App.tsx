import React from "react";
import styled from "@emotion/styled";
import { Route, Switch } from "react-router-dom";
import { ROUTES } from "@stores/RouterStore";
import {FiltersScreen} from "@src/screens/FiltersScreen";

interface IProps {}

const Root = styled.div`
  position: relative;
  box-sizing: border-box;
  padding: 50px 20% 0 20%;
  flex: 1 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
`;

const App: React.FunctionComponent<IProps> = () => {
  return (
    <Root>
      <Switch>
        <Route path={ROUTES.ROOT}>
          <FiltersScreen />
        </Route>
      </Switch>
    </Root>
  );
};

export default App;
