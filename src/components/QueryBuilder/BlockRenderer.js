import SingleCondition from "./SingleCondition";
import GroupCondition from "./GroupCondition";

function BlockRenderer({ blocks, level, addBlock, removeBlock, updateBlock }) {
  return blocks.map((block) => {
    if (block.type === "condition") {
      return (
        <SingleCondition
          key={block.id}
          data={block}
          removeBlock={removeBlock}
          updateBlock={updateBlock}
        />
      );
    } else if (block.type === "and" || block.type === "or") {
      return (
        <GroupCondition
          key={block.id}
          data={block}
          level={level}
          addBlock={addBlock}
          removeBlock={removeBlock}
          updateBlock={updateBlock}
        />
      );
    } else {
      return null;
    }
  });
}

export default BlockRenderer;
