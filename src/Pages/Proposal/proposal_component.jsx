import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import Avatar from '@material-ui/core/Avatar'
import "./ProposalComponent.css"
import SendIcon from '@material-ui/icons/Send';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
function proposal_component() {
    return (
        <div className="proposal_component_card">
           <Card className="proposalComponent_card"style={{backgroundColor:"#F5F5F9"}} >
               <div className="proposalComponent_card_content">
                  <Button variant="contained" style={{backgroundColor:"white"}} className="btn1">Like</Button>
                  <Button variant="contained" style={{backgroundColor:"white"}} className="btn_same">Comments</Button>
                  <Button variant="contained" style={{backgroundColor:"white"}} className="btn_same">Share</Button>
          
                </div>
                <div className="card_content_component"> 
                          {[1,2,3].map(val=>{return(
                              <>
                                 
                                 <div className="card_review_component">
                            <p style={{display:"flex",alignItems:"center"}}>
                               <span > <Avatar style={{fontSize:"12px",height:"30px",width:"32px",marginleft:"4px"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></span>
                               <span style={{padding:"3px"}}>Username</span>
                        
                            </p>
                            <p style={{fontSize:"13px",color:"gray"}}>05:00 PM / May , 1 , 2021</p>
                           
                            </div>
                            <div className="card_review_component_text">we need this beautiful desigwe need this beautiful design</div>
                           <br></br>

                              </>
                          )})}
              
                </div>
            
           </Card>

           <div className="comments">
               <input className="input_comment" placeholder="Post a Comment here"></input>
           <div> <span style={{paddingLeft:"2px",paddingRight:"2px"}}><InsertEmoticonIcon /></span><span style={{border:"1px solid gray",height:"42px",}}></span> <span><SendIcon /></span></div>
              
           </div>
        </div>
    )
}

export default proposal_component
