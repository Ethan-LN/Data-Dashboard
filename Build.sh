#!/bin/bash
cd /var/lib/jenkins/workspace/react-cicd/
echo"Upgrade the npm and node,  currently"

# Check if the line is already present in the file
if ! grep -q "export PATH=/usr/local/bin:\$PATH" ~/.bashrc; then
    echo "export PATH=/usr/local/bin:\$PATH" | sudo tee -a ~/.bashrc
fi
node -v
echo "Before uprde "
npm -v
sudo npm cache clean -f
sudo npm install -g n
sudo n stable
"After update node and npm "
node -v
npm -v