import { Route, Switch } from 'react-router-dom'
import BackendLayout from './components/layouts/backend/BackendLayout'
import Dashboard from './pages/backend/dashboard/Dashboard'
import Product from './pages/backend/product/Product'
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
            

            {/* Backend */}
            <Route path="/backend/:path?" render={(props)=>(
                <BackendLayout {...props}>
                    <Switch>
                        <Route path="/backend/dashboard"component={Dashboard} />
                        <Route path="/backend/product"component={Product} />
                        <Route component={PageNotFound} />
                    </Switch>
                </BackendLayout>
            )}/>

            <Route component={PageNotFound} />

        </Switch>

    )
}

export default Routes