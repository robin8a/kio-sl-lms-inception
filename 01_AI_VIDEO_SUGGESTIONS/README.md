# AWS Personalize
- [Video Suggetions with AWS AI](https://www.youtube.com/watch?v=glSFmuAfRjE)
- [Amazon Personalize Pricing](https://aws.amazon.com/personalize/pricing/)
- [Amazon Personalize Real time personalization and recommendation service.](https://console.aws.amazon.com/personalize/home?region=us-east-1#start)
- [Amazon Personalize Samples](https://github.com/aws-samples/amazon-personalize-samples)
- [Amazon Personalize can now use 10X more item attributes to improve relevance of recommendations](https://aws.amazon.com/es/blogs/machine-learning/amazon-personalize-can-now-use-10x-more-item-attributes-to-improve-relevance-of-recommendations/)

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
- [Getting your Amazon Personalize Recommendations in Front of your Users](https://www.youtube.com/watch?v=oeVYCOFNFMI)

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
> Cuales recomendaciones son mas relevantes para un usuario en particular. 
> Receta: User-Personalization

**Inicio frio de un usuario**
> Es un subconjunto de recomendaciones para un usuario que es desconocido, donde se muestra al usuario que resultados son realmente populares.
> Receta: User-Personalization

**Inicio frio de un articulo**
> Similar a "Inicio frio de un usuario" pero aplicado a un nuevo articulo, la pregunta es: cómo promocionar un nuevo artículo? Se usan parametros de exploración para ver el comportamiento de los nuevos usuarios con un poco de nuevo contenido y hacer decisiones informadas rapitamente, de donde deben ser colocadas y mostradas.
> Receta: User-Personalization

**Articulos similares (SIMS)**
> No son los metadatos de una cosas similar a otra, pero que involucrar a los clientes con el contenido en formas similares. En el escenario de ventas al por menor: donde un cliente hace clic en un articulo y luego muestra articulos similares que otros clientes frecuentemente compran juntos.
> Receta: SIMS

**Ranking personalizado**
> Tomamos una colección de artículos ya has curado de alguna manera, que puede ser potencialmente un filtro o puede ser un catálogo de artículos que quisiera promover, luego Personalize ayudará a posicionar con el fin de determinar cual tiene mayor probabilidad de ser de interes a tu usuario. Esto llevará a incrementar las conversiones o el compromiso de alguna forma.
> Receta: Personalize-Ranking

**Popularidad**
> Aquí es mirar cuales son los artículos mas populares basado en el comportamiento del usuario. Se considera una linea base midiendo el rendimiento con Personalize, mas allá de la popularidad en términos de resultados.
> Receta: Popularity-Count

### Empresas
Pulselive
> Incremento en un 20% el consumo de video en el website y la aplicación mobil**
 
## Caracteristicas del Conjunto de Datos (Datasets)
- una colección grande de usuarios conocidos
- historia de su comportamiento y su comportamiento (al menos 10 interacciones por usuario)
- datos inmutables
- 50 o mas articulos

## Data de interacción
Es informacion del monitoreo de las acciones de los usuarios o clientes dentro de la plataforma (compras, compartir, likes, inclusive navegar) todo determinado por marca de tiempo (timestamp)

## Cuales datos son útiles (User metadata)?
Que queremos filtrar y cómo? Para el contenido multimedia por ejemplo es relevante al genero ya que es un atributo con el que podemos filtrar constantemente y tener mejores recomendaciones.

# Solución y Versión de la Solución
1. Solución: hace referencia a la combinación de una receta de Amazon Personalice y parametros personalizados
2. Versión de una Solución: hacer referencia al modelo entrenado por machine-learning que puede ser desplegado para optener recomendaciones para los clientes. Se puede acceder a través de AWS-CLI y SDK

## Metricas de versión de la solución

Las métricas para juzgar su desempeño, documentación para entender las [metricas a profundidad](https://docs.aws.amazon.com/personalize/latest/dg/working-with-training-metrics.html). Las metricas en un principio no son las mejores pero con **conjuntos de datos más grandes y complejos**, debería ver mejoras. 

- *Relevant recommendation* refers to a recommendation that matches a value in the testing data for the particular user.
- *Rank* refers to the position of a recommended item in the list of recommendations. Position 1 (the top of the list) is presumed to be the most relevant to the user.
- *Query* refers to the internal equivalent of a GetRecommendations call.

The metrics produced by Personalize are:

- coverage: The proportion of unique recommended items from all queries out of the total number of unique items in the training data (includes both the Items and Interactions datasets). **La proporción total de sus articulos en un catálogo que están siendo recomenadados.**
- mean_reciprocal_rank_at_25: The [mean of the reciprocal ranks](https://en.wikipedia.org/wiki/Mean_reciprocal_rank) of the first relevant recommendation out of the top 25 recommendations over all queries. This metric is appropriate if you're interested in the single highest ranked recommendation. **Es la primera recomendación del top 25 de las recomendacion sobre todas las peticiones, es apropiada si esta interesado en la recomendación mejor rankeada**
- normalized_discounted_cumulative_gain_at_K: Discounted gain assumes that recommendations lower on a list of recommendations are less relevant than higher recommendations. Therefore, each recommendation is discounted (given a lower weight) by a factor dependent on its position. To produce the [cumulative discounted gain](https://en.wikipedia.org/wiki/Discounted_cumulative_gain) (DCG) at K, each relevant discounted recommendation in the top K recommendations is summed together. The normalized discounted cumulative gain (NDCG) is the DCG divided by the ideal DCG such that NDCG is between 0 - 1. (The ideal DCG is where the top K recommendations are sorted by relevance.) Amazon Personalize uses a weighting factor of 1/log(1 + position), where the top of the list is position 1. This metric rewards relevant items that appear near the top of the list, because the top of a list usually draws more attention. **Se divide en colleciones de 5, 10 y 25; por ejemplo 5 realmente impactan podría ser un media-carrusel en la "landing page". Para páginas mas grandes 10 o 25**
- precision_at_K: The number of relevant recommendations out of the top K recommendations divided by K. This metric rewards precise recommendation of the relevant items. **Es el número relevante de recomenadaciones fuera de las K recomendaciones principales 5, 10 o 25 dividida por K. Permite determinar qué tan bien calibrada está esa lista en general y el posicionamiento de sus recomendaciones**


```json
{
  "solutionVersionArn": "arn:aws:personalize:us-east-1:436023604714:solution/personalize-demo-soln-user-personalization/3ba6a5be",
  "metrics": {
    "coverage": 0.3225,
    "mean_reciprocal_rank_at_25": 0.1168,
    "normalized_discounted_cumulative_gain_at_10": 0.1238,
    "normalized_discounted_cumulative_gain_at_25": 0.1989,
    "normalized_discounted_cumulative_gain_at_5": 0.0985,
    "precision_at_10": 0.036,
    "precision_at_25": 0.0324,
    "precision_at_5": 0.0427
  },
  "ResponseMetadata": {
    "RequestId": "c9c934ae-b494-4498-ac1a-041110153db1",
    "HTTPStatusCode": 200,
    "HTTPHeaders": {
      "content-type": "application/x-amz-json-1.1",
      "date": "Fri, 16 Jul 2021 14:44:02 GMT",
      "x-amzn-requestid": "c9c934ae-b494-4498-ac1a-041110153db1",
      "content-length": "425",
      "connection": "keep-alive"
    },
    "RetryAttempts": 0
  }
}
```
# Campañas

Una campaña es una versión de solución alojada; un punto final que puede consultar para obtener recomendaciones.

# IMPLEMENTACIÓN

# Datos
  
## Dataset para las interacciones

### Schema
Al principio solo vamos a entrenar el modelo con:
 - USER_ID: identificador del usuario 
 - ITEM_ID (MULTIMEDIA_ID): identificador de la archivo multimedia
 - RATING: calificación de la pelicula de 1 a 5
 - EVENT_TYPE: click o visto  
 - TIMESTAMP: momento en el tiempo que fué consumido multimedia

Nombre de archivo: interaction.csv

**Al menos debemos tener 2500 interacciones para crear en motor de recomendaciones**

- Solo vamos a tener calificaciones positivas o vistas completas, asumiendo que mayor o igual a 3 cumple con éste filtro

## Metadata de los archivos multimedia
Cómo los usuarios 

### Dataset
- multimediaID: 
- título: Del título **no se aprende** ya que los hay palabras repetidas por consiguiente no lo vamos a tener en cuenta
- genre: Categoría

### Schema
ITEM_ID(movieId): identificador de la pelicula, relacionado con la pelicula
GENRE: o categorías (Ej. matematicas|fisica|computacion|arte) datos separado por "|"

Nombre de archivo: item-meta.csv

## Metadata de los usuarios

### Dataset
identificador
edad: Edad en años del usuario
genero: Genero del usuario
ubicación: Ciudad del usuario

### Schema
- USER_ID(identificador)
- AGE (edad)
- GENRE (genero)
- LOCATION (ubicación)

Nombre de archivo: user-meta.csv

# Entrenamiento
... ver Casos de Uso, Soluciones, Recetas

# Inferencias
Es un termino de machine-learning; para preguntar al modelo que haga un predicción (obtener recomendaciones)

##  Recomendaciones en tiempo real (RT)
- Experiencias interactivas para los usuarios (browser, mobile)
- GetRecommendations
- GerPersonalizedRanking
- Llamados sincronicos
- Baja latencia
- Auto escalamiento
- Requiere una campaña
- Soporta contexto
- Soporta filtros

##  Recomendaciones Bathc

Aquí voy documentando: https://youtu.be/oeVYCOFNFMI?t=215


# Setting Up Jupyter Notebook
- [Getting Started With Jupyter Notebook for Python](https://medium.com/codingthesmartway-com-blog/getting-started-with-jupyter-notebook-for-python-4e7082bd5d46)

```sh
pip3 install jupyterlab
jupyter-lab
```
- [amazon-personalize-samples](https://github.com/aws-samples/amazon-personalize-samples)

