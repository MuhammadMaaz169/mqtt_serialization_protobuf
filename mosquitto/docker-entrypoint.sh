#!/bin/ash
set -e
user="$(id -u)"
if [ "$user" = '0' ]; then
	[ -d "/mosquitto" ] && chown -R mosquitto:mosquitto /mosquitto || true
fi
cd mosquitto
cp passwordfile passwd
mosquitto_passwd -U passwd
exec "$@"