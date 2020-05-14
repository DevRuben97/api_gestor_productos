export default class EntityValue{
    value: any= null;
    label: string="";


    constructor(value: any, label: string){
        this.value= value;
        this.label= label;

    }
}