#!/usr/bin/env bash
n1=$(node -v)
n2=$(npm -v)
n3=$(uname -a)
echo "Environment: $n1 ($n2)"
echo "Host System: $n3"
