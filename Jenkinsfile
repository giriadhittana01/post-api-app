pipeline {
    agent any
    stages {
        stage('Build') {
                steps {
                    nodejs(nodeJSInstallationName: 'nodeJS v16.14.0') {
                        sh 'npm install'
                    }
                }
            }
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'nodeJS v16.14.0') {
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'heroku-token', variable: 'TOKEN')]) {
                    sh 'git push https://:${TOKEN}@git.heroku.com/web-post-api.git HEAD:master'
                }
            }
        }
    }
}