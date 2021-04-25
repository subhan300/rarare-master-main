import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import userImage from "../../Assets/Ellipse 226.png"
// import Avatar from '@material-ui/core/Avatar'
import "./RantComponent.css"
import SendIcon from '@material-ui/icons/Send';
import shareIcon from "../../Assets/Icon awesome-share.png"
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import Modal from "../../Components/Modal/Modal"

import {FaShare } from "react-icons/fa";
function proposal_component() {
    function defaultColor1(){
        document.getElementById("btn-change-color1").style.color="#D3D3D3"
     }
    function changeColor1(){
     document.getElementById("btn-change-color1").style.color="white"
    }
    
    function defaultColor2(){
        document.getElementById("btn-change-color2").style.color="#D3D3D3"
     }
    function changeColor2(){
     document.getElementById("btn-change-color2").style.color="white"
    }
    

    function defaultColor(){
       document.getElementById("btn-change-color3").style.color="#D3D3D3"
    }
  function changeColor(){
    document.getElementById("btn-change-color3").style.color="white"
  }



    return (
        <div className="Rant_component_card">
           <Card className="RantComponent_card"style={{backgroundColor:"#F5F5F9",boxShadow:"1px -1px 10px -3px #ccc"}} >
               <div className="RantComponent_card_content">
                  <Button  onMouseOut={()=>{defaultColor2()}} onFocus={()=>{changeColor2()}}  variant="contained" style={{backgroundColor:"white"}} className="btn1">
                      <FavoriteOutlinedIcon id="Rbtn-change-color2"  className="Ricon_responsive" style={{color:"#D3D3D3",fontSize:"19px"}}/>&nbsp;Like</Button>
                  <Button  onMouseOut={()=>{defaultColor1()}} onFocus={()=>{changeColor1()}}  variant="contained" style={{backgroundColor:"white"}} className="btn_same2">
                      <ChatBubbleIcon  id="btn-change-color1" className="Ricon_responsive" style={{color:"#D3D3D3",fontSize:"19px"}} />&nbsp;Comments</Button>
                 
                 
                
                
                
                
                
                  
                  <Button onMouseOut={()=>{defaultColor()}} onFocus={()=>{changeColor()}}  variant="contained" style={{backgroundColor:"white"}} className="btn_same"  >
                      <FaShare  id="Rbtn-change-color3" className="Ricon_responsive"  style={{width:"14px",color:"#D3D3D3"}} >
                      </FaShare > 
                            &nbsp;Share
                 </Button>
                









                </div>
                <div className="Rcard_content_component"> 
                          {[1,2,3].map(val=>{return(
                              <>
                                 
                                 <div className="Rcard_review_component">
                            <p style={{display:"flex",alignItems:"center"}}>
                               <span ><img src={userImage} ></img></span>
                               <span style={{padding:"3px"}}>&nbsp;Username</span>
                        
                            </p>
                            <p style={{fontSize:"13px",color:"gray"}}>05:00 PM / May , 1 , 2021</p>
                           
                            </div>
                            <div className="Rcard_review_component_text">we need this beautiful desigwe need this beautiful design</div>
                           <br></br>
                       

                              </>
                          )})}
              
                </div>
            
           </Card>

           <div className="Rcomments">
               <input className="Rinput_comment" placeholder="Post a Comment here"></input>
           <div className="Rhr_space" style={{paddingLeft:"1px"}}> 
           
               <span className="Rhr_space" style={{paddingLeft:"2px",paddingRight:"2px"}}>
               <InsertEmoticonIcon  /></span>&nbsp;<span style={{border:"1px solid gray",height:"42px",}}></span>&nbsp;
               <span><SendIcon className="Rresponsive_send_icon" style={{color:"#45C1A1"} } /></span>
            
           </div>
              
           </div>
        </div>
    )
}

export default proposal_component
