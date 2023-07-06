import React from "react";
function Main(){
    return(
        <div>
            <div className="row"  style={{margin : "20px"}}>
            <div className="card col sm-4" style={{ margin : "20px"}}>
                <img src="./Images/Watch1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Watch</h5>
                    <p className="card-text">Price - $100</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>

            <div className="card col sm-4" style={{margin : "20px"}}>
                <img src="./Images/Watch1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Watch</h5>
                    <p className="card-text">Price - $100</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>

            <div className="card col sm-4" style={{margin : "20px"}}>
                <img src="./Images/Watch1.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Watch</h5>
                    <p className="card-text">Price - $100</p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>

        </div>
            
    </div>
    )

}
export default Main;