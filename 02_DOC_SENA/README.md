# Diseño de la Base de Datos

![Versión 2](_images/ER-DB-V2.png)

1. User 
- Contiene la información del usuario con su respectivo [Role] (Administrador, Publicador/Visualizador)

2. Like 
- El sentimiento que genera por el contenido multimedia

3. Follow 
- Los usuarios que sigue para ver su contenido

4. Multimedia
- Permite almacenar todo tipo de archivos multimedia (videos, imágenes, documentos), adicionalmente es el centro de la informacion de las relaciones

5. Genre
- Contiene las categorías de los archivos por ejemplo: ARTE, MATEMATICAS, FISICA, TRIGONOMETRIA, etc.

6. MoocList (History Board)
- Contiene el orden jerárquico de la historias apoyado en la estructura de datos (arbol eneario)
![Historias árbol eneario](/02_DOC_SENA/_images/arbol_eneario.png)

7. Mooc (Massive open online course)
- Curso online masivo que agrupa un curso

8. MoocType
- Clasificación de los MOOCs en: PodCast, Colaborativos, ebook, Webinar, Mixto

