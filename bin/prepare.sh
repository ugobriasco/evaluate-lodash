#/usr/bin/bash

mkdir ./.results
mkdir ./.results/plots
mkdir ./.results/raw
mkdir ./venv
python3 -m venv ./venv
source ./venv/bin/activate
pip install --upgrade setuptools
pip install --upgrade pip
pip install matplotlib
pip install pandas