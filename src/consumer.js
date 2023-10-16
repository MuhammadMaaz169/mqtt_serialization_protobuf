//// @ts-check

const mqttClient = require("./mqtt");
const logger = require("./logger");
const UserSchema = require('./proto/user_pb');

const onMessage = async (topic, message) => {
  const messageString = UserSchema.User.deserializeBinary(message);
  
  if (topic.match(/user/g))
    logger.info(`topic: ${topic} message: ${messageString}`);
};

mqttClient.subscribe("#");
mqttClient.on("message", onMessage);
