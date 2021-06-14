import "./style.css";
import Campaign from "./campaign";
import Days from "./days";
import Condition from "./condition";
import Amount from "./amount";
function SingleBlock({ value, level }) {
  let shift = parseInt(level);
  let remainingSpan = parseInt(5) - parseInt(level) + 1;
  let gStyle = shift + "/span " + remainingSpan;
  return (
    <div className="rb-block" style={{ gridColumn: gStyle, position: "relative", gridColumn: "2 / span 4" }}>
      {/* {value} */}
      <span style={{ marginRight: 10, position: "absolute", top: "37px", width: "12px", height: "1px", background: "#000", left: "-2px" }}> </span><Campaign />
      <Days />
      <Condition />
      <Amount />
    </div>
  );
}
export default SingleBlock;
