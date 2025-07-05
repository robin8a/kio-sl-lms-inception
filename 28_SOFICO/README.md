---

## **Diapositiva 1: 5.1 Detalles de los canales de servicio y atención**

**Título:** Canales de Servicio y Atención de SOFICO

**Contenido:**

*   **Plataforma Central:** Aplicación web para diversas funciones administrativas y roles de usuario.
*   **Canales Clave:**
    *   **Portal/Aplicación Web Auto-servicio:**
        *   Gestión de Cuentas (Registro, Inicio de Sesión, Recuperación de Contraseña, Reconocimiento Facial).
        *   Envío y Validación de Datos (Documentos de identidad, Policía Nacional, Procuraduría, Origen de actividad económica).
        *   Monitoreo del Estado de Validación.
        *   Descubrimiento de Proyectos e Inversión (Blockchain Cardano, Pasarela de pago).
        *   Visión General Financiera Personal ("Billetera Simulada").
        *   Transacciones P2P.
        *   Interacción con Contenido (Comentarios, publicaciones).
        *   Visualización de Transacciones.
    *   **Backend Administrativo/Herramientas Internas:**
        *   Gestión y Validación de Documentos.
        *   Gestión del Ciclo de Vida del Proyecto (CRD).
    *   **Comunicación e Integración de Sistema a Sistema (APIs/Blockchain):**
        *   Integración con Cardano Blockchain.
        *   Gestión de Contratos Inteligentes (DAO).
        *   CI/CD Pipelines.

---

## **Diapositiva 2: 5.1 (Continuación) Niveles de Servicio y Atención**

**Título:** Niveles de Servicio y Atención de SOFICO

**Contenido:**

*   **Enfoque en la Excelencia Operativa:**
    *   CI/CD y operaciones automatizadas (CloudFormation, AWS Config).
    *   Monitoreo y evolución continua del sistema.
*   **Fiabilidad (Reliability):**
    *   Alta disponibilidad (Nodo Cardano, servicios AWS).
    *   Durabilidad de datos y tiempo de actividad.
    *   Recuperación automática de fallos y escalado horizontal.
*   **Eficiencia de Rendimiento (Performance Efficiency):**
    *   Tiempos de respuesta rápidos y uso eficiente de recursos (Amplify/AppSync, DynamoDB).
    *   Integración de caché para mejorar el rendimiento de lectura.
*   **Seguridad (Security):**
    *   Reconocimiento facial, IAM, cifrado de datos (KMS, SSL/HTTPS).
    *   Validación de datos e inmutabilidad en blockchain Cardano.
*   **Optimización de Costos (Cost Optimization):**
    *   Servicios AWS serverless (DynamoDB, Lambda).
    *   Modelo "Pagar solo por lo que se usa".

---

## **Diapositiva 3: 5.2 Detalles de la plataforma que soportará el negocio**

**Título:** Plataforma Tecnológica de SOFICO

**Contenido:**

*   **Arquitectura Principal:** Construida sobre infraestructura de nube de Amazon Web Services (AWS).
*   **Integración Profunda:** Con la blockchain de Cardano.
*   **Enfoque:** Moderno, digital, aprovechando automatización y servicios AWS nativos.
*   **Componentes Clave:**
    *   **Backend Central y Gestión de Datos:**
        *   **Cardano Blockchain:** Validación, almacenamiento de datos de usuario, reservas de proyectos (inmutabilidad).
        *   **Base de Datos Propia (Amazon DynamoDB):** Almacenamiento de reservas de proyectos, consulta de proyectos disponibles.
    *   **Capa de Aplicación e Interfaces de Usuario (Front-End):**
        *   Aplicación Web (ReactJS).
        *   Gestión de Cuentas de Usuario.
        *   Carga y Validación de Datos.
        *   Interfaz de Estado de Validación.
        *   Gestión de Proyectos.
        *   Gestión de Inversiones y Billeteras (Transacciones P2P).

---

## **Diapositiva 4: 5.2 (Continuación) Infraestructura de Desarrollo e Implementación**

**Título:** Infraestructura de Desarrollo e Implementación

**Contenido:**

*   **Principios:** Moderno y digital, automatización y servicios AWS nativos.
*   **Diseño:** "Serverless-first" donde sea aplicable.
*   **Alineación:** Pilares del AWS Well-Architected Framework (Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization).
*   **Procesos Clave:**
    *   **Continuous Integration/Continuous Delivery (CI/CD):** Pipelines con AWS Amplify/AppSync.
    *   **Gestión de Dominio y SSL:** AWS Route 53.
    *   **Entorno de Desarrollo:** AWS Cloud9 (ReactJS).
*   **Servicios Fundamentales de AWS:**
    *   **Security:** IAM, KMS, SSL/TLS, Security Groups.
    *   **Scalability and High Availability:** DynamoDB, Amplify, despliegues Multi-AZ, Load Balancing, Auto Scaling Groups.
    *   **Monitoring and Logging:** CloudWatch, CloudTrail.
    *   **Networking:** Amazon VPC.

---

## **Diapositiva 5: 5.3 Sistema Core para la operación de SOFICO**

**Título:** Sistema Core para la Operación de SOFICO

**Contenido:**

*   **Naturaleza:** Plataforma tecnológica integral, construida sobre AWS e integrada con Cardano Blockchain.
*   **Objetivo:** Manejar procesos de negocio clave (gestión de usuarios, ciclo de vida de proyectos, inversión, validación de datos).
*   **Componentes y Roles Operativos:**
    *   **Integración con Cardano Blockchain:**
        *   Validación y Almacenamiento de Datos (inmutabilidad).
        *   Referencia de Proyectos (inmutabilidad).
        *   Tokenización (representación de inversiones).
        *   Registro y Visualización de Transacciones.
        *   Creación de Contratos Inteligentes (DAO).
    *   **Base de Datos Propia (Amazon DynamoDB):**
        *   Almacenamiento de datos dinámicos y reservas de proyectos.
        *   Consulta de lista de proyectos disponibles.
    *   **Aplicación Web (ReactJS):**
        *   Interfaz principal para todos los roles de usuario.
        *   Gestión de Usuarios, Envío y Validación de Datos, Interfaz de Estado de Validación.
        *   Gestión Administrativa de Proyectos.
        *   Listado de Proyectos e Inversión.
        *   Transacciones P2P y Vista de Billetera.
        *   Gestión de Contenidos.
        *   Integración de Pasarela de Pago.

---

## **Diapositiva 6: 5.4 Infraestructura propia, tercerizada, en la nube, etc.**

**Título:** Infraestructura de SOFICO: Nube y Servicios AWS

**Contenido:**

*   **Base Principal:** Infraestructura de nube de Amazon Web Services (AWS).
*   **Integración Profunda:** Con la blockchain de Cardano.
*   **Modelo:** Dependencia de proveedor de nube externo, no infraestructura propia en instalaciones.
*   **Rol de Cardano Blockchain:** Validación y almacenamiento de datos de usuario y reservas de proyectos (aprovechando inmutabilidad).
*   **Servicios AWS Clave para Operaciones Comerciales:**
    *   **Amazon DynamoDB:** Almacenamiento de reservas de proyectos, consulta de proyectos.
    *   **AWS Amplify y AWS AppSync:** Pipelines CI/CD.
    *   **AWS Route 53:** Gestión de dominio y subdominios, SSL.
    *   **AWS Cloud9:** Entorno de desarrollo (UX/UI).
*   **Diseño:** Moderno, digital, "serverless-first", automatización.

---

## **Diapositiva 7: 5.5 Redes de comunicaciones, localización geográfica de los datos almacenados del negocio, estrategia de respaldos, etc.**

**Título:** Redes, Localización de Datos y Estrategia de Respaldo

**Contenido:**

*   **Redes de Comunicación:** Principalmente dentro de la infraestructura global de AWS.
    *   **Redes Nativas de la Nube:** VPCs, subredes, Availability Zones (AZs).
    *   **Conectividad a Internet:** Internet Gateways (IGW), NAT Gateways, Egress Only Internet Gateway.
    *   **Conectividad Privada dentro de AWS:** VPC Peering, VPC Endpoints, AWS PrivateLink.
    *   **Conectividad de Nube Híbrida (Local a AWS):** Site-to-Site VPN, AWS Direct Connect.
*   **Localización Geográfica de Datos:**
    *   **AWS Regions and Availability Zones (AZs):** Distribución geográfica para alta disponibilidad y redundancia.
    *   **Cardano Blockchain:** Distribución global inherente de nodos.
    *   **Amazon DynamoDB:** Replicación automática en AZs, Global Tables para multi-región.
    *   **Amazon S3:** Durabilidad alta, capacidad de soportar fallos concurrentes, Cross-Region Replication.
    *   **Amazon RDS/Aurora, ElastiCache, DynamoDB, Kinesis:** Despliegues Multi-AZ.
*   **Estrategia de Respaldos (Backup Strategy):**
    *   **Respaldos Automáticos de Bases de Datos:** RDS (diarios, transacciones cada 5 min), Aurora (continuo a S3).
    *   **Snapshots de Volumen:** EBS Snapshots, Redshift snapshots.
    *   **Control de Versiones y Ciclo de Vida:** Amazon S3 Versioning, S3 Lifecycle rules.
    *   **Archivo de Datos:** Amazon Glacier, Glacier Deep Archive.
    *   **Transferencia/Respaldo Local a Nube:** AWS Snowball/Snowmobile, Storage Gateway, DataSync, Database Migration Service (DMS).
    *   **Estrategias de Recuperación ante Desastres (DR):** Backup and Restore, Pilot Light, Warm Standby, Hot Site/Multi-Site Approach.

---

## **Diapositiva 8: 5.6 Integraciones con aliados para servicio o atención al consumidor y procesos de back office**

**Título:** Integraciones para Servicio al Consumidor y Back Office

**Contenido:**

*   **Estrategia Integral:** Para integraciones con aliados para servicio al consumidor y optimización de procesos de back-office.
*   **Integraciones para Servicio y Atención al Consumidor (Front Office):**
    *   **Gestión de Identidad y Usuarios:** AWS Cognito (User Pools, Identity Pools), API Gateway Lambda Authorizers, AWS Security Token Service (STS).
    *   **Comunicación y Entrega de Contenido:** Amazon SES, Amazon SNS, Amazon CloudFront (Signed URLs/Cookies), AWS AppSync.
    *   **Procesamiento de Pagos:** Integración con pasarela de pago (PASARELA-DE-PAGOS) para inversión y tokenización en Cardano Wallet.
*   **Integraciones para Procesos de Back-Office:**
    *   **Gestión y Validación de Datos Centrales:** Cardano Blockchain, Amazon DynamoDB.
    *   **Transferencia y Migración de Datos en la Nube Híbrida:** AWS Direct Connect, Site-to-Site VPN, AWS Snowball/Snowmobile, Storage Gateway, DataSync, Database Migration Service (DMS), Schema Conversion Tool (SCT).
    *   **Gestión de Identidad Empresarial (Nube Híbrida):** SAML 2.0 Federation, AWS Directory Services, AWS Single Sign-On (SSO).
    *   **Herramientas Operativas y Automatización:** Integración con GitHub, AWS CodeCommit, Bitbucket, AWS OpsWorks, CloudTrail, Config, Firewall Manager.

---

## **Diapositiva 9: 5.7 Sitios alternativos para procesamientos de datos y de operación.**

**Título:** Sitios Alternativos para Procesamiento y Operación

**Contenido:**

*   **Objetivo:** Establecer sitios alternativos para procesamiento y operación de datos, garantizando alta disponibilidad y recuperación ante desastres.
*   **Estrategias:** Minimizar tiempo de inactividad (RTO) y pérdida de datos (RPO).
*   **Implementación de Sitios Alternativos:**
    *   **AWS Regions and Availability Zones (AZs):** Operación en varias regiones, composición de múltiples AZs aisladas.
    *   **Despliegues Multi-Availability Zone (Multi-AZ):** Ejecución en al menos dos AZs para sobrevivir pérdida de centro de datos.
        *   Instancias EC2 y Auto Scaling Groups (ASG) con Load Balancers.
    *   **Bases de Datos Gestionadas:**
        *   Amazon RDS/Aurora (Multi-AZ, failover automático).
        *   Amazon ElastiCache (Multi-AZ).
        *   Amazon DynamoDB (altamente disponible, Multi-AZ por defecto, Global Tables).
        *   Amazon S3 (alta durabilidad, soporta fallos concurrentes).
    *   **Estrategias de Recuperación ante Desastres Multi-Región:**
        *   **Backup and Restore:** Reservas periódicas de datos y restauración.
        *   **Pilot Light:** Versión mínima del core crítico en región separada con datos replicados.
        *   **Warm Standby:** Versión reducida pero funcional ejecutándose en región alternativa.
        *   **Hot Site / Multi-Site Approach:** Ejecución a escala de producción completa en múltiples reservas (activo-activo).
        *   **Amazon Aurora Global Database:** Replicación entre regiones con bajo retraso.
        *   **DynamoDB Global Tables:** Tablas multi-región, activo-activo.
        *   **S3 Cross-Region Replication:** Copia asíncrona de objetos entre buckets.
        *   **Redshift:** Copia automática de snapshots a otra región.

---

## **Diapositiva 10: 5.8 Detalle del grado de manualidad y automatización en los procesos del front y back office**

**Título:** Manualidad vs. Automatización en SOFICO

**Contenido:**

*   **Alto Grado de Automatización en Procesos:** Reducción significativa de intervención manual.
*   **Front Office (Operaciones de cara al cliente):**
    *   **Alto Grado de Automatización:**
        *   **Scalability and Load Distribution:** Escalado automático de instancias EC2 (ASG), distribución de tráfico (ELB).
        *   **High Availability (HA):** Implementación Multi-AZ (RDS, Aurora, ElastiCache), failover automático.
        *   **Serverless APIs and Websites:** Creación de APIs serverless (Lambda, API Gateway), sin gestión de servidores subyacentes.
        *   **User Management and Authentication:** Servicio gestionado por Cognito.
        *   **Caching:** ElastiCache y DynamoDB Accelerator (DAX).
        *   **DNS Routing:** Gestión de failover y tráfico (Route 53).
    *   **Áreas con Puntos de Contacto Manuales (Configuración inicial/alto nivel):**
        *   **Application Code Development:** Desarrollo y actualización de código.
        *   **Configuration Definition:** Definición inicial de políticas de escalado, security groups, enrutamiento.
*   **Back Office (Operaciones Internas y Procesamiento de Datos):**
    *   **Alto Grado de Automatización:**
        *   **Infrastructure Provisioning (Infrastructure as Code):** AWS CloudFormation.
        *   **Continuous Integration & Continuous Delivery (CI/CD):** AWS Amplify/AppSync.
        *   **Database Management:** Automatización de tareas (RDS, Aurora, DynamoDB).
        *   **Data Processing and ETL:** Funciones Lambda, Kinesis Data Firehose, AWS Glue.
        *   **Data Analytics:** Amazon Athena.
        *   **Monitoring and Auditing:** CloudWatch, CloudTrail, Config.
        *   **Data Migration:** AWS Database Migration Service (DMS), DataSync.

---

## **Diapositiva 11: 5.9 Detalle de las contingencias operativas en plataforma tecnológica que presentará la SOFICO**

**Título:** Gestión de Contingencias Operativas en SOFICO

**Contenido:**

*   **Enfoque:** Automatización, alta disponibilidad, recuperación ante desastres, monitoreo continuo.
*   **Alineación:** Principios del AWS Well-Architected Framework (Operational Excellence, Reliability).
*   **Diseño Fundamental para Excelencia Operativa y Confiabilidad:**
    *   **Operational Excellence:** Ejecución y monitoreo de sistemas, cambios frecuentes, anticipar fallas.
    *   **Reliability:** Recuperación de interrupciones, adquisición dinámica de recursos, mitigación de configuraciones erróneas, escalado horizontal.
*   **High Availability (HA) & Fault Tolerance:**
    *   **Multi-Availability Zone (Multi-AZ) Deployments:** Implementación en varias AZs.
    *   **Elastic Load Balancers (ELB):** Distribución de tráfico, manejo de fallos.
    *   **Auto Scaling Groups (ASG):** Escalado automático, reemplazo de instancias no saludables.
    *   **Amazon RDS & Aurora:** Configuraciones Multi-AZ, failover automático.
    *   **Amazon ElastiCache:** Soporte Multi-AZ con auto-failover.
    *   **Amazon DynamoDB:** Alta disponibilidad, Multi-AZ por defecto.
    *   **Amazon S3:** Alta durabilidad, soporte para fallos concurrentes.
    *   **CloudHSM, Amazon Neptune:** Distribuidos en Multi-AZ.
*   **Disaster Recovery (DR) Strategies:**
    *   Consideración de RPO y RTO.
    *   Aurora Global Database, Cross-Region Replication (S3, RDS Read Replicas).
    *   Backup and Restore, Automation for Recovery (CloudFormation, Elastic Beanstalk).
    *   Data Migration Services (DMS, DataSync, Snowball/Snowmobile).

---

## **Diapositiva 12: 5.10 Detalle de las estrategias en seguridad de la información, ciberseguridad y prevención del fraude que implementará la SOFICO.**

**Título:** Estrategias de Seguridad, Ciberseguridad y Prevención de Fraude

**Contenido:**

*   **Fundamento:** Mejores prácticas de AWS y AWS Well-Architected Framework (Security Pillar).
*   **Objetivo:** Proteger datos, sistemas y activos, mejorar seguridad a través de tecnologías en la nube.
*   **Estrategias Clave:**
    *   **Gestión de Identidad y Acceso Fundacional (IAM):**
        *   Principle of Least Privilege, Strong Identity Foundation, Multi-Factor Authentication (MFA).
        *   IAM Roles, IAM-based Authentication for Databases.
    *   **Seguridad y Protección de Red:**
        *   Security Groups (SG), Network Access Control Lists (NACLs).
        *   AWS Shield Standard/Advanced, AWS WAF (Web Application Firewall).
        *   VPC Endpoints, AWS Firewall Manager.
    *   **Protección de Datos (Cifrado):**
        *   Encryption at Rest (varios servicios AWS, KMS).
        *   S3 Encryption (SSE-S3, SSE-KMS, SSE-C).
        *   RDS/Aurora/ElastiCache/EBS Encryption.
        *   DynamoDB Encryption.
        *   Glacier Vault Lock & S3 Object Lock.
        *   Encryption in Transit (SSL/TLS).
    *   **Monitoreo, Auditoría y Trazabilidad:**
        *   AWS CloudTrail, Amazon CloudWatch, AWS Config, VPC Flow Logs.
    *   **Prevención del Fraude y Control de Acceso Específico:**
        *   User Validation (Blockchain Cardano).
        *   Cardano Blockchain Integration (inmutabilidad).
        *   S3 MFA-Delete.
        *   Signed URLs/Cookies (CloudFront & S3).
        *   Cognito User Pools & Identity Pools.
        *   API Gateway Security.

---

## **Diapositiva 13: 5.11 Detalle de los proveedores de servicios tecnológicos. Condiciones que deben cumplir para proveer servicios a la SOFICO**

**Título:** Proveedores de Servicios Tecnológicos y Condiciones

**Contenido:**

*   **Proveedor Principal:** Amazon Web Services (AWS).
*   **Servicios AWS Planificados:**
    *   **Cardano Blockchain Infrastructure:** Configuración del Cardano Node (High Availability, Transactional API).
    *   **Development and Operations Tools:**
        *   CI/CD (AWS Amplify/AppSync).
        *   Domain and Deployment Configuration (AWS Route 53, Amplify & SSL).
        *   Development Environment (AWS Cloud9).
        *   User and Role Management.
*   **Condiciones Implícitas para Proveedores (AWS):**
    *   **Adhesión a las mejores prácticas y frameworks de AWS:** AWS Well-Architected Framework.
    *   **Pilares del AWS Well-Architected Framework como Condiciones:**
        *   **Operational Excellence:** Ejecución, monitoreo, cambios frecuentes, aprendizaje de fallas.
        *   **Security:** Protección de información/sistemas/activos, evaluación de riesgos, strong identity foundation, trazabilidad, seguridad en todas las capas, automatización de prácticas de seguridad, protección de datos.
        *   **Reliability:** Recuperación de interrupciones, recursos dinámicos, mitigación de errores, escalado horizontal.
        *   **Performance Efficiency:** Uso eficiente de recursos, escalabilidad, tecnologías avanzadas, arquitecturas serverless.
        *   **Cost Optimization:** Entrega de valor comercial al menor precio, modelo de pago por uso, eficiencia, reducción de costos de centros de datos, servicios gestionados.

---

Espero que estas diapositivas te sean de gran ayuda. Si necesitas alguna modificación o detalle adicional, no dudes en preguntar.