def call() {
   sh 'Node --version'
    git 'https://github.com/phumutta/react-docker-jenkins.git'  
    echo "========Git Pull=========="
    sh 'npm install'
    echo "=========install=========="
                
}
