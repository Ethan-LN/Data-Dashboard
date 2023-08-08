pipeline {
    agent any
    stages {
        stage('Setup npm') {
            steps {
                    sh '''
                    chmod +x Setup.sh
                    ./Setup.sh
                    '''
            }
        }

        stage('npm build') {
            steps {
                    sh '''
                    chmod +x Build.sh
                    ./Build.sh
                    '''
            }
        }

        // stage('npm run') {
        //     steps {
        //             sh '''
        //             chmod +x Run.sh
        //             ./Run.sh
        //             '''
        //     }
        // }
    }
}
