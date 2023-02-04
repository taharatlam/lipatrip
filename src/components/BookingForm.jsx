import React, {useState, useEffect, useRef} from 'react'
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import SlotsPicker from './SlotsPicker';


const BookingForm = ({isSticky}) => {

    const [vl, setVl] = useState(10);

   

    const handleChange = (e)=>{
        setVl(e.target.value)
    }

  return (
    <form  className={`booking-form ${isSticky?"sticky":''}`}>
        <div>
            <div className="book-head">
                <div>
                    <div className="form-group">
                        <div className="radio-wrap style-2">
                            <input type="radio" id="dep" name="depp" />
                            <label htmlFor="dep">
                                Departure City
                            </label>
                        </div>
                    </div>
                    <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">City</InputLabel>
                        <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={vl}
                            label="City"
                            onChange={handleChange}
                        >
                            <MenuItem value={10}>Mumbai</MenuItem>
                            <MenuItem value={20}>Pune</MenuItem>
                            <MenuItem value={30}>Hyderabad</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div>
                    <div className="form-group">
                        <div className="radio-wrap style-2">
                            <input type="radio" id="join" name="depp" />
                            <label htmlFor="join">
                                Joining & Leaving
                            </label>
                        </div>
                    </div>
                    <p className="op-text sm">
                    Join at Tromsø, Leave at Helsinki
                    </p>
                </div>
            </div>
            <div className="dist-wrap">
                <div>
                    <h5>Tromsø</h5>
                    <p>23/02/2023</p>
                </div>
                <span>9 Days, 8 Nights</span>
                <div>
                    <h5>Tromsø</h5>
                    <p>23/02/2023</p>
                </div>
            </div>
            <div className="main-bd">
                <h3 className="sm-head mt-20">
                    Departures (2)
                </h3>
                <SlotsPicker />
            </div>
            <div className="bk-det-wrap">
                <div className="bk-det">
                    <span>1 Adult</span>
                    <span>0 Child</span>
                    <span>0 Infant</span>
                    <span>1 Room</span>
                </div>
                <button className='main-btn link-btn'>
                    <span>Modify</span>
                </button>
            </div>
            <div className="p-btm-wrap">
                <p>
                    <span>Super Deal Price</span>
                    <span>₹3,15,000</span>
                </p>
                <div className="btn-flex">
                    <button className="main-btn secondary-btn">
                        Enquire Now
                    </button>
                    <button className="main-btn">
                        Checkout
                    </button>
                </div>
            </div>
        </div>
    </form>
  )
}

export default BookingForm