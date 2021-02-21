import { Route, Switch } from 'react-router-dom'
import Login from './pages/login/Login'

const routes = (

    <Switch>

        {/* Frontend */}
        <Route path="/" exact={true} component={Login} />
        <Route path="/login" component={Login} />
        {/* <Route path="/register" component={"register"} /> */}

        {/* Backend */}
        {/* <Route path="/backend/dashboard" component={"dashboard"} /> */}

    </Switch>
)

export default routes