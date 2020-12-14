@Library('pipeline-library-demo')_

pipeline {
     agent any
     tools {nodejs "node15"}

    stages {
        
                
    
        stage('GIT PULL') {
            steps { 
               GitPull()

            }
        }
     
        stage('TEST'){
            steps{
                sh 'npm test'
              
            }
        }
        stage('BUILD IMAGE'){
            steps{
            //  sh "/usr/local/bin/docker-compose build"
            // sh "/usr/local/bin/docker build -t phumutta/react-docker-pipeline ."
            //  sh "/usr/local/bin/docker images"
            BuildImage()
            //  sh "/usr/local/bin/docker rmi phumutta/react-docker-pipeline"

            }
        }
        stage('DEPLOY'){
            steps{
             Deploy()
            }
        }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
