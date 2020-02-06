pipeline {
    agent any
    tools {
        maven 'Maven_3.6.3'
    }
    stages {
        stage ('maven build') {
            steps {
                sh'mvn clean package'
            }
        }
    }
}
