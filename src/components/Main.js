import React from "react";
import Sidebar from "./Sidebar";
import image7 from './image7.png';
import image8 from './image8.png';
import image9 from './image9.png';
import image11 from './image11.png';
import image12 from './image12.png';


const Main = () => {
    return (

    <div>

  <div className="article">
      <table className="tab">

      <h1><u> CSS SELECTORS</u></h1>

    <p>CSS selectors are used to select the content you want to style. Selectors are the part of CSS rule set. CSS selectors select HTML elements according to its id, class, type, attribute etc.

There are several different types of selectors in CSS.
<li>
CSS Element Selector</li><li>
CSS Id Selector</li><li>
CSS Class Selector</li><li>
CSS Universal Selector</li>
<li>CSS Group Selector</li></p>

      <tr><h3 align="left" id="sample1"> CSS Element Selector:<br></br></h3><p>
The element selector selects the HTML element by name.</p>
      
         <img src={image7} alt="" align="left"/></tr>

        <tr><h3 align="left" id="sample2">  CSS ID SELECTOR</h3>
         <p>   The id selector selects the id attribute of an HTML element to select a specific element. An id is always unique within the page so it is chosen to select a single, unique element.

It is written with the hash character (#), followed by the id of the element.

Let?s take an example with the id "para1".</p>
          <img src={image8} alt="image8" align="left"/></tr>

        <tr><h3 align="left" id="sample3"> CSS CLASS SELECTOR</h3>
        <p>The class selector selects HTML elements with a specific class attribute. It is used with a period character . (full stop symbol) followed by the class name.</p>
            <img src={image9} alt="image9" align="left"/></tr>

            <tr><h3 align="left" id="sample4"> CSS UNIVERSAL Selector:<br></br></h3><p>
            The universal selector is used as a wildcard character. It selects all the elements on the pages.</p>
      
         <img src={image11} alt="" align="left"/></tr>

         <tr><h3 align="left" id="sample5"> CSS GROUP Selector:<br></br></h3><p>
         The grouping selector is used to select all the elements with the same style definitions.

Grouping selector is used to minimize the code. Commas are used to separate each selector in grouping..</p>
      
         <img src={image12} alt="" align="left"/></tr>



      <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    </table>


   </div>
    <Sidebar />
    </div>
    )
};

export default Main;