const UserRepository = (app) => {
  async function getUsers() {
    return [
      {
        name: 'Bear'
      },
      {
        name: 'Lion'
      }
    ]

  }

  return {
    getUsers
  }
}

module.exports = UserRepository
