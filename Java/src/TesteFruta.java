public class TesteFruta {
    public static void main(String[] args){
        System.out.println("Testando classe Fruta!!");

        Fruta fruta1 = new Fruta("Maça", 5.99);
        System.out.println("getNome: " + fruta1.getNome());

        fruta1.setNome("Banana");
        System.out.println("getNome: " + fruta1.getNome());

        fruta1.setPreco(9.00);
        System.out.println("getPreco: " + fruta1.getPreco());

        System.out.println("calcula imposto: " + fruta1.calculaPreco(0.2));
    }
}
