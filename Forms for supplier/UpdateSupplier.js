import React from "react";
import styles from "./Updatesupplier.css";
import {Link } from "react-router-dom";

class Updatesupplier extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          supplier_data: [], 
          supplier_index: 0, 
          supplier_count: 0, 
          isLoaded: false,
          error: null    
    }
  }

    
//--------------------------------------search supplier----------------------------------------------------------------------------
searchSupplier = (id) => {
    fetch('http://localhost:8005/supplier/searchSupplier/'+id,{
        method: "GET"
    })
    .then(
        response => {
            if (response.ok) {     
                response.json().then(json_response => {
                    console.log(json_response);
                    this.setState({
                        supplier_data: json_response,
                        supplier_count: json_response.length, 
                        supplier_index: 0, 
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
                        supplier_data: {}, 
                        supplier_count: 0,
                        supplier_index: 0
                    });
                });
            }
        },

        error => {
          
            this.setState({
                isLoaded: false,
                error: {
                    message:
                        "AJAX error, URL wrong or unreachable, see console"
                }, 
                supplier_data: {}, 
                supplier_count: 0,
                supplier_index: 0
            });
        }
    );
}
//------------------------------------------To call showsuppler function----------------------------------------------------------
componentWillMount() {
    this.searchSupplier(this.props.match.params.sid);
  }

//--------------------------------------update Supplier-------------------------------------------------------------------------------
updateSupplier = (sid,name,PhoneNumber,Address,Email,License ) => {

    // , sId:parseInt(sid) 
    fetch('http://localhost:8005/supplier/updateSupplier/'+sid, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ supplierName:name,contactNo:PhoneNumber,address:Address,email:Email,license:License}),
          })
      };
        
      
    render() {
        return (
            <div className="panel350">
            <form >
                <h1>Update Product {this.props.match.params.sid}</h1>
                <h1>Add Supplier </h1>
                <br/><br/>
                <label htmlFor="name"><b>  Name: </b></label>
             <input type="text" id="name" required className="input" defaultValue={this.state.supplier_data.supplierName}/>
               <br/>
              <label type=" Phone Number"><b> Phone Number: </b> </label>
             <input type="text" id="PhoneNumber" required className="input"defaultValue={this.state.supplier_data.contactNo} />
               <br/><br/>
               <label type="Address"><b>  Address: </b> </label>
             <input type="text" id="Address" required className="input" defaultValue={this.state.supplier_data.address}/>
              <br/><br/>
              <label type="Email"><b> Email: </b> </label>
             <input type="email" id="Email" required className="input" defaultValue={this.state.supplier_data.email}/>
              <br/><br/>
            
               <label type="License"><b> License: </b> </label>
             <input type="text" id="License" required className="input" defaultValue={this.state.supplier_data.license}/>
               <br/><br/>
                <button type="submit" style={{borderRadius:"3px",height:"30px",width:"22%"}} onClick={() => this.updateSupplier(this.props.match.params.sid,document.getElementById('name').value,document.getElementById('PhoneNumber').value,document.getElementById('Address').value,document.getElementById('Email').value,document.getElementById('License').value )}>
                <Link to={{pathname:`/Showsupplier`}}> Update</Link></button>
                <button type="cancel" style={{borderRadius:"3px",height:"30px",width:"22%"}}>Cancel</button>
            </form>
            </div>
        )
    }
}


export default Updatesupplier;












