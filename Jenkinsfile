pipeline {
    agent any
    tools { nodejs "node" }

    stages {
        stage('Cypress Parallel Test Suite') {
            parallel {
                stage('Slave 1') {
                    agent { label "Agent2_1" }
                    steps {
                        git url: 'https://github.com/AndresRipe/integracion-cypress.git'
                        bat 'npm install'
                        bat 'npx cypress run --record --key d16a6315-dab1-482b-bbf9-fbbf4430e472 --parallel'
                    }
                }

                stage('Slave 2') {
                    agent { label "Agent2_2" }
                    steps {
                        git url: 'https://github.com/AndresRipe/integracion-cypress.git'
                        bat 'npm install'
                        bat 'npx cypress run --record --key d16a6315-dab1-482b-bbf9-fbbf4430e472 --parallel'
                    }
                }

                stage('Slave 3') {
                    agent { label "Agent2_3" }
                    steps {
                        git url: 'https://github.com/AndresRipe/integracion-cypress.git'
                        bat 'npm install'
                        bat 'npx cypress run --record --key d16a6315-dab1-482b-bbf9-fbbf4430e472 --parallel'
                    }
                }
            }
        }
    }
}
