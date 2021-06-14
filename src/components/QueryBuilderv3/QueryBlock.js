//import SideBarButton from "../QueryBuilderv2/SideBarButton";
import SingleBlock from "../QueryBuilderv2/SingleBlock";
var sideBarStats = [];

function QueryBlock({ blocks, level, setSideBar }) {
    return blocks.map((item,key) => {
        if (key+1===blocks.length) {
          let s={
              x:level,
              y:key+1,
              z:1,
              item:item
          }
          console.log(s);
         //  <SideBarButton s={s} />;
        }
    if (item.type === "condition") {
      sideBarStats[level]++;
      return <SingleBlock value={item.rules} level={level} />;
    }
    else if (item.type === "and" || item.type === "or") {
      sideBarStats[level] = 0;
      return (
        <>
          <QueryBlock
            setSideBar={setSideBar}
            blocks={item.rules}
            level={level + 1}
          />
          {/*  */}
        </>
      );
    }
    console.log("red");
    
  
  });
}
export default QueryBlock;
