import React, {useState} from 'react'
import DepDes from './DepDes'
const TravelCard = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <article className={`trv-card ${show?"active":''}`}>
                <div className="l-part">
                    <div className="trv-im">
                        <img src="https://img.veenaworld.com/group-tours/world/europe/eunl/eunl-thb-eunl-862022.jpg" alt="" />
                    </div>
                </div>
                <div className="r-part">
                    <div className="inner-fl">
                        <div>
                            <div className="det-wrap">
                                <div className="trv-im mob">
                                    <img src="https://img.veenaworld.com/group-tours/world/europe/eunl/eunl-thb-eunl-862022.jpg" alt="" />
                                </div>
                                <div className="lp">
                                    <div className="tag-wrap">
                                        <span style={{ "--cl": "orange" }}>Group Tour</span>
                                        <span style={{ "--cl": "red" }}>Family</span>
                                    </div>
                                    <h3>Scandinavia Northern Lights</h3>
                                    <div className="tp">
                                        <span><b>9</b> Days</span>
                                        <span><b>3</b> Days</span>
                                        <span><b>3</b> Cities</span>
                                    </div>
                                    <div className="amen">
                                        <span>
                                            <img src="" alt="" />
                                            <p>Meals</p>
                                        </span>
                                        <span>
                                            <img src="" alt="" />
                                            <p>Meals</p>
                                        </span>
                                        <span>
                                            <img src="" alt="" />
                                            <p>Meals</p>
                                        </span>
                                        <span>
                                            <img src="" alt="" />
                                            <p>Meals</p>
                                        </span>
                                    </div>

                                </div>
                            </div>
                            <div className="loc">
                                <span>
                                    <img src="" alt="" />
                                    <p> Tromsø (2N)</p>
                                </span>
                                <span>
                                    <img src="" alt="" />
                                    <p> Harstad (1N)</p>
                                </span>
                                <span>
                                    <img src="" alt="" />
                                    <p> Narvik (1N)</p>
                                </span>
                            </div>
                            <p className="bl-link">
                                +3 More
                            </p>
                            <div className="bttn-fl desk">
                                <a href="javascript:void(0)" className="quick-quote-btn">
                                    <span>Quick quote</span>
                                </a>
                                <a href="javascript:void(0)" onClick={()=>setShow(!show)} className="low-price-btn">
                                    <span>Lowest Price</span>
                                    <span>23 Feb, 2023</span>
                                </a>
                            </div>
                        </div>
                        <div className="rp">
                            <div>
                                <div>
                                    <div className="bttn-fl mob">
                                        <a href="javascript:void(0)" className="quick-quote-btn">
                                            <span>Quick quote</span>
                                        </a>
                                        <a href="javascript:void(0)" onClick={()=>setShow(true)} className="low-price-btn">
                                            <span>Lowest Price</span>
                                            <span>23 Feb, 2023</span>
                                        </a>
                                    </div>
                                </div>
                                <div>
                                    <div className="media-wr">
                                        <button>
                                            <img src="" alt="" />
                                        </button>
                                        <button>
                                            <img src="" alt="" />
                                        </button>
                                    </div>
                                    <p className='superdeal-text'>SUPER DEAL PRICE </p>
                                    <p className='urgency-text'>
                                        <span>(23 Feb 2023)</span> Last 2 Seats
                                    </p>
                                    <div className="price">
                                        <h3>₹3,00,000 </h3>
                                        <p>per person on twin sharing</p>
                                    </div>
                                </div>
                            </div>
                            <div className="btn-fl desk">
                                <a href="javascript:void(0)" className="main-btn">
                                    <span>View Details</span>
                                </a>
                                <a href="javascript:void(0)" className="main-btn secondary-btn">
                                    <span>Enquire Now</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <DepDes show={show} />
        </div>
    )
}

export default TravelCard