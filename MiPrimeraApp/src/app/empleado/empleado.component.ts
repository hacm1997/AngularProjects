import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  //template:"<p>Aquí un empleado</p>",
  styleUrls: ['./empleado.component.css']
  //styles: ["p{background-color: red;}"]
})
export class EmpleadoComponent implements OnInit {

  nombre="Heiner";

  apellido="Silgado";

  edad=25;

  //empresa="FADO";

  /*getEdad(){
    return this.edad;
  }*/

  /*llamaEmpresa(value:String){

  }*/

  habilitacionCuadro = false;

  userRegistred=false;

  textoRegistro="No hay usuario registrado!";

  getUserRegistred(){
    this.userRegistred = false;
  }

  setUserRegistred(event:Event){
    //alert("El usuario se acaba de registrar");
    //this.textoRegistro="Usuario Registrado!";

    if((<HTMLInputElement>event.target).value == "si"){
      this.textoRegistro="Usuario Registrado!";
    }else{
      this.textoRegistro="No hay usuario registrado!";
    }
    
    //alert(event.target);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
