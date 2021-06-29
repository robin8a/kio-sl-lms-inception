# AWS Personalize
- [Video Suggetions with AWS AI](https://www.youtube.com/watch?v=glSFmuAfRjE)
- [Amazon Personalize Pricing](https://aws.amazon.com/personalize/pricing/)
- [Amazon Personalize Real time personalization and recommendation service.](https://console.aws.amazon.com/personalize/home?region=us-east-1#start)
- [Amazon Personalize Samples](https://github.com/aws-samples/amazon-personalize-samples)

> Dar recomendaciones a los usuarios en función de sus preferencias y comportamiento, volver a clasificar los resultados de forma personalizada y personalizar el contenido de los correos electrónicos y notificaciones.

# Fuentes de información

## Requerimientos

> Los requisitos mínimos de datos para entrenar un modelo son los siguientes:

>> - 1000 registros de datos de interacción combinados (después de filtrar por eventType y eventValueThreshold, si se proporciona).

>> - 25 usuarios únicos con al menos 2 interacciones cada uno.

## Actividad histórica de los usuarios
- Contenido multimedia consumido
- Sentimiento generado por el contenido multimedia consumido
- Categorías favoritas
- El contenido multimedia fué consumido completamente?
- Tiempo contenido multimedia que fué consumido
  
## Datos de los usuario
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
