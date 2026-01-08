package pe.edu.pc.wx52.predicate;

import pe.edu.pc.wx52.function.Persona;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;
import java.util.function.Predicate;

import static pe.edu.pc.wx52.function.Persona.transformarEmpleadosNombres;

public class Program {
    public static void main(String[] args) {
        //Creacción de una lista de personas para almacenar
        List<pe.edu.pc.wx52.function.Persona> personas = new ArrayList<>();

        personas.add(new Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));
        personas.add(new pe.edu.pc.wx52.function.Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));
        personas.add(new pe.edu.pc.wx52.function.Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));
        personas.add(new pe.edu.pc.wx52.function.Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));
        personas.add(new pe.edu.pc.wx52.function.Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));

        //Define de un predicado para filtrar personas mayores de 20 años
        Predicate<Persona> predicateEdad = p -> p.getEdad() >= 20;

        //Define de un predicado para filtrar personas cuyo apellido empieza con Y
        Predicate<Persona> predicateApellido = p -> p.getApellido().startsWith("Y");

        //Define un predicado complejo que filtra personas mayores de 20 años cuyo apellido empieza con Y
        //usando el método and de la interfaz Predicate
        Predicate<Persona> predicateComplejo = predicateEdad.and(predicateApellido);

        //Uso del stream de la lista de personas para filtrar y mostrar las personas que cumplen con el predicado complejo
        personas.stream() //Stream de la lista de personas
                .filter(predicateComplejo) //Filtrar las personas que cumplen con el predicado complejo
                .forEach(System.out::println); //Mostrar las personas que cumplen con el predicado complejo

    }
    //Método para transformar una lista de Personas en una lista de nombres utilizando una función especifica

    private static List<String> transformarEmpleadosaNombres(List<Persona> personas,

                                                             Function<Persona, String> funcionPersonaNombre){

        List<String> nombres = new ArrayList<>();

        //Itera sobre cada persona en la lista, aplica la función y agrega el resultado a la lista de nombres

        for (Persona persona : personas) {

            nombres.add(funcionPersonaNombre.apply(persona));

        }

        return nombres;

    }

    //Predicate<T> es una interfaz funcional que representa un predicado (boolean-valued function) de un argumento
    //Esta es una interfaz funcional cuyo método abstracto es test(Object)
    //Un valor true o false
    //Predicate<T> tiene varios métodos default para combinar predicados
    //Los predicados se usan para filtrar colecciones de datos,
    //como en el ejemplo anterior según los criterios de edad y apellido
}