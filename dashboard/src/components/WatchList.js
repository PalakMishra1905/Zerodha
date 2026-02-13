import React ,{useState} from "react";
import {Tooltip, Grow} from '@mui/material' //material ui 
import { watchlist } from "../data/data"; //data
import {BarChartOutlined, KeyboardArrowDown, KeyboardArrowUp, MoreHoriz} from '@mui/icons-material' //material ui

const WatchList = () => {
  return (
    <div className="watchlist-container">
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="search"
        />
        <span className="counts"> {watchlist.length} / 50</span>
      </div>

      <ul className="list">
        {watchlist.map((stock,index)=>{
          return(
            <WatchListItem stock={stock} key={index}/> //component made below
          );
        })}
      </ul>
    </div>
  );
};

export default WatchList;

//we are making the "WatchListItem" component in the same file
const WatchListItem = ({stock})=>{
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    //when mouse hovers over the item
    const handleMouseEnter = (e)=>{
        setShowWatchlistActions(true);
    } 

    //when mouse leaves
    const handleMouseLeave = (e)=>{
        setShowWatchlistActions(false);
    }     

    return(
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <div className="item">
          <p className={stock.isDown ? "down": "up"}>{stock.name}</p> {/*name */}

          <div className="itemInfo">
            <span className="percent">{stock.percent}</span>      {/*percent */}
            {stock.isDown ? (<KeyboardArrowDown className="down"/>):    
            (<KeyboardArrowUp className="up"/>)}                   {/*arrow */}

            <span className="price">{stock.price}</span>            {/*price */}
          </div>
        </div>
        {/*//only when showWatchlistActions is true WatchListActions will be displayed.*/}
        {showWatchlistActions && <WatchListActions uid={stock.name}/>}
      </li>
    )
}


//"WatchListActions" component for hovering icons
const WatchListActions = ({uid})=>{
  return(
    <span className="actions">
      <span>
        <Tooltip title="Buy (B)" placement="top" arrow TranstionComponent={Grow}>
          <button className="buy">Buy</button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow TranstionComponent={Grow}>
          <button className="sell">Sell</button>
        </Tooltip> 

        <Tooltip title="Analytics (A)" placement="top" arrow TranstionComponent={Grow}>
          <button className="action">
            <BarChartOutlined className="icon"/>
          </button>
        </Tooltip>  

        <Tooltip title="More" placement="top" arrow TranstionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon"/>
          </button>
        </Tooltip>                     
      </span>
    </span>
  )
}
