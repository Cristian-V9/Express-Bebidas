[English](README.md) | [Español](README.es.md)

# RetoBackEndJRR

Simulador de tarifas y liquidación construido con Spring Boot (Java) que calcula el total a pagar a partir de las horas trabajadas y una tarifa base.
Proyecto académico grupal.

## Funcionalidades

- Cálculo de liquidación según horas trabajadas y tarifa base por hora
- Recargo institucional del 15% aplicado al total
- La simulación se ejecuta automáticamente al iniciar y muestra el resultado por consola
- Estructura en capas: servicio (lógica de negocio) y componente (ejecutor)

## Cómo funciona

`LiquidacionService.calcularTarifa(horas, tarifaBase)` devuelve:

```
total = horas × tarifaBase × 1.15
```

Ejemplo de salida (40 horas a $30.000 por hora):

```
==================================================
   RETO: SIMULADOR DE TARIFAS Y LIQUIDACIÓN
==================================================
>> Horas Registradas: 40.0
>> Tarifa Base por Hora: $30000.0
>> TOTAL LIQUIDACIÓN INSTITUCIONAL: $1380000.0
==================================================
```

## Estructura del proyecto

```
src/main/java/com/example/retobackendjrr/
├── RetoBackEndJrrApplication.java    # Clase principal
├── component/SimuladorRunner.java    # Ejecuta la simulación al iniciar
└── service/LiquidacionService.java   # Lógica de cálculo
```

## Tecnologías

- Java 17
- Spring Boot 4.1.1
- Maven (incluye Maven Wrapper)

## Instalación

Requiere JDK 17 o superior. No hace falta instalar Maven, el wrapper viene incluido.

```bash
git clone https://github.com/TU_USUARIO/RetoBackEndJRR.git
cd RetoBackEndJRR
```

Linux / macOS:

```bash
./mvnw spring-boot:run
```

Windows:

```bash
mvnw.cmd spring-boot:run
```

Para ejecutar las pruebas:

```bash
./mvnw test
```
