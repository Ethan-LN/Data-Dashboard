pipeline {
    agent any

    stages {
        stage('Setup npm') {
            steps {
                script {
                    // Modify PATH for this stage
                    sh '''
                    chmod +x Setup.sh
                    ./Setup.sh
                    '''
                }
            }
        }
        stage('npm build') {
            steps {
                script {
                    // Modify PATH for this stage
                    env.PATH = "/usr/local/bin:$PATH"
                    sh '''
                    chmod +x Build.sh
                    ./Build.sh
                    '''
                }
            }
        }
        stage('npm run') {
            steps {
                script {
                    // Modify PATH for this stage
                    env.PATH = "/usr/local/bin:$PATH"
                    sh '''
                    chmod +x Run.sh
                    ./Run.sh
                    '''
                }
            }
        }
    }
}
