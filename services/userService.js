const UserService = (app) => {
  async function getUsers() {
    return await app.repositories.userRepository.getUsers()
  }

  return {
    getUsers
  }
}

module.exports = UserService
