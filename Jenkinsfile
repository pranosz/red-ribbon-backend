pipeline {
    agent any

    environment {
        NODE_HOME = tool 'NodeJS'
    }

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/pranosz/red-ribbon-backend.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                script {
                    def npm = "${NODE_HOME}/bin/npm"
                    sh "${npm} install"
                }
            }
        }
        stage('Run Tests') {
            steps {
                script {
                    def npm = "${NODE_HOME}/bin/npm"
                    sh "${npm} test"
                }
            }
        }
        stage('Build') {
            steps {
                script {
                    def npm = "${NODE_HOME}/bin/npm"
                    sh "${npm} run build"
                }
            }
        }
        stage('Deploy') {
            steps {
                // Dodaj tutaj kroki do wdrożenia aplikacji
                echo 'Wdrożenie aplikacji...'
            }
        }
    }

    post {
        always {
            echo 'Pipeline zakończony'
        }
        success {
            echo 'Zbudowano pomyślnie'
        }
        failure {
            echo 'Zbudowanie nie powiodło się'
        }
    }
}
