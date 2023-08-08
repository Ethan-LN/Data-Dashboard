#!/bin/bash
cd /var/lib/jenkins/workspace/react-cicd/
node -v
npm install -g n
n latest
node -v