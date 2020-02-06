pipeline {
    agent any
    tools {
        maven 'Maven 3.6.3'
    }
    stages {
        stage ('maven build') {
            steps {
                sh'mvn clean package'
            }
        }
    }
}
