import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import SlotsPicker from './SlotsPicker';

const DepDes = ({show}) => {
    return (
        <div className={`depdes-wrapper ${show?'active':''}`}>
            <Tabs defaultActiveKey="dep" id="uncontrolled-tab-example" className="style2"
            >
                <Tab eventKey="dep" title="Departures">
                    <SlotsPicker dep="true" />
                </Tab>
                <Tab eventKey="des" title="Destinations">
                    <div className="tb2">
                        <div className="tp">
                            <span><b>9</b> Days</span>
                            <span><b>3</b> Days</span>
                            <span><b>3</b> Cities</span>
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
                                    <span>
                                        <img src="" alt="" />
                                        <p> Narvik (1N)</p>
                                    </span>
                                    <span>
                                        <img src="" alt="" />
                                        <p> Narvik (1N)</p>
                                    </span>
                                    <span>
                                        <img src="" alt="" />
                                        <p> Narvik (1N)</p>
                                    </span>
                        </div>
                    </div>
                </Tab>
            </Tabs>
        </div>
    )
}

export default DepDes