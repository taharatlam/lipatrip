import React, {useEffect, useState} from 'react'
import './searchPage.scss'
import FilterBar from '../../components/FilterBar'
import TravelCard from '../../components/TravelCard'

const SearchResultPage = () => {
  const [filterOpen, setFilterOpen] = useState(false);
  return (
    <>
      <main className="search-result-page grey-bg">
        <div className="search-result-page-inner">
          <div className="container">
            <ul className="bread-crumbs">
              <li>
                <a href="">
                  Home
                </a>
              </li>
              <li>
                <a href="" className='active'>
                  Search Holiday Packages
                </a>
              </li>
            </ul>
            <div className="tp-bar-wrapper">
              <div className="searchpagehead">
                <h4>5 Europe Holiday Packages</h4>
                <p>Showing 1-5 packages from 5 packages</p>
              </div>
              <div>
                <h3 className="main-head">
                5 departures available
                </h3>
              </div>
              <div>
                <ul className="more-ft">
                  <li>
                    <button className="compare-btn">
                      <img src="" alt="" />
                      <span>Compare</span>
                    </button>
                  </li>
                  <li>
                    <button className="compare-btn">
                      <img src="" alt="" />
                      <span>View</span>
                    </button>
                  </li>
                  <li>
                    <button onClick={()=>setFilterOpen(true)} className="filter-open-btn">
                      <img src="" alt="" />
                      <span>Filter</span>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="search-results-container">
            <div className="row">
              <div className="col-lg-3 col-12">
                <FilterBar filterOpen={filterOpen} setFilterOpen={setFilterOpen}  />
              </div>
              <div className="col-lg-9 col-12">
                <div className="trv-places-grid">
                    <TravelCard />
                    <TravelCard />
                    <TravelCard />
                </div>
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  )
}
export default SearchResultPage


