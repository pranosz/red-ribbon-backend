pipeline {
    agent any

    environment {
        NODE_HOME = tool name: 'nodejs', type: 'NodeJSInstallation'
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
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build') {
            steps {
                sh 'npm run build'
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
