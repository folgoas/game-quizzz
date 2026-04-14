#!/bin/sh
cd /home/z/my-project/mini-services/quiz-service
while true; do
  node index.js >> /tmp/quiz-service.log 2>&1
  echo "[KEEPALIVE] Restarting quiz service..." >> /tmp/quiz-service.log
  sleep 1
done
