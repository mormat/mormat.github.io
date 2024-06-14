# How to install docker on Debian 11

Install the packages below

```
sudo apt-get install apt-transport-https ca-certificates curl gnupg2 software-properties-common
```

## Add the official Docker repository
 
Get the GPG key, so we can validate packages from the Docker reposity. #todo What is a GPG key ???

```
sudo curl -fsSL https://download.docker.com/linux/debian/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg
```

Then add the Docker repository to the source list

```
sudo echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/debian $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list
```

Then update repositories

```
sudo apt-get update
```

Finally install docker

```
sudo apt-get install docker-ce docker-ce-cli containerd.io
```

## Test docker installation

Check Docker status
```
sudo systemctl status docker
```

Enable docker (if not enabled)
```
sudo systemctl enable docker
```

Display current version
```
docker --version
```

Run Hello World
```
docker run hello-world
```

## Troubleshooting

### How to fix 'permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock'

Create the docker group
```
sudo groupadd docker
```

Add your user to the docker group
```
sudo usermod -aG docker $USER
```

Then restart computer and retry again.




