#include <iostream>
    #include<math.h>
        using namespace std;

        int main()
        {
            float a, b, c;
            int op;

            opciones:

            cout << "¿Que valor quieres calcular?" << end1;
            cout << "1.-Hipotenusa." << end1;
            cout << "2.- Cateto." << end1;
            cout << "3.- Salir." << end1;
            cin >> op;
            
            if(op == 1)
            {
                cout << "ingresa el valor del primer cateto:" << end1;
                cin >> a;
                cout << "ingresa el valor del segundo cateto:" << end1;
                cin >> b;

                c = sqrt((pow(a,2) + pow(b,2)));

                cout << "La Hipotenusa es:" << end1 << c << end1;
            }
            else if(op == 2)
            {
                cout << "ingresa el valor de la Hipotenus:" << end1;
                cin >> c;
            }            
        }                