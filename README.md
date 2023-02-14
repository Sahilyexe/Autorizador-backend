# Autorizador-backkend

Este proyecto contiene los recursos necesarios para crear un sencillo backend serverless y desacoplado de un servicio de inicio de sesión y registro de un usuario para acceder una aplicación. Los recursos son Amazon Cognito, ApiGateway y Lambda. 

## Pre-requisitos
- Cuenta de AWS creada
- AWS CLI instalado en tu equipo `https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html`
- Tener configurada las credenciales con el comando`aws configure` sigue los pasos `https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html`
- SAM CLI instalado en tu equipo `https://docs.aws.amazon.com/serverless-application-model/latest/developerguide/install-sam-cli.html`
- NodeJs `https://nodejs.org/en/`

## Desplegar el backend en AWS (Deploy your application to AWS)
- `SAM build`  
- `SAM deploy --guided` El ApiGateway Endpoint se muestra en a salida despues de que se despliga exitosamente

## Eliminar la aplicación y los recursos (Clean up)
- Ejecuta `SAM delete --stack-name <el nombre del stack con el cual desplegaste>`

## Desarrollador
-  sahily.exe@gmail.com
