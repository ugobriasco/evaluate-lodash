const summonUser = require("white-summoner");

const generateUsers = async (number) => {
  let n = number;
  let users = [];

  while (n > 0) {
    const _user = await summonUser("DE");
    let user = {
      user: _user.personal_profile.first_name,
      age:
        new Date().getFullYear() -
        new Date(_user.personal_profile.date_of_birth).getFullYear(),
    };
    users.push(user);
    n--;
  }
  return users;
};

module.exports = generateUsers;
