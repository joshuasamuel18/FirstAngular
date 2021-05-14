# UPSC Members

## Running the Project for Development
### Install Docker
Head to [Docker Installation](https://docs.docker.com/install/) site
and install docker for your platform. Follow the onscreen instructions
until done.

More information about Docker:
- [Learn Docker in 12 Minutes](https://www.youtube.com/watch?v=YFl2mCHdv24)
- [Docker Compose in 12 Minutes](https://www.youtube.com/watch?v=Qw9zlE3t8Ko)
- [Getting Started with Docker](https://docs.docker.com/get-started/)

### Start the Dev Server
Under the project folder, run the following command:
```
docker-compose up
```
If this is the first time you run it, docker will create an image
for you.
It will then start the dev (local) server which you can access 
the site via [port 4200](http://localhost:4200).
Notice in your console that the command to start the server 
is the same as `start` in `package.json`.

 ### Stop the Dev Server
 Simply run:
 ```
 docker-compose down
 ```
This will gracefully stop the dev server and return you to the 
terminal prompt (or command prompt for Windows).
However, this created docker image is still there.
You can view the list of images using the following command:
```
docker image ls
```

To remove all images for this container, use the following command:
```
docker-compose down --rmi all
``` 

`docker image ls` will now show you nothing.
When you run `docker-compose up` again, it will create a new image
for you.
