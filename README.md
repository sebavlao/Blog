# 📖 Blog Personal

Blog desarrollado como un proyecto propio para demostrar habilidades en el desarrollo **full stack** con **JavaScript**.

## 🚀 Características

- Creación de **categorías**, **autores** y **posts**.  
- Obtención de posts desde el backend.  
- Arquitectura **separada en frontend y backend**.  
- Uso de tecnologías modernas para un desarrollo eficiente y escalable.  

## 🛠 Tecnologías utilizadas

### **Frontend**
- [Next.js](https://nextjs.org/)  
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

## 📷 Capturas de pantalla
---

## 🚧 Estado del proyecto
Actualmente el proyecto está finalizado, pero aún no está en producción ya que falta realizar el build final.
