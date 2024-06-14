
Build and run your app with Docker compose
```
docker compose up
```

List containers
```
docker container ls
```

Run command in a container
```
// without params
docker compose run your_container your_command

// with params
docker compose run your_container your_command param1 param2 etc.

// bash
docker exec -it your_container bash
```



Docker delete all containers
```
docker rm -vf $(docker ps -aq)
```

Docker delete all images
```
docker rmi -f $(docker images -aq)
```

To delete volumes
```
docker volume rm $(docker volume ls -q)
```

To remove all at once
```
docker rm -vf $(docker ps -aq) && docker rmi -f $(docker images -aq) && docker volume rm $(docker volume ls -q)
```

```
To remove containers, images, networks and volumes, use
```

docker system prune --volumes


Docker run local Dockerfile
```
docker build -t mormat-project .
docker run mormat-project
```

To keep the container running, you can use the -t (pseudo-tty) docker parameter .
```
docker run -d -t ubuntu
```

In docker compose, you can use tty like this
```
version: '3'

services:
  app:
    image: node:8
    tty: true           # <-- This option
```

Specify current user with docker compose
```
UID=${UID} GID=${GID} 
```


