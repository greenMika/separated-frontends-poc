cd ./reporting; npm run build
cd ../user-management; npm run build
cd ../docker; docker-compose up --build -d scan-management
docker-compose up -d nginx
cd ..