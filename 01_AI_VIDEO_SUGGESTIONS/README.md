# AWS Personalize
- [Video Suggetions with AWS AI](https://www.youtube.com/watch?v=glSFmuAfRjE)
- [Amazon Personalize Pricing](https://aws.amazon.com/personalize/pricing/)
- [Amazon Personalize Real time personalization and recommendation service.](https://console.aws.amazon.com/personalize/home?region=us-east-1#start)
- [Amazon Personalize Samples](https://github.com/aws-samples/amazon-personalize-samples)

> Dar recomendaciones a los usuarios en función de sus preferencias y comportamiento, volver a clasificar los resultados de forma personalizada y personalizar el contenido de los correos electrónicos y notificaciones.

# Fuentes de información

### Requerimientos

> Los requisitos mínimos de datos para entrenar un modelo son los siguientes:

>> - 1000 registros de datos de interacción combinados (después de filtrar por eventType y eventValueThreshold, si se proporciona).

>> - 25 usuarios únicos con al menos 2 interacciones cada uno.

### Actividad histórica de los usuarios
- Contenido multimedia consumido
- Sentimiento generado por el contenido multimedia consumido
- Categorías favoritas
- El contenido multimedia fué consumido completamente?
- Tiempo contenido multimedia que fué consumido
  
### Datos de los usuario
- Edad
- Genero
- Region
- Escolaridad

# Preparación de los datos prueba

## Data examples

- [MovieLens](https://grouplens.org/datasets/movielens/)

# CSV editor for data

- https://edit-csv.net/


## Step 1: Import training data

```sh
aws personalize create-dataset-group \
    --name MovieRatingDatasetGroup \
    --kms-key-arn arn:aws:kms:us-west-2:01234567890:key/1682a1e7-a94d-4d92-bbdf-837d3b62315e \
    --role-arn arn:aws:iam::01234567890:KMS-key-access

```
ratings-dsgroup
ratings-dataset
ratings-dsimport-job
arn:aws:iam::436023604714:role/kio-sl-lms-personalize-role
s3://kio-mk-sl-lms-personalize-data/ratings.csv


# IAM: Access the policy simulator console

- [IAM Policy Simulator](https://policysim.aws.amazon.com/home/index.jsp?#)



# Amazon Personalize
- [Episode 1: Introduction to Amazon Personalize](https://youtu.be/TEioktJD1GE)
- [Episode 2: Understanding your Data with Amazon Personalize](https://youtu.be/TEioktJD1GE)
- [Episode 3: Solving Real World Use Cases with Amazon Personalize](https://youtu.be/9N7s_dVVWBE)
- [Amazon Personalize can now use 10X more item attributes to improve relevance of recommendations](https://aws.amazon.com/es/blogs/machine-learning/amazon-personalize-can-now-use-10x-more-item-attributes-to-improve-relevance-of-recommendations/)

4 areas principales (Data/Training/Inference/Operations)
Como entrenar los modelos, escoger las recetas y algoritmos apropiadas para los casos de uso, como obtener recomendaciones de los modelos e integrarlos con las aplicaciones

Para los clientes actualmente la personalización es un estandar en el de servicio   

## Data
### Actividad de los usarios (Eventos) METADATA
- Clicks
- Que compran
- Que ven
- Conversiones
- 
### Detalles acerca de los artículos (Es opcional) METADATA
- Precio
- Categoria
- Estilo
- Genero
- Informacion ya contenida en el catalogo

### Detalles acerca de los usuarios METADATA
- Demografía
- Ubicación
- Edad
- Genero
- Nivel de suscripción

## Proceso

Inspeccionar los datos => Identificar funcionalidades => Seleccionar los parametros => Entrenar los modelos => Optimizar Modelos => Hospedar los modelos => Funcionalidades en tiempo real => API PERSONALIZADA

## Casos de usos
**Recomendaciones especificas a un usuario**
> Cuales recomendaciones son mas relevantes para un usuario en particular 

**Inicio frio de un usuario**
> Es un subconjunto de recomendaciones para un usuario que es desconocido, donde se muestra al usuario que resultados son realmente populares

**Inicio frio de un articulo**
> Similar a "Inicio frio de un usuario" pero aplicado a un nuevo articulo, la pregunta es: cómo promocionar un nuevo artículo? Se usan parametros de exploración para ver el comportamiento de los nuevos usuarios con un poco de nuevo contenido y hacer decisiones informadas rapitamente, de donde deben ser colocadas y mostradas.

**Articulos similares**
> No son los metadatos de una cosas similar a otra, pero que involucrar a los clientes con el contenido en formas similares. En el escenario de ventas al por menor: donde un cliente hace clic en un articulo y luego muestra articulos similares que otros clientes frecuentemente compran juntos.

**Ranking personalizado**

**Popularidad**

Pulselive: incremento en un 20% el consumo de video en el website y la aplicación mobil**
 
## Caracteristicas del Conjunto de Datos (Datasets)
- una colección grande de usuarios conocidos
- historia de su comportamiento y su comportamiento (al menos 10 interacciones por usuario)
- datos inmutables
- 50 o mas articulos

## Data de interacción
Es informacion del monitoreo de las acciones de los usuarios o clientes dentro de la plataforma (compras, compartir, likes, inclusive navegar) todo determinado por marca de tiempo (timestamp)


# Setting Up Jupyter Notebook
- [Getting Started With Jupyter Notebook for Python](https://medium.com/codingthesmartway-com-blog/getting-started-with-jupyter-notebook-for-python-4e7082bd5d46)

```sh
pip3 install jupyterlab
jupyter-lab
```

- [amazon-personalize-samples](https://github.com/aws-samples/amazon-personalize-samples)