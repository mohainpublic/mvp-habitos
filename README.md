# StudySport — MVP web

App donde grupos privados de amigos compiten estudiando y haciendo deporte: registran sesiones, suman puntos, mantienen rachas y compiten en un ranking de grupo por temporadas.

Este repositorio contiene **solo la parte web (Next.js) del MVP, frontend puro**: no hay backend conectado todavía (sin Firebase/Auth/Firestore real). Todos los datos que se ven (puntos, ranking, racha, etc.) son de ejemplo, marcados con comentarios `TODO` en el código donde en el futuro se conectarán a datos reales.

## Stack

- [Next.js 16](https://nextjs.org) (App Router, Turbopack)
- TypeScript
- Tailwind CSS v4 (tokens de diseño en `src/app/globals.css`, sin `tailwind.config`)
- React 19

## Requisitos

- Node.js 20+
- npm

## Cómo ejecutarlo

```bash
npm install
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000). La app está pensada para verse en un móvil (columna centrada, máx. `max-w-sm`) — para probarla como se diseñó, abre las DevTools del navegador y activa el modo de dispositivo móvil (`Cmd/Ctrl + Shift + M` en Chrome).

Otros comandos útiles:

```bash
npm run build   # build de producción
npm run lint    # ESLint
npx tsc --noEmit  # comprobación de tipos
```

## Mapa de pantallas

| Ruta | Pantalla |
|---|---|
| `/` | Bienvenida |
| `/login` | Iniciar sesión / registro |
| `/group` | Unirse o crear grupo (bloqueante, sin grupo no se llega al home) |
| `/group/invite` | Invitar amigos al grupo (código + compartir) |
| `/home` | Dashboard: racha, progreso de estudio/deporte, ranking resumido, accesos rápidos |
| `/activity` | Registrar actividad (selección de modo + cámara, sin backend real) |
| `/activity/result` | Resultado del registro (puntos ganados, racha, nivel) |
| `/ranking` | Ranking completo del grupo |
| `/profile` | Perfil, insignias y actividad reciente |
| `/settings` | Ajustes (apariencia, cuenta, notificaciones, sistema) |
| `/settings/chat-ia` | Chat con asistente de estudio (demo local, sin IA real conectada) |
| `/settings/bloqueo-moviles` | Configuración de bloqueo de apps durante sesiones |
| `/season` | Resumen de fin de temporada |

Navegación inferior: **Home / Ranking / Chat IA / Perfil**. Ajustes se accede desde el icono de engranaje dentro de Perfil, no está en la barra de navegación.

## Temas claro/oscuro

El tema por defecto sigue la preferencia del sistema (`prefers-color-scheme`). También se puede forzar manualmente desde **Perfil → Ajustes → Apariencia** (Sistema / Claro / Oscuro); la preferencia se guarda en `localStorage`. Los colores de cada tema están definidos como variables CSS en `src/app/globals.css`:

- **Claro — "Kinetic Pulse"**: marca `#6366F1`, acento `#F97316`.
- **Oscuro — "StudySport Dark"**: marca `#3A8AFF`, acento `#FF9130`, fondo `#0A0A0A`.

## Qué es real y qué es demo

- ✅ Funciona de verdad: navegación completa entre pantallas, validación de formularios, selector de tema, chat de ejemplo con respuesta simulada, toggles de ajustes.
- 🚧 Sin conectar todavía (marcado con `TODO` en el código): autenticación (Firebase Auth), grupos/invitaciones reales (Firestore), sistema de puntos y ranking en tiempo real, cámara real con verificación de foto, bloqueo de apps real (requiere permisos nativos, solo viable en la futura app móvil con Expo), notificaciones push, chat IA con un modelo real.

## Estructura del proyecto

```
src/
  app/                  # rutas (App Router), una carpeta por pantalla
  components/
    ui/                 # primitivos (Button, Input, Card, Switch, Avatar, ProgressBar)
    brand/              # logo y wordmark
    nav/                # TopBar, BottomNav, AppShell, SubHeader
    theme/              # selector de tema (ThemeProvider, ThemeToggle)
    auth/                # formulario de login/registro
    icons.tsx           # iconos SVG propios (sin librerías externas)
```

## Notas

- No hay backend: el proyecto es intencionadamente frontend-only por ahora.
- Las reglas de negocio (puntos, rachas, temporadas, bloqueo de cámara/galería, etc.) están documentadas en el histórico de conversación del proyecto y se aplicarán cuando se conecte el backend.
