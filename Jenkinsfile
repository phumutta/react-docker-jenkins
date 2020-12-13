
pipeline {
     agent any
     tools {nodejs "node15"}

    stages {
        
                
    
        stage('GIT PULL') {
            steps { 
                sh 'Node --version'

                git 'https://github.com/phumutta/react-docker-jenkins.git'  
                sh 'ls'
                sh 'npm install'

            }
        }
     
        stage('TEST'){
            steps{
                sh 'npm test'
              
            }
        }
        stage('BUILD IMAGE'){
            steps{
             sh "/usr/local/bin/docker-compose build ."
             sh "/usr/local/bin/docker images"

             sh "/usr/local/bin/docker rmi phumutta/react-docker-pipeline"

            }
        }
        // stage('TEST DOCKER'){
        //     steps{

        //     }
        // }
        // stage('PUSH DOCKER'){
        //     steps{
                                
        //     }
        // }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
