# Udagram as a Microservices Application

Udagram is a simple image feed application.  The functionality isn't too important, what's important is the structure.  We have here an example of a microservices driven backend that can be scaled and deployed in a cloud native way.  

Codified in this repository is:

- The AWS cloud infrastructure that the frontend and backend run on
- The Docker containerization for each microservice
- A set of independent microservices (sort of) that were derived from a single monolithic server ([source](https://github.com/scheeles/cloud-developer.git))

# Some details about the implementation

## Continuous Integration & Deployment

A CI/CD tool called [Travis](https://travis-ci.com/) is employed to automatically build and publish the Docker containers.  Containers are automatically applied to the production Kubernetes cluster.

## Docker Containers

Look for the `Dockerfile` in the various subdirectories of the source code.  Each one describes how the `node` service will be created, how the `ionic` frontent framework is defined or how the `nginx` reverse proxy is configured.  The containers can be built and pushed using a `docker-compose` configuration.

