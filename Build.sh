#!/bin/bash
cd /var/lib/jenkins/workspace/react-cicd/
echo"Upgrade the npm and node,  currently"
node -v
npm -v
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
"After update node and npm "
node -v
npm -v