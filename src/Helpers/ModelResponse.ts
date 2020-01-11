export default class ModelResponse{

    OperationSuccess: boolean= false;
    Messsage: string="";
    Data: any= null;

    constructor(Success: boolean, Message: string, Data: any){
        this.OperationSuccess= Success;
        this.Messsage= Message;
        this.Data= Data=== undefined? null: Data;
    }
}