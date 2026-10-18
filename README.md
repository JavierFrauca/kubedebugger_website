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

## Despliegue en GitHub Pages

1. **Repo**: `JavierFrauca/kubedebugger_website` — el sitio debe publicarse desde la
   raíz de la rama `main`.
2. **Pages**: en GitHub → *Settings* → *Pages* → *Source*: **Deploy from a branch** →
   `main` / `(root)` → Save. (Equivalente por CLI: `gh api` — ver más abajo.)
3. **Dominio**: el archivo `CNAME` ya apunta a `kubedebugger.es`. En *Settings* →
   *Pages* → *Custom domain* debe figurar `kubedebugger.es`; cuando el DNS propague,
   marca **Enforce HTTPS** (GitHub emite el certificado automáticamente).

## Registro del dominio y DNS

1. Registra **kubedebugger.es** en cualquier registrador autorizado para dominios `.es`
   (por ejemplo el que uses habitualmente; el `.es` se gestiona a través de registradores
   acreditados por Red.es).
2. Crea estos registros DNS apuntando a GitHub Pages:

| Tipo  | Nombre | Valor                                        |
|-------|--------|----------------------------------------------|
| A     | `@`    | `185.199.108.153`                            |
| A     | `@`    | `185.199.109.153`                            |
| A     | `@`    | `185.199.110.153`                            |
| A     | `@`    | `185.199.111.153`                            |
| AAAA  | `@`    | `2606:50c0:8000::153`                        |
| AAAA  | `@`    | `2606:50c0:8001::153`                        |
| AAAA  | `@`    | `2606:50c0:8002::153`                        |
| AAAA  | `@`    | `2606:50c0:8003::153`                        |
| CNAME | `www`  | `javierfrauca.github.io.`                    |

3. (Recomendado) En GitHub → *Settings* → *Pages* → *Verified domains*, verifica
   `kubedebugger.es` añadiendo el registro TXT que GitHub te indique. Evita el secuestro
   de subdominios y habilita dominio verificado para toda la cuenta.

## Publicación / actualización

Cualquier push a `main` publica el sitio en minutos:

```bash
git add -A && git commit -m "update web" && git push
```

## Notas de mantenimiento

- **TTL del sitio**: cero dependencias externas ⇒ nada que actualizar por CVEs de
  terceros. Cambiar textos es editar HTML y push.
- **Descargas**: los botones apuntan a
  `https://github.com/JavierFrauca/kubedebugger_website/releases/latest/download/<nombre-estable>`
  (nombres sin versión: `kubedebugger-windows-amd64.zip`, `kubedebugger-unix.tar.gz`,
  `kubedebugger-setup.msi`, `kubedebugger-extension.vsix`, `SHA256SUMS.txt`). Los artefactos los genera
  automáticamente el workflow `release-website` del repo privado `kubedebugger`
  (trigger: tags `v*` o manual) y los publica como release de ESTE repo; por eso
  los enlaces de la web nunca cambian entre versiones.
- **Legal**: completa en `legal/aviso-legal.html` los campos marcados
  `<!-- COMPLETAR -->` (NIF y domicilio del titular) antes de promocionar el sitio.
- **Contacto**: el correo `contacto@kubedebugger.es` debe existir (crea el buzón o una
  redirección en el panel de tu registrador/correo).

## Licencia del sitio

Contenido del sitio bajo [MIT](LICENSE) (igual que el proyecto).
