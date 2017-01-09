# console-gelf-server

Simple mock GELF server for testing

## Build & Run

    docker build -t console-gelf-server .
    docker run --name console-gelf-server --rm -it -p 12201:12201/udp console-gelf-server:dev

## Test sending message

From inside the container:

    docker exec console-gelf-server node send

From outside:

    npm install
    node send
