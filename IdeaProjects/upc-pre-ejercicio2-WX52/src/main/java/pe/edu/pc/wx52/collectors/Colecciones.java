package pe.edu.pc.wx52.collectors;

import java.util.*;
import java.util.stream.Collectors;

public class Colecciones {
    public static void main(String[] args) {

        //Crear una lista de empleados
        List<Empleado> empleados = Arrays.asList(
                new Empleado("Anthony", 1000.0, "Ventas"),
                new Empleado("Joseph", 1200.0, "Ventas"),
                new Empleado("Salvador", 1500.0, "Sistemas"),
                new Empleado("Piero", 2000.0, "Sistemas"),
                new Empleado("Anthony", 2500.0, "Ventas")

        );

        //Creación para eliminar duplicado
        Set<Empleado> empleadosSet = empleados.stream().collect(Collectors.toSet());
        empleadosSet.forEach(System.out::println);
        System.out.println("\n");

        //Creación de una lista a partir de la lista de empleados (similar a la lista original)
        List<Empleado> empleadosList = empleados.stream().collect(Collectors.toList());
        empleadosList.forEach(System.out::println);

        //Creación de un mapa a partir de la lista de empleados
        //donde la clave es el nombre del empleado y el valor es el salario
        //Se utiliza distinct para eliminar duplicados antes de realizar la operación conversión al mapa
        Map<String, Double> empleadosMap = empleados.stream()
                .distinct()
                .collect(Collectors.toMap(Empleado::getNombre, Empleado::getSalario));

        System.out.println("Map:" + empleadosMap);

        //Set: Al convertir la lista de empleados a un Set, se eliminan los duplicados
        //List: Al convertir a una lista, se mantienen el orden de los elementos
        //y se pueden tener elementos duplicados
        //Map: Al convertir a un mapa, se pueden definir claves y valores personalizados para cada elemento de la lista
    }
}
