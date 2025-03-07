# Udagram Docker Configuration

The contents of this folder describe how the different microservices are created.  By this, we mean that the Docker images are specified.

## Tasks

### Setup Docker Environment

You'll need to install docker <https://docs.docker.com/install/>. Open a new terminal within the project directory and run:

1. Build the images: `docker-compose -f docker-compose-build.yaml build --parallel`
2. Push the images: `docker-compose -f docker-compose-build.yaml push`
3. Run the container: `docker-compose up`
