pipeline {
    agent any
    stages {
        stage('Build') {
                steps {
                    nodejs(nodeJSInstallationName: 'NodeJS v16.14.0') {
                        sh 'npm install'
                    }
                }
            }
        stage('Test') {
            steps {
                nodejs(nodeJSInstallationName: 'NodeJS v16.14.0') {
                    sh 'npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                withCredentials([string(credentialsId: 'heroku-token', variable: 'TOKEN')]) {
                    sh 'git push https://:${TOKEN}@git.heroku.com/post-api-app.git HEAD:master'
                }
            }
        }
    }
}