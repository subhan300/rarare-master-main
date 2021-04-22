import React from 'react'
import "./Proposal.css"
import Card from '@material-ui/core/Card';
// import FlagIcon from '@material-ui/icons/Flag';
// import Avatar from '@material-ui/core/Avatar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ProposalComponent from "./ProposalComponent/ProposalComponent"

import location from "../../Assets/Icon material-location-on.png"
import userImage from "../../Assets/Ellipse 226.png"
import flagImage from "../../Assets/Component 27 – 1.png"
import shareIcon from "../../Assets/Icon awesome-share.png"
import ProposalRightComponent from "./ProposalRightComponent/ProposalRightComponent"
import ProposalRighBottom from "./ProposalRightComponent/ProposalRightBottom"
function Proposal() {
    return (
        <div className="Proposal">
            <div className="Proposal_content_left">
                   <div className="Proposal_title"><p className="Proposal_left_title">Search Result > <span className="Proposal_left_titleSpan">Proposal</span></p></div>
                   <div className="proposal_card_div">
                       <Card className="Proposal_card">
                        <div className="card_content"> <h4 className="title_responsive" style={{fontSize:"1.5rem",color:"#45C1A1"}}>Title of the  proposal</h4>
                        <p><button type="button" class="btn btn-outline-success"> ongoing</button></p>
                        
                        </div>
                       
                         <div className="card_content">

                             <p className="title_responsive" style={{color:"black",fontSize:"16px"}}> <span><img  className="icon_size_responsive" src={location} ></img></span>   Consenus Forming    <span><img  className="icon_size_responsive" src={location} ></img></span></p>
                          
                        
                        
                            
                             <p className="text_size_responsive">May 1 ,2020</p>
                        </div>
                         <p  className="text_size_responsive"style={{fontSize:"0.9rem"}}> The align-self CSS property overrides a grid or <br></br>flex item's align-items value.</p>
                        
                         <div className="card_content"> 
                             <p className="text_size_responsive" style={{fontSize:"0.8rem"}}><span><img  className="icon_size_responsive" src={location} ></img></span>&nbsp;Karachi , block D </p>
                            {/* <p style={{display:"flex",alignItems:"center"}}>
                            <span ><img className="icon_size_responsiveuser" src={userImage} ></img></span>
                            <span className="text_size_responsive" style={{padding:"2px",fontSize:"0.9rem"}}>&nbsp;Username</span>
                        
                            </p> */}
                        
                        </div>
                       <div id="hr"></div>
                       <div className="card_contentLast_row">
                            <div><p className="text_size_responsive"><span className="card_icon_space">
                                <FavoriteOutlinedIcon  className="icon_size_responsive"  style={{color:"lightgray"}}  />&nbsp;</span>1.5K</p></div>
                            <div><p className="text_size_responsive"> <ChatBubbleIcon className="icon_size_responsive"  style={{color:"lightgray"}} />&nbsp;800 Comments</p></div>
                            <div><p className="text_size_responsive"><img  className="icon_size_responsive" style={{width:"20px"}} src={shareIcon} ></img>&nbsp; 80 Share</p></div>
                       </div>
                    
                       </Card>
                      

                   </div>
                       <div className="proposal_component_main">
                           <ProposalComponent/>
                       </div>
           
            </div>
 {/* right section  */}
            <div className="Proposal_content_right">
                
                <ProposalRightComponent />
                <div>
                  <ProposalRighBottom />
               </div>
          
            </div>

           
            
        </div>
    )
}

export default Proposal
