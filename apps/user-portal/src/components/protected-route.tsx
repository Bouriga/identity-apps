/**
 * Copyright (c) 2019, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import * as React from "react";
import { Redirect, Route } from "react-router-dom";
import history from "../helpers/history";
import { AuthConsumer } from "./auth-context";

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <AuthConsumer>
        {({ isAuth }) => (
            <Route
                render={(props) =>
                    isAuth ? <Component {...props} /> : <Redirect to={{
                        pathname: "/login",
                        state: { details: history.location.pathname }
                      }} />
                }
                {...rest}
            />
        )}
    </AuthConsumer>
);

export default ProtectedRoute;