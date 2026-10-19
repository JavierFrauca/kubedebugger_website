# kubedebugger_website — sitio de kubedebugger.es

Sitio web estático de presentación del proyecto **kubedebugger**: sin frameworks, sin
dependencias externas (ni fuentes ni analítica de terceros), HTML/CSS/JS puro. Preparado
para publicarse en **GitHub Pages** con dominio propio **kubedebugger.es**.

## Estructura

```
index.html              landing completa (cómo funciona, modos, ventajas, instalación, descarga, FAQ)
acerca-de.html          historia y principios del proyecto
contacto.html           formulario mailto (sin backend) + info de soporte
legal/aviso-legal.html  LSSI-CE (art. 10)
legal/privacidad.html   RGPD / LOPDGDD
legal/cookies.html      política de cookies (el sitio no instala cookies)
404.html                página de error (terminal, por supuesto)
CNAME                   dominio personalizado (kubedebugger.es)
.nojekyll               sirve los assets tal cual, sin procesado Jekyll
assets/                 CSS y JS propios (banner cookies, tabs, menú móvil)
```

## Publicación / actualización

Cualquier push a `main` publica el sitio en minutos:

```bash
git add -A && git commit -m "update web" && git push
```

## Licencia del sitio

Contenido del sitio bajo [MIT](LICENSE) (igual que el proyecto).
