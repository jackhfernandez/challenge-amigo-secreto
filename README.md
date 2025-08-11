# Amigo Secreto 🎁

Una aplicación web interactiva para sortear amigos secretos de manera aleatoria. Perfecta para organizar intercambios de regalos entre amigos, familia o compañeros de trabajo.

## 🌟 Características

- ✅ Agregar nombres de amigos a una lista
- ✅ Validación de entrada para evitar nombres vacíos
- ✅ Visualización en tiempo real de la lista de amigos
- ✅ Sorteo aleatorio del amigo secreto
- ✅ Funcionalidad para agregar nombres presionando Enter
- ✅ Interfaz responsiva y atractiva

## 🚀 Tecnologías Utilizadas

- **HTML5**: Estructura semántica de la aplicación
- **CSS3**: Estilos modernos con variables CSS y Flexbox
- **JavaScript**: Lógica de la aplicación y manipulación del DOM
- **Google Fonts**: Tipografías Inter y Merriweather

## 📁 Estructura del Proyecto

```
challenge-amigo-secreto/
├── index.html          # Estructura principal de la aplicación
├── style.css           # Estilos y diseño visual
├── app.js              # Lógica de la aplicación
├── README.md           # Documentación del proyecto
└── assets/
    ├── amigo-secreto.png       # Imagen principal
    └── play_circle_outline.png # Ícono del botón sortear
```

## 🎮 Cómo Usar

1. **Agregar Amigos**:
   - Escribe el nombre de un amigo en el campo de texto
   - Haz clic en "Añadir" o presiona Enter
   - El nombre aparecerá en la lista debajo

2. **Sortear Amigo Secreto**:
   - Asegúrate de tener al menos un amigo en la lista
   - Haz clic en el botón "Sortear amigo"
   - El resultado aparecerá en la parte inferior

## 🛠️ Instalación y Ejecución

1. Clona o descarga este repositorio
2. Abre el archivo [`index.html`](index.html) en tu navegador web
3. ¡Comienza a agregar amigos y sortear!

No se requiere instalación de dependencias adicionales.

## 📱 Compatibilidad

- ✅ Chrome (recomendado)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Dispositivos móviles

## 🎨 Funcionalidades Técnicas

### JavaScript ([`app.js`](app.js))
- **`agregarAmigo()`**: Valida y agrega nombres al array
- **`mostrarAmigos()`**: Actualiza la lista visual en el DOM
- **`sortearAmigo()`**: Genera un índice aleatorio y muestra el resultado
- **Event Listeners**: Soporte para agregar con tecla Enter

### CSS ([`style.css`](style.css))
- Variables CSS para consistencia de colores
- Diseño responsivo con Flexbox
- Efectos hover en botones
- Sombras y bordes redondeados

## 🤝 Contribuir

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agregar nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo LICENSE para más detalles.

## 🎯 Posibles Mejoras Futuras

- [ ] Persistencia de datos en localStorage
- [ ] Opción para eliminar amigos de la lista
- [ ] Historial de sorteos anteriores
- [ ] Exportar resultados
- [ ] Temas de colores personalizables
- [ ] Animaciones en el sorteo

<br>Creado por Fernandez Reyes.<br><br>

¡Disfruta organizando tus intercambios de amigo secreto! 🎉