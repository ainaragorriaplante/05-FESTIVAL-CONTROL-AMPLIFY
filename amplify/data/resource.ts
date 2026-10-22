import { type ClientSchema, a, defineData } from '@aws-amplify/backend';

/*== STEP 1 ===============================================================
El esquema define el modelo de datos para los eventos del festival.
Campos:
- artist: Nombre del artista o grupo
- space: Escenario (MAIN STAGE, GARDEN, WAREHOUSE, RIVER STAGE)
- time: Hora de la actuación (HH:MM)
- status: Estado del evento (CONFIRMED, DELAYED, CANCELLED)
=========================================================================*/
const schema = a.schema({
  FestivalEvent: a
    .model({
      artist: a.string().required(),
      space: a.string().required(),
      time: a.string().required(),
      status: a.enum(['CONFIRMED', 'DELAYED', 'CANCELLED']),
    })
    .authorization((allow) => [
      allow.publicApiKey(),
    ]),
});

export type Schema = ClientSchema<typeof schema>;

export const data = defineData({
  schema,
  authorizationModes: {
    defaultAuthorizationMode: 'apiKey',
    apiKeyAuthorizationMode: {
      expiresInDays: 30,
    },
  },
});
