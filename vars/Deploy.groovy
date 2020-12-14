  
  def call() {
    echo "============Deploy=============="
    sh "/usr/local/bin/docker push phumutta/react-docker-pipeline"   
    sh "/usr/local/bin/docker rmi phumutta/react-docker-pipeline"
                
}

  