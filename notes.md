Type Script con Angular - PLATZI

- Type inference:
          Cuando typeScript infiere qué tipo de dato es el de una variable
          Ej. const algo = 'hola'
          Se sobre entenderá que la variable algo es de tipo string.

- Types:
          Le agregamos tipos direactemente a la variable.
          Ej.const stringValue: string  = "Hola"  
          
          function suma(num1:numeber + num2:number): number {
            return num1 + num2
          }

- Type keyword:
          Podemos crear alias para nuestros tipos de datos
          De tal forma que quizá en algún momento tenemos un RFC de tipo string
          pero algún día se necesita que se cambie a número, se haría el cambio
          sólo en el alias y no sobre todos las variables dónde fue declarada como
          tipo string.

          Ej. type rfc = string
          
          const myRfc: rfc = "angel123"


- Tomar de nuevo la lección sobre Clases.

- Interface
          Una interfaz es un tipo abstracto que sirve como contrato para la estructura 
          de un objeto y al igual que las clases puede ser utilizada como un tipo de dato.
          Agregando el "?" hacemos que ese atributo sea opcional.

          ej:
              type Dni = string;

              interface Person {
                age: number;
                name: string;
                dni: Dni;
                height?: number; 
              }

              const angelito: Person = { age: 26, name: 'Angelito', dni: 'angelito123' }

- Union types
          Para casos donde se requiere que una variable pueda ser de más de un tipo
          
          type sumaParameter = number | string

          function suma(num1: sumaParameter) {...}

          let numOrString: number | string = 'hola'
          numOrString = 2

- Intersection types
          En casos de interface, al crear uno con "&" el nuevo interface necesita tener
          las propiedades de las 2 (o más) interfaces.
          
          ej:
            interface Interface1 = { prop1: number }
            interface Interface2 = { prop2: number }
            interface InterfaceMix = Interface1 & Interface2

            const interfaceMix = { prop1: 123123, prop2: 123123 }


- Function type
          ¡Se pueden tipar las funciones!

          type CallBackError = Error | null;
          type CallBack = (error: CallBackError, response: Object) => void;

          function algo(callBackFunc: CallBack): any {
            if(callBackFunc) {
              callBackFunc(null, { message: 'Every thing is ok })
            }
          }

          






































