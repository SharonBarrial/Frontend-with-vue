package pe.edu.pc.wx52.map;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

public class Program {
    public static void main(String[] args) {
        List<Persona> personas = new ArrayList<>();

        personas.add(new Persona("Jair", "Coraje",
                LocalDate.of(1990, 1, 1)));
        personas.add(new Persona("Lucio", "Yen",
                LocalDate.of(1990, 1, 1)));
        personas.add(new Persona("Nadia", "Lucas",
                LocalDate.of(1990, 1, 1)));
        personas.add(new Persona("Fabio", "Horna",
                LocalDate.of(1990, 1, 1)));

        //Procesamiento de la lista para obtener y transformar los nombres a mayúsculas
        personas.stream()
                .map(p -> p.getNombre())
                .map(s -> s.toUpperCase())
                .forEach(System.out::println); //Imprimir los nombres en mayúsculas

        //Procesamiento de la lista para obtener y transformar los apellidos a un formato específico
        personas.stream()
                .map(p -> p.getApellido())
                .map(f -> f.format(DateTimeFormatter.ofPattern("dd-MM")))
                .forEach(System.out::println); //Imprimir los apellidos en mayúsculas

    }
}
