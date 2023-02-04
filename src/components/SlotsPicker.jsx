import React from 'react'
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';

const SlotsPicker = ({dep}) => {
    return (
        <div className={`slot-tab mt-10 ${dep?'not-min':''}`}>
            <Tabs
                defaultActiveKey="home"
                id="uncontrolled-tab-example"
                className="mb-3"
            >
                <Tab eventKey="home" title="Feb">
                  <ul className="slots">
                    <li>
                        <div className="sl">
                            <input type="radio" id='1' name='slot' />
                            <label htmlFor="1"><span>23</span></label>
                        </div>
                        <p>2 seats</p>
                    </li>
                    <li>
                        <div className="sl">
                            <input type="radio" id='2' name='slot' />
                            <label htmlFor="2"><span>26</span></label>
                        </div>
                    </li>
                    
                  </ul>
                </Tab>
                <Tab eventKey="profile" title="Mar">
                    
                </Tab>

            </Tabs>
        </div>
    )
}

export default SlotsPicker