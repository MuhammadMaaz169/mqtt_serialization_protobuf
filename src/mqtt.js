const MQTT = require('async-mqtt');

const logger = require("./logger");
const config = require('./config');

const mqttClient = MQTT.connect(
  `http://${config.mosquitto.host}:${config.mosquitto.port}`,
  config.mosquitto.auth
);

const onConnect = async () => {
  logger.info('Connected to MQTT Broker Successfully');
};
const onError = async (error) => {
  logger.error(error);
};

mqttClient.on('connect', onConnect);
mqttClient.on('error', onError);

module.exports = mqttClient;
