pipeline {
  agent any
  tools {
    nodejs "nodejs"
  }
  stages {
    stage('install') {
      steps {
        sh 'npm run install'
      }
    }
    stage('build') {
      steps {
        sh 'npm run build'
      }
    }
  }

  post {
    success {
        echo "SUCCESSFUL"
    }
    failure {
        echo "FAILED"
    }
  }
}