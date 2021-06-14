import "./style.css";

export default function SideBarButton({ s }) {
   let style = s.y+1 + " / " + parseInt(s.x) + " / span " +parseInt(s.z-s.y)+ "/auto";
  return (
    <div className="rb-side-button-div" style={{ gridArea: style }}>
      <button className="rb-side-grp-button">{s.item.type}</button>
      <button className="rb-side-button">+</button>
    </div>
  )
}
