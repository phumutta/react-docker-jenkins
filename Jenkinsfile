
pipeline {
     agent any
   
    stages {
        
                
    
        stage('GIT PULL') {
            steps { 
                git 'https://github.com/phumutta/XXXXXXXXXX.git'  
                sh 'npm install'

            }
        }
        stage('TEST'){
            steps{
                sh 'npm test'
                echo "Testing"
            }
        }
        stage('BUILD IMAGE'){
            steps{
    
            }
        }
        stage('TEST DOCKER'){
            steps{

            }
        }
        stage('PUSH DOCKER'){
            steps{
                                
            }
        }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
