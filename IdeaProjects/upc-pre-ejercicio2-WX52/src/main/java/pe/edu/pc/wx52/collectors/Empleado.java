package pe.edu.pc.wx52.collectors;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class Empleado {
    private String nombre;
    private Double salario;
    private String departamento;
}
