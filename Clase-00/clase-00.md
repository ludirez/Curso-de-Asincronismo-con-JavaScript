# conceptos a considerar.

## Event Loop
    El bucle de eventos que con un patron de diseño, espera y distribuye eventos o mensajes en un programa.

## Memory Heap
    Los objetos son asignados a un montículo/espacio grande en memoria de manera no organizada a la espera de ser o no utilizados.

## Call Stack (pila)
    apila de forma organizada las instrucciones de nuestro programa. 
    fusiona con el método LIFO (last-in, first-out)

## Task Queue
    Es la cola de tareas donde se maneja la cola de concurrencia. se agregan las tareas que ya están listas para pasar al Stack (pila). El Stack debe estar no bloqueado o vacío.
    fusiona con el método LIFO (last-in, first-out)

## MicroTask Queue
    Es el espacio reservado para las promesas donde se ejecutan con una prioridad superior antes de pasar a la Stack.

## Web APIs
    es la interacción de javaScrip con el navegador.
    Operaciones como:
        setTimeout      ->programa un tiempo de espera la la ejecución de una función
        XMLHttpRequest  ->Lo que se Conoce ahora como json
        File Reader     ->Leer archivos del S.O
        DOM             ->manipulación 
        fs          ->Con node.js trabajo a través con el S.O
        https       ->peticiones a https

