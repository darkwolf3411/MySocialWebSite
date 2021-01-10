import React from 'react'
import Style from './Search.module.css'
import PreLoader from './../../common/PreLoader/PreLoader';

const Search = (props) => {
  let onSerchChange = (e) => {
    let text = e.target.value
    props.newSerchV(text)
  }
  let dellSerch = () => {
    props.dellSerchText()
  }
  return (<div className={Style.serch}>
    <input type="search" placeholder="Search . . ."
      onChange={onSerchChange}
      onBlur={dellSerch}
      value={props.newSerchValue} />
    <div className={Style.serch_stick}></div>
    <>
      {props.isFetching ? <PreLoader /> : null}
      {props.onSerchRes()}
      </>
  </div>)
}

export default Search;