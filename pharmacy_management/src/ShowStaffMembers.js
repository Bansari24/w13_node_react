import React from 'react';
// import styles from './ShowStaffMembers.css'
// import "./util.css";
// import {Helmet} from "react-helmet";
import "./ShowStaffMembers.css";


class ShowStaffMembers extends React.Component {
    constructor(props) {
        super(props);
      
        console.log("StaffMember response below ---------@");
        this.state = {

            staffmember_data: [],
            selected_data: [],
            main_data: {},
            isLoaded: true,
            error: null
        };
    }

    // --------------->>>>>>>>>>

    searchstaffmember = (staffmemberName) => {
        console.log("Follow me");
        // http://localhost:8080/product/productbysupplier?sid=1
        fetch("http://localhost:8080/product/allproducts").then(
            response => {
                console.log("Fetched Json data url");
                if (response.ok) {
                    response.json().then(json_response => {
                        console.log("inside fetch----->");
                        console.log(json_response);

                        this.setState({
                            supplier_data: json_response,
                            main_data: {},
                            isLoaded: true,
                            error: null
                        });

                    });

                }
                else {
                    response.json().then(json_response => {
                        this.setState({

                            isLoaded: false,
                            error: json_response,
                            supplier_data: [],
                            main_data: {},
                        });
                        console.log("data trasnfer done");
                    });
                }

            },
            error => {
                console.log("inside error ----->");
                this.setState({
                    isLoaded: false,
                    error: { message: "Ajax error, URL might be wrong! or unreacheable, check console" },
                    supplier_data: [],
                    main_data: {}
                });
                console.log("Error side ,data trasnfer done");
                console.log(this.state.supplier_data);
            }
        );
    };

    
    render() {
        return (

       <div>
                <h2>SEARCH STAFF MEMBERS</h2>
                <br></br><br></br><br></br><br></br><br></br>
                <form class="example" action="/action_page.php" style={{ margin: "auto", maxWidth: "500px" }} >
                    <input type="text" id="supplierName" placeholder="Search Supplier" name="search" />
                    <button type="button" onClick={() => this.searchStaffmember(document.getElementById("staffmember").value)}>
                        <i className="fa fa-search"></i>
                    </button>
                </form>

                <br></br><br></br>
                <div class="limiter">
                    <div class="container-table100">
                        <div class="wrap-table100">

                            <div class="table100 ver2 m-b-110">
                                <div class="table100-head">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1">Username</th>
                                                <th class="cell100 column2">Role</th>
                                                <th class="cell100 column4">Action</th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                                <div class="table100-body js-pscroll">
                                    <table>
                                        <tbody>
                                            {
                                                this.state.supplier_data.map(supplier => (
                                                    <tr key={supplier.pId} align="start">
                                                        <td class="cell100 column1" ></td>
                                                        <td class="cell100 column2" id="pName" ></td>
                                                       
                                                        {/* document.getElementById("pName").innerHTML */}
                                                        <td class="cell100 column4" ><button class="deletebtn" ref={btn => { this.btn = btn; }} onClick={() => this.deleteRow()}>Delete</button></td>
                                                    </tr>
                                                ))
                                            }

                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            <br></br><br></br><br></br>
                            <h4>Selected Order Details</h4>
                            <br></br><br></br>
                            <div class="table100 ver5 m-b-110">
                                <div class="table100-head">
                                    <table>
                                        <thead>
                                            <tr class="row100 head">
                                                <th class="cell100 column1"></th>
                                                <th class="cell100 column2"></th>
                                            </tr>
                                        </thead>
                                    </table>
                                </div>

                                <div class="table100-body js-pscroll">
                                    <table>
                                        <tbody>
                                            {
                                                this.state.selected_data.map(supply => (
                                                    <tr key={supply.pId} align="start" class="row100 body">
                                                        <td class="cell100 column1" ></td>
                                                        <td class="cell100 column2"  ></td>
                                                    </tr>
                                                ))
                                            }


                                        </tbody>
                                    </table>
                                    <button class="btn2 placeorder" >Place Order</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <script src="vendor/jquery/jquery-3.2.1.min.js"></script>
                <script src="vendor/bootstrap/js/popper.js"></script>
                <script src="vendor/bootstrap/js/bootstrap.min.js"></script>
                <script src="vendor/select2/select2.min.js"></script>
                <script src="vendor/perfect-scrollbar/perfect-scrollbar.min.js"></script>
                <script src="js/main.js"></script>

            </div>

        );

    }


}
export default ShowStaffMembers;
