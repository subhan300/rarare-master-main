import React from 'react'
import "./RantComponentRight.css"
import image from "../../../Assets/Rectangle 108.png";
import image1 from "../../../Assets/Rectangle 111.png";
import image2 from "../../../Assets/Rectangle 110.png";
import image3 from "../../../Assets/Rectangle 109.png";
function ProposalComponentRight() {
    return (
        <>

         <div className="Rant_component_right">
             <div>
             <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button"  className="active rounded-circle" style={{borderRadius:"50px 50px 50px 50px ",height:"10px",width:"10px"}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0"  aria-current="true" aria-label="Slide 1"></button>
    <button type="button" className="rounded-circle"  style={{borderRadius:"50px 50px 50px 50px ",height:"10px",width:"10px"}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button"  className="rounded-circle" style={{borderRadius:"50px 50px 50px 50px ",height:"10px",width:"10px"}} data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
   
  </div>
  <div class="carousel-inner" >
    <div class="carousel-item active">
      <img src={image} class="d-block img-fluid"  alt="..." />
    </div>
    <div class="carousel-item">
      <img src={image}   class="d-block w-100 img-fluid" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={image}  class="d-block w-100 img-fluid" alt="..." />
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" style={{backgroundColor:"rgb(59, 198, 161)",color:"white"}}></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" style={{backgroundColor:"rgb(59, 198, 161)",color:"white"}}></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
             </div>
        
            <div className="slider_down_images">
                {/* <div className="slider_down_border" style={{display:"flex",}}>
                    <img className="slider_down_image1"  src={image1}></img>
                    <img className="slider_down_image1"  src={image2}></img>
                    <img className="slider_down_image1"  src={image3}></img>
                   
                </div>
                <div className="slider_down_border" style={{display:"flex",}}>
                    <img className="slider_down_image1"  src={image1}></img>
                    <img className="slider_down_image1"  src={image2}></img>
                
                </div>
              */}

            </div>

            <div className="image_gallery">
                 <div className="row">
                      <div className=" col-md-6 col-lg-4">
                          <img   class="img-fluid" src={image1}></img>
                      </div>   
                      <div className=" col-md-6 col-lg-4">
                          <img  class="img-fluid"  src={image1}></img>
                      </div>   
                      <div className=" col-md-6 col-lg-4">
                          <img  class="img-fluid"  src={image1}></img>
                      </div>    
                      
                 </div>
            </div>


        </div>


  

        </>
    )
}

export default ProposalComponentRight
