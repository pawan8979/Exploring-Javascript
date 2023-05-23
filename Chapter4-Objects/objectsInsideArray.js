let blockList = [
  {
    userName: "john",
    reason: "Abusive content",
  },
  {
    userName: "sam",
    reason: "Copyright content",
  },
];

console.log(blockList);

for (let i = 0; i < blockList.length; i++) {
  console.log(blockList[i]);
  console.log(blockList[i].userName);
  console.log(
    `User ${blockList[i].userName} got blocked due to ${blockList[i].reason}`
  );
}
