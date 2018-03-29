import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Kavi extends Component {

	 constructor(){
	super();
	this.state={
	
   id:'',num:'',rating:'',text:'', num1:'',rating1:'',text1:'',num2:'',rating2:'',text2:'',
	};
	this.handleChange=this.handleChange.bind(this)
  this.handleBlur=this.handleBlur.bind(this)
  this.handleNum=this.handleNum.bind(this)
  this.handleNum2=this.handleNum2.bind(this)
  this.onSubmit = this.onSubmit.bind(this) 
  this.onChange = this.onChange.bind(this)
  }

   onChange(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state); 
        console.log(this.state);
    }
    onSubmit(e) {
        e.preventDefault();
        const data =new FormData(e.target);
        
console.log(data);

        var url = "/api/analystinsert/";

        fetch (url,  
          {method:"post", 

          body:data,
    }).then((response)=> {
      return response.json()
    }).then((result)=>{
     
      // window.location.reload();
      var data=result;
      console.log(data);
      this.setState({
        value0:data[0].value,
        value1:data[1].value,
        value2:data[2].value,
        rating:data[0].name,
        rating1:data[1].name,
        rating2:data[2].name,
        command0:data[0].coammand,
        command1:data[1].coammand,
        command2:data[2].coammand,

      });
    })
 
   // alert("data saved Successfully");
   // window.location.reload();

    }


  handleChange(e) {
    this.setState({ num: e.target.value });
    this.setState({num1: e.target.value});
  }

  handleBlur(e) {

    this.setState({"num":e.target.value});
    const num=e.target.value;
    console.log(num);
   var url= "/api/analyst/"+num;
   fetch(url,{
   	method:"get",

   })	
      .then((response) => {

    return response.json()
   
}).then((result) => {
	var data=result;
	this.setState({
		rating:data[0].rating,

	})

  });
if(this.state.rating==="Outstanding"){

}
}


  handleNum(e) {

    this.setState({"num1":e.target.value});
    const num1=e.target.value;
    console.log(num1);
    var url= "/api/analyst1/"+num1;
    fetch(url,{
    method:"get",

   }) 
      .then((response) => {

    return response.json()
   
}).then((result) => {
  var data=result;
  this.setState({
    rating1:data[0].rating,

  })

  });
}

  handleNum2(e) {

    this.setState({"num2":e.target.value});
    const num2=e.target.value;
    console.log(num2);
    var url= "/api/analyst2/"+num2;
    fetch(url,{
    method:"get",

   }) 
      .then((response) => {

    return response.json()
   
}).then((result) => {
  var data=result;
  this.setState({
    rating2:data[0].rating,

  })

  });

}
render(){
return(

// <img src=".//php/logo.png" /><hr>
<form method="post"  action="" id="empform" onSubmit={this.onSubmit}>
<div className="container" style={{width: '90%',
    height: '90%',
    marginLeft: '100px'}}>
<table>
	<thead>
  <tr>
    <td colSpan="8"><h2>Analyst jr - KRA_2017-18</h2>
      
      <label>Employ Id:</label><input type="text" name="id" onChange={this.onChange} id="empid"/>
     

    </td>
  </tr>
  <tr> 
  <th rowSpan="2">Parameter</th>
    <th rowSpan="2">Rating</th>
  </tr>
  <tr>
    <th>Min</th>
    <th>Max</th>
    <th>Weightage</th> 
    <th>values</th>
    <th>name</th>  
    <th style={{width: "20%"}}>command</th> 
  </tr>
 </thead>
  <tbody>
  <tr>
    <td rowSpan="6">External Quality </td>
  </tr>
  <tr>
   
    <td>Outstanding</td>
    <td colSpan="2" style={{textAlign: "center"}}>Above 99.51%</td>
    <td rowSpan="5" style={{textAlign: "center"}}>40%</td>
    
    
    	
        <td rowSpan="5">
           <input type="text" name="num"  id="add" className="ss_0" onChange={this.onChange} onBlur={this.handleBlur} value={this.state.value0}  />

        </td>
        <td rowSpan="5">
           <input type="text" name="rating" id="rating" value={this.state.rating}    className="sd_0" /> 
        </td>
        <td rowSpan="5">
          <textarea id="txt" name="text" className="sf_0"  value={this.state.command0} style={this.state.rating==="Outstanding"||this.state.rating==="Does not Meet Expectations" ? {display: "block"} : {display: "none"}}></textarea>
        </td>

  </tr>
  <tr>
    <td>Exceeds Expectations</td>
    <td>98.76%</td>
    <td>99.5%</td>
  </tr>
  <tr>
    <td>Meets Expectations</td>
    <td>97.76%</td>
    <td>98.75%</td>
  </tr>
  <tr>
    <td>Mostly Meets Expectations</td>
    <td>96.01%</td>
    <td>97.75%</td>
  </tr>
  <tr>
    <td>Does not Meet Expectations</td>
    <td colSpan="2" style={{textAlign: "center"}}>Below 96.00%</td>
  </tr> 
  <tr>
          <td colSpan="8"></td>
     </tr>
<tr>
    <td rowSpan="6">
      Productivity
    </td>
  </tr>

  
    <tr>
    <td>Outstanding</td>
    <td colSpan="2" style={{textAlign: "center"}}>Above 20.01%</td>
    <td rowSpan="5" style={{textAlign: "center"}}>40%</td>
     
          <td rowSpan="5">
              <input type="text" className="ss_1" name="num1" id="add1" onChange={this.onChange}  value={this.state.value1} onBlur={this.handleNum}/>

          </td>
          <td rowSpan="5">
              <input type="text" name="rating1" id="rating1" value={this.state.rating1}  className="sd_1" />
          </td>
          <td rowSpan="5">
          <textarea id="txt1" className="sf_1" name="text1" value={this.state.command1}   style={this.state.rating1==="Outstanding"||this.state.rating1==="Does not Meet Expectations" ? {display: "block"} : {display: "none"}}></textarea>
        </td>
     
       
  </tr>
  <tr>
    <td>Exceeds Expectations</td>
    <td>18.51%</td>
    <td>20.00%</td>
  </tr>
  <tr>
    <td>Meets Expectations</td>
    <td>17.51%</td>
    <td>18.50%</td>
  </tr>
  <tr>
    <td>Mostly Meets Expectations</td>
    <td>16.51%</td>
    <td>17.50%</td>
  </tr>
  <tr>
    <td>Does not Meet Expectations</td>
    <td colSpan="2" style={{textAlign: "center"}}>Below 16.50%</td>
  </tr>
      <tr>
          <td colSpan="8"></td>
     </tr>

    <tr>
      <td rowSpan="6">
        Attendance
      </td>
    </tr>
    <tr>
    <td>Outstanding</td>
    <td colSpan="2" style={{textAlign: "center"}}>0 Instance</td>
    <td rowSpan="5" style={{textAlign: "center"}}>20%</td>
     
          <td rowSpan="5">
              <input type="text" className="ss_2" name="num2" id="add2" onChange={this.onChange} value={this.state.value2}  onBlur={this.handleNum2}/>

          </td>
          <td rowSpan="5">
              <input type="text" name="rating2" id="rating2" value={this.state.rating2}  className="sd_2" />
          </td>
          <td rowSpan="5">
          <textarea id="txt2"  name="text2" className="sf_2" value={this.state.command2}  style={this.state.rating2==="Outstanding"||this.state.rating2==="Does not Meet Expectations" ? {display: "block"} : {display: "none"}}></textarea>
        </td>
     </tr> 
  <tr>
    <td>Exceeds Expectations</td>
    <td colSpan="2">1 Instance</td>
  
  </tr>
  <tr>
    <td>Meets Expectations</td>
    <td colSpan="2">2 Instance</td>
    
  </tr>
  <tr>
    <td>Mostly Meets Expectations</td>
    <td colSpan="2">3 Instance</td>
    
  </tr>
  <tr>
    <td>Does not Meet Expectations</td>
    <td colSpan="2" style={{textAlign: "center"}}> > 3 Instance</td>
  </tr>
  </tbody>
  </table>
  </div>
  <br/><br/>
    <input type="hidden" className="insert"  value="add6"/>
    <input type="submit" name="subform6" id="button" />
  </form>

	);

}
}
export default Kavi;