export default class ModelResponse{

    OperationSuccess: boolean= false;
    Message: string="";
    Data: any= null;

    constructor(Success: boolean, Message: string, Data: any){
        this.OperationSuccess= Success;
        this.Message= Message;
        this.Data= Data=== undefined? null: Data;
    }
}