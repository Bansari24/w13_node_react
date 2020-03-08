import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import AddUser from './AddUser.js';
import AddSupplier from './AddSuplier.js';
import UpdateSupplier from './UpdateSupplier';
import AddRole from './AddRole';
import ShowStaffMembers from './ShowStaffMembers';
import ShowSupplier from './ShowSupplier'

class Main extends React.Component{
    render()
    {
        return(
            <Main>
               
            </Main>


        );
    }
}
class Root extends React.Component{
    render()
    {
        return(
            <div>
                <Main/>
                <AddUser />
                {/* <AddSupplier /> */}
                {/* <UpdateSupplier/> */}
                {/* <AddRole/> */}
                {/* <ShowStaffMembers/> */}
            </div>


        );
    }
}


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
