pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'nodejs'
        PATH = "${NODE_HOME}/bin:${env.PATH}"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/pranosz/red-ribbon-backend.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                bat 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                echo 'Wdrożenie aplikacji...'
                // Dodaj tutaj kroki do wdrożenia aplikacji
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
