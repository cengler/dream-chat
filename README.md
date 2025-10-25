Tenemos al usuario y a un IA que tiene
1) tool de tendencia de precios de un destino
2) tool de search de hoteles (con filtros como estrellas, amerities, barrios, cercania, nombre de hotel, precio, fechas, etc)
3) tool de detalle 
4) tool de fotos
5) tool de seleccion de habitacion
6) tool de inicio de checkout (que abre un popup de pago)

a) que sea humano
b) cada vez que se consiguen los parametros basicos del search destino y fechas (aproximadas) se imprime un resultado y si filtra, se vuelve a ejecutar
c) cada respuesta de la IA debe incluir un followup
d) debe hablar y llevar la conversacion como un agente de viajes

FORMATO
un json con

rol: user o asistente
texto: string
tieneBoard: bool

