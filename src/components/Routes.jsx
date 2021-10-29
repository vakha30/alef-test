import { Switch, Route, Redirect } from "react-router-dom";
import { FormPage, PreviewPage } from "./pages";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <FormPage />
      </Route>
      <Route exact path="/preview">
        <PreviewPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default Routes;
