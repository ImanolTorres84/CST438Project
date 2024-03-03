#!/bin/bash

# Wait for PostgreSQL service to be running
until service postgresql status | grep "running"; do
  echo "Waiting for PostgreSQL service to start..."
  sleep 1
done

# Execute the command passed as arguments
exec "$@"