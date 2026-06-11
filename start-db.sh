#!/bin/bash
DB_DIR="/Users/jananijothigenga/.gemini/antigravity/scratch/personal-portfolio/data/db"
mkdir -p "$DB_DIR"

# Check if port 27017 is already occupied
if lsof -i :27017 >/dev/null 2>&1; then
  echo "MongoDB port 27017 is already in use. Assuming it is running."
  exit 0
fi

echo "Starting local MongoDB instance..."
/opt/homebrew/bin/mongod --dbpath "$DB_DIR" --port 27017 --logpath "/Users/jananijothigenga/.gemini/antigravity/scratch/personal-portfolio/mongodb.log" --fork
echo "MongoDB started."
