let _id = 1;
const getNewId = () => _id++;

const getEmptyBlock = (type) => {
  const dataToAdd = { type, id: getNewId() };
  if (type !== "condition") {
    dataToAdd.conditions = [
      {
        type: "condition",
        id: getNewId(),
        trigger: "",
        date: "",
        op: "",
        value: ""
      },
      {
        type: "condition",
        id: getNewId(),
        trigger: "",
        date: "",
        op: "",
        value: ""
      }
    ];
  } else {
    dataToAdd.trigger = "";
    dataToAdd.date = "";
    dataToAdd.op = "";
    dataToAdd.value = "";
  }
  return dataToAdd;
};

export { getNewId, getEmptyBlock };
