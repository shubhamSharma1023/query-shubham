
function processAllBlocks(level, rules, sideBar, totalCount, end, mainQuery){
    const setValueForSidebar = (x, y, z = 0, item) => {
        if(item!=undefined){
            if ( sideBar[item.id] == undefined) {
                sideBar[item.id] = {};
            }
            if (z != 0) {
          
               sideBar[item.id]['z']=z;
        
            } else {
                sideBar[item.id]['x'] = x;
                sideBar[item.id]['y'] = y;
                sideBar[item.id]['item'] = item;
            }
        }
    }
    const processAllBlock = (blocks,localid ) => {
      let localCount = 0;
      blocks.map((item) => {
            if (item.type === "condition") {
                totalCount = parseInt(totalCount) + 1;
                localCount = localCount + 1;
                rules.push({item:item,level:level});
            } else if (item.type === "and" || item.type === "or") {
               
                setValueForSidebar(level, totalCount, 0, item);
                localid.push(item);
                level++;
                processAllBlock(item.rules,localid);
            }
        });
        let endId=localid.pop();
        setValueForSidebar(0, 0, parseInt(totalCount), endId);
        level--;
    }
   processAllBlock(mainQuery,[]);
   return {sidebar:sideBar,rules:rules};
}
export { processAllBlocks };