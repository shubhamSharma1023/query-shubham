import { useState } from "react";
import BlockRenderer from "./BlockRenderer";
import { getEmptyBlock } from "./helper";

function QueryBuider() {
  const [state, setState] = useState([]);

  const addBlockRecursive = (blocks, id, type) => {
    blocks.forEach((block) => {
      if (block.id === id) {
        block.conditions.push(getEmptyBlock(type));
      } else if (block.type === "condition") {
        // do nothing
      } else {
        addBlockRecursive(block.conditions, id, type);
      }
    });
    return blocks;
  };

  const addBlock = (id, type) => {
    const copy = JSON.parse(JSON.stringify(state));
    if (id === 0) {
      setState([getEmptyBlock(type)]);
    } else {
      const dataToSet = addBlockRecursive(copy, id, type);
      setState(dataToSet);
    }
  };

  const removeBlockRecursive = (blocks, id) => {
    let found = -1;
    blocks.forEach((block, idx) => {
      if (block.id === id) {
        found = idx;
      } else if (block.type !== "condition") {
        block.conditions = removeBlockRecursive(block.conditions, id);
      }
    });
    if (found > -1) {
      blocks.splice(found, 1);
    }
    return blocks;
  };

  const removeBlock = (id) => {
    const copy = JSON.parse(JSON.stringify(state));
    setState(removeBlockRecursive(copy, id));
  };

  const updateBlockRecursive = (blocks, id, updates) => {
    let found = -1;
    blocks.forEach((block, idx) => {
      if (block.id === id) {
        found = idx;
      } else if (block.type !== "condition") {
        block.conditions = updateBlockRecursive(block.conditions, id, updates);
      }
    });
    if (found > -1) {
      blocks[found] = { ...blocks[found], ...updates };
    }
    return blocks;
  };

  const updateBlock = (id, updates) => {
    const copy = JSON.parse(JSON.stringify(state));
    setState(updateBlockRecursive(copy, id, updates));
  };

  return (
    <div>
      <button onClick={() => addBlock(0, "and")}>+ And</button>
      <button onClick={() => addBlock(0, "or")}>+ Or</button>
      <button onClick={() => addBlock(0, "condition")}>+ Condition</button>
      <BlockRenderer
        blocks={state}
        level={1}
        addBlock={addBlock}
        removeBlock={removeBlock}
        updateBlock={updateBlock}
      />
    </div>
  );
}

export default QueryBuider;
