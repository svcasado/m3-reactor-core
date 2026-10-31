# Misión M3

M3 · Reactor Core

## Cómo probarlo

npm run dev

Abre http://localhost:5173 y busca una serie (por ejemplo, office).

- **Sin resultados:** busca zzzz.

## Estructura

```
src/
├── main.jsx # monta <App /> dentro de <StrictMode>
├── App.jsx # estado, valores derivados y búsqueda
├── api.js # fetch a TVMaze y control de errores (respuesta.ok)
├── datos.js # transformación: map, flatMap, reduce, toSorted
├── components/
│   ├── Buscador.jsx # formulario con input controlado
│   ├── EstadoBusqueda.jsx # cargando, error y vacío
│   ├── ListaSeries.jsx # lista de tarjetas con key = id
│   ├── ResumenGeneros.jsx # número de series y recuento por género
│   └── TarjetaSerie.jsx # solo pinta una serie con sus props
└── index.css
```

## Uso de IA

Usé Claude Code (modelo Claude Opus 5.5). Le pedí que leyera los apuntes de la unidad 3, la presentación y la rúbrica sobre todo para que me resolviera dudas apoyándose en ejemplos de clase, y que me ayudara a pasar a React mi buscador de la M2.

Lo comprobé con npm run lint, npm run build y probando en el navegador todos los casos posibles. Otra cosa que hice fue comprobar que no estaba generando cosas innecesarias o que realmente no aportaran al proyecto. Además fui comprobando todo lo que se generaba con los ejemplos de clase tratando de buscar partes donde estaba sobrecomplicando las cosas.

Algunos prompts que he usado son:

- ¿Puedes corregir lo que he hecho en "app.jsx"? ¿Hay algo que he pasado por alto o alguna mejora que le pueda hacer?
- ¿Se podría hacer de alguna otra manera más inteligente?
- ¿Puedes explicarme cómo puedo implementar esto en mi proyecto?

Lo que escribí a mano:

- He tratado de escribir todo a mano, incluso lo que ha generado Claude, para interiorizar conceptos y saber qué se estaba haciendo. Por ejemplo, algunos detalles como que se me olvidó añadir el import de useEffect, lo que me dio problemas porque la página se quedó en blanco, o la implementación de que al hacer una búsqueda no se mostraba en la pestaña el título. Al hacer pruebas vi el problema y lo fui arreglando.

## Autopsia

1. La búsqueda va en el manejador del formulario, no en un useEffect. La alternativa era guardar la consulta en estado y hacer el fetch . La descarté porque la búsqueda la provoca el usuario al pulsar Buscar, y lo que responde a una interacción va en el manejador del evento, no en un effect. El único useEffect que dejé cambia document.title, porque el título está fuera de React. No crea nada que haya que limpiar.

2. Solo guardo en estado lo que no se puede calcular. texto está en Buscador porque solo lo usa el formulario. consulta, series, cargando y error están en App porque los usan varios hijos: series llega a ResumenGeneros y a ListaSeries. La alternativa era guardar también la lista ordenada y el recuento de géneros en su propio useState y actualizarlos al buscar. La descarté porque salen de series, así que los calculo en cada render y nunca se desincronizan.
