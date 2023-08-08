#!/bin/bash

# Change directory to your workspace
cd /var/lib/jenkins/workspace/react-cicd/

# Display a message
echo "Upgrade the npm and node, currently"

# Check if the line is already present in the file
if ! grep -q "export PATH=/usr/local/bin:\$PATH" ~/.bashrc; then
    echo "export PATH=/usr/local/bin:\$PATH" | sudo tee -a ~/.bashrc
fi

# Display another message
echo "Before upgrade"

# Clean npm cache and install n
sudo npm cache clean -f
sudo npm install -g n -y

# Upgrade to the latest stable node version
sudo n stable

# Display a message
echo "After update node and npm"

# Check node and npm versions
node -v
npm -v

# start the server by port 3000
npm start 0.0.0.0:3000
