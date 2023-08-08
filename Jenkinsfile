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
        // stage('Setup Gunicon') {
        //     steps {
        //         sh '''
        //         chmod +x gunicorn.sh
        //         ./gunicorn.sh
        //         '''
        //     }
        // }
    }
}
