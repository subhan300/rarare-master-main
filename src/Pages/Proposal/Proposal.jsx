import React from 'react'
import "./Proposal.css"
import Card from '@material-ui/core/Card';
import FlagIcon from '@material-ui/icons/Flag';
import Avatar from '@material-ui/core/Avatar';
import LocationOnIcon from '@material-ui/icons/LocationOn';
// import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@material-ui/icons/FavoriteOutlined';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ShareOutlinedIcon from '@material-ui/icons/ShareOutlined';
import ProposalComponent from "./proposal_component"
import ProposalComponentRight from "./Proposalcomponent_right/ProposalComponentRight"
import location from "../../Assets/Icon material-location-on.png"
function Proposal() {
    return (
        <div className="Proposal">
            <div className="Proposal_content_left">
                   <div className="Proposal_title"><p className="Proposal_left_title">Search Result > <span className="Proposal_left_titleSpan">Rent</span></p></div>
                   <div className="proposal_card_div">
                       <Card className="Proposal_card">
                        <div className="card_content"> <h4>Need A New Raod In Nigeria...</h4>
                        <p><FlagIcon /></p>
                        
                        </div>
                         <p>May 1 ,2020</p>
                         <p> The align-self CSS property overrides a grid or <br></br>flex item's align-items value.<br></br> In Grid, it aligns the item inside the grid area.In Flexbox, it aligns the item on the cross axis.</p>
                        
                         <div className="card_content"> 
                             <p><span><img src={location} ></img></span> Hi we need this beautiful design</p>
                            <p style={{display:"flex",alignItems:"center"}}>
                            <span > <Avatar style={{fontSize:"12px",height:"30px",width:"32px",marginleft:"4px"}} alt="Remy Sharp" src="/static/images/avatar/1.jpg" /></span>
                            <span style={{padding:"3px"}}>Username</span>
                        
                            </p>
                        
                        </div>
                       <div id="hr"></div>
                       <div className="card_contentLast_row">
                            <div><p><span className="card_icon_space"><FavoriteOutlinedIcon  style={{color:"lightgray"}}  />&nbsp;</span>1.5K</p></div>
                            <div><p> <ChatBubbleIcon style={{color:"lightgray"}} />&nbsp;800 Comments</p></div>
                            <div><p><ShareOutlinedIcon />&nbsp; 80 Share</p></div>
                       </div>
                    
                       </Card>
                      

                   </div>
                       <div className="proposal_component_main">
                           <ProposalComponent/>
                       </div>
           
            </div>
 {/* right section  */}
            <div className="Proposal_content_right">
                
            <ProposalComponentRight />
          
            </div>
            
        </div>
    )
}

export default Proposal
