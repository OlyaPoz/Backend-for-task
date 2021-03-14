
const db = new Map()

class Task{
  constructor ({ id, body, isDone, createdAt }) {
    this.id = `${db.size + 1}`,
    this.body = body,
    this.isDone = isDone,
    this.createdAt = new Date(),
    

    db.set(this.id, this)

    return Promise.resolve(this)
  }

  async update ({ body, isDone }) {
    db.set(this.id, {
      body, 
      isDone,
    })

    return db.get(this.id)
  }

  async delete () {
    return db.delete(this.id)
  }
}

Task.findAll = async () => {
  return [...db.values()]
}

Task.findOne = async id => {
  return db.get(id)
}

module.exports = Task;
