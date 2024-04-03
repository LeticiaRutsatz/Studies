
// A sobrecarga de métodos é útil quando você deseja que métodos realizem tarefas 
// semelhantes, mas com diferentes tipos de dados ou diferentes números de parâmetros. 
// Por exemplo, você pode ter um método chamado calcularArea() que calcula a área 
// de diferentes formas geométricas, como quadrado, círculo ou retângulo. 
// Cada método calcularArea() pode ter parâmetros diferentes para lidar com os 
// diferentes tipos de formas.

package Java;

public class MethodOverloading {
    // Método para calcular a área de um quadrado
    public double calcularArea(double lado) {
        return lado * lado;
    }

    // Método para calcular a área de um retângulo
    public double calcularArea(double comprimento, double largura) {
        return comprimento * largura;
    }

    // Método para calcular a área de um triângulo
    public double calcularArea(double base, double altura, String forma) {
        if (forma.equalsIgnoreCase("triangulo")) {
            return (base * altura) / 2;
        } else {
            return 0; // Retorna 0 se a forma não for reconhecida
        }
    }

    public static void main(String[] args) {
        MethodOverloading calculadora = new MethodOverloading();

        // Exemplos de chamadas de métodos com diferentes parâmetros
        System.out.println("Área do quadrado: " + calculadora.calcularArea(5));
        System.out.println("Área do retângulo: " + calculadora.calcularArea(5, 10));
        System.out.println("Área do círculo: " + calculadora.calcularArea(3.5));
        System.out.println("Área do triângulo: " + calculadora.calcularArea(4, 6, "triangulo"));
    }
}



