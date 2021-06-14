import SingleBlock from "./SingleBlock";
let level=1;
let totalCount=0;
var rules = [];
var sideBar =[];
var html='';

function QueryBlockProcessor(blocks){
    let localCount=0;
    html=html+blocks.map((item) => {
      if (item.type === "condition") {
        totalCount++;
        localCount++;
        rules.push({'singleBlock':item.rules,'level':level});
        // 
      }
      if (item.type === "and" || item.type === "or") {
        sideBar[level]={
          'item':item,
          'x':level+1,
          'y':totalCount
        }
        level++;
        QueryBlockProcessor(item.rules);
      }
    }); 
    level--;
}

function QueryBlock({blocks}){
  QueryBlockProcessor(blocks);
  return (
    rules.map((queries)=>{
      return <SingleBlock value={queries.singleBlock} level={queries.level} />
    })
  
  );
}


export default QueryBlock;
