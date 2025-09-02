const operationRepository = require("../repositories/operations.repository");

class OperationService {
  async authenticateJWT(data) {
    return await operationRepository.create(data);
  }

}

module.exports = new OperationService();