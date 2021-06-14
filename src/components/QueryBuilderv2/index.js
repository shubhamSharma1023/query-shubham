import "./style.css";
import { useState } from "react";
import {processAllBlocks} from "./helper";
import SingleBlock from './SingleBlock';
import SideBarButton from "./SideBarButton";

function QueryBuilder() {


  const mainQuery = [
    {
      id: 1,
      type: "and",
      rules: [
        { id: 2, type: "condition", rules: 1 },
        { id: 3, type: "condition", rules: 2 },
        // { id: 4, type: "condition", rules: 3 },
        // { id: 5, type: "condition", rules: 4 }
      ]
    }
  ];
  
  const [state] = useState(mainQuery);
  let level=1;
  let rules=[];
  let sideBar=[];
  let totalCount=0;
  let end=[];
  let r= processAllBlocks(level,rules,sideBar,totalCount,end,state);
  const [sidebar]=useState(r.sidebar);
  const [query]=useState(r.rules);
  return (
    <div className="rule-builder">
      <div className="rb-grid-row"> 
        {query.map((q)=>{
          return <SingleBlock key={q.item.id} value={q.item.rules} level={q.level} />
        })}
        {sidebar.map( (s) =>{
          // console.log(s);
          return <SideBarButton s={s} ></SideBarButton>
        })}
      </div>
    </div>
  )
}
export default QueryBuilder;
