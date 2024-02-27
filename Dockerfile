FROM node:latest
WORKDIR /workspace
EXPOSE 3006
RUN npm install
CMD ["npm run dev"]