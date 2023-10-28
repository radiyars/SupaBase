export const getRelationTableInfo = (text: string) => {
  const RelationTableInfo = { table: "", column: "" };
  const textArr = text.split("_");
  RelationTableInfo.table = textArr[textArr.length - 2];
  RelationTableInfo.column = textArr[textArr.length - 1];
  return RelationTableInfo;
};
