import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  const colorElements = colors.map( (color) => {
    return <ColorElement key={color} color={color}/>
  })


  return (
    <div>
      <h1>Top 5 CSS Colors</h1>
      <ol>
        {colorElements}
      </ol>
    </div>
  );
}
function ColorElements(props) {
  return <li style={{color: props.color}}>{props.color}</li>
}

export default ColorList;
