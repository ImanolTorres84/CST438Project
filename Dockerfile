FROM node:latest

# Expose port 3006 for Vite
EXPOSE 3006
# Expose port 5432 for PostgreSQL
EXPOSE 5432

# Move all files into the dev container
# This is major speed increase.
WORKDIR /workspace
COPY . /workspace

# Install PostgreSQL
RUN apt-get update && \
    apt-get install -y postgresql postgresql-contrib && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# For debugging ports
RUN apt-get update && \
    apt-get install -y telnet nano && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# generate prisma files
RUN npx -y prisma generate

# Drop into a shell
CMD ["/bin/bash"]