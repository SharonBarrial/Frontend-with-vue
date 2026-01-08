package pe.edu.pc.wx52.map;

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

    private String nombre;
    private String apellido;
    private LocalDate fechaNacimiento;

    public int getEdad() {
        return Period.between(fechaNacimiento, LocalDate.now()).getYears();

    }

}
