import React, {useState} from 'react'
import Accordion from 'react-bootstrap/Accordion';
import { Slider } from '@mui/material';

const FilterBar = ({filterOpen, setFilterOpen}) => {
    const [vl, setVl] = useState([50, 1000])
    const handleChange = (e)=>{
        setVl(e.target.value);
    }
    return (
        <> 
            <aside className={`filter-container ${filterOpen?'active':''}`}>
                <div className="fil-top">
                    <h3>Filter Your Tour</h3>
                    <button className='main-btn link-btn sm'>Reset All</button>
                </div>
                <div className="fil-body">
                    <div className="fil-card">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className="fil-card-header">
                                        <h3 className='fil-card-title'>Packages Type</h3>
                                        <span></span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="radio-wrapper">
                                        <div className="radio-wrap">
                                            <input type="radio" id="all" name="packagetype" />
                                            <label htmlFor="all">All</label>
                                        </div>
                                        <div className="radio-wrap">
                                            <input type="radio" name="packagetype" id="grptour" />
                                            <label htmlFor="grptour">Group Tour</label>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className="fil-card">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className="fil-card-header">
                                        <h3 className='fil-card-title'>Trip Lenght</h3>
                                        <span></span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="slider-container">
                                        <Slider
                                            getAriaLabel={() => 'Temperature range'}
                                            value={vl}
                                            onChange={handleChange}
                                            valueLabelDisplay="auto"
                                        />
                                        <p className='rang'>
                                            <span>min <strong>{vl[0]} days</strong></span>
                                            <span>max <strong>{vl[1]} days</strong></span>
                                        </p>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                </div>
                <div className="fil-body">
                    <div className="fil-card">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className="fil-card-header">
                                        <h3 className='fil-card-title'>Packages Type</h3>
                                        <span></span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="radio-wrapper">
                                        <div className="radio-wrap">
                                            <input type="radio" id="all" name="packagetype" />
                                            <label htmlFor="all">All</label>
                                        </div>
                                        <div className="radio-wrap">
                                            <input type="radio" name="packagetype" id="grptour" />
                                            <label htmlFor="grptour">Group Tour</label>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                    <div className="fil-card">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                    <div className="fil-card-header">
                                        <h3 className='fil-card-title'>Sort By</h3>
                                        <span></span>
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div className="radio-wrapper">
                                        <div className="radio-wrap">
                                            <input type="radio" name="sortby" />
                                            <label htmlFor="all">Deals</label>
                                        </div>
                                        <div className="radio-wrap">
                                            <input type="radio" name="sortby" />
                                            <label htmlFor="grptour">Group Tour</label>
                                        </div>
                                    </div>
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>

                </div>
                
                <div className="mob-flt-btn">
                <button className="main-btn block-btn big">
                    <span>Apply Filter</span>
                </button>
                </div>
            </aside>
            {
                filterOpen?<div onClick={()=>setFilterOpen(false)} className='filterOver'></div>:''
            }
        </>
    )
}

export default FilterBar