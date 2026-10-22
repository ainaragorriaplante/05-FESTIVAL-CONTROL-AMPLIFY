# FESTIVAL CONTROL · React Native + AWS Amplify Gen 2

Aplicación fullstack con **Expo Web** y backend en la nube mediante **AWS Amplify Gen 2** (Code-first TypeScript con AWS AppSync GraphQL y Amazon DynamoDB).

Mantiene la identidad visual del cuaderno 04-PILARES-SERVERLESS: fondo `#090909`, cards `#151515`, acento `#FF2F92`, confirmado `#39D98A` y retrasado `#F5C542`.

---

## 🚀 Inicio rápido (Frontend local)

```bash
npm install
npm run web
```
> La aplicación iniciará en modo local con datos de respaldo si aún no has desplegado tu sandbox en AWS.

---

## ☁️ Conexión al Backend en la Nube (AWS Amplify Sandbox)

Para desplegar tu entorno personal de desarrollo en AWS (DynamoDB + AppSync):

1. **Configura tus credenciales de AWS** (si usas AWS Academy o SSO):
   ```bash
   aws configure
   # O exporta AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY y AWS_SESSION_TOKEN
   ```

2. **Inicia el sandbox de Amplify**:
   ```bash
   npm run amplify:sandbox
   ```
   Esto creará automáticamente la tabla en **DynamoDB**, la API en **AppSync** y generará el archivo `amplify_outputs.json` en la raíz. Al recargar la app web, verás la insignia `● AWS CLOUD CONECTADO`.

---

## 🛠️ Estructura del Backend (Amplify Gen 2)

- [amplify/data/resource.ts](file:///amplify/data/resource.ts): Definición del modelo de datos `FestivalEvent` (`artist`, `space`, `time`, `status`) y políticas de autorización.
- [amplify/auth/resource.ts](file:///amplify/auth/resource.ts): Configuración de autenticación (Amazon Cognito).
- [amplify/backend.ts](file:///amplify/backend.ts): Punto de entrada y orquestador del backend.
- [src/eventsService.ts](file:///src/eventsService.ts): Capa de servicio con soporte en tiempo real (`observeQuery`) y fallback local transparente.

---

## 📦 Despliegue en AWS Amplify Hosting (CI/CD)

El archivo [amplify.yml](file:///amplify.yml) ya está preparado para despliegue fullstack continuo:
1. Conecta este repositorio en la consola de **AWS Amplify Hosting**.
2. Amplify detectará automáticamente la carpeta `amplify/` y ejecutará el despliegue del backend y frontend en cada push a la rama `main`.
