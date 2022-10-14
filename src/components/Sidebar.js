import React from 'react'

const Sidebar = () => {
  return (
    <div className='aside'>
        <div className="list">
        <ul>
          <li>
            <a href="#sample1">CSS ELEMENT SELECTOR</a>
          </li>
          <br/>
          <li>
            <a href="#sample2">CSS ID SELECTOR</a>
          </li>
          <br/>
          <li>
            <a href="#sample3">CSS CLASS SELECTOR</a>
          </li>
          <br/>
          <li>
            <a href="#sample4">CSS UNIVERSAL SELECTOR</a>
          </li>
          <br/>
          <li>
            <a href="#sample5">CSS GROUP SELECTOR</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar