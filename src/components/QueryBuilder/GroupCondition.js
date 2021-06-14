import BlockRenderer from "./BlockRenderer";

function GroupCondition({ data, level, addBlock, removeBlock, updateBlock }) {
  return (
    <div>
      <p>
        {data.type}{" "}
        <button onClick={() => addBlock(data.id, "condition")}>
          + Condition
        </button>
        <button onClick={() => addBlock(data.id, "and")}>+ And</button>
        <button onClick={() => addBlock(data.id, "or")}>+ Or</button>
        {level > 1 ? (
          <button onClick={() => removeBlock(data.id)}>X</button>
        ) : null}
      </p>
      <div style={{ paddingLeft: 30 }}>
        <BlockRenderer
          blocks={data.conditions}
          level={level + 1}
          addBlock={addBlock}
          removeBlock={removeBlock}
          updateBlock={updateBlock}
        />
      </div>
    </div>
  );
}

export default GroupCondition;
