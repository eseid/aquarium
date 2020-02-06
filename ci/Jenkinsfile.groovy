pipeline {
    agent any
    tools {
        maven 'Maven 3.3.9'
    }
    stages {
        stage ('maven build') {
            steps {
                sh'mvn clean package'
            }
        }
    }
}
