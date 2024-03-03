FROM node:latest

# Expose port 3006 for Vite
EXPOSE 3006
# Expose port 5432 for PostgreSQL
EXPOSE 5432

# Install PostgreSQL
RUN apt-get update && \
    apt-get install -y postgresql postgresql-contrib && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Set a custom timeout value in postgresql.conf
RUN echo "timeout = 0\n" >> /etc/postgresql/postgresql.conf

# For debugging ports
RUN apt-get update && \
    apt-get install -y telnet nano && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Initialize PostgreSQL and create a database and user
RUN service postgresql start && \
    su - postgres -c "psql -c \"CREATE USER pawsadmin WITH SUPERUSER PASSWORD 'pawspassword';\"" && \
    su - postgres -c "psql -c \"CREATE DATABASE pawsconnect;\""

# Drop into a shell
CMD ["/bin/bash"]