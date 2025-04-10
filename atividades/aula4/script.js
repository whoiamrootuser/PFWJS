import { users } from "./users.js";
import { managerUser } from "./manager-user.js";
document.addEventListener("DOMContentLoaded", function () {
  const men = managerUser.getMen(users);
  managerUser.showAllUsers(men);
});
