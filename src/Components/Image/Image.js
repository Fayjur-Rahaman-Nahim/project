import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Modal from '../Modal/Modal';
import "./Image.css"
const Image = (props) => {
    const [modalImg1, setModalImg1] = useState("")
    const [modalImg2, setModalImg2] = useState("")
    const [clicked, setClicked] = useState(false);
    const { id, imgMain, imgSec } = props.image;
    // cnsole.log(imgSec)
    // consoole.log(imgMain)
    // console.log(props);
    const handleClick = () => {
        setClicked(true)
    }
    const handleCloseClick = () => {
        setClicked(false)
    }
    const handleImg = id => {
        setModalImg1(imgMain)
        setModalImg2(imgSec)
        // setTimeout(() => {
        //     document.getElementById("modal-btn").click()

        // }, 1000)
        // console.log(imgMain, imgSec)

    }

    return (
        <div>

            <div className="col aspect">

                <div className="card card-div "  >
                    {/* <button

                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target="#staticBackdrop"
                        id="modal-btn"
                    > */}
                    <img src={imgMain} className="card-img-top " data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleImg(id)} alt="..." style={{ height: "300px", width: "1000" }} />

                    {/* </button> */}


                </div>

            </div>
            {/* <Modal
                modalImg1={imgSec}
            ></Modal> */}
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div class="modal-header">

                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="row row-cols-1 row-cols-lg-2 row-cols-md-2 g-4 p-4">
                            <div className="col modal-div ">
                                <img src={modalImg1} alt="" className="img-fluid" />
                            </div>
                            <div className="col modal-div ">
                                <img src={modalImg2} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Image;
//<div className="modal-footer">
// {clicked && <div><p color="red">hello i am burger</p></div>}
// </div>