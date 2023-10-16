//// @ts-check

const logger = require('./logger');
const mqttClient = require('./mqtt');
const UserSchema = require('./proto/user_pb');

const user = new UserSchema.User()
user.setId(1);
user.setName("Maaz");
user.setEmail("user@example.com");

user.serializeBinary();

const publish = async () => {
  const topic = `user`;
  const message = user.serializeBinary();

  await mqttClient.publish(topic, message);
  logger.info(`Published a user data to MQTT topic user`);

  process.exit(0);
};

publish();
