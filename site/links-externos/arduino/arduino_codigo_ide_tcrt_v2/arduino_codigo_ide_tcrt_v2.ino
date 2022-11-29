
/**
* Configurações iniciais sobre o sensor
* TCRT5000
*/
 
int switch_pin = 7;
void setup()
{
Serial.begin(9600);

pinMode(switch_pin, INPUT);
}
void loop()
{
/**
* Bloco do TCRT5000
*/

if(digitalRead(switch_pin) == LOW){
  int prat1 = random(1, 4);
  
Serial.print(prat1);
Serial.print(";");
}

else {
Serial.print(0);
Serial.print(";");

}

int prat2 = random(0, 4);
int prat3 = random(0, 4);
int prat4 = random(0, 4);
int prat5 = random(0, 4);
int prat6 = random(0, 4);
int prat7 = random(0, 4);
int prat8 = random(0, 4);
int prat9 = random(0, 4);
int prat10 = random(0, 4);
int prat11 = random(0, 4);
int prat12 = random(0, 4);
int prat13 = random(0, 4);
int prat14 = random(0, 4);
int prat15 = random(0, 4);
int prat16 = random(0, 4);
int prat17 = random(0, 4);
int prat18 = random(0, 4);
int prat19 = random(0, 4);
int prat20 = random(0, 4);
int prat21 = random(0, 4);
int prat22 = random(0, 4);
int prat23 = random(0, 4);
int prat24 = random(0, 4);
int prat25 = random(0, 4);
int prat26 = random(0, 4);
int prat27 = random(0, 4);
int prat28 = random(0, 4);
int prat29 = random(0, 4);
int prat30 = random(0, 4);
int prat31 = random(0, 4);
int prat32 = random(0, 4);
int prat33 = random(0, 4);
int prat34 = random(0, 4);
int prat35 = random(0, 4);
int prat36 = random(0, 4);
int prat37 = random(0, 4);
int prat38 = random(0, 4);
int prat39 = random(0, 4);
int prat40 = random(0, 4);
int prat41 = random(0, 4);
int prat42 = random(0, 4);
int prat43 = random(0, 4);
int prat44 = random(0, 4);


Serial.print(prat2);
Serial.print(";");

Serial.print(prat3);
Serial.print(";");

Serial.print(prat4);
Serial.print(";");

Serial.print(prat5);
Serial.println(";");

Serial.print(prat5);
Serial.println(";");

Serial.print(prat6);
Serial.println(";");

Serial.print(prat7);
Serial.println(";");

Serial.print(prat8);
Serial.println(";");

Serial.print(prat9);
Serial.println(";");

Serial.print(prat10);
Serial.println(";");

Serial.print(prat11);
Serial.println(";");

Serial.print(prat12);
Serial.println(";");

Serial.print(prat13);
Serial.println(";");

Serial.print(prat14);
Serial.println(";");

Serial.print(prat15);
Serial.println(";");

Serial.print(prat16);
Serial.println(";");

Serial.print(prat17);
Serial.println(";");

Serial.print(prat18);
Serial.println(";");

Serial.print(prat19);
Serial.println(";");

Serial.print(prat20);
Serial.println(";");

Serial.print(prat21);
Serial.println(";");

Serial.print(prat22);
Serial.println(";");

Serial.print(prat23);
Serial.println(";");

Serial.print(prat24);
Serial.println(";");

Serial.print(prat25);
Serial.println(";");

Serial.print(prat26);
Serial.println(";");

Serial.print(prat27);
Serial.println(";");

Serial.print(prat28);
Serial.println(";");

Serial.print(prat29);
Serial.println(";");

Serial.print(prat30);
Serial.println(";");

Serial.print(prat31);
Serial.println(";");

Serial.print(prat32);
Serial.println(";");

Serial.print(prat33);
Serial.println(";");

Serial.print(prat34);
Serial.println(";");

Serial.print(prat35);
Serial.println(";");

Serial.print(prat36);
Serial.println(";");

Serial.print(prat37);
Serial.println(";");

Serial.print(prat38);
Serial.println(";");

Serial.print(prat39);
Serial.println(";");

Serial.print(prat40);
Serial.println(";");

Serial.print(prat41);
Serial.println(";");

Serial.print(prat42);
Serial.println(";");

Serial.print(prat43);
Serial.println(";");

Serial.print(prat44);
Serial.println(";");

delay(60000);
}
