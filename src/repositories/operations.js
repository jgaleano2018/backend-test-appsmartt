const Operation = require("../data-source");

class OperationRepository {
  
  async create(operationData) {
    return await Operation.create(operationData);
  }

}

module.exports = new OperationRepository();