import React, { useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import history from '../../history';

import ProtectedRoute from '../ProtectedRoute';
import Login from '../../pages/Login/Login';
import Register from '../../pages/Register/Register';
import ForgotPassword from '../../pages/ForgotPassword/ForgotPassword';

import Dashboard from '../../pages/Dashboard/Dashboard';

import Settings from '../../pages/Settings/Settings';


import InvalidRoute from '../../pages/InvalidRoute/InvalidRoute';
import { connect } from 'react-redux';
import { fetchUserData } from '../../store/actions';


import './App.css';

const App = ({ id, fetchUserData }) => {

    //Fetch user data every component render/update

    useEffect(() => {
        fetchUserData();
    }, [id]);

    id=id.id;
    // console.log(id.id);
    const routesToRedirectFrom = ["/", "/dashboard"];
    return (
        <div className="container">
            <Router history={history}>
                <Switch>
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/reset-password/:hash" render={(props) => <Login resetPassword {...props} />} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/forgot-password" component={ForgotPassword} />
                    <Route exact path={routesToRedirectFrom} render={() => <Redirect to={`/dashboard/${id}`}/>} />

                    <ProtectedRoute exact path="/dashboard/:id" component={Dashboard} />

                    {/* <ProtectedRoute exact path="/dashboard/:id/questions" component={Questions} /> */}
                    {/* <ProtectedRoute exact path="/dashboard/:id/questions/:subpage" component={Questions} /> */}

                    {/* <ProtectedRoute exact path="/dashboard/:id/offers/" component={Offers} /> */}
                    {/* <ProtectedRoute path="/dashboard/:id/offers/:subpage/" component={FormBuilder} /> */}
                    {/* <ProtectedRoute exact path="/dashboard/:id/funnels/" component={Funnels} /> */}
                    {/* <ProtectedRoute exact path="/dashboard/:id/funnels/:subpage" component={Funnel} /> */}

                    <ProtectedRoute exact path="/dashboard/:id/settings/" component={Settings} />
                    <ProtectedRoute exact path="/dashboard/:id/settings/:type" component={Settings} />

                    <Route exact path="/*" component={InvalidRoute} />
                </Switch>
            </Router>
        </div>
    );
}

const mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps, { fetchUserData })(App);
