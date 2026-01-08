package pe.edu.pc.wx52.application;

import pe.edu.pc.wx52.entities.Employee;
import java.util.ArrayList;
import java.util.List;
import java.util.Locale;
import java.util.Scanner;

//Define la clase Main
public class Main {
    //Método principal donde se ejecuta el programa
    public static void main(String[] args) {

        //Establece el idioma y la región a USA
        Locale.setDefault(Locale.US);

        //Crea un objeto de tipo Scanner para leer la entrada del usuario
        Scanner sc = new Scanner(System.in);

        //Crea una lista para almacenar objetos de tipo Employee
        List<Employee> list = new ArrayList<>();

        //Solicita al usuario el número de empleados que desea registrar
        System.out.println("How many employees will be registered?");
        int numberOfEmployees = sc.nextInt();

        //Iterar sobre el número de empleados que el usuario desea registrar
        for(int i = 0; i < numberOfEmployees; i++) {
            System.out.println();
            System. out.println("Employee #" + (i + 1) + ":");
            System.out.print("Id: ");
            Integer id = sc.nextInt();

            while(hasId(list, id)) {
                System.out.println("Id already taken. Try again: ");
                id = sc.nextInt();
            }

            System.out.print("Name: ");
            sc.nextLine(); //Consume la linea restante despues de la entrada de un número
            String name = sc.nextLine();
            System.out.print("Salary: ");
            Double salary = sc.nextDouble();

            //crea un nuevo objeto de Employee y lo agrega a la lista
            Employee emp = new Employee(id, name, salary);
            list.add(emp);
        }

        System.out.println();
        System.out.print("Enter the employee id that will have salary increase: ");
        int idSalary = sc.nextInt();

        //Busca el empleado por su id en la lista para aplicar el aumento de salario
        Employee emp = list.stream().filter(x -> x.getId() == idSalary).findFirst().orElse(null);

        if(emp == null) {
            System.out.println("This id does not exist!");
        } else {
            System.out.print("Enter the percentage: ");
            double percentage = sc.nextDouble();
            emp.increaseSalary(percentage); //Aplica el aumento de salario
        }

        System.out.println();
        System.out.println("List of employees:");

        //Muestra la lista de empleado actualizada y con el aumento de salario
        for(Employee e : list) {
            System.out.println(e);
        }
        sc.close();
    }

    //Para verificar si un id ya existe en la lista
    public static boolean hasId(List<Employee> list, int id) {
                                            //predicado
        Employee emp = list.stream().filter(x -> x.getId() == id).findFirst().orElse(null);
        return emp != null;
    }
}