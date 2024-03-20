## Setup

Run npm install to start the server, adding needed dependencies.
Create a user with password and set MONGODB_USERNAME and MONGODB_PASSWORD in .env.atlas
docker-compose -f docker-compose.yml up --build (Start services)

docker-compose -f docker-compose.yml rm -s -f -v (Stop and remove Docker containers)