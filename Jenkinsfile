pipeline {
    agent any
    stages {
        stage('Setup npm') {
            steps {
                sh '''
                chmod +x setnpm.sh
                ./setnpm.sh
                '''
            }
        }
        stage('npm build') {
            steps {
                sh '''
                chmod +x  npmBuild.sh
                ./npmBuild.sh
                '''
            }
        }
        stage('npm run') {
            steps {
                sh '''
                chmod +x  npmRun.sh
                ./npmRun.sh
                '''
            }
        }
    }
}
