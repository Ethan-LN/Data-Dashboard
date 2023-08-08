pipeline {
    agent any
    stages {
        stage('Setup npm') {
            steps {
                sh '''
                chmod +x setnpm.sh
                ./envsetup.sh
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
