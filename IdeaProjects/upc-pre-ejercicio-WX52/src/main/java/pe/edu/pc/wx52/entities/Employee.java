package pe.edu.pc.wx52.entities;

public class Employee
{
    private Integer id;
    private String name;
    private Double Salary;

    public Employee() {
    }

    public Employee(Integer id, String name, Double salary) {
        this.id = id;
        this.name = name;
        this.Salary = salary;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getSalary() {
        return Salary;
    }

    public void setSalary(Double salary) {
        Salary = salary;
    }

    public void increaseSalary(double percentage) {
        Salary += Salary * percentage / 100.0;
    }

    @Override
    public String toString() {
        return "Employee [id=" + id + ", name=" + name + ", salary=" +
                String.format("%.2f", Salary) + "]";
    }

}
