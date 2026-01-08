package pe.edu.pc.wx52.function;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.Period;
import java.util.ArrayList;
import java.util.List;
import java.util.function.Function;

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Persona {

    private String dni;
    private String nombre;
    private String apellido;
    private LocalDate fechaNacimiento;

    public int getEdad() {
        return Period.between(fechaNacimiento, LocalDate.now()).getYears();
    }

    //Metodo para transformar una lista de personas en una lista de nombres
    private static List<String> transformarEmpleadosNombres(List<Persona> personas, Function<Persona, String> func) {
        List<String> list = new ArrayList<>();

        //Itera sobre la lista de personas y aplica la función func
        for(Persona p : personas) {
            ;
        }
        return list;
    }

}
