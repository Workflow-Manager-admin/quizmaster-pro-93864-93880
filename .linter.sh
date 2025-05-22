#!/bin/bash
cd /home/kavia/workspace/code-generation/quizmaster-pro-93864-93880/quizmaster_pro
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

