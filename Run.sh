#!/bin/bash

# Check if the line is already present in the file
if ! grep -q "export PATH=/usr/local/bin:\$PATH" ~/.bashrc; then
    echo "export PATH=/usr/local/bin:\$PATH" | sudo tee -a ~/.bashrc
fi

# start the server by port 3000
npm start 0.0.0.0:3000
