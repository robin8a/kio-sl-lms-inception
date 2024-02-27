# Introducción
Visión computarizada es el campo de estudio que se  enfoca en habilitar el entendimiento e interpretar información visual del mundo real, que involucra el desarrollo de algoritmos y técnicas para extraer información relevante de imágenes o videos.

# Que vén los computadores?
Una computadora "ve" a través de sus diversos dispositivos de entrada, como cámaras, sensores o escáneres, según su configuración y propósito. Estos dispositivos capturan datos del entorno circundante en forma de señales o datos digitales. Por ejemplo:

1. **Cámaras**: Las cámaras digitales capturan imágenes y videos, convirtiendo la información de la luz en datos digitales que pueden ser procesados por la computadora.

2. **Sensores**: Los sensores pueden detectar diversos factores ambientales como temperatura, presión, movimiento o proximidad. Proporcionan datos a la computadora sobre el mundo físico.

3. **Escáneres**: Los escáneres convierten documentos físicos o imágenes en datos digitales analizando los patrones de luz reflejados en la superficie.

Una vez capturados los datos, la computadora los procesa utilizando algoritmos y software para interpretar y comprender la información. Esta interpretación podría implicar tareas como reconocimiento de objetos, clasificación de imágenes, seguimiento de movimiento o cualquier otro análisis relevante según la aplicación y el tipo de datos que se procesen.


## Cámaras
> Los computadores a través de imágnes digitalizadas, ven una matriz de pixeles donde cada uno tiene un valor que depende del sistema que se esté usando por ejemplo RGB (red, green and blue) 


![Gray scale Pixel Matrix](./_images/what_computer_see.png)
![Color Pixel Matrix](./_images/what_computer_see_1.png)
![RGB 0-255 bits](./_images/what_computer_see_3.png)



# Cinturon de herramientas
![My belt tools](./_images/batman_tool_belt.webp)

## Python
> Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, se utiliza para desarrollar aplicaciones de todo tipo, por ejemplo: Instagram, Netflix, Spotify, Panda3D, entre otros.​ Wikipedia
- [Iniciando con Python](https://colab.research.google.com/drive/1LBSBIey9XqEbtDpxs9Z6FGjOnGY74BJC?usp=sharing)

## Jupyter
> El Proyecto Jupyter es una organización sin ánimo de lucro creada para "desarrollar software de código abierto, estándares abiertos y servicios para computación interactiva en docenas de lenguajes de programación [Fuente: Wikipedia][https://es.wikipedia.org/wiki/Proyecto_Jupyter]
- [Jupyter Notebook: An Introduction](https://realpython.com/jupyter-notebook-introduction/)


## Markdown:
> Markdown es un lenguaje de marcado ligero creado por John Gruber y Aaron Swartz que trata de conseguir la máxima legibilidad y facilidad de publicación tanto en su forma de entrada como de salida, inspirándose en muchas convenciones existentes para marcar mensajes de correo electrónico usando texto plano. [Fuente: Wikipedia][https://en.wikipedia.org/wiki/Markdown]
- [Guía inicial](https://colab.research.google.com/notebooks/markdown_guide.ipynb)

## Google Colab
> Colab es un servicio alojado de Jupyter Notebook que no requiere configuración para su uso y proporciona acceso gratuito a recursos informáticos, incluidas GPU y TPU. Colab es especialmente adecuado para el aprendizaje automático, la ciencia de datos y la educación. [Colab](https://colab.google/)
- [Descripción general](https://colab.research.google.com/notebooks/basic_features_overview.ipynb)
- [Iniciando con Google Colab](https://colab.research.google.com/?utm_source=scs-index#scrollTo=qB3bdLe8jkAa)
- [Aprovecha al máximo Colab](https://colab.research.google.com/#scrollTo=qB3bdLe8jkAa)
- [Original: ](https://colab.research.google.com/)

### Librerias

- Numpy es una biblioteca de manipulación de matrices, utilizada para álgebra lineal, transformada de Fourier y capacidades de números aleatorios. [Tutorial](https://colab.research.google.com/github/google/eng-edu/blob/main/ml/cc/exercises/numpy_ultraquick_tutorial.ipynb?utm_source=mlcc&utm_campaign=colab-external&utm_medium=referral&utm_content=numpy_tf2-colab&hl=en)

- Pandas es una biblioteca para la manipulación y el análisis de datos. [Tutorial](https://colab.research.google.com/github/google/eng-edu/blob/main/ml/cc/exercises/pandas_dataframe_ultraquick_tutorial.ipynb?utm_source=mlcc&utm_campaign=colab-external&utm_medium=referral&utm_content=pandas_tf2-colab&hl=en)

- CV2 es una biblioteca para tareas de visión artificial. [Open CV Fundamentals ](https://colab.research.google.com/github/computationalcore/introduction-to-opencv/blob/master/notebooks/1-Fundamentals.ipynb)


NumPy UltraQuick Tutorial Colab exercise, which provides all the NumPy information you need for this course.
pandas UltraQuick Tutorial Colab exercise, which provides all the pandas information you need for this course.


## Raspberry Pi

![Raspberry Pi 5](./_images/raspberry_pi_5.webp)

Raspberry Pi es una serie de computadoras de placa única (SBC, por sus siglas en inglés, Single Board Computer) desarrollada por la Raspberry Pi Foundation, una organización benéfica con el objetivo de promover la educación en informática y la tecnología en general. Estas placas están diseñadas para ser económicas, compactas y versátiles, lo que las hace ideales para una amplia gama de proyectos de electrónica, informática y robótica.

Hay varias razones por las cuales usar Raspberry Pi en proyectos de visión computarizada:

1. **Costo**: Raspberry Pi es una opción económica en comparación con otras plataformas de computación, lo que lo hace accesible para proyectos de bajo presupuesto.

2. **Tamaño compacto**: Su tamaño compacto lo hace ideal para aplicaciones donde el espacio es limitado, como sistemas embebidos o dispositivos portátiles.

3. **Bajo consumo de energía**: Raspberry Pi consume menos energía en comparación con computadoras convencionales, lo que lo hace adecuado para proyectos que requieren eficiencia energética, como dispositivos alimentados por batería.

4. **Gran comunidad y soporte**: Raspberry Pi tiene una gran comunidad de usuarios y desarrolladores que proporcionan una amplia gama de recursos, tutoriales y bibliotecas de software para ayudar en el desarrollo de proyectos, incluidos proyectos de visión computarizada.

5. **Interfaz GPIO (Entrada/Salida de Propósito General)**: Raspberry Pi tiene pines GPIO que permiten la conexión de sensores, cámaras y otros dispositivos periféricos, lo que lo convierte en una plataforma versátil para proyectos de visión computarizada que requieren interacción con el entorno.

6. **Flexibilidad y capacidad de personalización**: Raspberry Pi es altamente personalizable y se puede adaptar para satisfacer las necesidades específicas de un proyecto de visión computarizada, ya sea mediante el uso de diferentes cámaras, módulos adicionales o software personalizado.

### Google Coral
Se refiere a una plataforma desarrollada por Google que se centra en la informática de punta y el aprendizaje automático. La plataforma Coral proporciona herramientas de hardware y software para permitir la implementación de modelos de inteligencia artificial y aprendizaje automático en dispositivos perimetrales, como los dispositivos IoT (Internet de las cosas).

El hardware de Coral incluye placas de desarrollo como Coral Dev Board y USB Accelerator, que incorporan Edge TPU (Unidad de procesamiento tensor) de Google, un acelerador de hardware especializado para la inferencia de aprendizaje automático. Edge TPU está diseñado para acelerar la ejecución de modelos de aprendizaje automático en dispositivos de borde con baja latencia y eficiencia energética.

## Referencias

- [Computer Vision on Raspberry Pi - Beginner to Advanced
](https://www.udemy.com/share/101BxU3@NVYDuOWs1uDUx_BhTwMk2GzjroA93xQiaMyEkW5mtlUCQhSG-qrg7RJ2dHKeWASo/)


## Roboflow
<p><a href="https://roboflow.com?wvideo=a2p0sj4bcm"><img src="https://embed-ssl.wistia.com/deliveries/b7e430f3200463b8c4b79e776906cc920350152b.jpg?image_play_button_size=2x&amp;image_crop_resized=960x720&amp;image_play_button=1&amp;image_play_button_color=6706cee0" width="400" height="300" style="width: 400px; height: 300px;"></a></p><p><a href="https://roboflow.com?wvideo=a2p0sj4bcm">Roboflow: Give your software the power to see objects in images and video</a></p>

Roboflow proporciona todo lo que necesita para etiquetar, entrenar e implementar soluciones de visión por computadora.
- [Iniciando con Roboflow](https://blog.roboflow.com/getting-started-with-roboflow/)


## AWS Rekognition

Amazon Rekognition es un servicio de AWS (Amazon Web Services) que proporciona capacidades avanzadas de visión por computadora para análisis de imágenes y videos. Cada uno de lo servicios se consumen a través del llamado de APIs, así mismo los costos están asociados al uso.


Algunos de los principales servicios ofrecidos por Amazon Rekognition son:

1. **Detección de caras**: Permite detectar y reconocer caras en imágenes y videos, así como realizar análisis de atributos faciales como la edad, el género, las emociones y el uso de accesorios como gafas o barbas.

2. **Reconocimiento de contenido visual**: Proporciona la capacidad de identificar y reconocer objetos, escenas y texto en imágenes y videos. Esto puede ser útil para clasificar imágenes basadas en su contenido visual o para buscar y etiquetar automáticamente imágenes en grandes colecciones.

3. **Análisis de contenido inapropiado**: Permite detectar contenido inapropiado, como desnudez o violencia, en imágenes y videos. Esto es útil para aplicaciones de moderación de contenido en redes sociales, sitios web o plataformas de transmisión de video.

4. **Análisis de celebridades**: Permite identificar y reconocer a celebridades en imágenes y videos.

5. **Reconocimiento de texto**: Proporciona capacidades para detectar y extraer texto de imágenes y videos, lo que puede ser útil para tareas de reconocimiento óptico de caracteres (OCR) y procesamiento de documentos.

6. **Análisis de contenido de video**: Ofrece funciones para analizar el contenido visual y el movimiento en videos, como la detección de actividad humana, seguimiento de objetos y estimación de puntos de referencia.

7. **Indexación y búsqueda de contenido visual**: Permite indexar y buscar imágenes y videos en función de su contenido visual, lo que facilita la búsqueda y recuperación de medios en grandes colecciones de datos.

- [Iniciando con Amazon Rekognition](https://docs.aws.amazon.com/rekognition/latest/dg/getting-started.html)


## AWS Sagemaker
Amazon SageMaker es un servicio completamente administrado por Amazon Web Services (AWS) que permite a los desarrolladores e ingenieros de datos construir, entrenar y desplegar modelos de machine learning de manera rápida y sencilla. Ofrece una serie de herramientas y recursos que simplifican el proceso de desarrollo de modelos de machine learning, desde la preparación de los datos hasta la implementación en producción.


1. **Entorno de desarrollo integrado (IDE)**: SageMaker proporciona un entorno de desarrollo integrado basado en la nube que permite a los usuarios escribir, ejecutar y depurar código en Python utilizando Jupyter Notebooks. Esto facilita la experimentación con algoritmos de machine learning y la visualización de resultados.

2. **Preprocesamiento y limpieza de datos**: SageMaker ofrece herramientas para la preparación y limpieza de datos, lo que incluye funciones para realizar transformaciones, normalizaciones y otras operaciones sobre conjuntos de datos antes de entrenar modelos.

3. **Entrenamiento de modelos**: SageMaker facilita el entrenamiento de modelos de machine learning utilizando una amplia gama de algoritmos y marcos de trabajo populares, como TensorFlow, PyTorch, scikit-learn y MXNet. Además, permite el entrenamiento distribuido para acelerar el proceso de entrenamiento en grandes conjuntos de datos.

4. **Optimización automática de modelos (AutoML)**: SageMaker ofrece capacidades de AutoML para automatizar el proceso de búsqueda de los hiperparámetros óptimos y la arquitectura del modelo. Esto ayuda a mejorar el rendimiento de los modelos de machine learning sin la necesidad de ajustes manuales.

5. **Despliegue de modelos**: Una vez que se ha entrenado un modelo, SageMaker facilita su implementación en producción mediante la creación de puntos finales de inferencia que pueden ser fácilmente integrados en aplicaciones y servicios.

6. **Escalabilidad y administración de recursos**: SageMaker gestiona automáticamente la infraestructura subyacente necesaria para el desarrollo, entrenamiento y despliegue de modelos, lo que permite escalar recursos de manera dinámica según las necesidades del usuario.

7. **Monitoreo y gestión de modelos en producción**: SageMaker proporciona herramientas para monitorear el rendimiento de los modelos en producción, lo que incluye la detección de anomalías y la capacidad de realizar actualizaciones automáticas o manuales de los modelos desplegados.

En resumen, Amazon SageMaker es una plataforma integral que agiliza y simplifica el ciclo de vida completo de desarrollo de modelos de machine learning, desde la preparación de los datos hasta la implementación en producción, todo dentro de un entorno integrado y escalable en la nube.
- [Iniciando con Amazon Sagemaker](https://docs.aws.amazon.com/sagemaker/latest/dg/gs.html)



# Operaciones básicas 
Para evitar el sobreajuste y crear un conjunto de datos más grande a partir de uno más pequeño, podemos utilizar una técnica llamada aumento de datos. Esto consiste simplemente en realizar transformaciones aleatorias en nuestras imágenes para que nuestro modelo pueda generalizarse mejor. Estas transformaciones pueden ser cosas como compresiones, rotaciones, estiramientos e incluso cambios de color.

1. Escalamiento
2. Voltear
3. Brillo
4. Operaciones bitwise 
5. Desenfocar, afilar

[0011_Image_Processing_in_Python_.ipynb](https://colab.research.google.com/drive/1O3GSNdPmqVRu6uB9XatjqHFCVZb-bVAR)

# Operaciones avanzadas
1. Ecualización de histograma
2. Transformación en escala de grises y ecualización de histograma
3. Transformada de Fourier de imágenes grises
4. Encontrar bordes mediante filtrado de paso alto en FFT

[0012_Image_Processing_in_Python.ipynb](https://colab.research.google.com/drive/1T1XuwrtMdvDNJneRXOLoVmrBcTAiJs68?usp=sharing)

# Algoritmos y aplicaciones (CV)
A continuación alguna de las aplicaciones:

- Extracción de características, 
- Detección de objetos
- Segmentación de imágenes, 
- Mejora de imágenes
- Detección y seguimiento de movimiento etc.

## Detección de Bordes (Edge detection)
La detección de bordes en visión por computadora es un proceso fundamental e inicial que se utiliza para identificar límites dentro de las imágenes. El objetivo de la detección de bordes es localizar los puntos de una imagen donde hay un cambio significativo de intensidad o color. Estos puntos suelen corresponder a los límites entre diferentes objetos o regiones dentro de la imagen.


## Segmentación

> Imagina que tienes un dibujo con muchos colores, como un dibujo para colorear. Ahora, ¿alguna vez has querido pintar dentro de las líneas pero no sabías dónde empezar o terminar? Bueno, la segmentación de imágenes es un poco como eso, ¡pero en la computadora!

> Piensa en una foto que tomaste con tu cámara. ¿Has notado que hay diferentes partes en la imagen? Algunas partes pueden ser el cielo, otras pueden ser árboles, personas, o el suelo. La segmentación de imágenes es como dividir la imagen en partes, como si estuviéramos pintando dentro de las líneas, pero con la ayuda de la computadora.

> Ahora, ¿cómo sabe la computadora dónde están las líneas? Bueno, imagina que estás usando un lápiz mágico que puede ver los bordes de las cosas. Cuando pasas el lápiz mágico sobre la imagen, detecta dónde hay cambios grandes, como donde el cielo se encuentra con los árboles, o donde las personas están paradas en el suelo. Estos son los bordes, y la computadora los usa para dividir la imagen en partes.

> Entonces, la segmentación de imágenes es como si la computadora usara un lápiz mágico para encontrar las líneas importantes en una imagen y luego dividirla en partes para que podamos entenderla mejor. Es una forma genial en que la computadora nos ayuda a entender las fotos y las imágenes que vemos en la pantalla. ¡Es como si la computadora tuviera su propio juego de colorear, pero con imágenes en lugar de papel!

- [Segment Anything Model (SAM)](https://colab.research.google.com/drive/1TRhFRkGdoMCMvgbx5hRT1H3oFgmOpWzD?usp=sharing)

## Detección puntos clave
> Imagina que tienes un mapa de un tesoro. En lugar de buscar todo el mapa, ¿qué tal si solo buscas lugares especiales que te indiquen dónde puede estar el tesoro? Estos lugares especiales podrían ser montañas altas, cruces de caminos o árboles gigantes. En la detección de puntos clave, la computadora busca estos "lugares especiales" en una imagen.

> Ahora, ¿cómo sabe la computadora cuáles son estos lugares especiales? Bueno, imagina que tienes una lupa mágica que puede ver detalles muy pequeños. Cuando pasas esta lupa sobre la imagen, te muestra los lugares donde hay muchos cambios o detalles interesantes. Estos son los puntos clave, como las montañas altas o los árboles gigantes en nuestro mapa del tesoro.

> Una vez que la computadora encuentra estos puntos clave, puede usarlos para hacer cosas interesantes, como comparar imágenes y ver si son similares o encontrar objetos en una imagen. Es como si la computadora estuviera buscando tesoros en una imagen y luego usara esos tesoros para hacer cosas asombrosas, ¡como encontrar objetos o reconocer lugares! Es una forma muy útil en la que la computadora nos ayuda a entender y trabajar con imágenes.

## Extracción de características


[0013_Image_Aplications_Python.ipynb](https://colab.research.google.com/drive/1rY48Y5BGotO0dDlN9ZmnCIhMlOX5wP91?usp=sharing)

# Aplicaciones en el mundo real

## Mejoramiento de imágenes 
![Mejoramiento de imágenes](./_images/image_enhanment_2.jpeg)

## Reconocimiento de objetos

## Clasificación de imágenes

## Seguimiento de objetos

## Analisis de video

## Detección de rostros

## Robotics

## Biología y medicina

## Conducción automática

