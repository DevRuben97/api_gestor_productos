import MovementDetailsDto from './MovementDetailsDto';

export default class MovementDto{


    Id: number;

    Date: string;

    Invoice: string;

    Amount: number;

    Comments: string;

    Type: string;

    TypeLabel: string;

    User_id: number;

    UserFullName: string

    CreatedDate: string;

    ModificationDate: string;

    State: number;

    StateLabel: string;

    Details: MovementDetailsDto[];
}