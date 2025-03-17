# 📖 Blog Personal

Blog desarrollado como un proyecto propio para demostrar habilidades en el desarrollo **full stack** con **JavaScript**.

## 🚀 Características

- Creación de **categorías**, **autores** y **posts**.  
- Obtención de posts desde el backend.  
- Arquitectura **separada en frontend y backend**.  
- Uso de tecnologías modernas para un desarrollo eficiente y escalable.
- Diseño responsivo.
- Modo oscuro

## 🛠 Tecnologías utilizadas

### **Frontend**
- [Next.js](https://nextjs.org/)
- [HeroUi](https://www.heroui.com/)
- [Tailwind CSS](https://tailwindcss.com/)

### **Backend**
- [Strapi](https://strapi.io/)  
- [MariaDB](https://mariadb.org/)  
- Node.js + otras tecnologías relacionadas con Strapi.  

## 📦 Instalación y configuración

1. **Clonar el repositorio:**  
   ``` sh
   git clone https://github.com/sebavlao/Blog.git
   cd Blog
   ```
   
2. **Configurar las variables de entorno de Strapi:**
   - Define las variables necesarias en el archivo .env dentro de /strapi en base al archivo /strapi/.env.example

3. **Modificar la URL de conexión en el frontend:**
   - Editar el archivo /next/src/config/config.js:
   
   `export const API_BACK = "URL_DEL_BACKEND";`

4. **Instalar dependencias:**
``` sh
  cd next && npm install
  cd ../strapi && npm install
```

5. **Ejecutar los servicios en procesos separados:**
- Frontend (Next.js):
``` sh
  cd next && npm install
  cd ../strapi && npm instal
```
- Backend (Strapi.js):
``` sh
  cd next && npm install
  cd ../strapi && npm instal
```

## 🚧 Estado del proyecto
Actualmente el proyecto está finalizado, pero aún no está en producción ya que falta realizar el build final.

## 📷 Capturas de pantalla
![Main formato mobile](https://github.com/user-attachments/assets/d7936ca1-1a90-4530-95d2-a13236aea2a3)
![Main formato web](https://github.com/user-attachments/assets/8e536a50-f917-4648-87ce-fcff674229cc)
![Post formato web 1](https://github.com/user-attachments/assets/79b2150f-4890-4a62-a1b3-ee9f252a96f1)
![Post formato web 2](https://github.com/user-attachments/assets/4eec3b6c-dbfc-4e3e-b4e2-f16a1cf3b8f3)
![Crear entrada Backend 1](https://github.com/user-attachments/assets/ea36fa8e-04bf-48d7-9ef6-b1a0d31aca4a)
