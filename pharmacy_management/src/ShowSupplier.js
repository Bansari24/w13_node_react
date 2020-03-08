// import React from 'react';
// import styles from './ShowSupplier.css'
// // import "./util.css";
// // import { Helmet } from "react-helmet";
// // import Script from "react-inline-script"
// // import Confirm from "./Confirm.js"

// class ShowSupplier extends React.Component {
//     constructor(props) {
//         super(props);
      
//         console.log("Supplier response below ---------@");
//         this.state = {

//             supplier_data: [],
//             selected_data: [],
//             main_data: {},
//             isLoaded: true,
//             error: null
//         };
//     }

//     // --------------->>>>>>>>>>

//     searchSuplier = (supplierName) => {
//         console.log("Follow me");
//         // http://localhost:8080/product/productbysupplier?sid=1
//         fetch("http://localhost:8080/product/allproducts", {
//             'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//             'Accept-Encoding': 'gzip, deflate, br',
//             'Accept-Language': 'en-US,en;q=0.9',
//             'Connection': 'keep-alive',
//             'Host': 'localhost:8080',
//             'Sec-Fetch-Mode': 'navigate',
//             'Sec-Fetch-Site': 'none',
//             'Upgrade-Insecure-Requests': '1',
//             'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36'
//         }).then(
//             response => {
//                 console.log("Fetched Json data url");
//                 if (response.ok) {
//                     response.json().then(json_response => {
//                         console.log("inside fetch----->");
//                         console.log(json_response);

//                         this.setState({
//                             supplier_data: json_response,
//                             main_data: {},
//                             isLoaded: true,
//                             error: null
//                         });

//                     });

//                 }
//                 else {
//                     response.json().then(json_response => {
//                         this.setState({

//                             isLoaded: false,
//                             error: json_response,
//                             supplier_data: [],
//                             main_data: {},
//                         });
//                         console.log("data trasnfer done");
//                     });
//                 }

//             },
//             error => {
//                 console.log("inside error ----->");
//                 this.setState({
//                     isLoaded: false,
//                     error: { message: "Ajax error, URL might be wrong! or unreacheable, check console" },
//                     supplier_data: [],
//                     main_data: {}
//                 });
//                 console.log("Error side ,data trasnfer done");
//                 console.log(this.state.supplier_data);
//             }
//         );
//     };

//     // ---------------<<<<<<<<<<

//     // ----------------------------------------
//     addRow = (pName, pId, pQuantity) => {
//         // console.log(pName);
//         // https://stackoverflow.com/questions/35315872/reactjs-prevent-multiple-times-button-press
//         var selected_data = this.state.selected_data
//         selected_data.push({ 'pName': pName, 'pId': pId, 'pQuantity': pQuantity })
//         // this.btn.setAttribute("disabled", "disabled")
//         this.setState({ selected_data: selected_data })

//         console.log(selected_data);

//     };

//     handleSubmit = () => alert("Submitted");

//     handleStatusChange = event => {
//         this.setState({ select: event.target.value })
//     };

//     handleReset = event => alert("Resetted");
//         render() {
//             return (
//                <form className={styles.form}>
        
//               <table>
//                   <tr>
//                       <h1>Search Suppliers</h1>
//                   </tr>
//                   <br/><br/>
//                 <div className="search">
                    
//                         <input type="text" id="filter" 
//                         placeholder="Search Suppliers"
//                          ref={input => this.search = input} onChange={this.handleInputChange}/>
//                         <button type="submit">Search</button>
//                     <div>
//                         {
//                             this.state.data.map((i) =>
//                                 <p>{i.name}</p>
//                             )
//                         }
//                     </div>
                    
//                     </div>
                    
//                     </table>
//                     <br/>
//                     <br/>
//                     <table className="data">
//                     {/* <tr style={{border:"1px solid black"}}> */}
//                     <tr>
//                       <th>Serial Number</th><br/><br/>
//                       <th>Supplier Name</th><br/><br/>
//                       <th>Action</th>
//                     </tr>
                   
                 
              
//                 </table>
//                 </form>
//             )
//         }
//     }
  

// export default ShowSupplier;