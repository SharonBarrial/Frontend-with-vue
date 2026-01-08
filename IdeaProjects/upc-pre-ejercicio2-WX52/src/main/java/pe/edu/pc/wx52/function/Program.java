package pe.edu.pc.wx52.function;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;


public class Program {
    public static void main(String[] args) {
        //Creacción de una lista de personas para almacenar
        List<Persona> personas = new ArrayList<>();

        personas.add(new Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));
        personas.add(new Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));
        personas.add(new Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));
        personas.add(new Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));
        personas.add(new Persona("12345678", "Juan", "Perez",
                LocalDate.of(1990, 1, 1)));


        //Creación de una función para transformar un objeto tipo Persona a en su nombre
        Function<Persona, String> func = p -> p.getNombre();

        List<String> nombres = transformarEmpleadosaNombres(personas, func);

        nombres.forEach(System.out::println);

        for (String nombre : nombres) {
            System.out.println(nombre);
        }
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

}

