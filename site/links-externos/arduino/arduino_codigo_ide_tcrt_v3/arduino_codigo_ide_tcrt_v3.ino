
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
Serial.println(";");
}

else {
Serial.print(0);
Serial.println(";");

}

delay(7000);
}
