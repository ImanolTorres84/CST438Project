-- Create the database
CREATE DATABASE my_database;

-- Connect to the database
\c my_database;

-- Create the users table
CREATE TABLE users (
    user_id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    username VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Install the UUID extension if not already installed
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";