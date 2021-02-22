import { Route, Switch } from 'react-router-dom'
import Dashboard from './pages/backend/dashboard/Dashboard'
import Counter from './pages/counter/Counter'
import Forgotpassword from './pages/forgotpassword/Forgotpassword'
import Login from './pages/login/Login'
import PageNotFound from './pages/pagenotfound/PageNotFound'
import Register from './pages/register/Register'

const Routes = () => {
    return (
        <Switch>

            {/* Frontend */}
            <Route path="/" exact={true} component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/forgotpassword" component={Forgotpassword} />
            <Route path="/counter" component={Counter} />

            {/* Backend */}
            <Route path="/backend/dashboard" component={Dashboard} />

            {/* Not found Page */}
            <Route component={PageNotFound} />

        </Switch>
    )
}

export default Routes