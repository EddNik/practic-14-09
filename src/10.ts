const users = ["alice", "bob", "charlie"];

interface User {
  id: number;
  name: string;
}

function toUserObjects(userNames: string[]): User[] {
  const userObjects: User[] = [];
  userNames.forEach((userName, index) => {
    userObjects.push({ id: index, name: userName });
  });
  return userObjects;
}

console.log(toUserObjects(users));
