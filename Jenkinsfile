@Library('pipeline-library-react')_

pipeline {
     agent any
     tools {nodejs "node15"}

    stages {
        
                
    
        stage('GIT PULL') {
            steps { 
            //    GitPull()
            git 'https://github.com/phumutta/react-docker-jenkins.git'  
            echo "========Git Pull=========="
            sh 'npm install'
            echo "=========install=========="

            }
        }
     
        stage('TEST'){
            steps{
                sh'cd work'
                sh 'pwd'
                sh'ls'
            
              
            }
        }
        // stage('BUILD IMAGE'){
        //     steps{
        //     //  sh "/usr/local/bin/docker-compose build"
        //     // sh "/usr/local/bin/docker build -t phumutta/react-docker-pipeline ."
        //     //  sh "/usr/local/bin/docker images"
        //     BuildImage()
        //     //  sh "/usr/local/bin/docker rmi phumutta/react-docker-pipeline"

        //     }
        // }
        // stage('DEPLOY'){
        //     steps{
        //      Deploy()
        //     }
        // }
        
    }
    post { 
        always { 
            cleanWs()
        }
    }
}
