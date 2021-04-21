import React from 'react'
import "./Post.css"

// assets
import postIcon from "../../Assets/post_icon.png";
import undrawFeeling from "../../Assets/undraw_feeling.png";
import { useHistory } from 'react-router';

const PostHome = () => {
    const history = useHistory();
    return (
        <React.Fragment>
        
            <div className="post_home">
                <div>
                    <div className="post_header">
                        <img src={postIcon} alt="posticon" />
                        <h2 className="text_darkblue">Post a <strong className="text_lightpurple">Report!</strong> </h2>
                        <p className="text_lightgray">Get your ideas to other people. Post something that matters!</p>
                    </div>
                    <div className="category_select">
                        <div className="cs_text">
                            <h2 className="text_darkblue">Select a Category</h2>
                        </div>
                        <div className="cs_tabs_main">
                            <div className="cs_tab">
                                <div className="cs_tab_box">
                                    <img src={undrawFeeling} alt="" />
                                </div>
                                <div className="cs_tab_text">
                                    <h2 className="text_bluegreen">Rant</h2>
                                    <p className="text_lightgray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu</p>
                                </div>
                            </div>
                            <div className="cs_tab">
                                <div className="cs_tab_box">
                                    <img src={undrawFeeling} alt="" />
                                </div>
                                <div className="cs_tab_text">
                                    <h2 className="text_bluegreen">Rant</h2>
                                    <p className="text_lightgray">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonu</p>
                                </div>
                            </div>
                        </div>
                            <div className="pcontinue_btn">
                                <button className="text-white bg_lightgreen border_none"
                                onClick={()=>{history.push("/post-report")}}
                                >Continue</button>
                            </div>
                        
                    </div>
                </div>
            </div>
        
        
        </React.Fragment>
    )
}

export default PostHome
