import {createSchema} from 'morphism';
import Movement from '../../../Models/Movement';
import MovementDetails from '../../../Models/MovementDetails';

import MovementDto from '../../../Models/DTOs/MovementDto';
import MovementDetailsDto from '../../../Models/DTOs/MovementDetailsDto';

import numeral from 'numeral';


export const MovementSchema= createSchema<MovementDto,Movement>({
    Id: 'Id',
    Amount: 'Amount',
    Comments: 'Comments',
    CreatedDate: 'CreatedDate',
    Date: 'Date',
    Details: 'Details',
    Invoice: 'Invoice',
    ModificationDate: 'ModificationDate',
    State: 'State',
    Type: 'Type',
    UserFullName: detail=> `${detail.User.Name} ${detail.User.SurName}`,
    User_id: 'User_id',
    StateLabel: '',
    TypeLabel: detail=> detail.Type=== 'MT001'? 'Venta': 'Compra'
});


export const MovementDetailsSchema= createSchema<MovementDetailsDto,MovementDetails>({
    Id: 'Id',
    CreatedDate: 'CreatedDate',
    ModificationDate: 'ModificationDate',
    Movement_id: 'Movement_id',
    Product_id: 'Product_Id',
    Quantity: 'Quantity',
    State: 'State',
    Stock: 'Product.Stock',
    Price: 'Product.Price',
    product_name: 'Product.Name',
    subTotal: source=> {
        return (source.Quantity * numeral(source.Product.Price).value());
    }
    
});