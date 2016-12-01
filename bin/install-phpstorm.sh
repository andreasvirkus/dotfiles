#!/usr/bin/env bash

# IMPORTANT. My phpstom installation exists on /opt/phpstorm.
# IMPORTANT. Run with sudo!
# Early Access program: https://confluence.jetbrains.com/display/PhpStorm/PhpStorm+Early+Access+Program

echo -n "Please enter the PhpStorm download url (eg http://download.jetbrains.com/webide/PhpStorm-EAP-141.690.tar.gz): "
read url
 
# Download file from url
echo "Downloading PhpStorm to ~/Desktop"
cd ~/Desktop
wget ${url} --no-check-certificate
tar -xzf ~/Desktop/PhpStorm*
rm ~/Desktop/PhpStorm*

# Remove old Phpstorm
echo "Removing old PhpStorm"
rm -rf /opt/phpstorm

# Copy new Phpstorm
echo "Copying new PhpStorm"
mv ~/Desktop/PhpStorm* /opt/phpstorm

# Finish
echo "New PhpStorm has been installed!"
