#!/usr/bin/env bash

# Login to the specified docker container

docker-login() {
    docker exec -it $1 bash
}
