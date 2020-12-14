def call() {
        sh 'ls'

   sh 'Node --version'
    // git 'https://github.com/phumutta/react-docker-jenkins.git'  
    echo "========Git Pull=========="
 
    sh 'cd work && npm install'
    
    echo "=========install=========="
                
}
