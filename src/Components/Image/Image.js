import React from 'react';
import { useState } from 'react/cjs/react.development';
import "./Image.css"
const Image = (props) => {
    const [clicked, setClicked] = useState(false);
    const { imgMain, imgSec } = props.image;
    console.log(imgSec)
    console.log(imgMain)
    const handleClick = () => {
        setClicked(true)
    }

    return (
        <div>

            <div className="col aspect">
                <div className="card card-div " >
                    <img src={imgMain} className="card-img-top " data-bs-toggle="modal" data-bs-target="#exampleModal" alt="..." style={{ height: "300px", width: "1000" }} />

                </div>
            </div>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-4 p-4">
                    {/* <div > */}
                    <div className="modal-header">

                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    {/* <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-4 p-4"> */}
                    <div className="col modal-div " onClick={() => handleClick()}>
                        <img src={imgMain} alt="" className="img-fluid" />
                        {clicked && <div> <h1>hellllllllooo</h1></div>}
                    </div>
                    <div className="col modal-div ">
                        <img src={imgSec} alt="" className="img-fluid" />
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </div >
    );
};

export default Image;
//<div className="modal-footer">
// {clicked && <div><p color="red">hello i am burger</p></div>}
// </div>