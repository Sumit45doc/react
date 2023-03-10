import React , {useState} from "react";
import {SketchPicker , PhotoshopPicker , BlockPicker} from "react-color";
function ColorPic() {
    const [color, setSColor] = useState("#fff")
    const [pcolor, setPColor] = useState("#fff")
    const [bcolor, setBColor] = useState("#fff")
  return (
    <div>
      <SketchPicker color={color} onChange={updatedColor => setSColor(updatedColor.hex)} />
      <span>{color}</span>
      <PhotoshopPicker color={pcolor} onChange={updatedColor => setPColor(updatedColor.hex)} />
      <span>{pcolor}</span>
      <BlockPicker color={bcolor} onChange={updatedColor => setBColor(updatedColor.hex)} />
      <span>{bcolor}</span>

    </div>
  );
}

export default ColorPic;
