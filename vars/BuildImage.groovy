def call(){
    sh "cd work && /usr/local/bin/docker build -t phumutta/react-docker-pipeline ."
    sh "/usr/local/bin/docker images"
}