#!/bin/bash

# Update the package index to ensure you have the latest package information.
sudo apt update -y

# Install npm (Node.js package manager).
sudo apt install npm -y

# Update again to ensure npm installation is complete and up to date.
sudo apt update -y

# Install Yarn (alternative package manager for Node.js).
sudo npm install --global yarn

# Display the version of Yarn to confirm successful installation.
yarn --version
