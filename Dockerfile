FROM node:latest

# Expose port 3006 for vite
EXPOSE 3006
# Expose port 5432 for PostgreSQL
EXPOSE 5432

# Install PostgreSQL
RUN apt-get update && \
    apt-get install -y postgresql postgresql-contrib && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Initialize PostgreSQL and create a database
USER postgres

RUN /etc/init.d/postgresql start && \
    psql --command "CREATE USER pawsadmin WITH SUPERUSER PASSWORD 'pawspassword';"

# Switch back to the root user
USER root